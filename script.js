const buttons = document.querySelectorAll(".btn");
const numbuttons = document.querySelectorAll(".numbtn")
const display = document.querySelector(".display")
let flagfora = true;
let flagForAns = false;
let flagForOperator = false;
let temp1 = "";
let temp2 = "";
let answer;
let operand1;
let operator;
let operand2;
    buttons.forEach((button) => {
        button.addEventListener("click",function value(){
            if(button.classList.contains("operator")){
                console.log(button.id)
                operand1 = +(temp1);
                flagfora = false;
                operator = button.id;
                display.textContent += operator;
            }
            else if((flagfora) && button.id != "="){
                if(temp1 == "0"){
                    temp1 = button.id;
                    display.textContent = temp1;
                }
                else{
                    temp1 += button.id;
                    display.textContent = temp1;
                    console.log(display.textContent);
                }
            }
            else if(flagfora == false && button.id != "="){
                if(temp2 == "0"){
                    temp2 = button.id;
                    display.textContent = temp2;
                    flagForAns = true;
                }
                else if(button.classList.contains("operator")){
                    flagForAns = true;
                    flagForOperator = true;
                }
                else{
                    temp2 += button.id;
                    display.textContent = temp2;
                    flagForAns = true;
                    console.log(temp2);
                }
            }
            else if((button.id == "=" && (flagForAns)) || (flagForOperator)){
                operand2 = +(temp2);
                flagForOperator = false;
                flagForAns = false;
                function valueReset(){
                    temp2 = "";
                    flagfora = true;
                    operator = "";
                    display.textContent = temp1;
                    return temp1;
                }
                if(operator == "+"){
                    console.log(operand1 + operand2);
                    temp1 = String(operand1 + operand2);
                    return valueReset();
                }
                else if(operator == "-"){
                    console.log(operand1 - operand2);
                    temp1 = String(operand1 - operand2);
                    return valueReset(); 
                }
                else if(operator == "*"){
                    console.log(operand1 * operand2);
                    temp1 = String(operand1 * operand2);
                    return valueReset();
                }
                else if(operator == "/"){
                    console.log(operand1 / operand2);
                    temp1 = String(operand1 / operand2);
                    return valueReset();
                }
                else if(operator == "%"){
                    console.log(operand1 % operand2);
                    temp1 = String(operand1 % operand2);
                    return valueReset();
                }
                else{
                    console.log(temp1);
                    return valueReset();
                }
            }
        })
    })

