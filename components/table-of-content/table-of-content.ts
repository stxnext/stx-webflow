import { build } from '../helpers';

const trim = (str) => {
  // remove /n at the start and end of the string and trim spaces
  return (str || "").replace(/^\s+|\s+$/g, '');
};

type ChangeCallback = (value: number, component: TableOfContent) => void;

interface TableOfContentOptions {
  container: HTMLElement;
  content: HTMLElement;
  className?: string;
  tags?: string;
  contentTopOffset?: number;
}

export default class TableOfContent extends HTMLElement {
  #container: HTMLElement;
  #activeTocItem: HTMLElement;
  #tagsToInclude: Array<string> = ["h4", " h5"];
  #content: HTMLElement;
  #items: HTMLElement;
  #dropdown: HTMLElement;
  #dropdownCaption: HTMLElement;
  #progressBar: HTMLElement;
  #contentTopOffset: number = 0;
  #width: number = 0;
  skipScrollingWatch: boolean = false;

  public onChange: ChangeCallback | undefined;

  constructor ({
    container,
    content,
    className,
    tags,
    contentTopOffset,
  }: TableOfContentOptions) {
    super();

    this.#container = container;
    this.#content = content;

    if(className) {
      this.className = className;
    }

    this.#tagsToInclude = tags?.toLowerCase().split(',') || this.#tagsToInclude;

    this.#container.append(this);

    this.#contentTopOffset = contentTopOffset || 0;
  }

  connectedCallback () {
    this.#render();
    this.#onContentScroll();

    window.addEventListener("scroll", () => {
      let deviation = 200;
    
      if(window.innerWidth < 786) {
        deviation = 0;
      }

      if(window.scrollY > this.#content.offsetHeight + deviation) {
        return;
      }

      this.#onContentScroll();
      this.#updatePosition();
    });

    window.addEventListener("resize", () => {
      this.#updateWidth();
      this.#updatePosition();
    });

    this.#updatePosition();
  }

  #render() {
    this.innerHTML = `
      <div class="toc-title">Table of content</div>
    `;

    // Here I've added proxy variable to call the element directly feather,
    // instead of calling this.#dropdown... - by some reason I got an error
    // running build code in Webflow
    const dropdown = build("div", { class: "toc-dropdown" }, this);

    this.#dropdown = dropdown;
    this.#dropdown.innerHTML = `
      <button class="toc-dropdown-button">
        <span class="toc-dropdown-caption"></span>
        <span class="toc-dropdown-icon"></span>
      </button>
      <div class="toc-dropdown-progress">
        <div class="toc-dropdown-progress-done"></div>
      </div>
    `;

    this.#dropdownCaption = dropdown.querySelector(".toc-dropdown-caption")!;

    this.#progressBar = dropdown.querySelector(".toc-dropdown-progress-done")!;

    this.#items = build("div", { class: "toc-items" }, this);

    this.#dropdown.addEventListener("click", () => {
      this.#dropdown.classList.toggle("open");
      this.#items.classList.toggle("open");
    });

    this.#content.querySelectorAll(this.#tagsToInclude.join(',')).forEach((heading) => {
      const headingId = (new Date()).getTime() + Math.random().toString(36).substring(7);

      heading.setAttribute("id", headingId);

      this.#tagsToInclude.forEach((tag) => {
        if (heading.tagName.toLowerCase() == tag) {
          const itemId = `toc-${headingId}`;
          const item = build("a", {
            id: itemId,
            href: `#${headingId}`,
          }, this.#items);  

          item.classList.add("toc-item", "toc-" + tag);

          item.textContent = trim(heading.textContent) || "";

          item.addEventListener("click", (e) => {
            e.preventDefault();

            this.#dropdown.classList.toggle("open");
            this.#items.classList.toggle("open");

            this.#activeTocItem?.classList.remove("active-toc-item");
            this.#activeTocItem = item;
            this.#updateActiveItem();

            const element = document.getElementById(headingId);
            const elementRect = element!.getBoundingClientRect();

            const scrollTop = document.documentElement.scrollTop;
            const elementTop = elementRect.top + scrollTop;

            const containerStyle = getComputedStyle(this.#container.parentElement!);
            // check if screen is not mobile size by checking if `--is-not-mobile` property is set to 1
            const isNotMobile = !!parseInt(containerStyle.getPropertyValue('--is-not-mobile'));
            
            window.scrollTo({
              top: elementTop - this.#contentTopOffset - (isNotMobile ? 0 : this.#container.parentElement!.offsetHeight),
              behavior: "smooth",
            });
            
            this.#updateDropdown();
            this.#updateProgress(); 
          });

          if(!this.#activeTocItem) {
            this.#activeTocItem = item;

            this.#updateActiveItem();
            this.#updateDropdown();
            this.#updateProgress();
          }
        };
      });
    });
  }

  #updateDropdown() {
    this.#dropdownCaption.innerHTML = this.#activeTocItem.innerText;
  }

  #updateActiveItem() {
    this.#activeTocItem.classList.add("active-toc-item");
  }

  #updateProgress() {
    const contentRect = this.#content!.getBoundingClientRect();

    const scrollTop = document.documentElement.scrollTop;
    const elementTop = contentRect.top + scrollTop;
    const progress = (scrollTop - elementTop) / (contentRect.height - window.innerHeight) * 100;

    this.#progressBar.style.width = `${Math.max(Math.min(progress, 100), 0)}%`;
  }

  #onContentScroll() {
    this.#updateProgress();

    const containerStyle = getComputedStyle(this.#container.parentElement!);
    // check if screen is not mobile size by checking if `--is-not-mobile` property is set to 1
    const isNotMobile = !!parseInt(containerStyle.getPropertyValue('--is-not-mobile'));

    const xOffset = this.#content.getBoundingClientRect().left + 100;
    const elementAtPosition = document.elementFromPoint(xOffset, this.#contentTopOffset + 20 + (isNotMobile ? 0 : this.#container.parentElement!.offsetHeight));

    if (!elementAtPosition) {
      return;
    }

    if (this.#tagsToInclude.includes(elementAtPosition.tagName.toLowerCase())) {
      const id = elementAtPosition.getAttribute("id");
      const tocItem = document.getElementById(`toc-${id}`);

      if (tocItem && tocItem !== this.#activeTocItem) {
        const parent = tocItem.parentNode as HTMLElement;
        const tocItemRect = tocItem.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        // Adjust scroll position calculation
        const tocItemTopRelativeToParent = tocItemRect.top - parentRect.top + parent.scrollTop;

        parent.scrollTo({
          top: tocItemTopRelativeToParent - parent.clientHeight / 2, // Center the item when scrolled to it
          behavior: "smooth",
        });

        this.#activeTocItem?.classList.remove("active-toc-item");
        this.#activeTocItem = tocItem;

        this.#updateActiveItem();
        this.#updateDropdown();
        this.#updateProgress();
      }
    }
  }

  #updatePosition() {
    if(this.skipScrollingWatch) {
      return;
    }
    
    const tocBlock = this.#container.parentElement as HTMLElement;

    const tocTop = tocBlock.getBoundingClientRect().top;
    const contentTop = this.#content.getBoundingClientRect().top;

    if (tocTop <= this.#contentTopOffset && !tocBlock.classList.contains("docked")) {
      if(this.#width === 0) {
        const firstItem = this.#container.querySelector('a')!;
      	firstItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      
      this.stick();
    } else {
      tocBlock.classList.remove('sticky');
      tocBlock.style.maxWidth = "100%";
      tocBlock.style.width = "100%";
      this.#width = 0;
    }
    
    if(contentTop > this.#contentTopOffset) {
    	tocBlock.classList.remove('sticky');
      tocBlock.style.maxWidth = "100%";
      tocBlock.style.width = "100%";
      this.#width = 0;
    }
  }

  #updateWidth() {
    const tocBlock = this.#container.parentElement as HTMLElement;

    if (window.innerWidth < 768) {
      tocBlock.style.width = "100%";
      tocBlock.style.maxWidth = "100%";
      this.#width = 0;
    } else {
      let isSticky = tocBlock.classList.contains('sticky');

      if(isSticky) {
        tocBlock.classList.remove('sticky');
      }

      this.#width = tocBlock.parentElement!.getBoundingClientRect().width;
      tocBlock.style.width = `${this.#width}px`;
      tocBlock.style.maxWidth = `${this.#width}px`;

      if(isSticky) {
        tocBlock.classList.add('sticky');
      }
    }
  }

  release() {
    this.#items.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    setTimeout(() => {
        const tocBlock = this.#container.parentElement as HTMLElement;
        
        tocBlock.classList.remove('docked');
        tocBlock.classList.remove('sticky');
        tocBlock.style.maxWidth = "100%";
        tocBlock.style.width = "100%";
        this.#width = 0;
    
        this.#activeTocItem?.classList.remove("active-toc-item");
        this.#activeTocItem = this.#items.querySelector('.toc-item') as HTMLElement;
        this.#updateActiveItem();
    }, 100);
  }

  dock() {
    const tocBlock = this.#container.parentElement as HTMLElement;
        
    tocBlock.classList.remove('sticky');
    tocBlock.style.maxWidth = "100%";
    tocBlock.style.width = "100%";
    this.#width = 0;
    
    const tocContainerHeight = tocBlock.getBoundingClientRect().height;
    if(tocContainerHeight >= window.innerHeight - this.#contentTopOffset) {
      tocBlock.classList.add('docked');
    }
    
    this.scrollTop = this.scrollHeight;

    this.#activeTocItem?.classList.remove("active-toc-item");
    this.#activeTocItem = this.#items.lastChild as HTMLElement;
    this.#updateActiveItem();
  }

  unDock() {
    const tocBlock = this.#container.parentElement as HTMLElement;

    tocBlock.classList.remove('docked');
    this.#updatePosition();
  }

  stick() {
    const tocBlock = this.#container.parentElement as HTMLElement;

    this.#width = tocBlock.getBoundingClientRect().width;
    tocBlock.style.maxWidth = `${this.#width}px`;
    tocBlock.style.width = `${this.#width}px`;
    tocBlock.classList.add('sticky');
    tocBlock.classList.remove('docked');
  }
}
