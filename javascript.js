// Add function
const add = (a, b) => a + b;
// Subtract function
const subtract = (a, b) => a - b;
// Multiply function
const multiply = (a, b) => a * b;
// Divide function
const divide = (a, b) => a / b;

// Operate function that takes 2 numbers and calls one of the above functions
const operate = (a, b, arithmetic) => {
    return arithmetic(a, b);
};
const outputWindow = document.querySelector('.output.container');
outputWindow.textContent = operate(1, 3, subtract);

// Use the array reduce function to make mutiple calculations
// Answers with long decimals should be rounded
// Clicking = before entering all numbers should cause an error
// Dividing by 0 should return an error message