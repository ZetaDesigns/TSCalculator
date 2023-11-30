import {Operations, Taschenrechner} from "./Taschenrechner.js";

let calc = new Taschenrechner();

document.addEventListener("DOMContentLoaded", function () {
    const inputNum1 = document.getElementById("num1") as HTMLInputElement;
    const inputNum2 = document.getElementById("num2") as HTMLInputElement;

    const addButton = document.getElementById("addButton") as HTMLButtonElement;
    const subButton = document.getElementById("subButton") as HTMLButtonElement;
    const mulButton = document.getElementById("mulButton") as HTMLButtonElement;
    const divButton = document.getElementById("divButton") as HTMLButtonElement;

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
});

function processInput(num1: number, num2: number, operand: number) {
    let outputDiv = document.getElementById("output") as HTMLDivElement;

    if (validateInputs(num1, num2)) {
        let result: number = calc.calculate(num1, num2, operand);
        outputDiv.innerHTML = result.toString();
    } else {
        outputDiv.innerHTML = "Invalid Input";
    }
}

function validateInputs(num1: number, num2: number): boolean {
    return !isNaN(num1) && !isNaN(num2)
}
