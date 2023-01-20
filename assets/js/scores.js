const highScoresOL = document.querySelector('#highscores')
const clearBtn = document.querySelector('#clear')

function init() {
  let storedHighScores = JSON.parse(localStorage.getItem("highScoresArray"))
  
  if(storedHighScores !== null) {
    sortArray(storedHighScores)
  }

  return storedHighScores;
}

function sortArray(storedHighScores) {
  storedHighScores.sort((a,b) => {
    return (b[1] - a[1])});
}

let storedHighScores = init()

function scoreBoard() {
  for (let i = 0; i < storedHighScores.length; i++) {
    let li = document.createElement("li");
    let initials = storedHighScores[i][0].toUpperCase();
    let score = storedHighScores[i][1];
    let time = storedHighScores[i][2];
    if (time === 0) {
      li.textContent = `${initials}: ${score} point(s)`;
    } else if (time === 1) {
      li.textContent = `${initials}: ${score} point(s) with ${time} second remaining.`;
    } else {
      li.textContent = `${initials}: ${score} point(s) with ${time} seconds remaining.`;
    }
    
    highScoresOL.appendChild(li).setAttribute("data-index", i);
  }
}

function clearHighScores() {
  storedHighScores.length = 0;
  localStorage.setItem("highScoresArray", JSON.stringify(storedHighScores));
  while (highScoresOL.firstChild) {
    highScoresOL.removeChild(highScoresOL.firstChild)
  }
}

clearBtn.addEventListener("click", clearHighScores)

scoreBoard()