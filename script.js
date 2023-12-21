// Select the screen element
const screen = document.querySelector(".screen");
let currentNumber = "";
let storedNumber = "";
let operator = "";
let decimalAdded = false;


let calculator = document.getElementById('calculator');

operators.forEach(operator => {
 operator.addEventListener('click', () => {
 calculator.dataset.firstValue = display.value;
 calculator.dataset.operator = operator.innerText;
 display.value = '';
 });
});

// Function to display a number on the screen
function displayNumber(number) {
   if (number === "." && decimalAdded) return;
   if (number === ".") decimalAdded = true;
   currentNumber += number;
   screen.textContent = currentNumber;
}

// Function to handle operator clicks
function handleOperator(op) {
   if (operator !== "") {
       storedNumber = eval(storedNumber + operator + currentNumber);
       currentNumber = "";
   } else {
       storedNumber = currentNumber;
       currentNumber = "";
   }
   operator = op;
   decimalAdded = false;
}

// Function to handle clear button click
function handleClear() {
   currentNumber = "";
   storedNumber = "";
   operator = "";
   decimalAdded = false;
   screen.textContent = "0";
}

// Function to handle equal button click
function handleEqual() {
   if (operator === "") return;
   if (currentNumber === "") {
       screen.textContent = storedNumber;
   } else {
       let result = eval(storedNumber + operator + currentNumber);
       screen.textContent = result;
       currentNumber = result.toString();
   }
   operator = "";
   decimalAdded = false;
}

// Add event listeners to buttons
const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => {
   button.addEventListener("click", () => {
       displayNumber(button.textContent);
   });
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => {
   button.addEventListener("click", () => {
       handleOperator(button.textContent);
   });
});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", handleClear);

const equalButton = document.querySelector(".equal-button");
equalButton.addEventListener("click", handleEqual);

const decimalButton = document.querySelector(".decimal-button");
decimalButton.addEventListener("click", () => {
   displayNumber(".");
});

