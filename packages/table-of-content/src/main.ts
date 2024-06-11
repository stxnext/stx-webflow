import TableOfContent from '../../../components/table-of-content';

import './style.scss';

  const initTableOfContent = () => {

    const navbarHeight = (document.getElementById('navbar')?.firstChild as HTMLElement).offsetHeight || 0;
  	document.body.style.setProperty("--navbar-height", navbarHeight + "px");

    const id = 'toc';
    const contentId = 'content';

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
      tags: 'h3,h4,h5',
      contentTopOffset: navbarHeight
    });

    const footerElement = document.getElementById('content-footer')!;

    // Define the callback function to execute when the element is observed
    const callback = (entries) => { 
      entries.forEach(entry => {
        if(entry.isIntersecting){
          tocElement.dock();
        } else if (entry.intersectionRect.top > 0) {
        	tocElement.unDock();
        } else if (window.scrollY > navbarHeight && window.scrollY < content.offsetHeight) {
          // we scrolled to the top of the page from the bottom
          // too fast for the IntersectionObserver to catch ity
          tocElement.stick();
        }
      });
    };

    const options = {
      root: null, // observing with respect to the viewport
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(footerElement);

    const goTopButton = document.getElementById("go-top-button");

    if(goTopButton) {
      goTopButton.addEventListener("click", () => {
        tocElement.skipScrollingWatch = true;
        
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        
        setTimeout(() => {
        	tocElement.skipScrollingWatch = false;
        }, 1000);
        
        tocElement.release();
      });
    }
  }

  // window.addEventListener("DOMContentLoaded", initTableOfContent);
  
  document.addEventListener("DOMContentLoaded", function() {
    var contentElement = document.getElementById("content");
    if (contentElement) {
        // If 'content' element is already rendered, execute the code immediately
        initTableOfContent();
    } else {
        // If 'content' element is not yet rendered, wait for it to be added to the DOM
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if 'content' element is added
                    if (document.getElementById("content")) {
                        // If 'content' element is added, disconnect the observer and execute the code
                        observer.disconnect();
                        initTableOfContent();
                    }
                }
            });
        });
        // Start observing changes to the DOM
        observer.observe(document.body, { childList: true, subtree: true });
    }
});