// menu toggle
const menuToggle = document.querySelector("#menuToggle");
const body = document.querySelector("body");
console.log(menuToggle);
menuToggle.addEventListener("click", (e) => {
  console.log(e);
  console.log(body);
  e.preventDefault(); //畫面不重整
  body.classList.toggle("sidebar-toggled");
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example",
});
