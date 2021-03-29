$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow:
      '<button class="slider-btn btn-prev"><img src="images/dest/slider/slider-btn-left.svg"></button>',
    nextArrow:
      '<button class="slider-btn btn-next"><img src="images/dest/slider/slider-btn-right.svg"></button>',
  });
});