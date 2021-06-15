var questions = [
    {
        question: "Question One",
        answers: ['a','b','c'],
        correct: 'a'
    },
    {
        question: "Question Two",
        answers: ['1','2','3'],
        correct: '1'
    },
    {
        question: "Question Three",
        answers: ['1','2','3'],
        correct: '1'
    },
    {
        question: "Question Four",
        answers: ['1','2','3'],
        correct: '1'
    },
    {
        question: "Question Five",
        answers: ['1','2','3'],
        correct: '1'
    }
]
var answerDiv = document.getElementById("answerOptions");
var QI = 0;
var startBtn = document.getElementById("start");
function buildQuestionCard(){
var questionEl = document.getElementById("question");
questionEl.textContent = questions[QI].question;
answerDiv.innerHTML = "";
questions[QI].answers.forEach(function(answer){
var answerBtn = document.createElement("button");
answerBtn.textContent = answer;
answerBtn.setAttribute("value", answer);
answerBtn.onclick = evaluateAnswer;
answerDiv.appendChild(answerBtn);
})
}
function evaluateAnswer(){
    console.log(this.value)
    if(this.value !== questions[QI].correct) {
        console.log("wrong")
    } else {
        console.log("correct")
    }
    QI++;
    if(QI === questions.length){
        answerDiv.innerHTML = '';
        console.log("endgame")
    } else {
        buildQuestionCard();
        
    }
}
function startGame(){
    startBtn.setAttribute("style", "display: none;");
buildQuestionCard();

}

startBtn.addEventListener("click", startGame);
