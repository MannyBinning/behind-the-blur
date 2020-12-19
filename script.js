const question = document.getElementById('question')
const answers = Array.from(document.getElementById('answers'))
const scoreText = document.getElementById('score')

let currentQuestion = {}
let acceptAnswers = true
let score = 0
let availableQuestions = []

let questions = [
    {
    question: 'What is 3?',
    answers: [
      { text: '3', correct: true },
      { text: '22', correct: false },
      { text: '8', correct: false },
      { text: '24', correct: false }
    ]
  },
  {
    question: 'Who is 5?',
    answers: [
      { text: '6', correct: false },
      { text: '4', correct: false },
      { text: '5', correct: true },
      { text: '1', correct: false }
    ]
  },
  {
    question: 'what is this?',
    answers: [
      { text: 'this', correct: true },
      { text: 'that', correct: false },
      { text: 'those', correct: false },
      { text: 'what', correct: false }
    ]
  },
  {
    question: 'What is 16?',
    answers: [
      { text: '10', correct: false },
      { text: '16', correct: true },
      { text: '22', correct: false },
      { text: '22', correct: false }
    ]
  }
]



