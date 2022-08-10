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
};

const convertNumStringToNum = num => {
    return parseInt(num);
};

// Operate function that takes 2 numbers and calls one of the above functions
const operate = (a, b, arithmetic) => {
    return arithmetic(a, b);
};
const outputWindow = document.querySelector('.output.container');
let numArray = [];
let operateVarArray = [];
let mustClear = false;

document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        let buttonContent = item.innerHTML;
        // If only numbers are pressed,
        if (isNaN(buttonContent) == false) {
            // If mustClear condition is true then clear
            if (mustClear == true) {
                outputWindow.textContent = "";
                // set mustClear back to false
                mustClear = false;
            }
            // add the number pressed into the output window
            outputWindow.textContent += buttonContent;
        // Else if = is pressed,
        } else if (buttonContent == "=") {
        // If operateVarArray is empty,
            if (operateVarArray.length == 0) {
                // do nothing
                ;
            // Otherwise,
            } else {
                // current number within the output window will be pushed into numArray
                numArray.push(outputWindow.textContent);
                // run the operating function for numArray[0] and numArray[1] using operateVarArray[0]
                // output window should show the result
                outputWindow.textContent = operate(parseInt(numArray[0]), parseInt(numArray[1]), convertOperation(operateVarArray[0]))
                // the numArray should be cleared 
                numArray = [];
                // operateVarArray should be cleared
                operateVarArray = [];
            }
        // Else if Clear is pressed,
        } else if (buttonContent == "Clear") {
            // the numArray should be cleared 
            numArray = [];
            // operateVarArray should be cleared
            operateVarArray = [];
            // output window should be cleared
            outputWindow.textContent = "";
        // Else if any arithmetic button is pressed,
        } else {
            // If there already is an arithmetic operation stored in operateVarArray[0],
            if (operateVarArray.length != 0) {
                // current numbers in the output window will be pushed into numArray
                numArray.push(outputWindow.textContent);
                // run the operating function for numArray[0] and numArray[1] using operateVarArray[0]
                results = operate(parseInt(numArray[0]), parseInt(numArray[1]), convertOperation(operateVarArray[0]))
                // output window should show the result
                outputWindow.textContent = results;
                // the numArray should be cleared 
                numArray = [];
                // operateVarArray should be cleared
                operateVarArray = [];
                // result of operation function should be pushed to numArray
                numArray.push(results);
                // currently pressed arithmetic button should be pushed to operateVarArray
                operateVarArray.push(buttonContent);
            // Else if there is NOT an arithmetic operation stored in operateVarArray[0],
            } else {
                // current numbers in the output window will be pushed into numArray
                numArray.push(outputWindow.textContent);
                // the arithmetic button pressed will be pushed into operateVarArray
                operateVarArray.push(buttonContent);
                // set condition that next numbers put in must clear current output window
                mustClear = true;
            }
        }
    })
});