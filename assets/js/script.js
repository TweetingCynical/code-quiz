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
let currQ = 1
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
    qBtn[i].addEventListener("click", function(event){
      if(event.target === this) {
        let answer = event.target.getAttribute('id');
        let correct = questions[currQ].correct;
        localStorage.setItem("answer", answer)
        localStorage.setItem("correct", correct)
        compareAnswers()
      }
    });
  }
    showQuestion(currQ)
}

function addTime() {
  timeLeft +=5;
  currScore ++;
  scoreDisplay.innerText = currScore;
}

function subtractTime() {
  timeLeft -=10;
}

function setTime() {
  let timerInterval = setInterval(function() {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval)
      // endQuiz()
    }
  }, 1000);
}

function showQuestion (currQ) {
  console.log(currQ)
  qBtn = document.querySelectorAll(".choice")
  let key = Object.keys(questions)
  questionTitle.textContent = key[currQ-1] + ": " + questions[currQ].question
  
  for (let i = 0; i < qBtn.length; i++) {
    qBtn[i].textContent = questions[currQ].answers[addQs[i]];
    localStorage.setItem("answer", "")
  }
}

function compareAnswers() {
  let answer = localStorage.getItem("answer")
  let correct = localStorage.getItem("correct")
  if (answer === correct) {
    addTime()
  }
  else {
    subtractTime()
  }
  currQ++
  showQuestion(currQ)
}