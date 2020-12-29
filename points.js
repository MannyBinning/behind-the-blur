  
const playerName = document.querySelector('#player')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const totalPoints = document.querySelector('#points-scored')
const mostRecentScore = localStorage.getItem('points')

const highScores = JSON.parse(localStorage.getItem('points')) || []



totalPoints.innerText = mostRecentScore

