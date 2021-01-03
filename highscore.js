const highScoresList = document.querySelector('#scores-list')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML =
highScores.map( function(score){
    return `<li>${score.name} - ${score.score}</li>`
}).join("")