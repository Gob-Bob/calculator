// Add function
const add = (a, b) => a + b;
// Subtract function
const subtract = (a, b) => a - b;
// Multiply function
const multiply = (a, b) => a * b;
// Divide function
const divide = (a, b) => a / b;

const convertOperation = operation => {
    if (operation == "+") {
        return add;
    } else if (operation == "-") {
        return subtract;
    } else if (operation == "*") {
        return multiply;
    } else if (operation == "/") {
        return divide;
    }
}

const convertNumStringToNum = num => {
    return parseInt(num);
}

// Operate function that takes 2 numbers and calls one of the above functions
const operate = (a, b, arithmetic) => {
    return arithmetic(a, b);
};
const outputWindow = document.querySelector('.output.container');
let firstStoredVariable;
let secondStoredVariable;
let operatingVariable;

document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        let buttonContent = item.innerHTML;
        if (isNaN(buttonContent) && buttonContent != "=") {
            firstStoredVariable = outputWindow.textContent;
            operatingVariable = buttonContent;
            outputWindow.textContent = "";
        } else if (buttonContent == "=") {
            secondStoredVariable = outputWindow.textContent;
            outputWindow.textContent = operate(parseInt(firstStoredVariable), parseInt(secondStoredVariable), convertOperation(operatingVariable));
        } else if (buttonContent == "Clear") {
            outputWindow.textContent = "";
        } else {
            outputWindow.textContent += buttonContent;
        }
        console.log(outputWindow.textContent);
    });
});

// Use the array reduce function to make mutiple calculations
// Answers with long decimals should be rounded
// Clicking = before entering all numbers should cause an error
// Dividing by 0 should return an error message