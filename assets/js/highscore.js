const highScoresList = document.querySelector('#scores-list')
const pointsScored = JSON.parse(localStorage.getItem("pointsScored")) || []
const savedList = pointsScored.map( function(points){
    return `<li>${points.name} - ${points.points} - ${points.date}</li>`
}).join("")


highScoresList.innerHTML = savedList
