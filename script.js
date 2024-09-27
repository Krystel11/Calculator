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
    }
    return num1/num2;
}
//Step 3 function operate
function operate(num1, num2, operator){
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "ERROR. Invalid operator";
    }
}
//Step 5 functions that populate the display when you click the number button.
function addToScreen(value){
   const screen = document.querySelector('.screen');
   screen.textContent = `${value}`;
}
let number1;
let operator;
let number2;








