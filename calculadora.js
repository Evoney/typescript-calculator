var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.handleOperation = function (Operation) {
        switch (Operation.type) {
            case 'somar':
                return this.somar(Operation.values);
            case 'subtrair':
                return this.subtrair(Operation.values);
            case 'multiplicar':
                return this.subtrair(Operation.values);
            case 'dividir':
                return this.subtrair(Operation.values);
            default:
                break;
        }
    };
    Calculadora.prototype.somar = function (values) {
        return values.firstNumber + values.secondNumber;
    };
    Calculadora.prototype.subtrair = function (values) {
        return values.firstNumber - values.secondNumber;
    };
    Calculadora.prototype.multiplicar = function (values) {
        return values.firstNumber * values.secondNumber;
    };
    Calculadora.prototype.dividir = function (values) {
        return values.firstNumber / values.secondNumber;
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
