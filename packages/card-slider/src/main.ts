import './style.scss';

const initCardSlider = () => {
  const slidePrevButton = document.getElementById('card-slider-prev-button')!;
  const slideNextButton = document.getElementById('card-slider-next-button')!;
  const slideList = document.getElementById('card-slider')!;
  const cards = slideList.getElementsByClassName('card-slider-item') as HTMLCollectionOf<HTMLDivElement>;

  let currentIndex = 0;

  const updateButtonStyles = () => {
    slidePrevButton.style.opacity = currentIndex > 0 ? "1" : "0.5";
    slideNextButton.style.opacity = currentIndex < cards.length - 1 ? "1" : "0.5";
    // Disable click when at bounds
    slidePrevButton.style.pointerEvents = currentIndex > 0 ? "auto" : "none";
    slideNextButton.style.pointerEvents = currentIndex < cards.length - 1 ? "auto" : "none";
  };

  slideNextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      const nextCard = cards[currentIndex];
      const delta = nextCard.offsetWidth + (nextCard.offsetLeft - cards[currentIndex - 1].offsetLeft - cards[currentIndex - 1].offsetWidth)
      slideList.scrollLeft += delta;
      updateButtonStyles();
    }
  });

  slidePrevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      const currentCard = cards[currentIndex];
      currentIndex--;
      const prevCard = cards[currentIndex];
      slideList.scrollLeft -= (currentCard.offsetLeft - prevCard.offsetLeft);
      updateButtonStyles();
    }
  });

  updateButtonStyles();
};

document.addEventListener('DOMContentLoaded', initCardSlider);
