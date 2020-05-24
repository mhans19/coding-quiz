// Global Variables/Objects
var countdownEl = document.querySelector("#countdown");
var titleEl = document.querySelector("#title-elements");
var sectitleEl = document.querySelector("#text-elements");
var buttonEl1 = document.querySelector("#opt1");
var buttonEl2 = document.querySelector("#opt2");
var buttonEl3 = document.querySelector("#opt3");
var buttonEl4 = document.querySelector("#opt4");
var startbtnEl = document.querySelector("#startquiz");
var timeLeft = 120;
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
            clearInterval(timeInterval);
        }
    }, 1000)
}

var questionLoop = function(){
    //add what to do when we run out of questions (end function with results + high score)
    selectedOpt = questionOpts[questionIndex];
    titleEl.textContent = selectedOpt.q;
    buttonEl1.textContent = selectedOpt.a[0].opt;
    buttonEl2.textContent = selectedOpt.a[1].opt;
    buttonEl3.textContent = selectedOpt.a[2].opt;
    buttonEl4.textContent = selectedOpt.a[3].opt;
}

// var questionLoop = function(questionIndex){
//     for (var i = 0; i < questionOpts.length; i++){
//         titleEl.textContent = questionOpts[i].q;
//         buttonEl1.textContent = questionOpts[i].a[0].opt;
//         buttonEl2.textContent = questionOpts[i].a[1].opt;
//         buttonEl3.textContent = questionOpts[i].a[2].opt;
//         buttonEl4.textContent = questionOpts[i].a[3].opt;

//         break;
//     }
// }

var nextQuestion = function(){
    questionIndex++;
    questionLoop();
}
var runQuiz = function() {
    startbtnEl.remove();
    sectitleEl.remove();
    countdown();
    optionsEl.classList.remove("hide-button");
    questionLoop();
}

///////////// need to add deduction from timeleft global variable
buttonEl1.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[0].correct === true){
        alert("You got this one right");
        score ++;
    } else {
        alert("better luck next time");
    }
    nextQuestion();
    });

buttonEl2.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[1].correct === true){
        alert("You got this one right");
        score ++;
    } else {
        alert("better luck next time");
    }
    nextQuestion();
    }); 

buttonEl3.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[2].correct === true){
        alert("You got this one right");
        score ++;
    } else {
        alert("better luck next time");
    }
    nextQuestion();
    }); 

buttonEl4.addEventListener("click", function() {
    if (questionOpts[questionIndex].a[3].correct === true){
        alert("You got this one right");
        score ++;
    } else {
        alert("better luck next time");
    }
    nextQuestion();
    }); 



startbtnEl.addEventListener("click", runQuiz);