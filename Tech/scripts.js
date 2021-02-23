/* */
const goodies = document.querySelectorAll(".goodies-options li");
var current_goodie = document.querySelector("div.cakes");
var current_clicked = document.querySelector("li.cakes");
var change_goodie = current_goodie.classList;
var next_goodie = null;

function switch_pics() {
  console.log(this);
  current_clicked.classList.remove("clicked");
  this.classList.add("clicked");
  change_goodie = this.classList;
  current_clicked = this;
  current_goodie.classList.add("hide");
  next_goodie = document.querySelector("div." + change_goodie.item(0));
  current_goodie = next_goodie;
  next_goodie.classList.remove("hide");
}

const nav = document.querySelectorAll(".nav-options li a");
const nav_height = document.querySelector(".nav").offsetHeight;
var current_loc = document.querySelector(".home");
var next_loc = null;

function pageScroll() {
  current_loc = this.classList;
  next_loc = document.getElementById(current_loc);
  window.scrollTo({
    top: next_loc.offsetTop - nav_height,
    behavior: "smooth",
  });
}

goodies.forEach((a) => {
  a.addEventListener("click", switch_pics);
});

nav.forEach((a) => {
  a.addEventListener("click", pageScroll);
});
