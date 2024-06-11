import { build } from '../helpers';

type ChangeCallback = (value: number, component: Uploader) => void;

interface UploaderOptions {
  id?: string;
  className?: string;
  input?: HTMLInputElement;
}

export default class Uploader extends HTMLElement {
  #dropBox: HTMLElement;
  #fileList: HTMLElement;
  #input: HTMLInputElement;
  #files: File[] = [];

  public onChange: ChangeCallback | undefined;

  constructor ({
    id,
    className,
    input,
  }: UploaderOptions) {
    super();

    this.#input = input!;

    if (className) {
      this.className = className;
    }

    if (id) {
      this.setAttribute('id', id);
    }
  }

  connectedCallback () {
    setTimeout(this.#render.bind(this), 100);
  }

  #render() {
    this.setAttribute('tabindex', '0');

    this.#dropBox = build('div', { class: 'drop-box' }, this);
    this.#fileList = build('ul', { class: 'file-list' }, this);
    this.#input = this.#input || build('input', { type: 'hidden' }, this);

    const caption = build('span', { class: 'caption' }, this.#dropBox);
    caption.textContent = '+ Drop files here or click to upload';

    this.#dropBox.addEventListener('click', () => { this.#input.click(); });

    this.#input.addEventListener('change', () => {
      this.#handleFiles(this.#input.files);
    });

    this.#dropBox.addEventListener('dragover', (event: MouseEvent) => {
      event.stopPropagation();
      event.preventDefault();

      this.#dropBox.classList.add('dragging-over');
    });

    this.#dropBox.addEventListener('dragleave', (event: MouseEvent) => {
      event.preventDefault();

      this.#dropBox.classList.remove('dragging-over');
    });

    this.#dropBox.addEventListener('drop', (event: DragEvent) => {
      event.preventDefault();

      this.#dropBox.classList.remove('dragging-over');
      event.dataTransfer && this.#handleFiles(event.dataTransfer.files);
    });
  }

  #handleFiles (newFiles: FileList | null) {
    this.#files = this.#files.concat([...newFiles || []]);
    this.#updateFileList();
  }

  #updateFileList () {
    this.#fileList.innerHTML = '';
    this.#files.forEach((file) => {
      const item = build('li', {}, this.#fileList);
      const fileInfoContainer = build('div', { class: 'file-info' }, item);

      build('span', { class: 'file-image' }, fileInfoContainer);

      const label = build('span', { class: 'file-name' }, fileInfoContainer);
      label.textContent = file.name;

      const removeButton = build('span', { class: 'remove-button' }, fileInfoContainer);
      removeButton.addEventListener('click', () => {
        this.#files = this.#files.filter((f) => f !== file);
        this.#updateFileList();
      });
    });
  }

  get files() {
    return this.#files;
  }
}
