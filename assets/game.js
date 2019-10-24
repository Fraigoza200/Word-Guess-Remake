// Defining variables for the game 

let wordBank = ['html', 'css', 'javascript','node']

let randomNumberGenerator = [Math.floor(Math.random() * wordBank.length)]

let chosenPrograms = ''

let remainingGuesses = 10

let wins = 0

let losses = 0

let wrongLetters = []

let output = []

let letterInWord = false

function letsStart() {

    chosenPrograms = wordBank[Math.floor(Math.random() * wordBank.length)]

    console.log(chosenPrograms)

    remainingGuesses = 10
    wrongLetters =[]
    output = []

    for (let i = 0; i < chosenPrograms.length; i++) {
        output.push(' _ ')
    }

    let guessingLines = document.getElementById('guessing-lines')
    guessingLines.textContent = output.join(' ')

    let numGuessRemain= document.getElementById('number-guess-remain')
    numGuessRemain.textContent = 'Number of guesses remaining:' + remainingGuesses

    let lettersGuessed = document.getElementById('letters-already-guessed')
    lettersGuessed.textContent = 'Letters already guessed:' + wrongLetters.join(' ')


}

function letterCheck (letter) {

    let letterInWord = false

    for(let i =0; i < chosenPrograms.length; i++){

        if (letter === chosenPrograms[i]){
            output[i] = letter
            letterInWord = true
        }
    }

    if(!letterInWord) {
        wrongLetters.push(letter)
        remainingGuesses--
    }


    let guessingLines = document.getElementById('guessing-lines')
    guessingLines.textContent = output.join(' ')
    
    let numGuessRemain = document.getElementById('number-guess-remain')
    numGuessRemain.textContent = 'Number of guesses remaining:' + remainingGuesses

    let lettersGuessed = document.getElementById('letters-already-guessed')
    lettersGuessed.textContent = 'Letters already guessed:' + wrongLetters
}

function showImages() {
    if(chosenPrograms === 'css'){
        document.getElementById('image').src = './assets/images/css.jpg'
    }
    else if(chosenPrograms === 'html'){
        document.getElementById('image').src = './assets/images/html.jpg'
    }
    else if(chosenPrograms === 'javascript'){
        document.getElementById('image').src = './assets/images/javascript.jpg'
    }
    else if(chosenPrograms === 'node'){
        document.getElementById('image').src = './assets/images/node.jpg'
    }

}

function Game() {
    if((output.join(''))=== chosenPrograms){
        wins++
        let winsText = document.getElementById('wins-text')
        winsText.textContent = 'wins' + wins
        showImages()
        window.alert('you guessed it correctly!')
        letsStart()
    }
    else if(remainingGuesses === 0){
        losses++
        let lossesText = document.getElementById('losses-text')
        lossesText.textContent = 'losses' + losses
        letsStart()
    }
}


document.onkeypress = function(event){
    if (event.keyCode >= 97 && event.keyCode <= 122) {
        let userGuess = event.key
        console.log(userGuess)
        letterCheck(userGuess);
        Game();
    }
}

letsStart();