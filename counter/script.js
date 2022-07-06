const num = document.querySelector(".num")
const btnDecrease = document.querySelector(".decrease")
const btnReset = document.querySelector(".reset")
const btnIncrease = document.querySelector(".increase")
let counter = 0

function increase() {
  counter++
  num.innerHTML = counter
}

function reset() {
  counter = 0
  num.innerHTML = counter
}

function decrease() {
  if (counter <= 0) {
    reset()
  } else {
    counter--
    num.innerHTML = counter
  }
}

btnDecrease.addEventListener('click', decrease)
btnReset.addEventListener('click', reset)
btnIncrease.addEventListener('click', increase)
