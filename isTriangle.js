const angles = document.querySelectorAll(".angle-input");
const checkButton = document.querySelector("#check-triangle");
const outputEl = document.querySelector(".output");


function checkisTriangle(){
    if(Number(angles[0].value)>0&&Number(angles[1].value)>0&&Number(angles[2].value)>0){
        const sumAngles = Number(angles[0].value)+Number(angles[1].value)+Number(angles[2].value);
        if(sumAngles===180){
            outputEl.innerText = "Yayy, the angles form a triangle";
        }else{
            outputEl.innerText = "Oh Oh!, the angles do not form a triangle";
        }
    }
    else{
        outputEl.innerText = "All angles should have Non-zero positive value";
    }
}

checkButton.addEventListener("click", checkisTriangle);