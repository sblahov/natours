const navCheck = document.querySelector(".navigation__checkbox");
const navLinks = document.querySelector(".navigation__nav");

navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  if (!e.target.classList.contains("navigation__link")) return;

  if (e.target.classList.contains("navigation__link")) {
    const id = e.target.getAttribute("href");

    navCheck.checked = false;
    console.log("unchecked");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
