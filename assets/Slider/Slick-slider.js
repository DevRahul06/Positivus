$(document).ready(function () {
  $(".slider-main").slick({
    infinite: true,
    slidesToShow: 5,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Speed of autoplay (in ms)
    speed: 3000,
    arrows: false, // Show navigation arrows
    dots: false, // Show dots navigation
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
