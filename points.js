const finalScore = document.querySelector('#points-scored')
const mostRecentScore = localStorage.getItem('finalScore')
const player = document.querySelector('#player')
const savePoints = document.querySelector('#savePoints')


finalScore.innerText = mostRecentScore;

