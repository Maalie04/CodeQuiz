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
var answerEl = document.getElementById("answerOptions");
var questionEl = document.getElementById("question");
var QI = 0;
var startBtn = document.getElementById("start");
var exitBtn = document.getElementById("quit");
var restartBtn = document.getElementById("restart");
var timerEl = document.getElementById("timer");
var feedbackEl = document.getElementById("feedback");
var titleEl = document.getElementById("title");
var listEl = document.getElementById("listOption");
// var feedbackHideEl = document.querySelector("feedbackHide");
var secondsLeft = 30;
var timerInterval;

function startGame() {
    var begin = document.getElementById("startScreen");
    begin.setAttribute("class","hide");
    timerEl.setAttribute("style", "font-size:20px;");
    answerEl.onclick = evaluateAnswer; // moving this from answerBtn
    userChoice();
    timer();

}

// this function cyphers through my object array questions
function userChoice() {
   
    questionEl.textContent = questions[QI].question;
    answerEl.innerHTML = "";
    questions[QI].answers.forEach(function (answer) {
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answer;
        answerBtn.setAttribute("value", answer);
        // Moved this up to startGame and added the click handler to the button container
        //   every time you add a possible answer, you're attaching an event listener (5 questions * 4 answers = 20)
        //   moving this up to its parent means I only ever need to listen once and then see who was clicked "underneath"
        //   see the changes I made to evaluateAnswer
        answerEl.appendChild(answerBtn); 
    })
}


function timer() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left to answer question.";

    if(secondsLeft > 1) {
      timerEl.textContent = secondsLeft + " seconds left to answer question."; 
    } else if (secondsLeft === 1) {
        timerEl.textContent = secondsLeft + " second left to answer question.";
        secondsLeft--;
    } 
         else {
        timerEl.textContent = "";
        timerEl.textContent = "This Quiz is Over!"
    }

  }, 980);


};

function evaluateAnswer(event) {
    var target = event.target;

    if (!target.matches("button")) {
        return
    }

    console.log(target.value);
    
    if (target.value !== questions[QI].correct) {
        console.log("Wrong");
        secondsLeft.textContent = timerEl;
        feedbackEl.textContent = "Wrong!";
    } else {
        console.log("Correct");
        feedbackEl.textContent = "Correct!";
    };
   
    QI++;
// conditional statements that cyphers through the questions until the end
    if (QI === questions.length) {
        answerEl.innerHTML = "";
        console.log("endgame");
        endGame();
    } else {
        userChoice();
        console.log("next");
      

    }
}


function endGame() {
    questionEl.innerHTML = "";
    titleEl.innerHTML = "";
    answerEl.innerHTML = "";
    timerEl.innerHTML = "";
    clearInterval(timerInterval);
    
    // Just need to reset your QI here,
    // then show the inputs for high scores
};

function restart() {
   endGame();
   
};


startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restart);



