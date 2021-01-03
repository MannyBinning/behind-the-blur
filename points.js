const endScore = document.querySelector('#points-scored')
const player = document.querySelector('#player')
const savePoints = document.querySelector('#savePoints')


endScore.innerHTML = localStorage.getItem('finalScore');



const highScores = JSON.parse(localStorage.getItem('highScores')) || []

function saveHighScore(e) {
    e.preventDefault()

    const score = {
        score: localStorage.getItem('finalScore'),
        name: player.value
    }

    highScores.push(score)

    highScores.sort(function(a,b){
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('highscores.html')

    
}