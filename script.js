    const play = document.querySelector('#play-btn')
    const nextQuestion = document.querySelector('#next-btn')
    const hint = document.querySelector ('#hint-btn')
    const questionContainer = document.querySelector('#question-container')
    const questionAsked = document.querySelector('#question')
    const answerButtons = document.querySelector('#answer')

    const questions = [
        {
            question: 'Whos is this Hollywood Actor, made his acting debut in 1990?',
            answers: [
                {text: 'Will Smith', correct: true},
                {text: 'Denzel Washington', correct: false},
                {text: 'Eddie Murphy', correct: false},
                {text: 'Leonardo DiCaprio', correct: false}
            ]
        },
        {
            question: 'Which RnB artist left acting to persue career in singing?',
            answers: [
                {text: 'Eminem', correct: false},
                {text: 'Chris Brown', correct: false},
                {text: 'Drake', correct: true},
                {text: 'Justin Timberlake', correct: false}
            ]
        },
        {
            question: 'Which Premier League Football Club has won the most Champions League Titles',
            answers: [
                {text: 'Manchester United', correct: false},
                {text: 'Chelsea', correct: false},
                {text: 'Liverpool', correct: true},
                {text: 'Arsenal', correct: false}
            ]
        },
        {
            question: 'Whos is this talented cricketer, to lead Indian Cricket in all three formats of the game? ',
            answers: [
                {text: 'Virat Kohli', correct: true},
                {text: 'Vikram Solanki', correct: false},
                {text: 'Hashim Amla', correct: false},
                {text: 'Rohit Sharma', correct: false}
            ]
        },
    ]

    const SCORE_POINTS = 100
    const MAX_QUESTIONS = 4

    play.addEventListener('click', startGame)
    nextQuestion.addEventListener('click', function() {
        currentQuestion++
        setNextQuestion()
        })


    function startGame() {
        play.classList.add('hide')
        shuffledQuestions = questions.sort(() => Math.random() - .5)
        currentQuestion = 0
        questionContainer.classList.remove('hide')
        setNextQuestion()
        }

    function setNextQuestion() {
        resetState()
        showQuestion(shuffledQuestions[currentQuestion])
        }
    
    function showQuestion(question) {
        questionAsked.innerText = question.question
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
                }
            button.addEventListener('click', selectAnswer)
            answerButtons.appendChild(button)
            })
        }

    function resetState() {
        clearStatusClass(document.body)
        nextQuestion.classList.add('hide')
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild)
            }
        }

    function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtons.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
            })
        if (shuffledQuestions.length > currentQuestion + 1) {
            nextQuestion.classList.remove('hide')
            }   
            else {
                play.innerText = 'Restart'
                play.classList.remove('hide')
                }
        }

    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
            }
            else {
                element.classList.add('wrong')
                }

        }

    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
        }

 


