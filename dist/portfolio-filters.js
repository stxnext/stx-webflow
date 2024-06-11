(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode("multi-select {\n  --tag-font-size: 10px;\n  --tag-line-height: 16px;\n  --tag-padding-x: 12px;\n  --tag-padding-y: 4px;\n  --option-line-height: 24px;\n  --option-padding-y: 10px;\n  --option-light-gray-width: 1px;\n  position: relative;\n  font-family: Inter;\n  /* initial visibility */\n  display: none;\n}\n\n.multi-select-label {\n  display: block;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  font-weight: 400;\n  color: var(--gray-800);\n  margin-bottom: 10px;\n}\n\n.multi-select-field {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  width: 100%;\n  min-height: 24px;\n  padding-bottom: 8px;\n  color: var(--black);\n  border-bottom: 1px solid var(--light-gray);\n  overflow: hidden;\n}\n\n.multi-select-field:focus {\n  outline: none;\n  border-bottom: 1px solid var(--dark-stroke);\n}\n\n.multi-select-field:active {\n  border-color: var(--dark-stroke);\n}\n\n.multi-select-tags-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  width: 100%;\n}\n\n.multi-select-tag {\n  display: flex;\n  align-items: center;\n  padding-block: var(--tag-padding-y);\n  padding-inline: var(--tag-padding-x);\n  font-size: var(--tag-font-size);\n  line-height: var(--tag-line-height);\n  outline: 1px solid var(--light-gray);\n  outline-offset: -1px;\n  border-radius: calc(var(--tag-line-height) + var(--tag-padding-y) * 2 / 2);\n  color: var(--gray-800);\n  text-transform: uppercase;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.multi-select-tag:hover {\n  background-color: var(--gray-800);\n  color: white;\n}\n\n.multi-select-arrow {\n  height: 24px;\n  color: black;\n}\n\n.multi-select-list {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: calc(100% - 1px);\n  left: 0;\n  width: 100%;\n  max-height: calc((var(--option-line-height) + var(--option-padding-y) * 2 + var(--option-light-gray-width)) * 6 - var(--option-light-gray-width));\n  background-color: white;\n  border: 1px solid var(--light-gray);\n  overflow-y: auto;\n  z-index: 1000;\n}\n\n.multi-select-item-selected .w-form-label {\n  font-weight: bold !important;\n}\n\n[multi-select-item] {\n  padding-inline: 8px;\n  padding-block: var(--option-padding-y);\n  font-size: var(--option-font-size);\n  line-height: var(--option-line-height);\n  border-bottom: 1px solid var(--light-gray);\n}\n\n[multi-select-item]:last-child {\n  border-bottom: none;\n}\n\n[multi-select-item]:hover {\n  cursor: pointer;\n  color: var(--stx-next);\n}\n\n.multi-select-list::-webkit-scrollbar {\n  width: 6px;\n}\n\n.multi-select-list::-webkit-scrollbar-thumb {\n  background-color: var(--light-gray);\n  border-radius: 3px;\n}\n\n.multi-select-list::-webkit-scrollbar-track {\n  background-color: transparent;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
class MultiSelect extends HTMLElement {
  _options = [];
  _selectedItems = /* @__PURE__ */ new Set();
  _listVisible = false;
  _multiSelectField = null;
  _multiSelectList = null;
  _tagsContainer = null;
  _arrow = null;
  constructor() {
    super();
    window.addEventListener("DOMContentLoaded", () => {
      if (!this._multiSelectField) {
        this.init();
      }
    });
  }
  init() {
    this._options = Array.from(this.querySelectorAll("[multi-select-item]"));
    const label = document.createElement("span");
    label.classList.add("multi-select-label");
    label.textContent = this.getAttribute("label") || "Select";
    this.appendChild(label);
    this._multiSelectField = document.createElement("div");
    this._multiSelectField.classList.add("multi-select-field");
    this._multiSelectField.setAttribute("tabindex", "0");
    this.appendChild(this._multiSelectField);
    this._multiSelectField.addEventListener("click", this._toggleList);
    window.addEventListener("click", (e) => {
      if (e.target !== this._multiSelectField) {
        this._closeList();
      }
    });
    this._tagsContainer = document.createElement("div");
    this._tagsContainer.classList.add("multi-select-tags-container");
    this._multiSelectField.appendChild(this._tagsContainer);
    this._arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this._arrow.classList.add("multi-select-arrow");
    this._arrow.setAttribute("width", "12");
    this._arrow.setAttribute("height", "7");
    this._arrow.setAttribute("viewBox", "0 0 12 7");
    this._arrow.setAttribute("fill", "none");
    this._arrow.innerHTML = `<path d="M1 1L6.00081 5.58L11 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
    this._multiSelectField.appendChild(this._arrow);
    this._multiSelectList = this.querySelector(".multi-select-list");
    this._multiSelectList.style.display = "none";
    this._initOptionList();
    this._updateTags();
    this.style.display = "block";
  }
  _initOptionList = () => {
    this._options.forEach((option) => {
      option.addEventListener("click", (e) => {
        if (e.target?.tagName === "INPUT") {
          this._handleOptionClick(option.getAttribute("data-value") || "");
        }
      });
    });
  };
  _toggleList = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this._listVisible = !this._listVisible;
    this._multiSelectList.style.display = this._listVisible ? "flex" : "none";
    this._arrow.style.transform = this._listVisible ? "rotate(180deg)" : "rotate(0deg)";
  };
  _closeList = () => {
    this._listVisible = false;
    this._multiSelectList.style.display = this._listVisible ? "flex" : "none";
    this._arrow.style.transform = this._listVisible ? "rotate(180deg)" : "rotate(0deg)";
  };
  _handleOptionClick = (value) => {
    const option = this._options.find((option2) => option2.getAttribute("data-value") === value);
    const checkbox = option?.querySelector('input[type="checkbox"]');
    if (this._selectedItems.has(value)) {
      this._selectedItems.delete(value);
      option?.classList.remove("multi-select-item-selected");
      checkbox.checked = false;
    } else {
      this._selectedItems.add(value);
      option?.classList.add("multi-select-item-selected");
      checkbox.checked = true;
    }
    var event = new Event("input", {
      "bubbles": true,
      "cancelable": true
    });
    checkbox.dispatchEvent(event);
    this._updateTags();
  };
  _updateTags = () => {
    this._tagsContainer.innerHTML = "";
    let availableWidth = this._tagsContainer.clientWidth;
    let usedWidth = 0;
    let itemCount = 0;
    const createMoreTag = (count) => {
      const moreTag2 = document.createElement("div");
      moreTag2.classList.add("multi-select-tag");
      moreTag2.textContent = `${count} more`;
      return moreTag2;
    };
    const moreTag = createMoreTag(0);
    this._tagsContainer.appendChild(moreTag);
    let moreTagWidth = moreTag.offsetWidth;
    this._tagsContainer.removeChild(moreTag);
    this._selectedItems.forEach((value) => {
      const tag = document.createElement("div");
      tag.classList.add("multi-select-tag");
      tag.setAttribute("data-value", value);
      tag.textContent = value;
      tag.style.visibility = "hidden";
      this._tagsContainer.appendChild(tag);
      const tagWidth = tag.offsetWidth;
      usedWidth += tagWidth;
      const occupiedWidth = this._selectedItems.size > itemCount + 1 ? moreTagWidth + 5 : 0;
      if (usedWidth > availableWidth - occupiedWidth) {
        this._tagsContainer.removeChild(tag);
        return;
      }
      tag.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this._handleOptionClick(value);
        this._closeList();
      });
      tag.style.visibility = "visible";
      itemCount++;
    });
    if (this._selectedItems.size > itemCount) {
      const extraCount = this._selectedItems.size - itemCount;
      const moreTagFinal = createMoreTag(extraCount);
      this._tagsContainer.appendChild(moreTagFinal);
    }
  };
}
customElements.define("multi-select", MultiSelect);
