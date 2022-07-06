const carousel = document.querySelector(".carousel")
const reviews = document.querySelectorAll(".review")


let idx = 0

function carousel() {
  idx++

  if (idx > reviews.length -1) {
    idx = 0
  }

  carousel.style.transform = `translateX(${-idx * 500}px)`
}

setInterval(carousel, 100)