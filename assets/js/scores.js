// Reference to document elements
const highScoresOL = document.querySelector('#highscores')
const clearBtn = document.querySelector('#clear')

// Initial check on whether there are high scores stored in local storage
// NOTE: high scores arrays in the format: [ ["str", num, num], ["str", num, num]]
function init() {
  let storedHighScores = JSON.parse(localStorage.getItem("highScoresArray"))
  
  if(storedHighScores !== null) {
    sortArray(storedHighScores)
  }

  return storedHighScores;
}

// Sort array of arrays by inner array at index 1
function sortArray(storedHighScores) {
  storedHighScores.sort((a,b) => {
    return (b[1] - a[1])});
}

// Set variable to the value of the returned stored arrays
let storedHighScores = init()

// Prepare on screen score board from stored scores
function scoreBoard() {
  // For loop to add an li element for each inner array that exists in the highScoresArray
  for (let i = 0; i < storedHighScores.length; i++) {
    let li = document.createElement("li");
    // Force upper case format of initials regardless of user entry
    let initials = storedHighScores[i][0].toUpperCase();
    let score = storedHighScores[i][1];
    let time = storedHighScores[i][2];

    // Display li text content for each row
    if (time === 0) {
      li.textContent = `${initials}: ${score} point(s)`;
    } else if (time === 1) {
      li.textContent = `${initials}: ${score} point(s) with ${time} second remaining.`;
    } else {
      li.textContent = `${initials}: ${score} point(s) with ${time} seconds remaining.`;
    }
    
    // Add each child, giving a data index of its position in the list
    highScoresOL.appendChild(li).setAttribute("data-index", i);
  }
}

// Function to clear stored high scores
function clearHighScores() {
  // Empties the array
  storedHighScores.length = 0;
  // Sets local storage to be new empty array
  localStorage.setItem("highScoresArray", JSON.stringify(storedHighScores));
  
  // While the scoreboard has rows (children), remove the top one
  while (highScoresOL.firstChild) {
    highScoresOL.removeChild(highScoresOL.firstChild)
  }
}

// Add event listener for clear scores button
clearBtn.addEventListener("click", clearHighScores)

// Create scoreboard
scoreBoard()