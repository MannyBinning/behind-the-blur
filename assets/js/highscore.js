var highScoresList = document.querySelector('#scores-list');
var pointsScored = JSON.parse(localStorage.getItem("pointsScored")) || [];

// To retreive data and return a list.
var savedList = pointsScored.map( function(points){
    return `<li>${points.name} -- ${points.points} -- ${points.date}</li>`;
}).join("");

//to display players on the Highscorers List
highScoresList.innerHTML = savedList;
