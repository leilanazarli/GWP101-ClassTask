let menuIcon = document.querySelector("#menu-bar");
let mobileUl = document.querySelector("ul");

menuIcon.addEventListener("click", function () {
    mobileUl.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});