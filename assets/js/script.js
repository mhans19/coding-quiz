// Global Variables/Objects
var countdownEl = document.querySelector("#countdown");
var titleEl = document.querySelector("#title-elements");
var sectitleEl = document.querySelector("#text-elements");
var buttonEl1 = document.querySelector("#opt1");
var buttonEl2 = document.querySelector("#opt2");
var buttonEl3 = document.querySelector("#opt3");
var buttonEl4 = document.querySelector("#opt4");
var startbtnEl = document.querySelector("#startquiz");
var score = 0;
var choice = "";
var questionOpts = [
    {q: "question 1",
     a: [{opt: "answer 1"},
         {opt: "answer 2"},
         {opt: "answer 3"},
         {opt: "answer 4"}],
     correct: "buttonEl1"    
    },
    {q: "question 2",
     a: [{opt: "answer 1", correct: true},
         {opt: "answer 2", correct: false},
         {opt: "answer 3", correct: false},
         {opt: "answer 4", correct: false}]
    }
    ];

var countdown = function(){
    var timeLeft = questionOpts.length * 20;
    var timeInterval = setInterval(function() {
        //document.querySelector("startquiz")
        countdownEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft === -1) {
            countdownEl.textContent = "Times up!"
            clearInterval(timeInterval);
        }
    }, 1000)
}


var questionLoop = function(){
    for (var i = 0; i < questionOpts.length; i++){
        titleEl.textContent = questionOpts[i].q;

        buttonEl1.textContent = questionOpts[i].a[0].opt;
        buttonEl2.textContent = questionOpts[i].a[1].opt;
        buttonEl3.textContent = questionOpts[i].a[2].opt;
        buttonEl4.textContent = questionOpts[i].a[3].opt;

        break;
    }
}

var runQuiz = function() {
    startbtnEl.remove();
    sectitleEl.remove();
    countdown();
    optionsEl.classList.remove("hide-button");
    questionLoop();
}

        // buttonEl1.addEventListener("click", function() {
        //     if (loopObj.correct === "buttonEl1"){
        //         choice = "buttonEl1";
        //     }
            
        //   });

        // buttonEl2.addEventListener("click", function() {
        //     if (loopObj.correct === "buttonEl2"){
        //         choice = "buttonEl2";
        //     }
        // });  

        // buttonEl3.addEventListener("click", function() {
        //     if (loopObj.correct === "buttonEl3"){
        //         choice = "buttonEl3";
        //     }
        //   });

        // buttonEl4.addEventListener("click", function() {
        //     if (loopObj.correct === "buttonEl4"){
        //         choice = "buttonEl4";
        //     }
        // }); 

        // if (choice === loopObj.correct){
        //     alert("Congrats, you got it right!");
        // } else {
        //     alert("You did not get it correct.")
        // }



startbtnEl.addEventListener("click", runQuiz);