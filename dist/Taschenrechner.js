export var Operations;
(function (Operations) {
    Operations[Operations["Add"] = 0] = "Add";
    Operations[Operations["Subtract"] = 1] = "Subtract";
    Operations[Operations["Multiply"] = 2] = "Multiply";
    Operations[Operations["Divide"] = 3] = "Divide";
    Operations[Operations["Power"] = 4] = "Power";
    Operations[Operations["Factorial"] = 5] = "Factorial";
    Operations[Operations["Euler"] = 6] = "Euler";
    Operations[Operations["Prime"] = 7] = "Prime";
})(Operations || (Operations = {}));
export class Calculator {
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
        if (num2 == 0)
            return NaN; // division by zero is not defined
        return num1 / num2;
    }
}
export class SciCalc extends Calculator {
    power(num1, num2) {
        if (num2 == 0)
            return 1; // zero power is 1
        if (num2 < 0) { // negative exponent: division
            num2 = this.multiplication(num2, -1);
            num1 = this.division(1, num1);
        }
        let r = num1;
        for (let i = 1; i < num2; i++) {
            r = this.multiplication(r, num1);
        }
        return r;
    }
    factor(n) {
        if (n === 0) {
            return 1;
        }
        else {
            return this.multiplication(n, this.factor(n - 1));
        }
    }
    euler(n) {
        let e = 0;
        for (let i = 0; i < n; i++) {
            e = this.addition(e, this.division(1, this.factor(i)));
        }
        return e;
    }
    prime(n) {
        let out = [];
        let index = 0;
        for (let j = 0; j < n; j++) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(j); i++) {
                if (j % i === 0)
                    isPrime = false;
            }
            if (isPrime && j > 1) {
                out[index] = j;
                index++;
            }
        }
        return out;
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
            case Operations.Factorial:
                return this.factor(num1);
            case Operations.Euler:
                return this.euler(num1);
            default:
                return NaN;
        }
    }
}
//# sourceMappingURL=Taschenrechner.js.map