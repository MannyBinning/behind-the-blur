var highScoresList = document.querySelector('#player-list');
var pointsScored = JSON.parse(localStorage.getItem("pointsScored")) || [];

// To retreive data and return a list.
var savedList = pointsScored.map( function(points){
    return `<li>Player: ${points.name} -- Points: ${points.points} -- Time: ${points.date} </li>`;
}).join("");


//to display players on the Highscorers List
highScoresList.innerHTML = savedList;
