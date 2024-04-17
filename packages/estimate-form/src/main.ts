import './style.scss';
import Slider from 'components/slider';

let intervalId: number;

const addSlider = function () {
  const sliderField = document.getElementsByClassName(
    'hs_my_budget_is_100_000_or_more',
  )[0];
  const sliderInput = sliderField?.getElementsByClassName('input')[0];

  const slider = new Slider({
    min: 50,
    max: 500,
    step: 10,
    value: 200,
    marks: ['50k', '500k'],
    input: sliderInput as HTMLInputElement,
    className: 'slider',
    onChange: (value: number, component: Slider) => {
      component.setLabel(`My budget is <em>&euro; ${value}K</em> or more`);
    },
  });

  if (sliderInput) {
    sliderInput.after(slider);
  }
};

const checkForm = function () {
  const form = document.querySelector('form');

  if (form) {
    addSlider();
    clearInterval(intervalId);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  intervalId = setInterval(() => {
    checkForm();
  }, 100);
});
