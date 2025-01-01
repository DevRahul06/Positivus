$(document).ready(function () {
  $(".slider-main").slick({
    infinite: true,
    slidesToShow: 5,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Speed of autoplay (in ms)
    speed:1000,
    arrows: false, // Show navigation arrows
    dots: false, // Show dots navigation
    cssEase: 'linear',
  });
});
