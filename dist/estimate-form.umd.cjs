(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('stx-slider {\n  --puller-offset: calc(\n    (var(--slider-puller-size) - var(--slider-track-height)) / 2\n  );\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-block: var(--puller-offset);\n  cursor: pointer;\n}\nstx-slider:focus {\n  outline: none;\n}\nstx-slider:focus .puller {\n  outline-width: var(--slider-puller-focus-border-width);\n  outline-color: var(--slider-puller-focus-border-color);\n  outline-style: solid;\n  outline-offset: 1px;\n}\nstx-slider .track {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: var(--slider-track-height);\n  border-radius: var(--slider-track-border-radius);\n  border-width: var(--slider-track-border-width);\n  border-color: var(--slider-track-border-color);\n  background-color: var(--slider-track-inactive-path-color);\n}\nstx-slider .track .active-path {\n  background-color: var(--slider-track-active-path-color);\n  border-radius: var(--slider-track-border-radius);\n  border-width: var(--slider-track-border-width);\n  border-color: var(--slider-track-border-color);\n  transition: width 0.3s ease;\n}\nstx-slider .puller {\n  position: absolute;\n  width: var(--slider-puller-size);\n  height: var(--slider-puller-size);\n  top: calc(var(--puller-offset) * -1);\n  background-color: var(--slider-puller-background-color);\n  transition: all 0.3s ease;\n  border-radius: calc(var(--slider-puller-size) / 2);\n  box-shadow: var(--slider-puller-shadow);\n}\nstx-slider .puller:hover {\n  box-shadow: var(--slider-puller-hover-shadow);\n}\nstx-slider .marks {\n  --mark-container-width: 100px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: calc(100% + var(--mark-container-width));\n  color: var(--slider-marks-font-color);\n  font-size: var(--slider-marks-font-size);\n  font-weight: var(--slider-marks-font-weight);\n  font-family: var(--slider-marks-font-family);\n  line-height: var(--slider-marks-font-line-height);\n  margin-top: var(--slider-marks-margin-top);\n  margin-inline: calc(-1 * var(--mark-container-width) / 2);\n}\nstx-slider .marks .mark {\n  display: flex;\n  justify-content: center;\n  width: var(--mark-container-width);\n}\nstx-slider .marks .mark:first-child {\n  padding-inline-start: calc(var(--mark-container-width) / 2);\n  justify-content: flex-start;\n}\nstx-slider .marks .mark:last-child {\n  padding-inline-end: calc(var(--mark-container-width) / 2);\n  justify-content: flex-end;\n}\nstx-slider .label {\n  display: flex;\n  width: 100%;\n  margin-bottom: 16px;\n  font-weight: 500;\n}stx-uploader {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n}\nstx-uploader .drop-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 52px;\n  background-color: var(--uploader-drop-box-background-color);\n  border: 1px dashed var(--uploader-drop-box-border-color);\n  stroke-dashoffset: 2px;\n  border-radius: 52px;\n  cursor: pointer;\n}\nstx-uploader .drop-box.dragging-over {\n  background-color: var(--uploader-drop-box-border-color);\n}\nstx-uploader .drop-box .caption {\n  font-size: var(--suploader-drop-box-caption-font-size);\n  font-weight: var(--uploader-drop-box-caption-font-weight);\n  font-family: var(--uploader-drop-box-caption-font-family);\n  line-height: var(--uploader-drop-box-caption-font-line-height);\n  color: var(--uploader-drop-box-caption-color);\n}\nstx-uploader .file-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  padding-top: 20px;\n  padding-inline: 40px;\n  width: 100%;\n  list-style-type: none;\n  box-sizing: border-box;\n  align-items: center;\n}\nstx-uploader li {\n  width: 100%;\n  max-width: 500px;\n}\nstx-uploader .file-info {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  justify-content: stretch;\n  align-items: center;\n}\nstx-uploader .file-info .file-image {\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDIyIDI2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjMDBCMkE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS40Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTExLjY2NyAwSDIuMzMzQzEuMDQ1IDAgMCAxLjA0NSAwIDIuMzMzVjIxYzAgMS4yODkgMS4wNDUgMi4zMzMgMi4zMzMgMi4zMzNoMTRjMS4yODkgMCAyLjMzNC0xLjA0NCAyLjMzNC0yLjMzM1Y3bC03LTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMSkgdHJhbnNsYXRlKDQuNjY3IDIuMzMzKSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjY3IDBMMTEuNjY3IDcgMTguNjY3IDdNMTQgMTIuODMzTDQuNjY3IDEyLjgzM00xNCAxNy41TDQuNjY3IDE3LjVNNyA4LjE2N0w0LjY2NyA4LjE2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTEpIHRyYW5zbGF0ZSg0LjY2NyAyLjMzMykiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCAwSDI4VjI4SDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==);\n}\nstx-uploader .file-info .file-name {\n  display: flex;\n  flex-grow: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nstx-uploader .file-info .remove-button {\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE2IDE3Ij4KICAgIDxnIGZpbGw9Im5vbmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxRDFFMUUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuMjgzLjc5OGMxLjA2IDAgMS45My44MjMgMi4wMDMgMS44NjVsLjAwNS4xNDN2LjUwMWwyLjM4NC4wMDFjLjQxNiAwIC43NTMuMzM3Ljc1My43NTMgMCAuMzg0LS4yODcuNy0uNjU4Ljc0N2wtLjA5NS4wMDZoLS41MDJ2OC4wMzFjMCAxLjA2MS0uODIyIDEuOTMtMS44NjQgMi4wMDNsLS4xNDQuMDA1SDQuODkxYy0xLjA2IDAtMS45My0uODIyLTIuMDAzLTEuODY0bC0uMDA1LS4xNDRWNC44MTNIMi4zOGMtLjQxNiAwLS43NTMtLjMzNi0uNzUzLS43NTIgMC0uMzg0LjI4Ny0uNy42NTktLjc0N2wuMDk0LS4wMDZoMi4zODR2LS41MDJjMC0xLjA2LjgyMy0xLjkzIDEuODY1LTIuMDAzbC4xNDMtLjAwNWgyLjUxem0yLjM4NCA0LjAxNUg0LjM4OGwuMDAxIDguMDMyYzAgLjI1LjE4Mi40NTcuNDIuNDk2bC4wODIuMDA2aDYuMjc0Yy4yNSAwIC40NTctLjE4Mi40OTYtLjQybC4wMDYtLjA4MlY0LjgxM3pNNi43NzMgNi40NDVjLjM4NCAwIC43LjI4OC43NDcuNjU5bC4wMDYuMDk0djMuNzY1YzAgLjQxNi0uMzM3Ljc1My0uNzUzLjc1My0uMzg0IDAtLjctLjI4Ny0uNzQ3LS42NTlsLS4wMDYtLjA5NFY3LjE5OGMwLS40MTYuMzM3LS43NTMuNzUzLS43NTN6bTIuNTEgMGMuMzg0IDAgLjcuMjg4Ljc0Ny42NTlsLjAwNi4wOTR2My43NjVjMCAuNDE2LS4zMzcuNzUzLS43NTMuNzUzLS4zODQgMC0uNy0uMjg3LS43NDctLjY1OWwtLjAwNi0uMDk0VjcuMTk4YzAtLjQxNi4zMzctLjc1My43NTMtLjc1M3ptMC00LjE0aC0yLjUxYy0uMjUgMC0uNDU2LjE4MS0uNDk1LjQybC0uMDA3LjA4MXYuNTAxaDMuNTEzbC4wMDEtLjVjMC0uMjUtLjE4Mi0uNDU3LS40Mi0uNDk2bC0uMDgyLS4wMDd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIi8+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxNlYxNkgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIvPgogICAgPC9nPgo8L3N2Zz4K);\n  cursor: pointer;\n}:root {\n  --gray-50: #f6f6f6;\n  --gray-400: #777777;\n  --light-gray: #e6e6e6;\n  --darker-gray: #333333;\n  --color-black: #000000;\n  --color-white: #ffffff;\n  --color-brand: var(--stx-next, #00b2a9);\n  --color-field-border: #dadada;\n  --color-field-error: #dc2636;\n  --color-checkbox-mark: var(--darker-gray);\n  --color-field-border-disabled: var(--gray-50);\n  --color-field-label-disabled: var(--gray-400);\n  --color-field-placeholder: var(--gray-400);\n  --color-toggle: var(--darker-gray);\n  --color-toggle-border: var(--light-gray);\n  --slider-puller-size: 12px;\n  --slider-track-height: 2px;\n  --slider-puller-focus-border-width: 1px;\n  --slider-puller-focus-border-color: var(--darker-gray);\n  --slider-track-border-radius: 0px;\n  --slider-track-border-width: 0px;\n  --slider-track-border-color: none;\n  --slider-track-inactive-path-color: #d9d9d9;\n  --slider-track-active-path-color: var(--darker-gray);\n  --slider-puller-background-color: var(--darker-gray);\n  --slider-puller-shadow: none;\n  --slider-puller-hover-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  --slider-marks-font-color: var(--gray-400);\n  --slider-marks-font-size: 14px;\n  --slider-marks-font-weight: 400;\n  --slider-marks-font-family: Inter;\n  --slider-marks-font-line-height: 20px;\n  --slider-marks-margin-top: 8px;\n  --slider-mark-container-width: 100px;\n  --uploader-drop-box-caption-font-size: 14px;\n  --uploader-drop-box-caption-font-weight: 400;\n  --uploader-drop-box-caption-font-family: Inter;\n  --uploader-drop-box-caption-font-line-height: 20px;\n  --uploader-drop-box-background-color: var(--light-gray);\n  --uploader-drop-box-border-color: var(--gray-400);\n  --uploader-drop-box-caption-color: var(--darker-gray);\n}\n\n#hire_us-form-container .legal-consent-container p {\n  font-family: Inter;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: var(--color-black);\n}\n\n#hire_us-form-container .legal-consent-container p a {\n  color: var(--color-black);\n  font-weight: 600;\n}\n\n.hs-form {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  align-items: stretch;\n}\n\n.hs-form fieldset,\n.hs-form .hs-dependent-field,\n.hs-form fieldset.form-columns-1,\n.hs-form fieldset.form-columns-2 {\n  display: flex;\n  width: 100%;\n  max-width: none;\n}\n\n.hs-form fieldset.form-columns-2,\n.hs-form .hs-dependent-field.form-columns-2,\n.hs-form fieldset.form-columns-1.form-columns-2,\n.hs-form fieldset.form-columns-2.form-columns-2 {\n  column-gap: 40px;\n}\n\n.hs-form fieldset.form-columns-2 {\n  flex-direction: column;\n  row-gap: 24px;\n}\n\n.hs-form fieldset.form-columns-2 .hs-form-field {\n  width: 100% !important;\n}\n\n@media (min-width: 768px) {\n  .hs-form fieldset.form-columns-2 {\n    flex-direction: row;\n    row-gap: 0px;\n  }\n}\n\n.hs-form select {\n  height: 52px;\n}\n\n.hs-form input, .hs-form textarea {\n  box-sizing: border-box;\n}\n\n.hs-form fieldset .input {\n  margin-right: 0 !important;\n}\n\n.hs-form .actions {\n  display: flex;\n  flex-direction: row;\n  gap: 24px;\n  justify-content: flex-end;\n}\n\n.hs-form,\n.hs-input {\n  font-family: Inter;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.hs-form-field label {\n  font-weight: 500;\n}\n\n.hs-form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  width: 100%;\n}\n\n.hs-form-field:disabled {\n  background-color: var(--color-field-border-disabled);\n  cursor: not-allowed;\n}\n\n.hs-form-field:disabled label {\n  color: var(--color-field-label-disabled);\n}\n\n.hs-input {\n  font-family: Inter;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  border: 1px solid var(--color-field-border);\n  padding: 15px;\n  border-radius: 4px;\n  background-color: white;\n  width: 100% !important;\n}\n\n.hs-input::placeholder {\n  color: var(--color-field-placeholder);\n}\n\n.hs-input:focus-visible {\n  outline-width: 1px;\n  outline-style: solid;\n  outline-offset: -1px;\n}\n\n.hs-input.error {\n  border-color: var(--color-field-error);\n}\n\n.hs-input.hs-fieldtype-textarea {\n  height: 110px;\n}\n\n.hs-error-msgs {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  font-size: 10px;\n  line-height: 12px;\n  color: var(--color-field-error);\n}\n\n.inputs-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 8px;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n.inputs-list .multi-container, .inputs-list .hs_send_me_an_nda, .inputs-list .hs_call_me_asap {\n  padding: 0;\n  margin: 0;\n}\n\n.inputs-list li .hs-form-checkbox-display {\n  display: flex;\n}\n\n.hs-form-checkbox {\n  display: block;\n}\n\n.hs-form-checkbox .hs-input:checked + span {\n  background-color: var(--color-toggle);\n  color: var(--color-white);\n  border-color: var(--color-toggle);\n}\n\n.hs-form-checkbox span {\n  display: block;\n  cursor: pointer;\n  padding: 4px 16px;\n  color: var(--color-toggle);\n  border: 1px solid var(--color-toggle-border);\n  border-radius: 24px;\n  font-weight: 400;\n}\n\n.hs-form-checkbox .hs-input {\n  width: 0 !important;\n  height: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.hs-form-booleancheckbox-display {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  cursor: pointer;\n  align-items: center;\n}\n\n.hs-form-booleancheckbox-display .hs-input {\n  width: 24px !important;\n  height: 24px !important;\n  appearance: none;\n  background-color: white;\n  margin: 0;\n  border: 1px solid var(--color-checkbox-mark);\n  border-radius: 4px;\n  display: grid;\n  place-content: center;\n  padding: 0;\n}\n\n.hs-form-booleancheckbox-display .hs-input::before {\n  content: "";\n  width: 5px;\n  height: 13px;\n  border: solid var(--color-checkbox-mark);\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg) scale(0);\n  transition: 120ms transform ease-in-out;\n  margin-bottom: 4px;\n}\n\n.hs-form-booleancheckbox-display .hs-input:checked::before {\n  transform: rotate(45deg) scale(1);\n}\n\n.hs-form-booleancheckbox-display .hs-input span {\n  font-weight: 400;\n}\n\ninput[type=submit] {\n  background-color: var(--color-brand);\n  height: 52px;\n  width: 127px;\n  border: none;\n  border-radius: 52px;\n  cursor: pointer;\n  font-weight: 500;\n  color: var(--color-white);\n}\n\n.hs_my_budget_is_100_000_or_more input {\n  width: 0 !important;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.hs_recaptcha {\n  display: none;\n}\n\n.slider .label em {\n  color: var(--color-brand);\n  text-decoration: none;\n  font-style: normal;\n  margin-inline: 4px;\n}'));
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
  async function loadScript(url) {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        reject(new Error(`Can't load script ${url}`));
      };
      document.head.appendChild(script);
    });
  }
  class Slider extends HTMLElement {
    #track;
    #activePath;
    #puller;
    #marks;
    #label;
    #input;
    min;
    max;
    step;
    value;
    marks;
    onChange;
    constructor({
      min,
      max,
      step,
      value,
      marks = [],
      className,
      input,
      onChange
    }) {
      super();
      this.min = min;
      this.max = max;
      this.step = step;
      this.value = value || min;
      this.marks = marks;
      this.onChange = onChange;
      this.#input = input;
      if (className) {
        this.className = className;
      }
    }
    connectedCallback() {
      setTimeout(this.#render.bind(this), 100);
    }
    #render() {
      this.setAttribute("tabindex", "0");
      this.#label = build("div", { class: "label" }, this);
      this.#track = build("div", { class: "track" }, this);
      this.#activePath = build("div", { class: "active-path" }, this.#track);
      this.#puller = build("div", { class: "puller" }, this.#track);
      this.#marks = build("div", { class: "marks" }, this);
      this.#input = this.#input || build("input", { type: "hidden" }, this);
      for (const mark of this.marks) {
        const markElement = build("span", { class: "mark" }, this.#marks);
        markElement.textContent = mark;
      }
      this.addEventListener("click", this.#handlePressEvent.bind(this));
      this.addEventListener("mousemove", this.#handleMouseMove.bind(this));
      this.addEventListener("keydown", this.#handleKeyDown.bind(this));
      this.#setValue(this.value);
    }
    #updateSlider() {
      const percentage = (this.value - this.min) / (this.max - this.min) * 100;
      this.#activePath.style.width = percentage + "%";
      this.#puller.style.left = "calc(" + percentage + "% - 6px)";
    }
    #setValue(newValue) {
      this.value = Math.min(Math.max(newValue, this.min), this.max);
      this.#updateSlider();
      this.#input.value = String(this.value);
      this.onChange?.(this.value, this);
    }
    #handlePressEvent(event) {
      event.preventDefault();
      const trackRect = this.#track.getBoundingClientRect();
      const newPullerPosition = event.pageX - trackRect.left;
      let newValue = newPullerPosition / trackRect.width * (this.max - this.min) + this.min;
      newValue = Math.round(newValue / this.step) * this.step;
      this.#setValue(newValue);
    }
    #handleMouseMove(event) {
      if (event.buttons === 1) {
        this.#handlePressEvent(event);
      }
    }
    #handleKeyDown(event) {
      let newValue = this.value;
      if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
        newValue = Math.max(this.value - this.step, this.min);
      } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
        newValue = Math.min(this.value + this.step, this.max);
      }
      this.#setValue(newValue);
    }
    setLabel(value) {
      this.#label.innerHTML = value;
    }
  }
  customElements.define("stx-slider", Slider);
  class Uploader extends HTMLElement {
    #dropBox;
    #fileList;
    #input;
    #files = [];
    onChange;
    constructor({
      id,
      className,
      input
    }) {
      super();
      this.#input = input;
      if (className) {
        this.className = className;
      }
      if (id) {
        this.setAttribute("id", id);
      }
    }
    connectedCallback() {
      setTimeout(this.#render.bind(this), 100);
    }
    #render() {
      this.setAttribute("tabindex", "0");
      this.#dropBox = build("div", { class: "drop-box" }, this);
      this.#fileList = build("ul", { class: "file-list" }, this);
      this.#input = this.#input || build("input", { type: "hidden" }, this);
      const caption = build("span", { class: "caption" }, this.#dropBox);
      caption.textContent = "+ Drop files here or click to upload";
      this.#dropBox.addEventListener("click", () => {
        this.#input.click();
      });
      this.#input.addEventListener("change", () => {
        this.#handleFiles(this.#input.files);
      });
      this.#dropBox.addEventListener("dragover", (event) => {
        event.stopPropagation();
        event.preventDefault();
        this.#dropBox.classList.add("dragging-over");
      });
      this.#dropBox.addEventListener("dragleave", (event) => {
        event.preventDefault();
        this.#dropBox.classList.remove("dragging-over");
      });
      this.#dropBox.addEventListener("drop", (event) => {
        event.preventDefault();
        this.#dropBox.classList.remove("dragging-over");
        event.dataTransfer && this.#handleFiles(event.dataTransfer.files);
      });
    }
    #handleFiles(newFiles) {
      this.#files = this.#files.concat([...newFiles || []]);
      this.#updateFileList();
    }
    #updateFileList() {
      this.#fileList.innerHTML = "";
      this.#files.forEach((file) => {
        const item = build("li", {}, this.#fileList);
        const fileInfoContainer = build("div", { class: "file-info" }, item);
        build("span", { class: "file-image" }, fileInfoContainer);
        const label = build("span", { class: "file-name" }, fileInfoContainer);
        label.textContent = file.name;
        const removeButton = build("span", { class: "remove-button" }, fileInfoContainer);
        removeButton.addEventListener("click", () => {
          this.#files = this.#files.filter((f) => f !== file);
          this.#updateFileList();
        });
      });
    }
    get files() {
      return this.#files;
    }
  }
  customElements.define("stx-uploader", Uploader);
  async function embedForm(onFormReadyCallback) {
    try {
      await loadScript("//js.hsforms.net/forms/embed/v2.js");
    } catch (error) {
      return console.error(error);
    }
    hbspt.forms.create({
      region: "na1",
      portalId: "4542168",
      formId: "36a7e3a5-18ec-4b4c-9589-e9018abca994",
      onBeforeFormSubmit: (form) => {
        const uploader = document.getElementById("upload_files");
        form.elements["upload_files"].value = uploader.files;
        setTimeout(() => {
          window.scrollY = 0;
        });
      },
      onFormReady: (form) => {
        let formElement = form;
        if (form.jquery) {
          formElement = form[0];
        }
        onFormReadyCallback && onFormReadyCallback(formElement);
      }
    });
  }
  const addSlider = function() {
    const sliderField = document.getElementsByClassName(
      "hs_my_budget_is_100_000_or_more"
    )[0];
    const sliderInput = sliderField?.getElementsByClassName("input")?.[0]?.firstChild;
    const slider = new Slider({
      min: 50,
      max: 500,
      step: 10,
      value: 200,
      marks: ["50k", "500k"],
      input: sliderInput,
      className: "slider",
      onChange: (value, component) => {
        component.setLabel(`My budget is <em>&euro; ${value}K</em> or more`);
      }
    });
    if (sliderInput) {
      sliderInput.after(slider);
    }
  };
  const addUploader = function() {
    const uploaderField = document.getElementsByClassName("hs_upload_files")[0];
    const uploaderInput = uploaderField?.querySelector(
      'input[name="upload_files"'
    );
    const uploader = new Uploader({
      input: uploaderInput,
      className: "uploader",
      id: "upload_files"
    });
    uploaderInput.style.display = "none";
    if (uploaderInput) {
      uploaderInput.after(uploader);
    }
  };
  const adoptForm = () => {
    addSlider();
    addUploader();
  };
  embedForm(adoptForm);
});
