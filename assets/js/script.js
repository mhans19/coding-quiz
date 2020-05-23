var countdownEl = document.getElementById("countdown")
var qtitleEl = document.getElementById("question-title")

var questions = [
    {question: "question 1",
     option1: "answer 1",
     option2: "answer 2",
     option3: "answer 3",
     option4: "answer 4",
     correct: "answer 3"},
    {question: "question 2",
     option1: "answer a",
     option2: "answer b",
     option3: "answer c",
     option4: "answer d",
     correct: "answer 1"},
    }
]



function countdown(){
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
        countdownEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft === 0) {
            countdownEl.textContent = "Times up!"
            //clearInterval(timeInterval);
        }
        
    }, 1000)
}







countdown();
