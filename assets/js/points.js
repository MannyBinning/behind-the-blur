const endScore = document.querySelector('#points-scored')
const player = document.querySelector('#player')
const savePoints = document.querySelector('#savePoints')
const pointsScored = JSON.parse(localStorage.getItem('pointsScored')) || []

// Final points scored in the quiz to appear on the points page 
endScore.innerHTML = localStorage.getItem('finalScore');


// function brought in from points.html page to save the points 
function savePointsScored(e) {
    e.preventDefault()

    const points = {
        points: localStorage.getItem('finalScore'),
        name: player.value
    }

    pointsScored.push(points)

    pointsScored.sort(function(points,name){
        return name.points - points.points
    })

    pointsScored.splice(5)

    localStorage.setItem('pointsScored', JSON.stringify(pointsScored))

    //heading to highscore page once score saved 
    window.location.assign('highscores.html')

    
}