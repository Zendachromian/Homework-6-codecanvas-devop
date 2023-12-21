// Select the screen element
const screen = document.querySelector(".screen");
let currentNumber = "";
let storedNumber = "";
let operator = "";

// Function to display a number on the screen
function displayNumber(number) {
    currentNumber += number;
    screen.textContent = currentNumber;
}

// Function to handle operator clicks
function handleOperator(operator) {
    storedNumber = currentNumber;
    currentNumber = "";
    this.operator = operator;
}

// Function to handle clear button click
function handleClear() {
    currentNumber = "";
    storedNumber = "";
    operator = "";
    screen.textContent = "0";
}

// Function to handle equal button click
function handleEqual() {
    let result = 0;
    switch (operator) {
        case "+":
            result = parseFloat(storedNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(storedNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(storedNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(storedNumber) / parseFloat(currentNumber);
            break;
    }
    screen.textContent = result;
    currentNumber = result.toString();
    operator = "";
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
