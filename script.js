const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display")
let flagfora = true;
let flagForAns = false;
let flagForOperator1 = false;
let temp1 = "";
let temp2 = "";
let answer;
let operand1;
let operator;
let operand2;
buttons.forEach((button) => {
    button.addEventListener("click", function value() {
        if (flagForOperator1 && button.classList.contains("operator")) {
            console.log(button.id)
            operand1 = +(temp1);
            flagForOperator1 = false;
            flagfora = false;
            operator = button.id;
            display.textContent += operator;
        }
        else if (flagfora && !(button.classList.contains("leavePlusOperator"))) {
            flagForOperator1 = true;
            if (temp1 == "0") {
                temp1 = button.id;
                display.textContent = temp1;
            }
            else {
                temp1 += button.id;
                display.textContent = temp1;
                console.log(display.textContent);
            }
        }
        else if (flagfora == false && !button.classList.contains("leaveIt")) {
            if (temp2 == "0") {
                temp2 = button.id;
                display.textContent = temp2;
                flagForAns = true;
            }
            else if (button.classList.contains("operator")) {
                return calculate();
            }
            else {
                temp2 += button.id;
                display.textContent = temp2;
                flagForAns = true;
                console.log(temp2);
            }
        }
        else if ((button.id == "=" && (flagForAns))) {
            return calculate();
        }
        else if (button.id == "AC") {
            temp1 = ""
            return valueReset();
        }
        else if(button.id == "back"){
            if(flagfora == true){
                temp1 = temp1.slice(0,-1);
            }
            else if(flagForOperator1 == false){
                flagForOperator1 = true;
                flagfora = true;
                operator = "";
            }
            else if(flagfora == false){
                flagForAns = false;
                temp2 = temp2.slice(0,-1);
            }
            display.textContent = display.textContent.slice(0,-1);
        }
    })
})
function calculate() {
    operand2 = +(temp2);
    if (operator == "+") {
        console.log(operand1 + operand2);
        temp1 = String(operand1 + operand2);
        return valueReset();
    }
    else if (operator == "-") {
        console.log(operand1 - operand2);
        temp1 = String(operand1 - operand2);
        return valueReset();
    }
    else if (operator == "*") {
        console.log(operand1 * operand2);
        temp1 = String(operand1 * operand2);
        return valueReset();
    }
    else if (operator == "/") {
        if (operand2 == 0) {
            temp1 = "Error";
            temp2 = "";
            flagfora = true;
            operator = "";
            display.textContent = temp1;
            temp1 = "0"
            return temp1;
        }
        else {
            console.log(operand1 / operand2);
            temp1 = String(operand1 / operand2);
            return valueReset();
        }
    }
    else if (operator == "%") {
        console.log(operand1 % operand2);
        temp1 = String(operand1 % operand2);
        return valueReset();
    }
    else {
        console.log(temp1);
        return valueReset();
    }
}
function valueReset() {
    temp2 = "";
    flagfora = true;
    flagForAns = false;
    flagForOperator1 = true;
    operator = "";
    display.textContent = temp1;
    return temp1;
}