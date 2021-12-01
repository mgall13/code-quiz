// Declare global variables
var time = document.getElementById("time");
var startScreen = document.querySelector("#start-screen");
var startBtn = document.getElementById("start-btn")
var questionScreen = document.getElementById("question-screen");
var questionIndex = 0;

console.log("HEllo")

var questions = [
    {
        questionH2: "Enter question here",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        questionH2: "Enter question here",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    }
]



// Start Function
function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questionScreen.removeAttribute("class", "hide");




}


// Function Get questions



// Function to handle choosing a answer



// EndQuiz function



// Timer function





//Hish score stuff





//eventlistener to start the quiz when the start button is clicked
startBtn.onclick = startQuiz;