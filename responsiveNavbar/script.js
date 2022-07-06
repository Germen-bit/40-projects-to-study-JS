const list = document.querySelector(".list")
const navBtn = document.querySelector(".hamburguer")

navBtn.addEventListener("click", toggleNav)

function toggleNav() {
  list.classList.toggle("active")
}