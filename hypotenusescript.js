const inputs = document.querySelectorAll(".inputs");
const submitButton = document.querySelector(".submit");
const output = document.querySelector(".output");

function calculateSumSqr(a, b){
    return a**2 + b**2;
}

function calculateHypotenuse(){
    if(Number(inputs[0].value)>0&&Number(inputs[1].value)>0){
        const sum = calculateSumSqr(Number(inputs[0].value), Number(inputs[1].value));
        const hypotenuse = Math.sqrt(sum);
        output.innerText = "The length of the hypotenuse is "+hypotenuse+" cm";
    }else{
        output.innerText = "Please enter both non zero positive inputs";
    }

}

submitButton.addEventListener("click",calculateHypotenuse);