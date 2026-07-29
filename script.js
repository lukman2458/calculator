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
                console.log(button.id)
                a = +(temp);
                flagfora = false;
                console.log(flagfora)
                if(button.id == "+"){
                    return add();
                }
                else if(button.id == "-"){
                    return sub();
                }
                else if(button.id == "*"){
                    return multiply();
                }
                else{
                    return divide();
                }
            }
            else{
                temp += button.id;
                console.log(temp);
            }
        })
    })
}
else{
    function add(a){
        numbuttons.forEach((buttonx)=>{
            buttonx.addEventListener("click",()=>{
                console.log(buttonx.id)
                b = +(buttonx.id);
                console.log(a+b);
                return;
            })
        })
}
function sub(a){
    numbuttons.forEach((buttonx)=>{
        buttonx.addEventListener("click",()=>{
            console.log(flagfora)
            console.log(buttonx.id)
            b = +(buttonx.id);
            console.log(a-b);
            return;
        })
    })
}
function multiply(a){
    numbuttons.forEach((buttonx)=>{
        buttonx.addEventListener("click",()=>{
            console.log(flagfora)
            console.log(buttonx.id)
            b = +(buttonx.id);
            console.log(a*b);
            return;
        })
    })
}
function divide(a){
    numbuttons.forEach((buttonx)=>{
        buttonx.addEventListener("click",()=>{
            console.log(flagfora)
            console.log(buttonx.id)
            b = +(buttonx.id);
            console.log(a/b);
            return;
        })
    })
}
}

