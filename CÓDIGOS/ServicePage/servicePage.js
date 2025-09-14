const btnHamburguer = document.getElementById("hamburguer");
const icon = document.getElementById("hamburguer-icon");
const navList = document.getElementById("nav-list");

btnHamburguer.addEventListener("click", () => {
  navList.classList.toggle("show");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});