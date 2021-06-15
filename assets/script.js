var questions = [
    {
        question: "What does html stand for?",
        answers: ['hyper text module language', 'hyperlinks markup language', 'hyper text markup language', 'home tool markup language'],
        correct: 'hyper text markup language',
    },
    {
        question: "Who is making the Web standards?",
        answers: ['google', 'microsoft', 'mozilla', 'the world wide web consortium'],
        correct: 'the world wide web consortium',
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: ['<heading>', '<h6>', '<head>', '<h1>'],
        correct: '<h1>',
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: ['<lb>', '<break>', '<br>', 'brk'],
        correct: '<br>',
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answers: ['<body bg = "yellow">', '<body style = "background-color: yellow;">', '<background>yellow</background'],
        correct: '<body style = "background-color: yellow;">'
    }
]
var answerDiv = document.getElementById("answerOptions");
var queDiv = document.getElementById("question");
var QI = 0;
var startBtn = document.getElementById("start");
function buildQuestionCard() {
    var questionEl = document.getElementById("question");
    questionEl.textContent = questions[QI].question;
    answerDiv.innerHTML = "";
    queDiv.innerHTML = "";
    questions[QI].answers.forEach(function (answer) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answer;
        answerBtn.setAttribute("value", answer);
        answerBtn.onclick = evaluateAnswer;
        answerDiv.appendChild(answerBtn);
    })
}
function evaluateAnswer() {
    console.log(this.value)
    if (this.value !== questions[QI].correct) {
        console.log("wrong")
    } else {
        console.log("correct")
    }
    QI++;
    if (QI === questions.length) {
        answerDiv.innerHTML = '';
        console.log("endgame")
    } else {
        buildQuestionCard();

    }
}
function startGame() {
    startBtn.setAttribute("style", "display: none;");
    buildQuestionCard();

}

startBtn.addEventListener("click", startGame);
