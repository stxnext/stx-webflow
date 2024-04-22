(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('stx-slider{--puller-offset: calc( (var(--slider-puller-size) - var(--slider-track-height)) / 2 );display:flex;flex-direction:column;width:100%;padding-block:var(--puller-offset);cursor:pointer}stx-slider:focus{outline:none}stx-slider:focus .puller{outline-width:var(--slider-puller-focus-border-width);outline-color:var(--slider-puller-focus-border-color);outline-style:solid;outline-offset:1px}stx-slider .track{position:relative;display:flex;flex-direction:row;width:100%;height:var(--slider-track-height);border-radius:var(--slider-track-border-radius);border-width:var(--slider-track-border-width);border-color:var(--slider-track-border-color);background-color:var(--slider-track-inactive-path-color)}stx-slider .track .active-path{background-color:var(--slider-track-active-path-color);border-radius:var(--slider-track-border-radius);border-width:var(--slider-track-border-width);border-color:var(--slider-track-border-color);transition:width .3s ease}stx-slider .puller{position:absolute;width:var(--slider-puller-size);height:var(--slider-puller-size);top:calc(var(--puller-offset) * -1);background-color:var(--slider-puller-background-color);transition:all .3s ease;border-radius:calc(var(--slider-puller-size) / 2);box-shadow:var(--slider-puller-shadow)}stx-slider .puller:hover{box-shadow:var(--slider-puller-hover-shadow)}stx-slider .marks{--mark-container-width: 100px;display:flex;flex-direction:row;justify-content:space-between;width:calc(100% + var(--mark-container-width));color:var(--slider-marks-font-color);font-size:var(--slider-marks-font-size);font-weight:var(--slider-marks-font-weight);font-family:var(--slider-marks-font-family);line-height:var(--slider-marks-font-line-height);margin-top:var(--slider-marks-margin-top);margin-inline:calc(-1 * var(--mark-container-width) / 2)}stx-slider .marks .mark{display:flex;justify-content:center;width:var(--mark-container-width)}stx-slider .marks .mark:first-child{padding-inline-start:calc(var(--mark-container-width) / 2);justify-content:flex-start}stx-slider .marks .mark:last-child{padding-inline-end:calc(var(--mark-container-width) / 2);justify-content:flex-end}stx-slider .label{display:flex;width:100%;margin-bottom:16px;font-weight:500}stx-uploader{display:flex;flex-direction:column;justify-content:center;align-items:stretch}stx-uploader .drop-box{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:52px;background-color:var(--uploader-drop-box-background-color);border:1px dashed var(--uploader-drop-box-border-color);stroke-dashoffset:2px;border-radius:52px;cursor:pointer}stx-uploader .drop-box.dragging-over{background-color:var(--uploader-drop-box-border-color)}stx-uploader .drop-box .caption{font-size:var(--suploader-drop-box-caption-font-size);font-weight:var(--uploader-drop-box-caption-font-weight);font-family:var(--uploader-drop-box-caption-font-family);line-height:var(--uploader-drop-box-caption-font-line-height);color:var(--uploader-drop-box-caption-color)}stx-uploader .file-list{display:flex;flex-direction:column;gap:8px;margin:0;padding:20px 0 0;padding-inline:40px;width:100%;list-style-type:none;box-sizing:border-box;align-items:center}stx-uploader li{width:100%;max-width:500px}stx-uploader .file-info{display:flex;flex-direction:row;gap:8px;justify-content:stretch;align-items:center}stx-uploader .file-info .file-image{display:block;width:20px;height:20px;background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDIyIDI2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjMDBCMkE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS40Ij4KICAgICAgICAgICAgPHBhdGggZD0iTTExLjY2NyAwSDIuMzMzQzEuMDQ1IDAgMCAxLjA0NSAwIDIuMzMzVjIxYzAgMS4yODkgMS4wNDUgMi4zMzMgMi4zMzMgMi4zMzNoMTRjMS4yODkgMCAyLjMzNC0xLjA0NCAyLjMzNC0yLjMzM1Y3bC03LTd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMSkgdHJhbnNsYXRlKDQuNjY3IDIuMzMzKSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuNjY3IDBMMTEuNjY3IDcgMTguNjY3IDdNMTQgMTIuODMzTDQuNjY3IDEyLjgzM00xNCAxNy41TDQuNjY3IDE3LjVNNyA4LjE2N0w0LjY2NyA4LjE2NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTEpIHRyYW5zbGF0ZSg0LjY2NyAyLjMzMykiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCAwSDI4VjI4SDB6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMyAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==)}stx-uploader .file-info .file-name{display:flex;flex-grow:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}stx-uploader .file-info .remove-button{display:block;width:20px;height:20px;background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE2IDE3Ij4KICAgIDxnIGZpbGw9Im5vbmUiPgogICAgICAgIDxwYXRoIGZpbGw9IiMxRDFFMUUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTkuMjgzLjc5OGMxLjA2IDAgMS45My44MjMgMi4wMDMgMS44NjVsLjAwNS4xNDN2LjUwMWwyLjM4NC4wMDFjLjQxNiAwIC43NTMuMzM3Ljc1My43NTMgMCAuMzg0LS4yODcuNy0uNjU4Ljc0N2wtLjA5NS4wMDZoLS41MDJ2OC4wMzFjMCAxLjA2MS0uODIyIDEuOTMtMS44NjQgMi4wMDNsLS4xNDQuMDA1SDQuODkxYy0xLjA2IDAtMS45My0uODIyLTIuMDAzLTEuODY0bC0uMDA1LS4xNDRWNC44MTNIMi4zOGMtLjQxNiAwLS43NTMtLjMzNi0uNzUzLS43NTIgMC0uMzg0LjI4Ny0uNy42NTktLjc0N2wuMDk0LS4wMDZoMi4zODR2LS41MDJjMC0xLjA2LjgyMy0xLjkzIDEuODY1LTIuMDAzbC4xNDMtLjAwNWgyLjUxem0yLjM4NCA0LjAxNUg0LjM4OGwuMDAxIDguMDMyYzAgLjI1LjE4Mi40NTcuNDIuNDk2bC4wODIuMDA2aDYuMjc0Yy4yNSAwIC40NTctLjE4Mi40OTYtLjQybC4wMDYtLjA4MlY0LjgxM3pNNi43NzMgNi40NDVjLjM4NCAwIC43LjI4OC43NDcuNjU5bC4wMDYuMDk0djMuNzY1YzAgLjQxNi0uMzM3Ljc1My0uNzUzLjc1My0uMzg0IDAtLjctLjI4Ny0uNzQ3LS42NTlsLS4wMDYtLjA5NFY3LjE5OGMwLS40MTYuMzM3LS43NTMuNzUzLS43NTN6bTIuNTEgMGMuMzg0IDAgLjcuMjg4Ljc0Ny42NTlsLjAwNi4wOTR2My43NjVjMCAuNDE2LS4zMzcuNzUzLS43NTMuNzUzLS4zODQgMC0uNy0uMjg3LS43NDctLjY1OWwtLjAwNi0uMDk0VjcuMTk4YzAtLjQxNi4zMzctLjc1My43NTMtLjc1M3ptMC00LjE0aC0yLjUxYy0uMjUgMC0uNDU2LjE4MS0uNDk1LjQybC0uMDA3LjA4MXYuNTAxaDMuNTEzbC4wMDEtLjVjMC0uMjUtLjE4Mi0uNDU3LS40Mi0uNDk2bC0uMDgyLS4wMDd6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIi8+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxNlYxNkgweiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIvPgogICAgPC9nPgo8L3N2Zz4K);cursor:pointer}:root{--gray-50: #f6f6f6;--gray-400: #777777;--light-gray: #e6e6e6;--darker-gray: #333333;--color-black: #000000;--color-white: #ffffff;--color-brand: var(--stx-next, #00b2a9);--color-field-border: #dadada;--color-field-error: #dc2636;--color-checkbox-mark: var(--darker-gray);--color-field-border-disabled: var(--gray-50);--color-field-label-disabled: var(--gray-400);--color-field-placeholder: var(--gray-400);--color-toggle: var(--darker-gray);--color-toggle-border: var(--light-gray);--slider-puller-size: 12px;--slider-track-height: 2px;--slider-puller-focus-border-width: 1px;--slider-puller-focus-border-color: var(--darker-gray);--slider-track-border-radius: 0px;--slider-track-border-width: 0px;--slider-track-border-color: none;--slider-track-inactive-path-color: #d9d9d9;--slider-track-active-path-color: var(--darker-gray);--slider-puller-background-color: var(--darker-gray);--slider-puller-shadow: none;--slider-puller-hover-shadow: 0 4px 8px rgba(0, 0, 0, .2);--slider-marks-font-color: var(--gray-400);--slider-marks-font-size: 14px;--slider-marks-font-weight: 400;--slider-marks-font-family: Inter;--slider-marks-font-line-height: 20px;--slider-marks-margin-top: 8px;--slider-mark-container-width: 100px;--uploader-drop-box-caption-font-size: 14px;--uploader-drop-box-caption-font-weight: 400;--uploader-drop-box-caption-font-family: Inter;--uploader-drop-box-caption-font-line-height: 20px;--uploader-drop-box-background-color: var(--light-gray);--uploader-drop-box-border-color: var(--gray-400);--uploader-drop-box-caption-color: var(--darker-gray)}#hire_us-form-container .legal-consent-container p{font-family:Inter;font-weight:400;font-size:14px;line-height:20px;color:var(--color-black)}#hire_us-form-container .legal-consent-container p a{color:var(--color-black);font-weight:600}.hs-form{display:flex;flex-direction:column;gap:24px;align-items:stretch}.hs-form fieldset,.hs-form .hs-dependent-field,.hs-form fieldset.form-columns-1,.hs-form fieldset.form-columns-2{display:flex;width:100%;max-width:none}.hs-form fieldset.form-columns-2,.hs-form .hs-dependent-field.form-columns-2,.hs-form fieldset.form-columns-1.form-columns-2,.hs-form fieldset.form-columns-2.form-columns-2{column-gap:40px}.hs-form fieldset.form-columns-2{flex-direction:column;row-gap:24px}.hs-form fieldset.form-columns-2 .hs-form-field{width:100%!important}@media (min-width: 768px){.hs-form fieldset.form-columns-2{flex-direction:row;row-gap:0px}}.hs-form select{height:52px}.hs-form input,.hs-form textarea{box-sizing:border-box}.hs-form fieldset .input{margin-right:0!important}.hs-form .actions{display:flex;flex-direction:row;gap:24px;justify-content:flex-end}.hs-form,.hs-input{font-family:Inter;font-weight:400;font-size:14px;line-height:20px}.hs-form-field label{font-weight:500}.hs-form-field{display:flex;flex-direction:column;gap:6px;width:100%}.hs-form-field:disabled{background-color:var(--color-field-border-disabled);cursor:not-allowed}.hs-form-field:disabled label{color:var(--color-field-label-disabled)}.hs-input{font-family:Inter;font-weight:400;font-size:14px;line-height:20px;border:1px solid var(--color-field-border);padding:15px;border-radius:4px;background-color:#fff;width:100%!important}.hs-input::placeholder{color:var(--color-field-placeholder)}.hs-input:focus-visible{outline-width:1px;outline-style:solid;outline-offset:-1px}.hs-input.error{border-color:var(--color-field-error)}.hs-input.hs-fieldtype-textarea{height:110px}.hs-error-msgs{padding:0;margin:0;list-style-type:none;font-size:10px;line-height:12px;color:var(--color-field-error)}.inputs-list{display:flex;flex-direction:row;flex-wrap:wrap;gap:8px;list-style-type:none;padding:0;margin:0}.inputs-list .multi-container,.inputs-list .hs_send_me_an_nda,.inputs-list .hs_call_me_asap{padding:0;margin:0}.inputs-list li .hs-form-checkbox-display{display:flex}.hs-form-checkbox{display:block}.hs-form-checkbox .hs-input:checked+span{background-color:var(--color-toggle);color:var(--color-white);border-color:var(--color-toggle)}.hs-form-checkbox span{display:block;cursor:pointer;padding:4px 16px;color:var(--color-toggle);border:1px solid var(--color-toggle-border);border-radius:24px;font-weight:400}.hs-form-checkbox .hs-input{width:0!important;height:0;padding:0;margin:0}.hs-form-booleancheckbox-display{display:flex;flex-direction:row;gap:8px;cursor:pointer;align-items:center}.hs-form-booleancheckbox-display .hs-input{width:24px!important;height:24px!important;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;margin:0;border:1px solid var(--color-checkbox-mark);border-radius:4px;display:grid;place-content:center;padding:0}.hs-form-booleancheckbox-display .hs-input:before{content:"";width:5px;height:13px;border:solid var(--color-checkbox-mark);border-width:0 3px 3px 0;transform:rotate(45deg) scale(0);transition:.12s transform ease-in-out;margin-bottom:4px}.hs-form-booleancheckbox-display .hs-input:checked:before{transform:rotate(45deg) scale(1)}.hs-form-booleancheckbox-display .hs-input span{font-weight:400}input[type=submit]{background-color:var(--color-brand);height:52px;width:127px;border:none;border-radius:52px;cursor:pointer;font-weight:500;color:var(--color-white)}.hs_my_budget_is_100_000_or_more input{width:0!important;height:0;margin:0;padding:0;border:none}.hs_recaptcha{display:none}.slider .label em{color:var(--color-brand);text-decoration:none;font-style:normal;margin-inline:4px}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var K = Object.defineProperty;
var $ = (i, e, t) => e in i ? K(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var p = (i, e, t) => ($(i, typeof e != "symbol" ? e + "" : e, t), t), D = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
};
var n = (i, e, t) => (D(i, e, "read from private field"), t ? t.call(i) : e.get(i)), a = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, l = (i, e, t, s) => (D(i, e, "write to private field"), s ? s.call(i, t) : e.set(i, t), t);
var r = (i, e, t) => (D(i, e, "access private method"), t);
function o(i, e, t) {
  const s = document.createElement(i);
  if (e)
    for (const [h, c] of Object.entries(e))
      s.setAttribute(h, c);
  return t && t.appendChild(s), s;
}
async function O(i) {
  await new Promise((e, t) => {
    const s = document.createElement("script");
    s.src = i, s.onload = () => {
      e(!0);
    }, s.onerror = () => {
      t(new Error(`Can't load script ${i}`));
    }, document.head.appendChild(s);
  });
}
var f, k, y, E, x, v, B, H, g, M, L, I, A, F, P, R;
class j extends HTMLElement {
  constructor({
    min: t,
    max: s,
    step: h,
    value: c,
    marks: N = [],
    className: _,
    input: V,
    onChange: q
  }) {
    super();
    a(this, B);
    a(this, g);
    a(this, L);
    a(this, A);
    a(this, P);
    a(this, f, void 0);
    a(this, k, void 0);
    a(this, y, void 0);
    a(this, E, void 0);
    a(this, x, void 0);
    a(this, v, void 0);
    p(this, "min");
    p(this, "max");
    p(this, "step");
    p(this, "value");
    p(this, "marks");
    p(this, "onChange");
    this.min = t, this.max = s, this.step = h, this.value = c || t, this.marks = N, this.onChange = q, l(this, v, V), _ && (this.className = _);
  }
  connectedCallback() {
    this.setAttribute("tabindex", "0"), l(this, x, o("div", { class: "label" }, this)), l(this, f, o("div", { class: "track" }, this)), l(this, k, o("div", { class: "active-path" }, n(this, f))), l(this, y, o("div", { class: "puller" }, n(this, f))), l(this, E, o("div", { class: "marks" }, this)), l(this, v, n(this, v) || o("input", { type: "hidden" }, this));
    for (const t of this.marks) {
      const s = o("span", { class: "mark" }, n(this, E));
      s.textContent = t;
    }
    this.addEventListener("click", r(this, L, I).bind(this)), this.addEventListener("mousemove", r(this, A, F).bind(this)), this.addEventListener("keydown", r(this, P, R).bind(this)), r(this, g, M).call(this, this.value);
  }
  setLabel(t) {
    n(this, x).innerHTML = t;
  }
}
f = new WeakMap(), k = new WeakMap(), y = new WeakMap(), E = new WeakMap(), x = new WeakMap(), v = new WeakMap(), B = new WeakSet(), H = function() {
  const t = (this.value - this.min) / (this.max - this.min) * 100;
  n(this, k).style.width = t + "%", n(this, y).style.left = "calc(" + t + "% - 6px)";
}, g = new WeakSet(), M = function(t) {
  var s;
  this.value = Math.min(Math.max(t, this.min), this.max), r(this, B, H).call(this), n(this, v).value = String(this.value), (s = this.onChange) == null || s.call(this, this.value, this);
}, L = new WeakSet(), I = function(t) {
  t.preventDefault();
  const s = n(this, f).getBoundingClientRect();
  let c = (t.pageX - s.left) / s.width * (this.max - this.min) + this.min;
  c = Math.round(c / this.step) * this.step, r(this, g, M).call(this, c);
}, A = new WeakSet(), F = function(t) {
  t.buttons === 1 && r(this, L, I).call(this, t);
}, P = new WeakSet(), R = function(t) {
  let s = this.value;
  t.key === "ArrowLeft" || t.key === "ArrowDown" ? s = Math.max(this.value - this.step, this.min) : (t.key === "ArrowRight" || t.key === "ArrowUp") && (s = Math.min(this.value + this.step, this.max)), r(this, g, M).call(this, s);
};
customElements.define("stx-slider", j);
var d, b, u, m, w, S, C, T;
class U extends HTMLElement {
  constructor({
    id: t,
    className: s,
    input: h
  }) {
    super();
    a(this, w);
    a(this, C);
    a(this, d, void 0);
    a(this, b, void 0);
    a(this, u, void 0);
    a(this, m, []);
    p(this, "onChange");
    l(this, u, h), s && (this.className = s), t && this.setAttribute("id", t);
  }
  connectedCallback() {
    this.setAttribute("tabindex", "0"), l(this, d, o("div", { class: "drop-box" }, this)), l(this, b, o("ul", { class: "file-list" }, this)), l(this, u, n(this, u) || o("input", { type: "hidden" }, this));
    const t = o("span", { class: "caption" }, n(this, d));
    t.textContent = "+ Drop files here or click to upload", n(this, d).addEventListener("click", () => {
      n(this, u).click();
    }), n(this, u).addEventListener("change", () => {
      r(this, w, S).call(this, n(this, u).files);
    }), n(this, d).addEventListener("dragover", (s) => {
      s.stopPropagation(), s.preventDefault(), n(this, d).classList.add("dragging-over");
    }), n(this, d).addEventListener("dragleave", (s) => {
      s.preventDefault(), n(this, d).classList.remove("dragging-over");
    }), n(this, d).addEventListener("drop", (s) => {
      s.preventDefault(), n(this, d).classList.remove("dragging-over"), s.dataTransfer && r(this, w, S).call(this, s.dataTransfer.files);
    });
  }
  get files() {
    return n(this, m);
  }
}
d = new WeakMap(), b = new WeakMap(), u = new WeakMap(), m = new WeakMap(), w = new WeakSet(), S = function(t) {
  l(this, m, n(this, m).concat([...t || []])), r(this, C, T).call(this);
}, C = new WeakSet(), T = function() {
  n(this, b).innerHTML = "", n(this, m).forEach((t) => {
    const s = o("li", {}, n(this, b)), h = o("div", { class: "file-info" }, s);
    o("span", { class: "file-image" }, h);
    const c = o("span", { class: "file-name" }, h);
    c.textContent = t.name, o("span", { class: "remove-button" }, h).addEventListener("click", () => {
      l(this, m, n(this, m).filter((_) => _ !== t)), r(this, C, T).call(this);
    });
  });
};
customElements.define("stx-uploader", U);
async function X(i) {
  try {
    await O("//js.hsforms.net/forms/embed/v2.js");
  } catch (e) {
    return console.error(e);
  }
  hbspt.forms.create({
    region: "na1",
    portalId: "4542168",
    formId: "36a7e3a5-18ec-4b4c-9589-e9018abca994",
    onBeforeFormSubmit: (e) => {
      const t = document.getElementById("upload_files");
      e.elements.upload_files.value = t.files;
    },
    onFormReady: (e) => {
      let t = e;
      e.jquery && (t = e[0]);
      const s = document.getElementById("hire_us-form-container");
      s == null || s.appendChild(t), i && i(t);
    }
  });
}
const z = function() {
  const i = document.getElementsByClassName(
    "hs_my_budget_is_100_000_or_more"
  )[0], e = i == null ? void 0 : i.getElementsByClassName("input")[0], t = new j({
    min: 50,
    max: 500,
    step: 10,
    value: 200,
    marks: ["50k", "500k"],
    input: e,
    className: "slider",
    onChange: (s, h) => {
      h.setLabel(`My budget is <em>&euro; ${s}K</em> or more`);
    }
  });
  e && e.after(t);
}, G = function() {
  const i = document.getElementsByClassName("hs_upload_files")[0], e = i == null ? void 0 : i.querySelector(
    'input[name="upload_files"'
  ), t = new U({
    input: e,
    className: "uploader",
    id: "upload_files"
  });
  e.style.display = "none", e && e.after(t);
}, J = () => {
  z(), G();
};
X(J);
