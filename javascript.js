const operators = document.querySelectorAll(".operator")
const numbers = document.querySelectorAll(".number")
const display = document.querySelector(".display")
const clear = document.querySelector("#clear")
const equal = document.querySelector("#equal")

operators.forEach(operator => operator.addEventListener("click", operatorFunc));
numbers.forEach(number => number.addEventListener("click", storeNumber));
clear.addEventListener("click", clearDisplay);
equal.addEventListener("click", equalFunc);

function clearDisplay(){
    storedNumber = 0;
    displayNumber = 0;
    display.innerHTML = displayNumber;
}


function equalFunc (){
    preRoundedNumber = 0;
    switch (operation) {
        case "plus":
            preRoundedNumber = Number(Number(storedNumber) + Number(display.innerHTML));
            break;
        case "minus":
            preRoundedNumber = Number(Number(storedNumber) - Number(display.innerHTML));
            break;
        case "multiply":
            preRoundedNumber = Number(Number(storedNumber) * Number(display.innerHTML));
            break;
        case "divide":
            preRoundedNumber = Number(Number(storedNumber) / Number(display.innerHTML));
            break;
    }
    roundedNumber = +preRoundedNumber.toFixed(2);

    if (roundedNumber.toString().length > 11) {
        display.innerHTML = "#ERROR";
        displayNumber = 0;
    }
    else {
        display.innerHTML = roundedNumber;
    }
}

let storedNumber = 0;
let operation = 0;
function operatorFunc(){
    storedNumber = display.innerHTML;
    displayNumber = 0;
    display.innerHTML = displayNumber;

    switch (this.id){
        case "plus":
            operation="plus";
            break; 
        case "minus":
            operation="minus";
            break; 
        case "multiply":
            operation="multiply";
            break; 
        case "divide":
            operation="divide";
            break; 
    }
}

displayNumber = 0;
function storeNumber(){
    let newNumber = 0
    newNumber = this.id;
    if (displayNumber.toString().length < 11){
        displayNumber = displayNumber + newNumber;
        displayNumber = Number(displayNumber);
        display.innerHTML = displayNumber;
    }
}



