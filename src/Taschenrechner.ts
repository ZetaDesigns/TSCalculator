export enum Operations {
    Add,
    Subtract,
    Multiply,
    Divide,
    Power,
    Factorial,
    Euler,
    Prime
}

export class Calculator {
    addition(num1: number, num2: number): number {
        return num1 + num2;
    }

    subtraction(num1: number, num2: number): number {
        return num1 - num2;
    }

    multiplication(num1: number, num2: number): number {
        return num1 * num2;
    }

    division(num1: number, num2: number): number {
        if (num2 == 0) return NaN; // division by zero is not defined
        return num1 / num2;
    }
}

export class SciCalc extends Calculator {
    power(num1: number, num2: number): number {
        if (num2 == 0) return 1; // zero power is 1
        if (num2 < 0) { // negative exponent: division
            num2 = this.multiplication(num2, -1);
            num1 = this.division(1, num1);
        }
        let r = num1;
        for (let i = 1; i < num2; i++) {
            r = this.multiplication(r, num1);
        }
        return r
    }

    factor(n: number): number {
        if (n === 0) {
            return 1
        } else {
            return this.multiplication(n, this.factor(n - 1))
        }
    }

    euler(n: number): number {
        let e = 0;
        for (let i = 0; i < n; i++) {
            e = this.addition(e, this.division(1, this.factor(i)));
        }
        return e;
    }

    prime(n: number): number[] {
        let out: number[] = [];
        let index = 0;
        for (let j = 0; j < n; j++) {
            let isPrime = true;
            for (let i = 2; i <= Math.sqrt(j); i++) {
                if (j % i === 0) isPrime = false;
            }
            if (isPrime && j > 1) {
                out[index] = j;
                index++;
            }
        }
        return out;
    }

    calculate(num1: number, num2: number, operand: number): number {
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