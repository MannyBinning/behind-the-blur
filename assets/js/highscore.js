var highScoresList = document.querySelector('#scores-list');
var pointsScored = JSON.parse(localStorage.getItem("pointsScored")) || [];
var savedList = pointsScored.map( function(points){
    return `<li>${points.name} - ${points.points} - ${points.date}</li>`;
}).join("");


highScoresList.innerHTML = savedList;
