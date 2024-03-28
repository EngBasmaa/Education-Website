let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
  // to convert into 'another icon'
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
