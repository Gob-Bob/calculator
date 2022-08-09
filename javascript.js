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
let operateVarArray = [];

document.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        // If only numbers are pressed,
        //      If numArray[0] is NOT empty,
        //          clear the current output window
        //      add the number pressed into the output window
        // Else if any arithmetic button is pressed,
        //      If there already is an arithmetic operation stored in operateVarArray[0],
        //          current numbers in the output window will be pushed into numArray
        //          run the operating function for numArray[0] and numArray[1] using operateVarArray[0]
        //          output window should show the result
        //          the numArray should be cleared 
        //          operateVarArray should be cleared
        //          result of operation function should be pushed to numArray
        //          currently pressed arithmetic button should be pushed to operateVarArray
        //      Else if there is NOT an arithmetic operation stored in operateVarArray[0],
        //          current numbers in the output window will be pushed into numArray
        //          the arithmetic button pressed will be pushed into operateVarArray
        // Else if = is pressed,
        //      current number within the output window will be pushed into numArray
        //      run the operating function for numArray[0] and numArray[1] using operateVarArray[0]
        //      output window should show the result
        //      the numArray should be cleared 
        //      operateVarArray should be cleared
        // Else if Clear is pressed,
        //      the numArray should be cleared 
        //      operateVarArray should be cleared
        //      output window should be cleared
    })
});