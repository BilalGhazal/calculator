const digits = document.querySelectorAll(".operand");
const display = document.querySelector(".screen");
const clear = document.querySelector(".clear");
const sign = document.querySelectorAll(".operator");
const negate = document.querySelector(".negate");
const percent = document.querySelector(".percent");


let firstOperand = "";
let secondOperand = "";
let operator = "";



sign.forEach(element => {element.addEventListener("click", () => {
    
    if (firstOperand && secondOperand && operator != "=") {
        firstOperand = operate(firstOperand, secondOperand, operator);
        if (!Number.isInteger(Number(firstOperand))) {
            firstOperand = ((Math.round(Number(firstOperand) * 10000))/10000).toString();
        }
        secondOperand = "";
        operator = "";
        updateDisplay(firstOperand);
    }


    if (operator === element.textContent) {
        return;
    }

    if (firstOperand && element.textContent != "=") {
        operator = element.textContent;
        console.log(operator);
    }

    

}
)})


digits.forEach(element => {element.addEventListener("click", () => {

    if (!operator) {
        if (firstOperand.length >= 9) return;

        if (element.textContent === "." && firstOperand.includes(".")) return;
        firstOperand += element.textContent;
        updateDisplay(firstOperand);
    }

    if (operator) {
        if (secondOperand.length >= 9) return;
        if (element.textContent === "." && secondOperand.includes(".")) return;
        secondOperand += element.textContent;
        updateDisplay(secondOperand);
    }
}
)})

clear.addEventListener("click", () => {
    display.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    operator = "";
})


negate.addEventListener("click", () => {
    if (display.textContent === firstOperand) {
        firstOperand = (Number(firstOperand) * -1).toString();
        updateDisplay(firstOperand);
    }

    if (display.textContent === secondOperand) {
        secondOperand = (Number(secondOperand) * -1).toString();
        updateDisplay(secondOperand);
    }
})


percent.addEventListener("click", () => {
    if (display.textContent === firstOperand) {
        firstOperand = (Number(firstOperand) / 100).toString();
        updateDisplay(firstOperand);
    }

    if (display.textContent === secondOperand) {
        secondOperand = (Number(secondOperand) / 100).toString();
        updateDisplay(secondOperand);
    }
})



function updateDisplay(input) {
    if (display.textContent === "0") {
        display.textContent = "";
    }

    display.textContent = input;
}



function add(firstOperand, secondOperand) {
    return (Number(firstOperand) + Number(secondOperand)).toString();
}

function subtract(firstOperand, secondOperand) {
    return (Number(firstOperand) - Number(secondOperand)).toString();
}

function multiply(firstOperand, secondOperand) {
    return (Number(firstOperand) * Number(secondOperand)).toString();
} 

function divide(firstOperand, secondOperand) {
    if (secondOperand === "0") return "ERROR";
    return (Number(firstOperand) / Number(secondOperand)).toString();
}


function operate(firstOperand, secondOperand, operator) {

    switch (operator) {
        case "+":
            return add(firstOperand, secondOperand);

        case "-":
            return subtract(firstOperand, secondOperand);

        case "*":
            return multiply(firstOperand, secondOperand);

        case "/":
            return divide(firstOperand, secondOperand)
    }
}



