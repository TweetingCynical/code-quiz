// Reference to document elements
const timerDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const startBtn = document.querySelector('#start')
const startScreen = document.querySelector('#start-screen')
const questionsScreen = document.querySelector('#questions')
const questionTitle = document.querySelector('#question-title')
const questionChoices = document.querySelector('#choices')
const addQs = ['a', 'b', 'c', 'd']

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
  // Hide start, show first question
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");
  for(let i = 0; i < 4; i++) {
    let opt = document.createElement('button');
    questionChoices.appendChild(opt).setAttribute("class", "choice");
  }
  const qBtn = document.querySelectorAll(".choice")
  for(let i = 0; i < qBtn.length; i++) {
    qBtn[i].setAttribute("id", addQs[i])
  }
  showQuestion()
}

function addTime() {
  timeLeft +=5;
}

function subtractTime() {
  timeLeft -=10;
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

function showQuestion () {
  qBtn = document.querySelectorAll(".choice")
  console.log(qBtn)
  questionTitle.textContent = questions[1].question
  
  // This is not going to work because we need to use qNum for the above question part too
  let qNum = 1;
  for (let i = 0; i < qBtn.length; i++) {
    qBtn[i].textContent = questions[qNum].answers.addQs[i]
  }
}