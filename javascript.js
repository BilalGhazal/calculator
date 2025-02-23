const digits = document.querySelectorAll(".operand");
const display = document.querySelector(".screen");
const clear = document.querySelector(".clear");
const sign = document.querySelectorAll(".operator");
const negate = document.querySelector(".negate");
const percent = document.querySelector(".percent");
const backspace = document.querySelector(".backspace");


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

backspace.addEventListener("click", () => {
    if (display.textContent === firstOperand) {
        firstOperand = firstOperand.substring(0, firstOperand.length - 1)
        updateDisplay(firstOperand);
    }

    if (display.textContent === secondOperand) {
        secondOperand = secondOperand.substring(0, secondOperand.length - 1)
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




const buttonsMap = {
    "0": ".b0",
    "1": ".b1",
    "2": ".b2",
    "3": ".b3",
    "4": ".b4",
    "5": ".b5",
    "6": ".b6",
    "7": ".b7",
    "8": ".b8",
    "9": ".b9",
    "Enter": ".b10",
    "NumpadAdd": ".b11",
    "NumpadSubtract": ".b12",
    "NumpadMultiply": ".b13",
    "NumpadDivide": ".b14",
    "Delete": ".b15",
    ".": ".b16",
    "Backspace": ".b17",
};


document.addEventListener("keydown", function(event) {
    const buttonClass = buttonsMap[event.key];
    if (buttonClass) {
        document.querySelector(buttonClass).click();
    }

})