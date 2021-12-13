var quiz = [
    {
        question: 'Which of these is NOT a programming language?',
        options: ['JavaScript', 'Python', 'Java', 'Apple'],
        correct: 'Apple'
    },
    {
        question: 'What does CSS stand for?',
        options: ['Computer Style Sheet', 'Cascading Style Sheet', 'Colorful Style Sheet', 'Careful Style Sheet'],
        correct: 'Cascading Style Sheet'
    },
    {
        question: 'What are people who write code called?',
        options: ['Programmers', 'Professors', 'Directors', 'Manufacturers'],
        correct: 'Programmers'
    },
    {
        question: 'In JavaScript, what element is used to store multiple values in a single variable?',
        options: ['Arrays', ' Strings', 'Functions', 'Buttons'],
        correct: 'Arrays'
    },
    {
        question: 'What is considered to be the most popular programming language in the world?',
        options: ['HTML', 'CSS', 'JavaScript', 'jQuery' ],
        correct: 'JavaScript'
    },
]

var timer = 60
var score = 0

var startBtn = document.getElementById('start-btn')
var questionContainer = document.getElementById('question-container')
var optionsContainer = document.getElementById('options-container')
var timerContainer = document.getElementById('timer-container')
var timerInterval
var instructions = document.getElementById("instructions")

startBtn.addEventListener('click', function() {
    startBtn.setAttribute('class', 'hidden')
    instructions.setAttribute("class", "hidden")
    displayQuestionOne()
    displayTime(60)
    startTime()
})
function displayTime (timeRemaining) {
   timerContainer.innerHTML = timeRemaining
}
function startTime() {
    timerInterval = setInterval(function(){
       timer--
       if(timer===0){
           endQuiz()
       }
       displayTime(timer)
    },1000)
}

function displayQuestionOne() {
    questionContainer.textContent = quiz[0].question
    for (var i = 0; i < quiz[0].options.length; i++) {
        var optionsBtn = document.createElement('button') 
        optionsBtn.setAttribute('id', quiz[0].options[i])
        optionsBtn.textContent = quiz[0].options[i]
        optionsContainer.append(optionsBtn)

        optionsBtn.addEventListener('click', function(event) {
            if (event.target.id === quiz[0].correct) {
                score += 20
                console.log('correct');
                console.log(score);
            } else {
                timer -= 10
                console.log('incorrect');
            }
            displayQuestionTwo()
        })
    }
}

function displayQuestionTwo() {
    questionContainer.textContent = ''
    optionsContainer.textContent = ''

    questionContainer.textContent = quiz[1].question
    for (var i = 0; i < quiz[1].options.length; i++) {
        var optionsBtn = document.createElement('button') 
        optionsBtn.setAttribute('id', quiz[1].options[i])
        optionsBtn.textContent = quiz[1].options[i]
        optionsContainer.append(optionsBtn)

        optionsBtn.addEventListener('click', function(event) {
            if (event.target.id === quiz[1].correct) {
                score += 20
                console.log('correct');
                console.log(score);
            } else {
                timer -= 10
                console.log('incorrect');
            }
            displayQuestionThree()
        })
    }
}

function displayQuestionThree() {
    questionContainer.textContent = ''
    optionsContainer.textContent = ''

    questionContainer.textContent = quiz[2].question
    for (var i = 0; i < quiz[2].options.length; i++) {
        var optionsBtn = document.createElement('button') 
        optionsBtn.setAttribute('id', quiz[2].options[i])
        optionsBtn.textContent = quiz[2].options[i]
        optionsContainer.append(optionsBtn)

        optionsBtn.addEventListener('click', function(event) {
            if (event.target.id === quiz[2].correct) {
                score += 20
                console.log('correct');
                console.log(score);
            } else {
                timer -= 10
                console.log('incorrect');
            }
            displayQuestionFour()
        })
    }
}

function displayQuestionFour() {
    questionContainer.textContent = ''
    optionsContainer.textContent = ''

    questionContainer.textContent = quiz[3].question
    for (var i = 0; i < quiz[3].options.length; i++) {
        var optionsBtn = document.createElement('button') 
        optionsBtn.setAttribute('id', quiz[3].options[i])
        optionsBtn.textContent = quiz[3].options[i]
        optionsContainer.append(optionsBtn)

        optionsBtn.addEventListener('click', function(event) {
            if (event.target.id === quiz[3].correct) {
                score += 20
                console.log('correct');
                console.log(score);
            } else {
                timer -= 10
                console.log('incorrect');
            }
            displayQuestionFive()
        })
    }
}

function displayQuestionFive() {
    questionContainer.textContent = ''
    optionsContainer.textContent = ''

    questionContainer.textContent = quiz[4].question
    for (var i = 0; i < quiz[4].options.length; i++) {
        var optionsBtn = document.createElement('button') 
        optionsBtn.setAttribute('id', quiz[4].options[i])
        optionsBtn.textContent = quiz[4].options[i]
        optionsContainer.append(optionsBtn)

        optionsBtn.addEventListener('click', function(event) {
            if (event.target.id === quiz[4].correct) {
                score += 20
                console.log('correct');
                console.log(score);
            } else {
                timer -= 10
                console.log('incorrect');
            }
            endQuiz()
        })
    }
}

function endQuiz() {
    clearInterval(timerInterval)
    questionContainer.textContent = ''
    optionsContainer.textContent = ''

    questionContainer.textContent = 'Your Final Score Is: ' + score

    var input = document.createElement('input')
    input.setAttribute('placehold', 'What is your name?')
    optionsContainer.append(input)

    var submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    optionsContainer.append(submitBtn)

    submitBtn.addEventListener('click', function() {
        var storage = JSON.parse(localStorage.getItem('highscore'))
        if (storage === null) {
            storage = []
        }
        var user = {
            name: input.value,
            currentScore: score
        }
        console.log(user)
        storage.push(user)
        localStorage.setItem('highscore', JSON.stringify(storage))

    })
}