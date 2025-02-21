
function add(a, b) {
    return a + b;
} 

function subtract(a, b){
    return a - b;
} 

function multiply(a, b){
    return a * b; 
}  

function divide(a, b){
    if( b > 0) return a / b;
    return "lmao";
} 

let numOne = "";
let numTwo= "";
let operator = "";

function operate(operator, numOne, numTwo){
    numOne = parseInt(numOne);
    numTwo = parseInt(numTwo);
    switch(operator){
        case "+": 
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne,numTwo);
    } 
} 

function prepareOperation(event){
    let calcValueClicked = event.target.textContent

    if(calcValueClicked !== "Clear"){ 
        if (!isOperator(calcValueClicked)){
            if(operator === ""){
                numOne = numOne + calcValueClicked;
                updateDisplay(numOne);
            } else{
                numTwo = numTwo + calcValueClicked;
                updateDisplay(numTwo);
            } 
        } else {
            if(calcValueClicked === "="){
                updateDisplay(operate(operator, numOne, numTwo));
            }  else if (numOne !== "" && numTwo !== ""){
                let tmpResult = operate(operator, numOne, numTwo);
                console.log(tmpResult);
                numOne = tmpResult;
                numTwo = "";
                operator = calcValueClicked;
                updateDisplay(tmpResult);
            } else operator = calcValueClicked
        } 
    } 
}


function isOperator(btnClicked){
    const operators =["/", "*", "-", "+", "="];
    return operators.includes(btnClicked);
} 

function clearAndResetDisplay(){
    numOne = "";
    numTwo= "";
    operator = "";
    updateDisplay("");
} 


const displayDiv = document.querySelector(".display");

function updateDisplay(value){
    displayDiv.textContent = value;
} 


const inpuDiv = document.querySelector(".input-container");

inpuDiv.addEventListener("click", prepareOperation);


const clear = document.querySelector(".btnClear");

clear.addEventListener("click", clearAndResetDisplay);
