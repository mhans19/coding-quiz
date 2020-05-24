// Global Variables/Objects
var countdownEl = document.querySelector("#countdown");
var titleEl = document.querySelector("#title-elements");
var sectitleEl = document.querySelector("#text-elements");
var buttonEl1 = document.querySelector("#opt1");
var buttonEl2 = document.querySelector("#opt2");
var buttonEl3 = document.querySelector("#opt3");
var buttonEl4 = document.querySelector("#opt4");
var startbtnEl = document.querySelector("#startquiz");
var endquizEl = document.querySelector("#endquiz");
var resultsEl = document.querySelector("#results");
var initialsEl = document.querySelector("#initials");
var scoresBtnEl = document.querySelector("#scoresBtn")
var highscoresEl = document.querySelector("#highScores");
var backBtnEl = document.querySelector("#back");
var clearBtnEl = document.querySelector("#clear");
var subIntials = document.querySelector("#sub_initials");
var optionsEl = document.querySelector("#optionsEl");
var validateEl = document.querySelector("#validation");

const maxStoredScores = 5;

var timeLeft = 60;
var score = 0;
var questionIndex = 0;
var questionOpts = [
    {q: "question 1",
     a: [{opt: "answer 1", correct: false},
         {opt: "answer 2", correct: true},
         {opt: "answer 3", correct: false},
         {opt: "answer 4", correct: false}]   
    },
    {q: "question 2",
     a: [{opt: "answer a", correct: true},
         {opt: "answer b", correct: false},
         {opt: "answer c", correct: false},
         {opt: "answer d", correct: false}]
    },
    {q: "question 3",
    a: [{opt: "answer 1", correct: false},
        {opt: "answer 2", correct: true},
        {opt: "answer 3", correct: false},
        {opt: "answer 4", correct: false}]   
    },
    {q: "question 4",
    a: [{opt: "answer 1", correct: false},
        {opt: "answer 2", correct: true},
        {opt: "answer 3", correct: false},
        {opt: "answer 4", correct: false}]   
    },
    {q: "question 5",
    a: [{opt: "answer 1", correct: false},
        {opt: "answer 2", correct: true},
        {opt: "answer 3", correct: false},
        {opt: "answer 4", correct: false}]   
    },
    {q: "question 6",
    a: [{opt: "answer 1", correct: false},
       {opt: "answer 2", correct: true},
       {opt: "answer 3", correct: false},
       {opt: "answer 4", correct: false}]   
    }
    ];

var countdown = function(){
    var timeInterval = setInterval(function() {
        countdownEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft === -1) {
            countdownEl.textContent = "Times up!"
            endQuiz();
        }
    }, 1000)
}

var questionLoop = function(){
    if(questionIndex == questionOpts.length){
        return endQuiz();
    }
    selectedOpt = questionOpts[questionIndex];
    titleEl.textContent = selectedOpt.q;
    buttonEl1.textContent = selectedOpt.a[0].opt;
    buttonEl2.textContent = selectedOpt.a[1].opt;
    buttonEl3.textContent = selectedOpt.a[2].opt;
    buttonEl4.textContent = selectedOpt.a[3].opt;
}

var nextQuestion = function(){
    questionIndex++;
    questionLoop();
}

var saveHighScores = function() {
    const scorearray = {
        userscore: score,
        userinitials: document.querySelector("input").value
    };
    
    const scoreHistory = JSON.parse(localStorage.getItem("storedScores")) || [];

    scoreHistory.push(scorearray);
    scoreHistory.sort((a, b)=> b.userscore - a.userscore);
    scoreHistory.splice(5);

    localStorage.setItem("storedScores", JSON.stringify(scoreHistory));
    highScores();
}
var clearStorage = function() {
    localStorage.clear();
    location.reload();
}

var highScores = function(){
    titleEl.remove();
    optionsEl.remove();
    sectitleEl.remove();
    startbtnEl.remove();
    endquizEl.remove();
    resultsEl.remove();
    initialsEl.remove(0);
    highscoresEl.classList.remove("hide");
    backBtnEl.classList.remove("hide");
    clearBtnEl.classList.remove("hide");

    scoreHistory = JSON.parse(localStorage.getItem("storedScores")) || []; 
    
    topFiveList.innerHTML = scoreHistory
        .map(scorearray => {
            return `<li id = "topFiveList"><b>User:</b> ${scorearray.userinitials} <b>Score:</b> ${scorearray.userscore}</li>`;
        })
        .join("");
}
var endQuiz = function(){
    countdownEl.classList.add("hide");
    titleEl.classList.add("hide");
    optionsEl.classList.add("hide");
    endquizEl.classList.remove("hide");
    resultsEl.classList.remove("hide");
    initialsEl.classList.remove("hide");

    document.querySelector("#score").textContent = score;
    document.querySelector("#qlength").textContent = questionOpts.length;
}

var refreshPage = function(){
    window.parent.location = window.parent.location.href;
}

var runQuiz = function() {
    startbtnEl.remove();
    sectitleEl.remove();
    countdown();
    optionsEl.classList.remove("hide");
    questionLoop();
}

buttonEl1.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[0].correct === true){
        score ++;
        validateEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 10;
        validateEl.textContent = "Wrong!";
        if (timeLeft < 0){
            countdownEl.textContent = "Times up!"
            endQuiz();
        }
    }
    nextQuestion();
    });

buttonEl2.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[1].correct === true){
        score ++;
        validateEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 10;
        validateEl.textContent = "Wrong!";
        if (timeLeft < 0){
            countdownEl.textContent = "Times up!"
            return endQuiz();
        }
    }
    nextQuestion();
    }); 

buttonEl3.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[2].correct === true){
        score ++;
        validateEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 10;
        validateEl.textContent = "Wrong!";
        if (timeLeft < 0){
            countdownEl.textContent = "Times up!"
            return endQuiz();
        }
    }
    nextQuestion();
    }); 

buttonEl4.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[3].correct === true){
        score ++;
        validateEl.textContent = "Correct!";
    } else {
        timeLeft = timeLeft - 10;
        validateEl.textContent = "Wrong!";
        if (timeLeft < 0){
            countdownEl.textContent = "Times up!"
            return endQuiz();
        }
    }
    nextQuestion();
    }); 

startbtnEl.addEventListener("click", runQuiz);
scoresBtnEl.addEventListener("click", highScores);
backBtnEl.addEventListener("click", refreshPage);
subIntials.addEventListener("click", saveHighScores);
clearBtnEl.addEventListener("click", clearStorage);

