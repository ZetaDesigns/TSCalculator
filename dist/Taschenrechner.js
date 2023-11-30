export var Operations;
(function (Operations) {
    Operations[Operations["Add"] = 0] = "Add";
    Operations[Operations["Subtract"] = 1] = "Subtract";
    Operations[Operations["Multiply"] = 2] = "Multiply";
    Operations[Operations["Divide"] = 3] = "Divide";
    Operations[Operations["Power"] = 4] = "Power";
    Operations[Operations["Faculty"] = 5] = "Faculty";
    Operations[Operations["Euler"] = 6] = "Euler";
    Operations[Operations["Prime"] = 7] = "Prime";
})(Operations || (Operations = {}));
export class Taschenrechner {
    addition(num1, num2) {
        return num1 + num2;
    }
    subtraction(num1, num2) {
        return num1 - num2;
    }
    multiplication(num1, num2) {
        return num1 * num2;
    }
    division(num1, num2) {
        return num1 / num2;
    }
    power(num1, num2) {
        let r = num1;
        for (let i = 0; i < num2; i++) {
            r *= num1;
        }
        return r;
    }
    calculate(num1, num2, operand) {
        switch (operand) {
            case Operations.Add:
                return this.addition(num1, num2);
            case Operations.Subtract:
                return this.subtraction(num1, num2);
            case Operations.Multiply:
                return this.multiplication(num1, num2);
            case Operations.Divide:
                return this.division(num1, num2);
            case Operations.Power:
                return this.power(num1, num2);
            default:
                return NaN;
        }
    }
}
//# sourceMappingURL=Taschenrechner.js.map