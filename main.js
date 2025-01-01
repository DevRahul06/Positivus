const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");
const header = document.querySelector(".header")

menuIcon.addEventListener("click", function () {
  navbar.classList.add("active");
});

closeIcon.addEventListener("click", function () {
  navbar.classList.remove("active");
});

window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
        header.classList.add("scrolled")
    } else{
        header.classList.remove("scrolled")
    }
})


