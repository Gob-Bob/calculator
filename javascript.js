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

let firstStoredValue = "";
let results = "";

document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        if (item.innerHTML == "Clear") {
            outputWindow.textContent = "";
        } else if (item.innerHTML == "+") {
            // Store current output window value into a stored variable
            firstStoredValue = outputWindow.textContent;
            // Clear current output window
            outputWindow.textContent = "";
            console.log(firstStoredValue);
        } else if (item.innerHTML == "=") {
            // Add stored variable with current output value
            results = parseInt(firstStoredValue) + parseInt(outputWindow.textContent);
            // Clear old output window value
            // Return arithmetic results
            outputWindow.textContent = results;
        } else {
            outputWindow.textContent += item.innerHTML;
        }
    });
});

// Use the array reduce function to make mutiple calculations
// Answers with long decimals should be rounded
// Clicking = before entering all numbers should cause an error
// Dividing by 0 should return an error message