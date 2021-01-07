var endScore = document.querySelector('#points-scored');
var player = document.querySelector('#player');
var pointsScored = JSON.parse(localStorage.getItem('pointsScored')) || [];

// code found using https://tecadmin.net/
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


// Final points scored in the quiz to appear on the points page 
endScore.innerHTML = localStorage.getItem('finalScore');


// function brought in from points.html page to save the points 
function savePointsScored(e) {
    e.preventDefault();

//making sure a name is added in input box before
    if (player.value === "")
        {
            alert("You must fill a name.");
            return false;
        }
    window.localStorage.setItem("dateTime", dateTime);

//code used with the help of Brian Design - Tutorials. 
    var points = {
        points: localStorage.getItem('finalScore'),
        name: player.value,
        date: localStorage.getItem('dateTime')
    };

    pointsScored.push(points);

    pointsScored.sort(function(points,name){
        return name.points - points.points;
    });

//limiting the names displayed on the highscores list to 5 
    pointsScored.splice(10);

    localStorage.setItem('pointsScored', JSON.stringify(pointsScored));

    //heading to highscore page once score saved 
    window.location.assign('highscores.html');
    
}