let highScoresArray = [];

init()

function init() {
  let storedScore = JSON.parse(localStorage.getItem("roundArray"))
  
  if(storedScore !== null) {
    highScoresArray.push(storedScore)
  }
  sortArray()
}

function sortArray() {
  highScoresArray = highScoresArray.sort((a,b) => {
    return (b[1] - a[1])});
}