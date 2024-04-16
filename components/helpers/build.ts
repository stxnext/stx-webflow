type BuildAttributes = Record<string, string>;

export default function build (
  tagName: string,
  attributes?: BuildAttributes,
  parent?: HTMLElement,
) {
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
