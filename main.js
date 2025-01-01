const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", function () {
  navbar.classList.add("active");
});

closeIcon.addEventListener("click", function () {
  navbar.classList.remove("active");
});
