const clothesCarouselElement = document.querySelector("#clothesCarousel");
const gearCarouselElement = document.querySelector("#gearCarousel");
const waxCarouselElement = document.querySelector("#waxCarousel");

const clothes_carousel = new bootstrap.Carousel(clothesCarouselElement, {
  interval: 2500,
  touch: false,
});

const gear_carousel = new bootstrap.Carousel(gearCarouselElement, {
  interval: 2500,
  touch: false,
});

const wax_carousel = new bootstrap.Carousel(waxCarouselElement, {
  interval: 2500,
  touch: false,
});
