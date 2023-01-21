// Reference to document elements
const timerDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const startBtn = document.querySelector('#start')
const startScreen = document.querySelector('#start-screen')
const questionsScreen = document.querySelector('#questions')
const endScreen = document.querySelector('#end-screen')
const questionTitle = document.querySelector('#question-title')
const questionChoices = document.querySelector('#choices')
const finalScore = document.querySelector('#final-score')
const finalTime = document.querySelector('#final-time')
const submitBtn = document.querySelector('#submit')
const initials = document.querySelector('#initials')

// Declare possible question answers / colours
const addQs = ['a', 'b', 'c', 'd']
const bckgColor = ["orangered", "forestgreen", "gold", "blue"]

// Set intial time/score details
let timeLeft = 60;
let currScore = 0;
let currQ = 1
let highScoresArray = [];
timerDisplay.innerText = timeLeft;
scoreDisplay.innerText = currScore;

// Do if user answer was correct
function addTime() {
  timeLeft +=5;
  currScore ++;
  scoreDisplay.innerText = currScore;
}

// Do if user answer was incorrect
function subtractTime() {
  timeLeft -=10;
}

// Run timer from 60 seconds
function setTime() {
  let timerInterval = setInterval(function() {
    // Subtract 1 from timer
    timeLeft--;
    // Set up below 0 time condition just in case user has time deducted 
    // when they were already less than 10 seconds to go
    if (timeLeft <= 0) {
      timerDisplay.textContent = 0;
      // Clears timerInterval so the browswer stops counting
      clearInterval(timerInterval)
      endQuiz()
    } else {
      // Updates on screen display with the moving clock
      timerDisplay.textContent = timeLeft;
    }
    // Run every 1000ms (1 sec)
  }, 1000);
}

// Provides contents to the currently displayed buttons
function showQuestion (currQ) {
  qBtn = document.querySelectorAll(".choice")
  // Allows code to index into the question set and access each question in turn
  let key = Object.keys(questions)
  // Displays question number and question title
  questionTitle.textContent = key[currQ-1] + ": " + questions[currQ].question
  
  // For loop to add stored answers to each button in turn
  for (let i = 0; i < qBtn.length; i++) {
    qBtn[i].textContent = questions[currQ].answers[addQs[i]];
  }
}

// Compare answers after each user click
function compareAnswers(answer, correct) {
  // Do if user is correct
  if (answer === correct) {
    addTime()
  }
  // Do if user is incorrect
  else {
    subtractTime()
  }
  // Increment current question by one
  currQ++

  // Do if question number has not reached the question bank limit
  // Using Object.keys and finding the length allows the app to be scalable to more or less questions
  if (currQ <= Object.keys(questions).length) {
    showQuestion(currQ)
  }
  // Do if no more questions in question bank
  else {
    endQuiz()
  }

}

// This is how the quiz ends
function endQuiz() {
  // If user has gone into negative time because of deductions, set their time to 0
  let timeLeftEnd;
  if (timeLeft < 0) {
    timeLeftEnd = 0
  } else {
    timeLeftEnd = timeLeft
  }
  // Store final score and times for display messages
  let scoreEnd = currScore;
  finalScore.textContent = scoreEnd;
  finalTime.textContent = timeLeftEnd;

  // Hide the questions section and unhide the end screen
  questionsScreen.classList.add("hide");
  endScreen.classList.remove("hide");

  // Add event listener to submit button
  submitBtn.addEventListener("click", function() {
    // Store current attempt as a three part array
    let roundArray = [initials.value, scoreEnd, timeLeftEnd];

    // Get existing local storage of highScoresArray and parse back into array of arrays
    let storedHighScores = JSON.parse(localStorage.getItem("highScoresArray"));

    // If stored array is not empty, set highScoresArray variable to local stored value
    if (storedHighScores !== null) {
      highScoresArray = storedHighScores
    }

    // Push current attempt array into highScoresArray
    highScoresArray.push(roundArray)

    // Overwrite newly pushed array into local storage for use on the high scores page
    localStorage.setItem("highScoresArray", JSON.stringify(highScoresArray));
    // Move to highscores page to complete actions for this round
    document.location.href = "highscores.html";
  })
}

// Event Listeners
startBtn.addEventListener("click", beginQuiz)

// This is where the quiz begins (on user click of Start button)
function beginQuiz() {
  // Begin clock count
  setTime()

  // Hide start, show first question
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");

  // For loop to append children (buttons) to question choices section. AddQs array makes it scalable for more possible answers
  for(let i = 0; i < addQs.length; i++) {
    let opt = document.createElement('button');
    questionChoices.appendChild(opt).setAttribute("class", "choice");
  }

  // For loop to add event listeners to each button, and collect id from event.target button clicked
  const qBtn = document.querySelectorAll(".choice")
  for(let i = 0; i < qBtn.length; i++) {
    qBtn[i].setAttribute("id", addQs[i]);
    // Note: Need to add event listeners to the buttons before the buttons have content
    qBtn[i].addEventListener("click", function(event){
      if(event.target === this) {
        // Collect target id as user's answer
        let answer = event.target.getAttribute('id');
        // Collects correct answer from questions object where currQ is the currently displayed question
        let correct = questions[currQ].correct;
        // Checks users answer against the correct answer. Note this will also increment score/time/question as necessary
        compareAnswers(answer, correct)
      }
    });
  }
    // Provides content to the buttons from the question bank based on current question number
    showQuestion(currQ)
}