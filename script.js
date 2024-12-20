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
let tempNumber = "";
let result;
let array = [];

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
function percentage(num1, num2){
    return (num1 * (num2/100));
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
//Capture the clicked buttons
numbers.addEventListener("click", function(event){
    if(event.target.tagName === 'BUTTON'){ 
        let value = event.target.value; 
        if (!isNaN(value)) { 
            tempNumber = value; 
        if(screen.textContent === "0"){
            screen.textContent = tempNumber; 
        }else {
            screen.textContent += tempNumber;
        }
    }else{
        operator = value;
        screen.textContent  += " "+operator+" ";
        }
    }
    });
    
/*numbers.addEventListener("click", function(event){
    const operatorOptions = /[X+\-\/%]/;
    if(operatorOptions.test(event.target.value)){
        operator = event.target.value;
        screen.textContent = tempNumber +' '+operator;
        if(number1 === null){
            number1 = parseFloat(tempNumber);
            tempNumber = "";
        }else if(number1 !== null && tempNumber !== ""){
            number2 = parseFloat(tempNumber);
            result = operate(number1, operator, number2);
            screen.textContent = number1+' '+operator+' '+number2;
            number1 = result;
            tempNumber = "";
        } 
    }
});*/

//Del button: delete the last value
buttonDel.addEventListener("click", () => {
    if(screen.textContent.length === 1){
        screen.textContent = "0";
        number1 = "";
        number2 = "";
        operator= "";
        tempNumber = "";
        result= "";
        array = [];
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
    array = [];
});

//Result button setting 
resultButton.addEventListener("click", () =>{
    let operation = screen.textContent;
    const operatorOptions =  /[X+\-\/]/;
    const percentageButton = /[%]/;
    let myOperator = "";

    if (operation.match(percentageButton)){
        myOperator = "%";
    }else{
        myOperator = operation.match(operatorOptions); //This is an array
    }
    operator = myOperator ? myOperator.toString() : ''; //overwriting a variable :/ and convert myOperator to a variable string
    array = operation.split(operatorOptions);
    number1 = array[0];
    number2= array[1];
    result = operate(number1, operator, number2);

    if(typeof result === "string"){
        screen.textContent = result;
    }else if(Number.isInteger(result)){
        screen.textContent = result;
    }else{
        screen.textContent = result.toFixed(2);
    } 
});












