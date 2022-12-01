const inputs = document.querySelectorAll(".inputs");
const submitButton = document.querySelector(".submit");
const output = document.querySelector(".output");



function calculateArea(){
    if(inputs[0].value&&inputs[1].value){
        const area = (Number(inputs[0].value)*Number(inputs[1].value))/2;
        output.innerText = "The area of the triangle is "+area+" cm²";
    }else{
        output.innerText = "Please enter both inputs";
    }

}

submitButton.addEventListener("click",calculateArea);