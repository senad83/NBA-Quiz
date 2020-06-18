console.log("hello");


var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var score = 0

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");

var count = document.getElementById ("score");


var choicesEl = document.getElementById("answers");
var startBtn = document.getElementById("start");

var timer;
startBtn.addEventListener ("click", function() {
     timer = setInterval(function(){
        timerEl.innerText = time;
        time --;
        if (time == 0){
            endGame()
            clearInterval (timer)
        };
    }, 1000);
    startQuiz();
})
console.log (timerEl)

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    var questions = document.getElementById ("questions")
    questions.setAttribute ("class", "")
    insertQuestions ();
}
function endGame(){
var endgame = document.getElementById("end-screen");
endgame.setAttribute("class", "")
var questionsDiv = document.getElementById ("questions")
questionsDiv.setAttribute("class", "hide")
clearInterval(timer);
var result = document.getElementById ("final-score");
result.innerHTML = score;
}
function insertQuestions (){
    if (currentQuestionIndex === questions.length) {
        endGame();
        return;

    }
    document.getElementById ("question-title").innerText = questions[currentQuestionIndex].question;
    var answers = document.getElementById("answers")
    answers.innerText = "";
    // button.addEventListener ("click", function(){
    // })
    var ansarray = (questions[currentQuestionIndex].answers)
    for (i=0; i < 4; i++){
        var answerButton = document.createElement ("button")
        answerButton.innerText = ansarray[i];
        answers.appendChild (answerButton);
        answerButton.addEventListener ("click", function(event){    
         
        if (currentQuestionIndex === answers.length ) {endGame()};

         if (time <=0 ) endGame()
         


        if (questions[currentQuestionIndex].correctAnswer === event.target.innerText){
            console.log ("correct")
            score ++
            count.innerText = score;
            alert ("Good job!")
        
        }
        else {
            alert ("Your answer is wrong")
            time -= 10
        }
        
        currentQuestionIndex ++
        insertQuestions();
        
        })
    }   
}





// Try to start thing to go away