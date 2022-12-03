const inputs = document.querySelectorAll(".inputs");
const submitButton = document.querySelector(".submit");
const output = document.querySelector(".output");



function calculateArea(){
    if(Number(inputs[0].value)>0&&Number(inputs[1].value)>0){
        const area = (Number(inputs[0].value)*Number(inputs[1].value))/2;
        output.innerText = "The area of the triangle is "+area+" cm²";
    }else{
        output.innerText = "Please enter both non zero positive inputs";
    }

}

submitButton.addEventListener("click",calculateArea);