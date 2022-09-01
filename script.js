class Calculator {
    constructor(preNumTextElement, curNumTextElement) {
        this.preNumTextElement = preNumTextElement
        this.curNumTextElement = curNumTextElement
        this.clear()
    }

    clear() {
        this.currentNumber = ''
        this.previousNumber = ''
        this.operation = undefined
    }

    updateNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentNumber === '') return
        if (this.previousNumber !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousNumber = this.currentNumber + ' ' + operation.toString()
        this.currentNumber = ''
    }

    signChange() {
        this.currentNumber = parseFloat(this.currentNumber) * -1
    }

    percent() {
        this.currentNumber = parseFloat(this.currentNumber) * 0.01
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousNumber)
        const current = parseFloat(this.currentNumber)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.currentNumber = computation
        this.operation = undefined
        this.previousNumber = ''
    }

    updateDisplay() {
        this.curNumTextElement.innerText = this.currentNumber
        this.preNumTextElement.innerText = this.previousNumber
    }
}


const numberBtns = document.querySelectorAll('[data-number]')
const operationBtns = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelector('[data-equals]')
const clearBtn = document.querySelector('[data-clear]')
const percentBtn = document.querySelector('[data-percent]')
const signChangeBtn = document.querySelector('[data-signChange]')
const preNumTextElement = document.querySelector('[data-previousNumber]')
const curNumTextElement = document.querySelector('[data-currentNumber]')

const calculator = new Calculator(preNumTextElement, curNumTextElement)

numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.updateNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

clearBtn.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
});

equalsBtn.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

signChangeBtn.addEventListener('click', () => {
    calculator.signChange()
    calculator.updateDisplay()
})

percentBtn.addEventListener('click', () => {
    calculator.percent()
    calculator.updateDisplay()
})