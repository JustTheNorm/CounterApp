//1. Create a new variable called 'total' and assign it the div with the id of 'total'
let total = document.querySelector(`#total`)

//2. Create Six Functions (add, subtract, multiplyBy2, divideby5, multiplyBy5, divideBy5)

// Example:
function add() {
    alert(`New Total: ${total.textContent = Number(total.textContent)+1}`)
    console.log(total.textContent)
}
function subtract() {
     alert(`New Total: ${total.textContent = Number(total.textContent)-1}`)
     console.log(total.textContent)
}
function multiplyBy2(){
    alert(`New Total: ${total.textContent = (Number(total.textContent)*2)}`)
    console.log(total.textContent)
}
function divideBy2(){
    alert(`New Total: ${total.textContent = (Number(total.textContent)/2)}`)
    console.log(total.textContent)
}
function multiplyBy5(){
    alert(`New Total: ${total.textContent = (Number(total.textContent)*5)}`)
    console.log(total.textContent)
}
function divideBy5(){
    alert(`New Total: ${total.textContent = (Number(total.textContent)/5)}`)
    console.log(total.textContent)
}


//3. Attach Functions to Buttons
let addBtn = document.querySelector(`#add`)
addBtn.addEventListener(`click`, add)

let subtractBtn = document.querySelector(`#subtract`)
subtractBtn.addEventListener(`click`, subtract)

let multiply2Btn = document.querySelector(`#mult-2`)
multiply2Btn.addEventListener(`click`, multiplyBy2)

let divide2Btn = document.querySelector(`#div-2`)
divide2Btn.addEventListener(`click`, divideBy2)

let multiply5Btn = document.querySelector(`#mult-5`)
multiply5Btn.addEventListener(`click`, multiplyBy5)

let divide5Btn = document.querySelector(`#div-5`)
divide5Btn.addEventListener(`click`, divideBy5)
