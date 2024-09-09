let firstCard = 9
let secondCard = 12
let extraCard=0
let hasBlackJack=false
let isAlive=true 
let resultEL=document.getElementById("message-El")
let sumEl=document.querySelector("#sum-El")
let cardsEl=document.querySelector("#cards-El")
let message=""


sum=firstCard+secondCard
function startGame(){
    cardsEl.textContent="Cards: "+firstCard+", "+secondCard
    sumEl.textContent="Sum: "+sum
    if(sum<=20){
        message="Do you want to draw a new card?"
        resultEL.textContent=message
        console.log(message)
        isAlive=true
        hasBlackJack=false
    }
    else if(sum===21){
        message="Congrats! You've won the Blackjack!!"
        resultEL.textContent=message
        console.log(message)
        isAlive=true
        hasBlackJack=true
    }
    else{
        message="You are out of the game!"  
        resultEL.textContent=message
        console.log(message)  
        isAlive=false
        hasBlackJack=false
    }
    
    console.log(hasBlackJack)
    console.log(isAlive)
}

function newCard(){
    extraCard=7
    sum+=extraCard
    startGame()
}

function newGame(){
    sum=0
    firstCard=0
    secondCard=0
    extraCard=0
    cardsEl.textContent="Cards: "
    sumEl.textContent="Sum: "
}