
let par = document.getElementById ("paragraph")
let par2 = document.getElementById ("paragraph2")


let count = 0
let count2 = 0
function btn1 () {
  count = count + 1
  par.textContent = count

  console.log ("home-button+1Clicked")

}

function btn2 () {
  count = count + 2
  par.textContent = count
  
  console.log ("home-button+2Clicked")

}

function btn3 () {
  count = count + 3
  par.textContent = count
  
  console.log ("home-button+3Clicked")

}


function btn4 () {
  count2 = count2 + 1
  par2.textContent = count2
  
  console.log ("AWAY-button+1Clicked")

}
function btn5 () {
  count2 = count2 + 2
  par2.textContent = count2
  
  console.log ("AWAY-button+2Clicked")

}
function btn6 () {
  count2 = count2 + 3
  par2.textContent = count2
  
  console.log ("AWAY-button+3Clicked")

}

function resetButton () {
  
   count = 0
    count2 = 0
  
  par.textContent = count;
  par2.textContent = count2;
 
}
