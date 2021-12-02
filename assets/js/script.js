// Declare global variables
var currentQuestionIndex = 0;
var timeEl = document.getElementById("time");

var startScreen = document.querySelector("#start-screen");
var startBtn = document.getElementById("start-btn")
var submitBtn = document.getElementById("submit-btn")
var questionScreen = document.getElementById("question-screen");
var endScreen = document.getElementById("end-screen")
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var choicesEl = document.getElementById("choices");
var showScore = document.getElementById("final-score")


var questions = [
    {
        questionH2: "Commonly used data types DO NOT include:",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        questionH2: "Enter question here",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        questionH2: "Enter question here",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        questionH2: "A very useful tool used during development and debugging for printing content to the bugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "quotes"
}
];

var finalQuestionIndex = questions.length;

// Start Function
function startQuiz() {
    // hiding our start screen
    startScreen.setAttribute("class", "hide");
    // un-hiding our question screen
    questionScreen.removeAttribute("class", "hide");
    getQuestions();
}

// Function Get questions
function getQuestions() {

    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }

    // get current question from array
    var currentQuestion = questions[currentQuestionIndex];

    // creating paragraph element to hold our question
    questionScreen.innerHTML = "<p>" + currentQuestion.questionH2 + "</p>";
    currentQuestion.questionH2 = currentQuestion

};

var finalQuestionIndex = questions.length;


// Function to handle choosing a answer



// EndQuiz function



// Timer function





//Hish score stuff





//eventlistener to start the quiz when the start button is clicked
startBtn.onclick = startQuiz;