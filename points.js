const endScore = document.querySelector('#points-scored')
const player = document.querySelector('#player')
const savePoints = document.querySelector('#savePoints')


endScore.innerHTML = localStorage.getItem('finalScore');

