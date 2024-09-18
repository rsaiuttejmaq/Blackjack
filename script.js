// cards
let cards = []
let sum
let i = 1

//status of game
let hasBlackJack = false
let isAlive = true
let state = 1

//ids
const resultEL = document.getElementById("message-El")
const sumEl = document.querySelector("#sum-El")
const cardsEl = document.querySelector("#cards-El")
const rulesBtn = document.getElementById('rules-btn')
const rulesDv= document.getElementById('rules')
let message = ""

//initializing 
reset()
message = "Want to Play ?"
resultEL.textContent = message
rulesDv.style.display = 'none'

//functions
function reset() {
    cards.fill(0)
    cards[0] = Math.floor(Math.random() * 13) + 1;
    cards[1] = Math.floor(Math.random() * 13) + 1;
    sum = cards[0] + cards[1]
    message = "Click on Play to start the game"
    resultEL.textContent = message
    resultEL.style.color = "white"
}

function renderGame() {
    if (state === 1) {
        state = 3
        cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            display("Do you want to draw a new card?", true, false)
        }
        else if (sum === 21) {
            display("Congrats! You've won the Blackjack!!", true, true)
        }
        else {
            display("You are out of the game!", false, false)
            resultEL.style.color = "red"
        }

        console.log(hasBlackJack)
        console.log(isAlive)
    }
    else if (state === 2) {
        sumEl.textContent = "Sum: " + sum
        if (sum <= 20) {
            display("Do you want to draw a new card?", true, false)
        }
        else if (sum === 21) {
            display("Congrats! You've won the Blackjack!!", true, true)
        }
        else {
            display("You are out of the game!", false, false)
            resultEL.style.color = "red"
        }

        console.log(hasBlackJack)
        console.log(isAlive)
    }
    else if (state === 3) {
        cardsEl.textContent = "You are in middle of a game!"
        sumEl.textContent = "To Start Fresh, Click on New Game"
    }
    else {
        cardsEl.textContent = "Game Over!"
        sumEl.textContent = "Click on New Game"
    }
}

function newCard() {
    state = 2
    if (sum > 21) {
        state = 0
        cardsEl.textContent = "Game Over!"
        sumEl.textContent = "Start a New Game"
        return;
    }
    cards[++i] = Math.floor(Math.random() * 13) + 1;
    sum += cards[i]

    sumEl.textContent = "Sum: " + sum
    console.log("Drawing a new card")
    renderGame()
    cardsEl.textContent += ", " + cards[i]
}

function newGame() {
    state = 1
    cards.fill(0)
    sum = cards[0] + cards[1]
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1]
    sumEl.textContent = "Sum: " + sum
    reset()
}

function display(message, isAlive, hasBlackJack) {
    resultEL.textContent = message
    console.log(message)
    isAlive = isAlive
    hasBlackJack = hasBlackJack
}

// rules visibility
rulesBtn.addEventListener('click', () => {
    if (rulesDv.style.display === 'none') {
        rulesDv.style.display = 'block';
        rulesBtn.innerHTML="Rules" + "&#8593;"
    } else {
        rulesDv.style.display = 'none';
        rulesBtn.innerHTML="Rules" + "&#8595"
    }
});
