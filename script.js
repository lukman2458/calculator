const numbuttons = document.querySelectorAll(".arithmeticbtn");
let result = "";
numbuttons.forEach((button) => {
    button.addEventListener("click",function value(){
        result += button.id;
        console.log(result);
    })
})
