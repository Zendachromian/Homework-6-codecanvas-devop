// Select the screen element
const screen = document.querySelector(".screen");

// Add event listeners to buttons
const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(button => {
   button.addEventListener("click", () => {
       screen.textContent += button.textContent;
   });
});

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(button => {
   button.addEventListener("click", () => {
       screen.textContent += ` ${button.textContent} `;
   });
});

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
   screen.textContent = "";
});

const equalButton = document.querySelector(".equal-button");
equalButton.addEventListener("click", () => {
   screen.textContent = eval(screen.textContent);
});

const decimalButton = document.querySelector(".decimal-button");
decimalButton.addEventListener("click", () => {
   screen.textContent += ".";
});
