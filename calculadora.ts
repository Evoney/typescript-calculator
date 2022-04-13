interface Values {
    firstNumber: number
    secondNumber: number
}

interface Operation {
    type: string 
    values: Values
}

class Calculadora  {

    handleOperation (Operation: Operation) {
        switch(Operation.type) {
            case 'somar':
                return this.somar(Operation.values)
                
            case 'subtrair':
                return this.subtrair(Operation.values)
                
            case 'multiplicar':
                return this.subtrair(Operation.values)
                
            case 'dividir':
                return this.subtrair(Operation.values)
            
            default:
                break    
        }
    }

    somar(values: Values) {
        return values.firstNumber + values.secondNumber
    }

    subtrair(values: Values) {
        return values.firstNumber - values.secondNumber
    }

    multiplicar(values: Values) {
        return values.firstNumber * values.secondNumber
    }

    dividir(values: Values) {
        return values.firstNumber / values.secondNumber
    }
}

const calculadora = new Calculadora()
