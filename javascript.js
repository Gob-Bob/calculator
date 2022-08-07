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
let numArray = [];
let firstOperatingVariable;
let secondOperatingVariable;

document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        let buttonContent = item.innerHTML;
        if (isNaN(buttonContent) && buttonContent != "=" && buttonContent != "Clear") {
            numArray.push(outputWindow.textContent);
            outputWindow.textContent = "";
            if (numArray.length == 1) {
                firstOperatingVariable = buttonContent;
                outputWindow.textContent = "";
            } else if (numArray.length == 2) {
                outputWindow.textContent = operate(parseInt(numArray[0]), parseInt(numArray[1]), convertOperation(firstOperatingVariable))
                secondOperatingVariable = buttonContent;
                result = outputWindow.textContent;
                outputWindow.textContent = ""
                numArray = [];
                console.log(numArray.push(result));
            }
        } else if (buttonContent == "=") {
            numArray.push(outputWindow.textContent);
            outputWindow.textContent = operate(parseInt(numArray[0]), parseInt(numArray[1]), convertOperation(secondOperatingVariable));
        } else if (buttonContent == "Clear") {
            outputWindow.textContent = "";
            numArray = [];
        } else {
            outputWindow.textContent += buttonContent;
        }
        console.log(numArray);
    });
});

// Use the array reduce function to make mutiple calculations
// Answers with long decimals should be rounded
// Clicking = before entering all numbers should cause an error
// Dividing by 0 should return an error message