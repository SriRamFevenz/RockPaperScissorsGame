const playerChoiceDisplay = document.querySelector('.player-choice'),
    computerChoiceDisplay = document.querySelector('.computer-choice'),
    resultDisplay = document.querySelector('.result'),
    choices = document.querySelectorAll('.btns .btn'),
    winDisplay = document.querySelector('.win'),
    loseDisplay = document.querySelector('.lose'),
    tieDisplay = document.querySelector('.tie'),
    resetDisplay = document.querySelector('.reset-btn');

let playerChoice
let computerChoice

let win = 0,
    lose = 0,
    tie = 0;

choices.forEach(choice =>
    choice.addEventListener('click', (e) => {

        playerChoice = e.target.id;
        playerChoiceDisplay.innerHTML = playerChoice

        computerRandomChoice()
        checkCorrect()
        updateStatus()
        resetGame()
    }));

function computerRandomChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum === 1) computerChoice = 'rock'
    else if (randNum === 2) computerChoice = 'paper'
    else computerChoice = 'scissor'

    computerChoiceDisplay.innerHTML = computerChoice
}

function checkCorrect() {


    if ((playerChoice === 'rock' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'scissor') ||
        (playerChoice === 'scissor' && computerChoice === 'rock')) {

        resultDisplay.innerHTML = 'You Lose.'
        document.body.style.backgroundColor = '#E74032'
        lose++
    }
    else if ((playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissor')) {

        resultDisplay.innerHTML = 'You Win.'
        document.body.style.backgroundColor = '#269746'
        win++
    } else {
        resultDisplay.innerHTML = 'Tie !'
        document.body.style.backgroundColor = '#FBC31E'
        tie++
    }
}

function updateStatus() {
    winDisplay.innerHTML = win
    loseDisplay.innerHTML = lose
    tieDisplay.innerHTML = tie
}

function resetGame() {
    resetDisplay.addEventListener('click', () => {
        document.body.style.backgroundColor = '#307DEE'
        win = 0
        lose = 0
        tie = 0

        winDisplay.innerHTML = win
        loseDisplay.innerHTML = lose
        tieDisplay.innerHTML = tie

        resultDisplay.innerHTML = ''
        computerChoiceDisplay.innerHTML = ''
        playerChoiceDisplay.innerHTML = ''
    })
}


// DarkTheme

const checkInput = document.querySelector('#checkInput'),
    container = document.querySelector('.container'),
    btns = document.querySelector('.btns'),
    footer = document.querySelector('footer');

checkInput.checked = JSON.parse(localStorage.getItem('mode'))

checkInput.addEventListener('change', () => {
    ModeLocalStore()
    if (checkInput.checked) {
        container.style.backgroundColor = '#fff'
        container.style.transform = '.3s'
        container.classList.add('active')
        btns.classList.add('active')
        resetDisplay.classList.add('active')
    } else {
        ModeLocalStore()
        container.style.transform = '.3s'
        container.style.backgroundColor = '#333'
        container.classList.remove('active')
        btns.classList.remove('active')
        resetDisplay.classList.remove('active')
    }
})

function ModeLocalStore() {
    localStorage.setItem('mode', JSON.stringify(checkInput.checked));
}