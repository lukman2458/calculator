const buttons = document.querySelectorAll(".btn");
const numbuttons = document.querySelectorAll(".numbtn")
let flagfora = true;
let temp = "";
let answer;
let a;
let b;
if(flagfora){
    buttons.forEach((button) => {
        button.addEventListener("click",function value(){
            if(button.classList.contains("operator")){
                a = +(temp);
                flagfora = false;
                add() ? (button.id == "+") : 
                sub() ? (button.id == "-") : 
                multiply() ? (button.id == "*") : divide()
            }
            else{
                temp += button.id;
                console.log(temp);
            }
        })
    })
}
function getb(){
    numbuttons.forEach((button)=>{
        button.addEventListener("click",()=>{
            b = button.id;
        })
    })
    return b;
}
function add(a,b){
    getb();
    answer = a + b;
    console.log(answer);
    return;
}
function sub(a,b){
    getb();
    answer = a - b;
    return;
}
function multiply(a,b){
    getb();
    answer = a * b;
    return;
}
function divide(a,b){
    getb();
    answer = a / b;
    return;
}
