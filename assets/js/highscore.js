const highScoresList = document.querySelector('#scores-list')
const pointsScored = JSON.parse(localStorage.getItem("pointsScored")) || []

highScoresList.innerHTML =
pointsScored.map( function(points){
    return `<li>${points.name} - ${points.points}</li>`
}).join("")