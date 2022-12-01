const questions = document.querySelector(".quiz-form");
const submitButton = document.querySelector(".boutput");
const outputEl = document.querySelector(".output-score");

const rightAnswers = ["90","right-angled"];

function checkAnswers(){
    let index =0;
    let score =0;
    const userinput = new FormData(questions);

    for(let answer of userinput.values()){
        if(answer===rightAnswers[index]){
            score++;
        }
        index++;
    }
    outputEl.innerText = "Your score is "+score;
}

submitButton.addEventListener("click",checkAnswers);