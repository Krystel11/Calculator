const button = document.getElementsByTagName("button");
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const buttonAc = document.getElementById("buttonAc");
const buttonPer = document.getElementById("buttonPer");
const buttonX = document.getElementById("buttonX");
const buttonDiv = document.getElementById("buttonDiv");
const buttonAdd = document.getElementById("buttonAdd");
const buttonMul = document.getElementById("buttonMul");
const buttonPoint = document.getElementById("buttonPoint");
const resultButton = document.getElementById("resultButton");
const calculator = document.getElementById("calculator");
const screen = document.getElementById("screen");

let number1;
let number2;
let operator="";
let array = [];
let tempNumber = "";
let num5 = "";
let myOperator;

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
function operate(num1, operator, num2) {
    let result;
    switch(operator){
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "X":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        case "%":
            result = percentage(num1, num2);
            break;
        default:
            result = "ERROR. Invalid operator";
    }
    screen.textContent = result;  
}

calculator.addEventListener("click", function(event){ 
    if(event.target.tagName === "BUTTON"){
        num5 = event.target.value;
        tempNumber += num5; 
        console.log(tempNumber);
        screen.textContent = tempNumber;
    }
    });

buttonAc.addEventListener("click", () =>{
    tempNumber = "";
    num5 = "";
    number1 = 0;
    operator = "";
    number2 = 0;
    array = [];
    screen.textContent = 0;
 });
 /*buttonPer.addEventListener("click", () =>{
    let numPercentage = Number(tempNumber) / 10;
    console.log(numPercentage);
    screen.textContent = numPercentage;
 });*/

 resultButton.addEventListener("click", function (){
    const operatorOptions =  /[X+\-\/]/;
    myOperator = tempNumber.match(operatorOptions);
    operator = myOperator ? myOperator.toString():'';
    array = tempNumber.split(operatorOptions);
    number1 = Number(array[0]);
    number2= Number(array[1]);
    operate(number1, operator, number2);
    });


















