(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('stx-table-of-content {\n  display: grid;\n  overflow: hidden;\n  position: relative;\n  grid-template-rows: auto 1fr;\n  max-height: 100%;\n}\nstx-table-of-content .toc-title {\n  color: #000;\n  font-family: Inter, sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 28px;\n  display: none;\n  margin-inline: 20px;\n}\nstx-table-of-content .toc-items {\n  display: none;\n  overflow-y: auto;\n  margin-inline: 20px;\n}\nstx-table-of-content .toc-items.open {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\nstx-table-of-content .toc-dropdown {\n  padding: 16px;\n}\nstx-table-of-content .toc-dropdown-button {\n  font-family: Inter;\n  font-size: 14px;\n  line-height: 24px;\n  font-weight: 600;\n  color: var(--primary);\n  cursor: pointer;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: 1fr auto;\n  width: 100%;\n  background-color: transparent;\n  max-width: 100%;\n}\nstx-table-of-content .toc-dropdown-caption {\n  font-family: Inter;\n  font-size: 14px;\n  line-height: 24px;\n  color: var(--dark-gray);\n  display: block;\n  text-align: start;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nstx-table-of-content .toc-dropdown-icon {\n  display: block;\n  align-self: center;\n  width: 24px;\n  height: 24px;\n  transition: all 0.2s ease-in-out;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgMTBMMTIuMDAwOCAxNC41OEwxNyAxMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==);\n}\nstx-table-of-content .toc-dropdown-progress {\n  height: 3px;\n  background-color: var(--gray-100);\n}\nstx-table-of-content .toc-dropdown-progress-done {\n  height: 100%;\n  background-color: var(--gray-800);\n}\nstx-table-of-content .toc-dropdown.open .toc-dropdown-icon {\n  transform: rotate(180deg);\n  transition: all 0.2s ease-in-out;\n}\n@media (min-width: 768px) {\n  stx-table-of-content > .toc-title {\n    display: block;\n  }\n  stx-table-of-content > .toc-items {\n    display: flex;\n    flex-direction: column;\n    gap: 14px;\n  }\n  stx-table-of-content > .toc-dropdown {\n    display: none;\n  }\n}\nstx-table-of-content a.toc-item {\n  text-decoration: none;\n}\nstx-table-of-content a.toc-item {\n  font-family: Inter;\n  font-size: 14px;\n  line-height: 24px;\n}\nstx-table-of-content .toc-h4:first-child {\n  border-top: none;\n}\nstx-table-of-content a.toc-h3 {\n  font-weight: 600;\n  border-top: 1px solid var(--light-gray);\n  padding-top: 14px;\n}\nstx-table-of-content a.toc-h4 {\n  font-weight: 600;\n  border-top: 1px solid var(--light-gray);\n  padding-top: 14px;\n}\nstx-table-of-content a.toc-h5 {\n  margin-inline-start: 20px;\n}\n\n.sticky {\n  position: fixed;\n  top: var(--navbar-height);\n  overflow: hidden;\n}\n\n.docked {\n  bottom: 0px;\n}:root {\n  --grid-gutter-x: 20px;\n}\n\n.flex-cols {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0;\n  margin-inline: calc(-0.5 * var(--grid-gutter-x));\n}\n\n[class*="flex-col-"] {\n  padding-right: calc(0.5 * var(--grid-gutter-x));\n  padding-left: calc(0.5 * var(--grid-gutter-x));\n\n  & > * {\n    box-sizing: border-box;\n  }\n}\n\n.flex-col-xs-12-12 {\n  width: 100%;\n  flex: 0 0 auto;\n}\n\n@media (min-width: 768px) {\n  .flex-col-md-3-12 {\n    width: 25%;\n    flex: 0 0 auto;\n  }\n\n  .flex-col-md-4-12 {\n    width: 33.33333%;\n    flex: 0 0 auto;\n  }\n\n  .flex-col-md-6-12 {\n    width: 50%;\n    flex: 0 0 auto;\n  }\n\n  .flex-col-md-8-12 {\n    width: 66.66667%;\n    flex: 0 0 auto;\n  }\n\n  .flex-col-md-9-12 {\n    width: 75%;\n    flex: 0 0 auto;\n  }\n\n  .offset-md-1-12 {\n    margin-inline-start: 8.33333%;\n  }\n}\n\n:root {\n  --gray-50: #f6f6f6;\n  --gray-400: #777777;\n  --light-gray: #e6e6e6;\n  --darker-gray: #333333;\n  --color-black: #000000;\n  --color-white: #ffffff;\n  --color-brand: var(--stx-next, #00b2a9);\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
(function(factory) {
  typeof define === "function" && define.amd ? define(factory) : factory();
})(function() {
  "use strict";
  function build(tagName, attributes, parent) {
    const element = document.createElement(tagName);
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
    }
    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
  const trim = (str) => {
    return (str || "").replace(/^\s+|\s+$/g, "");
  };
  class TableOfContent extends HTMLElement {
    #container;
    #activeTocItem;
    #tagsToInclude = ["h4", " h5"];
    #content;
    #items;
    #dropdown;
    #dropdownCaption;
    #progressBar;
    #contentTopOffset = 0;
    #width = 0;
    skipScrollingWatch = false;
    onChange;
    constructor({
      container,
      content,
      className,
      tags,
      contentTopOffset
    }) {
      super();
      this.#container = container;
      this.#content = content;
      if (className) {
        this.className = className;
      }
      this.#tagsToInclude = tags?.toLowerCase().split(",") || this.#tagsToInclude;
      this.#container.append(this);
      this.#contentTopOffset = contentTopOffset || 0;
    }
    connectedCallback() {
      this.#render();
      this.#onContentScroll();
      window.addEventListener("scroll", () => {
        let deviation = 200;
        if (window.innerWidth < 786) {
          deviation = 0;
        }
        if (window.scrollY > this.#content.offsetHeight + deviation) {
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
      this.#dropdownCaption = dropdown.querySelector(".toc-dropdown-caption");
      this.#progressBar = dropdown.querySelector(".toc-dropdown-progress-done");
      this.#items = build("div", { class: "toc-items" }, this);
      this.#dropdown.addEventListener("click", () => {
        this.#dropdown.classList.toggle("open");
        this.#items.classList.toggle("open");
      });
      this.#content.querySelectorAll(this.#tagsToInclude.join(",")).forEach((heading) => {
        const headingId = (/* @__PURE__ */ new Date()).getTime() + Math.random().toString(36).substring(7);
        heading.setAttribute("id", headingId);
        this.#tagsToInclude.forEach((tag) => {
          if (heading.tagName.toLowerCase() == tag) {
            const itemId = `toc-${headingId}`;
            const item = build("a", {
              id: itemId,
              href: `#${headingId}`
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
              const elementRect = element.getBoundingClientRect();
              const scrollTop = document.documentElement.scrollTop;
              const elementTop = elementRect.top + scrollTop;
              const containerStyle = getComputedStyle(this.#container.parentElement);
              const isNotMobile = !!parseInt(containerStyle.getPropertyValue("--is-not-mobile"));
              window.scrollTo({
                top: elementTop - this.#contentTopOffset - (isNotMobile ? 0 : this.#container.parentElement.offsetHeight),
                behavior: "smooth"
              });
              this.#updateDropdown();
              this.#updateProgress();
            });
            if (!this.#activeTocItem) {
              this.#activeTocItem = item;
              this.#updateActiveItem();
              this.#updateDropdown();
              this.#updateProgress();
            }
          }
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
      const contentRect = this.#content.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const elementTop = contentRect.top + scrollTop;
      const progress = (scrollTop - elementTop) / (contentRect.height - window.innerHeight) * 100;
      this.#progressBar.style.width = `${Math.max(Math.min(progress, 100), 0)}%`;
    }
    #onContentScroll() {
      this.#updateProgress();
      const containerStyle = getComputedStyle(this.#container.parentElement);
      const isNotMobile = !!parseInt(containerStyle.getPropertyValue("--is-not-mobile"));
      const xOffset = this.#content.getBoundingClientRect().left + 100;
      const elementAtPosition = document.elementFromPoint(xOffset, this.#contentTopOffset + 20 + (isNotMobile ? 0 : this.#container.parentElement.offsetHeight));
      if (!elementAtPosition) {
        return;
      }
      if (this.#tagsToInclude.includes(elementAtPosition.tagName.toLowerCase())) {
        const id = elementAtPosition.getAttribute("id");
        const tocItem = document.getElementById(`toc-${id}`);
        if (tocItem && tocItem !== this.#activeTocItem) {
          const parent = tocItem.parentNode;
          const tocItemRect = tocItem.getBoundingClientRect();
          const parentRect = parent.getBoundingClientRect();
          const tocItemTopRelativeToParent = tocItemRect.top - parentRect.top + parent.scrollTop;
          parent.scrollTo({
            top: tocItemTopRelativeToParent - parent.clientHeight / 2,
            // Center the item when scrolled to it
            behavior: "smooth"
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
      if (this.skipScrollingWatch) {
        return;
      }
      const tocBlock = this.#container.parentElement;
      const tocTop = tocBlock.getBoundingClientRect().top;
      const contentTop = this.#content.getBoundingClientRect().top;
      if (tocTop <= this.#contentTopOffset && !tocBlock.classList.contains("docked")) {
        if (this.#width === 0) {
          const firstItem = this.#container.querySelector("a");
          firstItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        this.stick();
      } else {
        tocBlock.classList.remove("sticky");
        tocBlock.style.maxWidth = "100%";
        tocBlock.style.width = "100%";
        this.#width = 0;
      }
      if (contentTop > this.#contentTopOffset) {
        tocBlock.classList.remove("sticky");
        tocBlock.style.maxWidth = "100%";
        tocBlock.style.width = "100%";
        this.#width = 0;
      }
    }
    #updateWidth() {
      const tocBlock = this.#container.parentElement;
      if (window.innerWidth < 768) {
        tocBlock.style.width = "100%";
        tocBlock.style.maxWidth = "100%";
        this.#width = 0;
      } else {
        let isSticky = tocBlock.classList.contains("sticky");
        if (isSticky) {
          tocBlock.classList.remove("sticky");
        }
        this.#width = tocBlock.parentElement.getBoundingClientRect().width;
        tocBlock.style.width = `${this.#width}px`;
        tocBlock.style.maxWidth = `${this.#width}px`;
        if (isSticky) {
          tocBlock.classList.add("sticky");
        }
      }
    }
    release() {
      this.#items.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setTimeout(() => {
        const tocBlock = this.#container.parentElement;
        tocBlock.classList.remove("docked");
        tocBlock.classList.remove("sticky");
        tocBlock.style.maxWidth = "100%";
        tocBlock.style.width = "100%";
        this.#width = 0;
        this.#activeTocItem?.classList.remove("active-toc-item");
        this.#activeTocItem = this.#items.querySelector(".toc-item");
        this.#updateActiveItem();
      }, 100);
    }
    dock() {
      const tocBlock = this.#container.parentElement;
      tocBlock.classList.remove("sticky");
      tocBlock.style.maxWidth = "100%";
      tocBlock.style.width = "100%";
      this.#width = 0;
      const tocContainerHeight = tocBlock.getBoundingClientRect().height;
      if (tocContainerHeight >= window.innerHeight - this.#contentTopOffset) {
        tocBlock.classList.add("docked");
      }
      this.scrollTop = this.scrollHeight;
      this.#activeTocItem?.classList.remove("active-toc-item");
      this.#activeTocItem = this.#items.lastChild;
      this.#updateActiveItem();
    }
    unDock() {
      const tocBlock = this.#container.parentElement;
      tocBlock.classList.remove("docked");
      this.#updatePosition();
    }
    stick() {
      const tocBlock = this.#container.parentElement;
      this.#width = tocBlock.getBoundingClientRect().width;
      tocBlock.style.maxWidth = `${this.#width}px`;
      tocBlock.style.width = `${this.#width}px`;
      tocBlock.classList.add("sticky");
      tocBlock.classList.remove("docked");
    }
  }
  customElements.define("stx-table-of-content", TableOfContent);
  const initTableOfContent = () => {
    const navbarHeight = (document.getElementById("navbar")?.firstChild).offsetHeight || 0;
    document.body.style.setProperty("--navbar-height", navbarHeight + "px");
    const id = "toc";
    const contentId = "content";
    const container = document.getElementById(id);
    if (!container) {
      throw new Error(`Can't generate Table of Content. Container with id ${id} not found`);
    }
    const content = document.getElementById(contentId);
    if (!content) {
      throw new Error(`Can't generate Table of Content. Content block with id ${contentId} not found`);
    }
    const tocElement = new TableOfContent({
      container,
      content,
      tags: "h3,h4,h5",
      contentTopOffset: navbarHeight
    });
    const footerElement = document.getElementById("content-footer");
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tocElement.dock();
        } else if (entry.intersectionRect.top > 0) {
          tocElement.unDock();
        } else if (window.scrollY > navbarHeight && window.scrollY < content.offsetHeight) {
          tocElement.stick();
        }
      });
    };
    const options = {
      root: null,
      // observing with respect to the viewport
      rootMargin: "0px",
      threshold: 0.3
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(footerElement);
    const goTopButton = document.getElementById("go-top-button");
    if (goTopButton) {
      goTopButton.addEventListener("click", () => {
        tocElement.skipScrollingWatch = true;
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        setTimeout(() => {
          tocElement.skipScrollingWatch = false;
        }, 1e3);
        tocElement.release();
      });
    }
  };
  document.addEventListener("DOMContentLoaded", function() {
    var contentElement = document.getElementById("content");
    if (contentElement) {
      initTableOfContent();
    } else {
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
            if (document.getElementById("content")) {
              observer.disconnect();
              initTableOfContent();
            }
          }
        });
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  });
});
