var highScoresList = document.querySelector('#player-list');
var pointsList = document.querySelector('#point-list')
var dateList = document.querySelector('#date-list')
var pointsScored = JSON.parse(localStorage.getItem("pointsScored")) || [];

// To retreive data and return a list.
var savedList = pointsScored.map( function(points){
    return `<li>${points.name}</li>`;
}).join("");

var savedPointsList = pointsScored.map( function(points){
    return `<li>${points.points}</li>`;
}).join("");

var savedDateList = pointsScored.map( function(points){
    return `<li>${points.date}</li>`;
}).join("");

//to display players on the Highscorers List
highScoresList.innerHTML = savedList;
pointsList.innerHTML = savedPointsList;
dateList.innerHTML = savedDateList;