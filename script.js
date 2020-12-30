    const nextQuestion = document.querySelector('#next-btn')
    const hintAsked = document.querySelector ('#hint')
    const questionContainer = document.querySelector('#question-container')
    const questionAsked = document.querySelector('#question')
    const answerButtons = document.querySelector('#answer')

    var questions = [
        {
            question: 'Whos is this Hollywood Actor, made his acting debut in 1990?',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XNcJSDv16IdBGeucts-lEQHaE8%26pid%3DApi&f=1',
            hint: 'He is the first hip-hop star to be nominated for an Oscar for his performances in The Pursuit of Happyness.',
            answers: [
                {text: 'Will Smith', correct: true},
                {text: 'Denzel Washington', correct: false},
                {text: 'Eddie Murphy', correct: false},
                {text: 'Leonardo DiCaprio', correct: false}
            ]
           
        },
        {
            question: 'Which RnB artist left acting to pursue a career in singing?',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl54j9rvyQz48pZet2K-6n7F34ADAcCQjHXg&usqp=CAU',
            hint: 'Although he is now most famous as a rapper, he was first known for his role on Degrassi: The Next Generation, a popular American TV series.',
            answers: [
                {text: 'Eminem', correct: false},
                {text: 'Chris Brown', correct: false},
                {text: 'Drake', correct: true},
                {text: 'Justin Timberlake', correct: false}
            ]
        },
        {
            question: 'Which Premier League Football Club has won the most Champions League Titles?',
            image: 'https://wordpress-miniclip.s3.amazonaws.com/wp-content/uploads/sites/4/2015/01/Liverpool-FC-2-1024x535.jpg',
            hint: 'Champions of 2019 champions league, were also crowned for 2019/2020 season of Premier League.',
            answers: [
                {text: 'Manchester United', correct: false},
                {text: 'Chelsea', correct: false},
                {text: 'Liverpool', correct: true},
                {text: 'Arsenal', correct: false}
            ]
        },
        {
            question: 'Whos is this talented cricketer, to lead Indian Cricket in all three formats of the game? ',
            image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-184609,resizemode-1,msid-69450227/news/sports/virat-kohli-alone-cant-win-world-cup-sachin-tendulkar.jpg',
            hint: "In 2020, he is the only player to be named in 'Team of the Decade' in all three formats Cricket.",
            answers: [
                {text: 'Virat Kohli', correct: true},
                {text: 'Vikram Solanki', correct: false},
                {text: 'Hashim Amla', correct: false},
                {text: 'Rohit Sharma', correct: false}
            ]
        },
    ]
  
    let countRightAnswers = 0;

    window.addEventListener('load', startGame)
    nextQuestion.addEventListener('click', function() {
        currentQuestion++
        setNextQuestion()
        })

        
    $(document).ready(function () {
    $('#show_hint').click(function () {
        $('#hint').toggle();
        });
    });
    

    function startGame() {
        
        shuffledQuestions = questions.sort(() => Math.random() - .5)
        currentQuestion = 0
        questionContainer.classList.remove('hide')
        countRightAnswers = 0; 
        setNextQuestion()
        }
 
    function setNextQuestion() {
        resetState()
        showQuestion(shuffledQuestions[currentQuestion])
        }
    
    function showQuestion(question) {
        questionAsked.innerText = question.question
        questionAsked.innerHTML += `<img id="main-image" class="main-image" src="${question.image}" width="500" height="300" alt="image">`
        hintAsked.innerText = question.hint
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
                localStorage.setItem('points', 'right-answers')
                return window.location.assign('/points.html')
                
                }
        if (selectedButton.dataset = correct) {
            countRightAnswers++;
         }
         document.getElementById('right-answers').innerHTML = (100 * countRightAnswers);
        }

    function setStatusClass(chosen, correct) {
        clearStatusClass(chosen)
        var element = document.getElementById("main-image");
        element.classList.remove("main-image");
        if (correct) {
            chosen.classList.add('correct')
            }
            else {
                chosen.classList.add('wrong')
                }

        }
    

    function clearStatusClass(chosen) {
        chosen.classList.remove('correct')
        chosen.classList.remove('wrong')
        }

     

 


