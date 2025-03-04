const buttonAc = document.getElementById("buttonAc");
const buttonDel = document.getElementById("buttonDel");
const buttonPer = document.getElementById("buttonPer");
const operatorButtons = document.getElementById("operatorButtons");
const buttonPoint = document.getElementById("buttonPoint");
const resultButton = document.getElementById("resultButton");
const screen = document.getElementById("screen");
const numbers = document.getElementById("numbers");

let number1 = "";
let number2 = "";
let operator = "";
let result = "";
const MAX_SCREEN_LENGTH = 15; 

// Function for the operations
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        return "ERROR. Cannot divide by zero";
    } else {
        return num1 / num2;
    }
}

// Function to operate according to the entered operator
function operate(number1, operator, number2) {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "X":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "ERROR. Invalid operator";
    }
}

// Capture the numbers event
numbers.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const value = event.target.value;
        if (screen.textContent.length >= MAX_SCREEN_LENGTH) return; 
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
            result = parseFloat(result.toFixed(2));
            screen.textContent = result;
            number1 = result.toString();
            number2 = "";
        }
        operator = valueOperator;
        if (number1 && !number2) {
            screen.textContent = number1;
        } else {
            screen.textContent = "0";
        }
    }
});

// Button Percentage
buttonPer.addEventListener("click", () => {
    if(operator === "X"){
        result = (parseFloat(number1) * parseFloat(number2)) / 100;
    } else if (operator && number1 && number2) {
        number2 = parseFloat(number1) * (parseFloat(number2)/100);
        result = operate(parseFloat(number1), operator, number2);
    } else if (number1) {
        result = parseFloat(number1) / 100;
    }
    
    screen.textContent = isNaN(result) ? "ERROR" : result.toFixed(2);
    number1 = result;
    number2 = "";
    operator = "";
});

// Result button setting
resultButton.addEventListener("click", () => {
    if (operator && number2) {
        result = operate(parseFloat(number1), operator, parseFloat(number2));
        screen.textContent = result === "ERROR. Cannot divide by zero" ? result : result.toFixed(2);
        number1 = result;
        number2 = "";
        operator = "";
    }
});

// Del button: delete the last value
buttonDel.addEventListener("click", () => {
    if (screen.textContent.length === 1) {
        screen.textContent = "0";
        number1 = "";
        number2 = "";
        operator = "";
        result = "";
    } else {
        screen.textContent = screen.textContent.slice(0, -1);
    }
});

// Ac button: delete all
buttonAc.addEventListener("click", () => {
    screen.textContent = "0";
    number1 = "";
    number2 = "";
    operator = "";
    result = "";
});

// Button Point
buttonPoint.addEventListener("click", () => {
  if (screen.textContent.includes(".")) return;
  if (operator && screen.textContent === number1) {
      screen.textContent = "0.";
      number2 = "0.";
  } else if (!screen.textContent.includes(".")) {
      screen.textContent += ".";
      if (operator) {
          number2 = screen.textContent;
      } else {
          number1 = screen.textContent;
      }
  }
});












