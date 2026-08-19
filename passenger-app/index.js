
let saveEl = document.getElementById("save-el")
let counter = document.getElementById("counter")
let count = 0

 function increment() {
         count += 1
         counter.innerText = count
 }


 function save (){
    let    countStr = count + " - "
        saveEl.textContent += countStr
        counter.textContent = 0
        count = 0
 }
