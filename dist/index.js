import { Operations, Taschenrechner } from "./Taschenrechner.js";
let calc = new Taschenrechner();
document.addEventListener("DOMContentLoaded", function () {
    const inputNum1 = document.getElementById("num1");
    const inputNum2 = document.getElementById("num2");
    const addButton = document.getElementById("addButton");
    const subButton = document.getElementById("subButton");
    const mulButton = document.getElementById("mulButton");
    const divButton = document.getElementById("divButton");
    addButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Add);
    });
    subButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Subtract);
    });
    mulButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Multiply);
    });
    divButton.addEventListener("click", function () {
        processInput(inputNum1.valueAsNumber, inputNum2.valueAsNumber, Operations.Divide);
    });
});
function processInput(num1, num2, operand) {
    let outputDiv = document.getElementById("output");
    if (validateInputs(num1, num2)) {
        let result = calc.calculate(num1, num2, operand);
        outputDiv.innerHTML = result.toString();
    }
    else {
        outputDiv.innerHTML = "Invalid Input";
    }
}
function validateInputs(num1, num2) {
    return !isNaN(num1) && !isNaN(num2);
}
//# sourceMappingURL=index.js.map