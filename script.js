const button = document.getElementsByTagName("button");
const buttonAc = document.getElementById("buttonAc");
const buttonDel = document.getElementById("buttonDel");
const buttonPer = document.getElementById("buttonPer");
const buttonX = document.getElementById("buttonX");
const buttonDiv = document.getElementById("buttonDiv");
const buttonAdd = document.getElementById("buttonAdd");
const buttonMul = document.getElementById("buttonMul");
const buttonPoint = document.getElementById("buttonPoint");
const resultButton = document.getElementById("resultButton");
const calculator = document.getElementById("calculator");
const operatorButtons = document.getElementById("operatorButtons");
const screen = document.getElementById("screen");
const numbers = document.getElementById("numbers");

let number1 = "";
let number2 = "";
let operator= "";
let result="";

//Function for the operations
function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if (num2 === 0){
        return "ERROR. Cannot divide by zero";
    }else{
        return num1/num2;
    }
}
//Function to operate according to the entered operator
function operate(number1, operator, number2) {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "X":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return percentage(num1, num2);
        default:
            return "ERROR. Invalid operator";
    }  
}

// Capture the numbers event
numbers.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const value = event.target.value;
        if (operator) {
            if (screen.textContent === number1) {
                screen.textContent = value;
            } else {
                screen.textContent += value; 
            }
           number2 = screen.textContent; 
        } else {
            if (screen.textContent === "0") {
                screen.textContent = value; 
            } else {
                screen.textContent += value; 
            }
            number1 = screen.textContent; 
        }
    }
});

// Capture the clicked operator
operatorButtons.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const valueOperator = event.target.value;
        if (number1 && operator && number2) {
            result = operate(number1, operator, number2); 
            screen.textContent = result; 
            number1 = result.toString(); 
            number2 = "";
        }
        operator = valueOperator;
        console.log(`selected operator: ${operator}`);
    }
});

// Button Percentage
buttonPer.addEventListener("click", () => {
    if (operator) {  
        // operation with percentage (200 + 10%)
        if (number1 && number2) {
            number2 = (parseFloat(number1) * (parseFloat(number2) / 100)).toString();
            result = operate(number1, operator, number2); 
            screen.textContent = Number.isInteger(result) ? result : result.toFixed(2);
            number1 = result.toString(); 
            number2 = "";
            operator = "";
        }
    } else {  
        // Converts an integer to decimal (50% -> 0.5)
        if (number1) {
            number1 = (parseFloat(number1) / 100).toString();
            screen.textContent = Number.isInteger(parseFloat(number1)) ? number1 : parseFloat(number1).toFixed(2);
        }
    }
});

// Result button setting
resultButton.addEventListener("click", () => {
    console.log(number1);
    console.log(operator);
    console.log(number2);
    if (number1 && operator && number2) {
        result = operate(number1, operator, number2);
       if(typeof result === "string"){
        screen.textContent = result;
       }else if (Number.isInteger(result)){
        screen.textContent = result.toFixed(2);
       }else{
        screen.textContent = result;
       }
        number1 = result.toString(); 
        number2 = "";
        operator = ""; 
    }
});

//Del button: delete the last value
buttonDel.addEventListener("click", () => {
    if(screen.textContent.length === 1){
        screen.textContent = "0";
        number1 = "";
        number2 = "";
        operator= "";
        tempNumber = "";
        result= "";
    }else{
        screen.textContent = screen.textContent.slice(0, -1);
    }
});

//Ac button: delete all
buttonAc.addEventListener("click", () => {
    screen.textContent = "0";
    number1 = "";
    number2 = "";
    operator= "";
    tempNumber = "";
    result= "";
});













