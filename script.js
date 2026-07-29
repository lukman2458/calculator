const buttons = document.querySelectorAll(".btn");
const numbuttons = document.querySelectorAll(".numbtn")
let flagfora = true;
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
            }
            else if(flagfora){
                temp1 += button.id;
                console.log(temp1);
            }
            else if(flagfora == false && button.id != "="){
                temp2 += button.id;
                console.log(temp2);
            }
            else if(button.id == "="){
                operand2 = +(temp2);
                if(operator == "+"){
                    console.log(operand1 + operand2);
                    temp1 = String(operand1 + operand2);
                    flagfora = true;
                    return temp1; 
                }
                else if(operator == "-"){
                    return console.log(operand1 - operand2);
                }
                else if(operator == "*"){
                    return console.log(operand1 * operand2);
                }
                else{
                    return console.log(operand1 / operand2);
                }
            }
        })
    })

