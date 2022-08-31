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
        this.currentNumber = this.currentNumber + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.curNumTextElement.innerText = this.currentNumber
        console.log(this.currentNumber)
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
