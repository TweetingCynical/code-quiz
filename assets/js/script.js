// Reference to document elements
let timerDisplay = document.querySelector('#time');
let scoreDisplay = document.querySelector('#score');
let startBtn = document.querySelector('#start')

// Set intial time/score details
let timeLeft = 60;
let currScore = 0;
timerDisplay.innerText = timeLeft;
scoreDisplay.innerText = currScore;

// Event Listeners
startBtn.addEventListener("click", beginQuiz)

function beginQuiz() {
  // Begin clock count
  setTime()
  // Begin first question
}

function addTime() {
  timeLeft +=5;
}

function subtractTime() {
  timeLeft -=5;
}

function setTime() {
  let timerInterval = setInterval(function() {
    timeLeft --;
    timerDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval)
      // endQuiz()
    }
  }, 1000);
}

