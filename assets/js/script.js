// Set intial time/score details
let timeLeft = 60;
let timerDisplay = document.querySelector('#time');
timerDisplay.innerText = timeLeft;

// Reference to start button
let startBtn = document.querySelector('#start')

// Event Listeners
startBtn.addEventListener("click", beginQuiz)

function beginQuiz() {
  // Begin clock count
  setTime()
  // Begin first question
}

function setTime() {
  let timerInterval = setInterval(function() {
    timeLeft --;
    timerDisplay.textContent = timeLeft;

    if (timerInterval === 0) {
      clearInterval(timerInterval)
    }
  }, 1000);
}

