// Declare global variables
var currentQuestionIndex = 0;
var score = 0;

var startScreen = document.querySelector("#start-screen");
var currentTime = document.getElementById("time")
var timer = document.getElementById("start-time")
var submitBtn = document.getElementById("submit-btn")
var questionScreen = document.getElementById("question-screen");
var endScreen = document.getElementById("end-screen")
var choicesEl = document.getElementById("choices");
var showScore = document.getElementById("final-score")


var questions = [
    {
        questionH2: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        questionH2: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        questionH2: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        questionH2: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        questionH2: "A very useful tool used during development and debugging for printing content to the bugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
}
];

// seconds left
var secondsLeft = 75;
// hold interval time
var holdInterval = 0;
// penalty time for missed question
var penalty = 10; 
// Creates new ul element
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                timeUp();
                currentTime.textContent = "Time's up!"
            }
        }, 1000);
    }
    getQuestions;
});

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
    // clears existing data
    questionScreen.innerHTML = "";
    ulCreate.innerHTML = "";

    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }

    // get current question from array
    var currentQuestion = questions[currentQuestionIndex];

    // creating paragraph element to hold our question
    questionScreen.innerHTML = "<p>" + currentQuestion.questionH2 + "</p>";
    
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var userQuestion = questions[currentQuestionIndex].questionH2;
        var userChoices = questions[currentQuestionIndex].choices;
        questionScreen.textContent = userQuestion;        
    }

    userChoices.forEach(function (newQuestion) {
        var questionList = document.createElement("li");
        questionList.textContent = newQuestion;
        questionScreen.appendChild(ulCreate);
        ulCreate.appendChild(questionList);
        questionList.addEventListener("click", (answer));
    })
};

// Function to show answer

function answer(event) {
   var status = event.target;

   if (status.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    // if the answer is correct
    if (status.textContent == questions[currentQuestionIndex].answer) {
        score + 10;
        createDiv.textContent = "Correct! The answer is " + questions[currentQuestionIndex].answer;
    }
   } else {
       secondsLeft = secondsLeft - penalty;
       createDiv.textContent = "Wrong! The correct answer is: " + questions[currentQuestionIndex].answer; 
   }

   currentQuestionIndex++;

   if (currentQuestionIndex >= questions.length) {
       timeUp();
       createDiv.textContent = "Good job!" + " " + "You got " + score + "/" + questions.length + " correct!";
   } else {
       getQuestions();
   }
   questionScreen.appendChild(createDiv);
}

// Move on to the next question
var finalQuestionIndex = questions.length;


// Function to handle choosing a answer



// EndQuiz function



// Timer function

function timeUp() {
    // clearing screen
    questionScreen.innerHTML = "";
    currentTime.innerHTML = "";

    // Create H1 
    var createH1El = document.createElement("h1");
    createH1El.setAttribute("id", "createH1El");
    createH1El.textContent = "All Done!"

    questionScreen.appendChild(createH1El);

    var createParagraphEl = document.createElement("p");
    createParagraphEl.setAttribute("id", "createParagraphEl");

    questionScreen.appendChild(createParagraphEl);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createParagraphEl.textContent = "Your final score is: " + timeRemaining;

        questionScreen.appendChild(createP2);
    }

    var createLabelEl = document.createElement("label");
    createLabelEl.setAttribute("id", "createLablelEl");
    createLabelEl.textContent = "Enter your initials: ";

    questionScreen.appendChild(createLabelEl);

    var createInputEl = document.createElement("input");
    createInputEl.setAttribute("type", "text");
    createInputEl.setAttribute("id", "intials");
    createInputEl.textContent = "";

    questionScreen.appendChild(createInputEl);

    var createSumbitEl = document.createElement("submit");
    createSumbitEl.setAttribute("type", "sumbit");
    createSumbitEl.setAttribute("id", "Sumbit");

    questionScreen.appendChild(createSumbitEl);
}


timer.onclick = startQuiz;

//High score information

//eventlistener to start the quiz when the start button is clicked