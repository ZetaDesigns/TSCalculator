import {Operations, SciCalc} from "./Taschenrechner.js";

let calc = new SciCalc();

document.addEventListener("DOMContentLoaded", function () { // make sure needed HTML elements have been loaded
    const inputNum1 = document.getElementById("num1") as HTMLInputElement;
    const inputNum2 = document.getElementById("num2") as HTMLInputElement;

    const addButton = document.getElementById("addButton") as HTMLButtonElement;
    const subButton = document.getElementById("subButton") as HTMLButtonElement;
    const mulButton = document.getElementById("mulButton") as HTMLButtonElement;
    const divButton = document.getElementById("divButton") as HTMLButtonElement;

    const powButton = document.getElementById("powButton") as HTMLButtonElement;
    const eulButton = document.getElementById("eulButton") as HTMLButtonElement;
    const facButton = document.getElementById("facButton") as HTMLButtonElement;
    const primeButton = document.getElementById("primeButton") as HTMLButtonElement;

    // Button EventListener function sends the input numbers and the chosen operand to the processInput() function
    addButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Add)
    })
    subButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Subtract)
    })
    mulButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Multiply)
    })
    divButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Divide)
    })
    powButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Power)
    })
    eulButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Euler)
    })
    facButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Factorial)
    })
    primeButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Prime)
    })
});

// This function executes the given operand with the calc object and prints the output to the output div
function processInput(num1: number, num2: number, operand: number) {
    let outputDiv = document.getElementById("output") as HTMLDivElement;

    if (validateInputs(num1, num2) || (operand > Operations.Power && validateInputs(num1))) { // the second condition only validates the first number, since operations after power only take one input
        if(operand == Operations.Prime) {
            outputDiv.innerHTML = calc.prime(num1).toString();
        } else {
            outputDiv.innerHTML = calc.calculate(num1, num2, operand).toString();
        }
    } else {
        outputDiv.innerHTML = "Invalid Input";
    }
}

// If given the inputs are not valid numbers, we don't calculate
function validateInputs(num1: number, num2 = 0): boolean {
    return !isNaN(num1) && !isNaN(num2)
}
