let errorMessage = document.getElementById ("error")
let errorMes =  "Something went wrong, please try again"

console.log (errorMessage)

function purchase () {
  console.log ("buttonClicked")
  errorMessage.textContent = errorMes
}



let addEl = document.getElementById ("addBtn")
let subtractEl= document.getElementById ("subtractBtn")
let divideEl = document.getElementById ("divideBtn")
let multiplyEl = document.getElementById ("multiplyBtn")
let sumEl = document.getElementById ("sum-el")


let num1 = 8
let num2 = 2
let sum = num1 + num2
let das = "Sum: "


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
  let suml = das  + sum

  
  sumEl.textContent = suml
}

function subtract() {
  let resultl = num1 - num2
  let subtractl = das + resultl

  sumEl.textContent = subtractl
}

function divide() {
  let resultl = num1 / num2
  dividel = das + resultl

  sumEl.textContent = dividel
}
function multiply() {
  let resultll  = num1 * num2
  multiplyl = das + resultll
  sumEl.textContent = multiplyl
}

