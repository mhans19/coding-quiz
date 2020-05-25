// global variables linked to HTML
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
// global variables
const maxStoredScores = 5;
var timeLeft = 60;
var score = 0;
var questionIndex = 0;
// array of questions, choices, and correct answers
var questionOpts = [
    {q: "Which of the following is not a valid .addeventlistener argument?",
     a: [{opt: "a) hoveron", correct: true},
         {opt: "b) click", correct: false},
         {opt: "c) mouseover", correct: false},
         {opt: "d) dragover", correct: false}]   
    },
    {q: "What does DOM stand for?",
     a: [{opt: "a) Digital Object Model", correct: false},
         {opt: "b) Digital Object Method", correct: false},
         {opt: "c) Document Object Model", correct: true},
         {opt: "d) Document Object Method", correct: false}]
    },
    {q: "Where does the JavaScript <script> tag belong in the HTML file?",
    a: [{opt: "a) Right after <body>", correct: false},
        {opt: "b) Right before </body>", correct: true},
        {opt: "c) Linked in the <head>", correct: false},
        {opt: "d) Right before </html>", correct: false}]   
    },
    {q: "What is the correct way to reference an external script called xyz.js?",
    a: [{opt: "a) <script id = 'xyz.js'>", correct: false},
        {opt: "b) <script class= 'xyz.js'>", correct: false},
        {opt: "c) <script href= 'xyz.js'>", correct: false},
        {opt: "d) <script src= 'xyz.js'>", correct: true}]   
    },
    {q: "Which of the following IF statements is formatted correctly in JavaScript?",
    a: [{opt: "a) if i == 2, else", correct: false},
        {opt: "b) if (i == 2)", correct: true},
        {opt: "c) if i == 2", correct: false},
        {opt: "d) if (i == 2), else", correct: false}]   
    },
    {q: "Which operator is used to test equality between two variables?",
    a: [{opt: "a) =", correct: false},
       {opt: "b) -", correct: false},
       {opt: "c) ==", correct: true},
       {opt: "d) +", correct: false}]   
    },
    {q: "Which of the following statements is TRUE about JavaScript?",
    a: [{opt: "a) JavaScript is case-sensitive", correct: true},
        {opt: "b) JavaScript is the same as Java", correct: false},
        {opt: "c) JavaScript cannot change HTML attribute values", correct: false},
        {opt: "d) JavaScript cannot change HTML styles (CSS)", correct: false}]   
    },
    {q: "What is the correct way to add a line comment in JavaScript?",
    a: [{opt: "a) /* comment */", correct: false},
        {opt: "b) # comment", correct: false},
        {opt: "c) <!-- comment -->", correct: false},
        {opt: "d) // comment", correct: true}]   
    },
    {q: "What is the correct way to write a JavaScript array?",
    a: [{opt: "a) var breakfast = 'eggs', 'bacon', 'toast'", correct: false},
        {opt: "b) var breakfast = 1 = ('eggs'), 2 = ('bacon'), 3 = ('toast')", correct: false},
        {opt: "c) var breakfast = (1:'eggs', 2:'bacon', 3:'toast')", correct: false},
        {opt: "d) var breakfast = ['eggs', 'bacon', 'toast']", correct: true}]   
    },
    {q: "What is the correct way to write a function in JavaScript?",
    a: [{opt: "a) function = myFunction{}", correct: false},
        {opt: "b) function = myFunction()", correct: false},
        {opt: "c) function myFunction() ", correct: true},
        {opt: "d) function:myFunction{}", correct: false}]   
    }
    ];
// function for quiz countdown
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
// function that identifies unique questions from the array
var questionLoop = function(){
    selectedOpt = questionOpts[questionIndex];
    titleEl.textContent = selectedOpt.q;
    buttonEl1.textContent = selectedOpt.a[0].opt;
    buttonEl2.textContent = selectedOpt.a[1].opt;
    buttonEl3.textContent = selectedOpt.a[2].opt;
    buttonEl4.textContent = selectedOpt.a[3].opt;
}
// function to increase question index and call questionLoop function to display next question
var nextQuestion = function(){
    questionIndex++;
    if(questionIndex == questionOpts.length){
        return endQuiz();
    }
    questionLoop();
}
// function to save top five highest scores to the localStorage
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
//function to clear localStorage and refresh page
var clearStorage = function() {
    localStorage.clear();
    location.reload();
}
// function to display the top five highest scores
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
// function to end the quiz and show results
var endQuiz = function(){
    countdownEl.classList.add("hide");
    titleEl.classList.add("hide");
    optionsEl.classList.add("hide");
    endquizEl.classList.remove("hide");
    resultsEl.classList.remove("hide");
    initialsEl.classList.remove("hide");
    if(score > -1){
    document.querySelector("#score").textContent = score;
    document.querySelector("#qlength").textContent = questionOpts.length;
    }
}
// function to refresh the page back to the main screen
var refreshPage = function(){
    window.parent.location = window.parent.location.href;
}
// function that initializes the running of the quiz
var runQuiz = function() {
    startbtnEl.remove();
    sectitleEl.remove();
    countdown();
    optionsEl.classList.remove("hide");
    questionLoop();
}
// function that validates correct selections
var correct = function(){
    document.querySelector("#valid-correct").classList.remove("hide");
        setTimeout(() => {
            document.querySelector("#valid-correct").classList.add("hide");
            nextQuestion();
        }, 1500);
}
// function that validates incorrect selections
var wrong = function(){
    document.querySelector("#valid-wrong").classList.remove("hide");
        setTimeout(() => {
            document.querySelector("#valid-wrong").classList.add("hide");
            nextQuestion();
        }, 1500);
}
// event listeners for buttons
buttonEl1.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[0].correct === true){
        score ++;
        correct();
    } else {
        timeLeft = timeLeft - 10;
        wrong();
        if (timeLeft < 0){
            countdownEl.textContent = "Times up!"
            endQuiz();
        }
    }
    });
buttonEl2.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[1].correct === true){
        score ++;
        correct();
    } else {
        timeLeft = timeLeft - 10;
        wrong();
        if (timeLeft < 0){
            countdownEl.textContent = "Times up!"
            return endQuiz();
        }
    }
    }); 
buttonEl3.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[2].correct === true){
        score ++;
        correct();
    } else {
        timeLeft = timeLeft - 10;
        wrong();
        if (timeLeft < 0){
            countdownEl.textContent = "Times up!"
            return endQuiz();
        }
    }
    }); 
buttonEl4.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[3].correct === true){
        score ++;
        correct();
    } else {
        timeLeft = timeLeft - 10;
        wrong();
        if (timeLeft < 0){
            countdownEl.textContent = "Times up!"
            return endQuiz();
        }
    }
    }); 
// event listeners for starting the quiz, checking high scores, submitting score, and returning to main screen 
startbtnEl.addEventListener("click", runQuiz);
scoresBtnEl.addEventListener("click", highScores);
backBtnEl.addEventListener("click", refreshPage);
subIntials.addEventListener("click", saveHighScores);
clearBtnEl.addEventListener("click", clearStorage);
