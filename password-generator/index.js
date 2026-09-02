let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","[","}","]",",","|",":",";","<",">", ".","?","/"]
let letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","[","}","]",",","|",":",";","<",">", ".","?","/"]
let buttonEl = document.getElementById("btn")
let displayEl1 =document.getElementById("left-rectangle")
let displayEl2 =document.getElementById("right-rectangle")
let displayEl3 =document.getElementById("first-rectangle")
let displayEl4 =document.getElementById("second-rectangle")
let currentType = "characters";

function selectType(type) {
  currentType = type;
  
  toggleOptions();
}
function generatePasswords() {
  let generatedPass = "";
  
  if (currentType === "letters") {
    generatedPass = getPassword2();
  } else if (currentType === "numbers") {
    generatedPass = getPassword3();
  } else if (currentType === "symbols") {
    generatedPass = getPassword4();
  } else if (currentType === "characters") {
    generatedPass = getPassword();
  }

  if (displayEl1) { displayEl1.textContent = generatedPass; }
  if (displayEl2) { displayEl2.textContent = generatedPass; }
  if (displayEl3) { displayEl3.textContent = generatedPass; }
  if (displayEl4) { displayEl4.textContent = generatedPass; }
}

  


function copyOnClick(event) {
  navigator.clipboard.writeText(event.target.textContent)
}

function getPassword2() {
  let password = ""
  for (let i = 0; i < 15; i++) {
   let randomIndex = Math.floor(Math.random() * letters.length)
     password += letters[randomIndex]
  console.log( "start")
  }
return password
}
function getPassword3() {
  let password = ""
  for (let i = 0; i < 15; i++) {
   let randomIndex = Math.floor(Math.random() * numbers.length)
     password += numbers[randomIndex]
  console.log( "start")
  }
return password
}
function getPassword4() {
  let password = ""
  for (let i = 0; i < 15; i++) {
   let randomIndex = Math.floor(Math.random() * symbols.length)
     password += symbols[randomIndex]
  console.log( "start")
  }
return password
}

function getPassword() {
  let password = ""
  for (let i = 0; i < 15; i++) {
   let randomIndex = Math.floor(Math.random() * characters.length)
     password += characters[randomIndex]
  console.log( "start")
  }
return password
}

function toggleOptions() {
  let selectGroup = document.getElementById("select-group");
  if (selectGroup) {
    selectGroup.classList.toggle("hidden");
  } 
}




displayEl1.addEventListener('click', copyOnClick)
displayEl2.addEventListener('click', copyOnClick)
displayEl3.addEventListener('click', copyOnClick)
displayEl4.addEventListener('click', copyOnClick)


buttonEl.addEventListener('click', generatePasswords)