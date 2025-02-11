
const loading = document.getElementById("loading");

const loadingDuration = 2000; 

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);


window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggleIconId");
  const navMenuId = document.getElementById("nav-menuId");
  const navBtnId = document.getElementById("nav-btnId");

  menuToggle.addEventListener("click", () => {
    navMenuId.classList.toggle("active");
    navBtnId.classList.toggle("activeBtn");
  });
});


let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "./images/header/sun.svg";
  } else {
    this.firstElementChild.src = "./images/header/moon.svg";
  }
  document.body.classList.toggle("dark");
});


AOS.init();
