export enum Operations {
    Add,
    Subtract,
    Multiply,
    Divide,
    Power,
    Faculty,
    Euler,
    Prime
}

export class Taschenrechner {
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
        return num1 / num2;
    }

    power(num1: number, num2: number): number {
        let r = num1;
        for (let i = 0; i < num2; i++) {
            r *= num1;
        }
        return r
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
            default:
                return NaN;
        }
    }
}