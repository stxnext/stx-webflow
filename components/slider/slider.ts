import { build } from '../helpers';

type ChangeCallback = (value: number, component: Slider) => void;

interface SliderOptions {
  min: number;
  max: number;
  step: number;
  value?: number;
  marks?: string[];
  className?: string;
  input?: HTMLInputElement;
  onChange?: ChangeCallback;
}

export default class Slider extends HTMLElement {
  #track: HTMLElement;
  #activePath: HTMLElement;
  #puller: HTMLElement;
  #marks: HTMLElement;
  #label: HTMLElement;
  #input: HTMLInputElement;

  public min: number;
  public max: number;
  public step: number;
  public value: number;
  public marks: string[];
  public onChange: ChangeCallback | undefined;

  constructor ({
    min,
    max,
    step,
    value,
    marks = [],
    className,
    input,
    onChange,
  }: SliderOptions) {
    super();

    this.min = min;
    this.max = max;
    this.step = step;
    this.value = value || min;
    this.marks = marks;
    this.onChange = onChange;

    this.#input = input!;

    if (className) {
      this.className = className;
    }
  }

  connectedCallback () {
    this.setAttribute('tabindex', '0');

    this.#label = build('div', { class: 'label' }, this);
    this.#track = build('div', { class: 'track' }, this);
    this.#activePath = build('div', { class: 'active-path' }, this.#track);
    this.#puller = build('div', { class: 'puller' }, this.#track);
    this.#marks = build('div', { class: 'marks' }, this);

    this.#input = this.#input || build('input', { type: 'hidden' }, this);

    for (const mark of this.marks) {
      const markElement = build('span', { class: 'mark' }, this.#marks);
      markElement.textContent = mark;
    }

    this.addEventListener('click', this.#handlePressEvent.bind(this));
    this.addEventListener('mousemove', this.#handleMouseMove.bind(this));
    this.addEventListener('keydown', this.#handleKeyDown.bind(this));

    this.#setValue(this.value);
  }

  #updateSlider () {
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.#activePath.style.width = percentage + '%';
    this.#puller.style.left = 'calc(' + percentage + '% - 6px)';
  }

  #setValue (newValue: number) {
    this.value = Math.min(Math.max(newValue, this.min), this.max);
    this.#updateSlider();
    this.#input.value = String(this.value);

    this.onChange?.(this.value, this);
  }

  #handlePressEvent (event: MouseEvent) {
    event.preventDefault();

    const trackRect = this.#track.getBoundingClientRect();
    const newPullerPosition = event.pageX - trackRect.left;
    let newValue =
      (newPullerPosition / trackRect.width) * (this.max - this.min) + this.min;
    newValue = Math.round(newValue / this.step) * this.step;

    this.#setValue(newValue);
  }

  #handleMouseMove (event: MouseEvent) {
    if (event.buttons === 1) {
      this.#handlePressEvent(event);
    }
  }

  #handleKeyDown (event: KeyboardEvent) {
    let newValue = this.value;

    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      newValue = Math.max(this.value - this.step, this.min);
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      newValue = Math.min(this.value + this.step, this.max);
    }

    this.#setValue(newValue);
  }

  setLabel (value: string) {
    this.#label.innerHTML = value;
  }
}
