let display = document.getElementById('display');
let digits = document.querySelectorAll('.digit');
let operators = document.querySelectorAll('.operator');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

digits.forEach(digit => {
 digit.addEventListener('click', () => {
   display.value += digit.innerText;
 });
});

operators.forEach(operator => {
 operator.addEventListener('click', () => {
   display.value += operator.innerText;
 });
});

clear.addEventListener('click', () => {
 display.value = '';
});

equals.addEventListener('click', () => {
 try {
   display.value = eval(display.value);
 } catch {
   display.value = 'Error';
 }
});
