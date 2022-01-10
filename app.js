// War
//create a deck of 52 cards
//give each card a suit and value
//shuffle deck of 52 cards
//split deck into 2 seperate decks of 26 cards
    //one for the player and one for the computer
//flip top card face up for each player
//compare the two cards
//higher card wins
//winner gets both cards 
    //these cards are sent to bottom of deck
//draw results in players flipping three more cards
    //compare the last card flipped
//continue until one player has all cards


//52 cards with values
const suits = ['♥', '♦', '♠', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardValues = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
};

//deck variable to hold all the cards
let deck = []

for (let suitCount = 0; suitCount < 4; suitCount++) {
    for (let valueCount = 0; valueCount < 13; valueCount++) {
        deck.push(values[valueCount] + suits[suitCount]);
    }
}

console.log(deck);

//shuffle function
//loops through all cards and swaps current card with another card
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const x = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[x]] = [deck[x], deck[i]];
    }
    return deck;
}
console.log(shuffleDeck());

// splitting cards into two equal decks of 26 cards
const halfDeck = Math.ceil(shuffleDeck().length / 2);
const firstHalf = shuffleDeck().splice(0, halfDeck);   
const secondHalf = shuffleDeck().splice(-halfDeck);

console.log(firstHalf);
console.log(secondHalf);


//-------------------------------------------------------------------------

let playerDeck, computerDeck, playerCard, computerCard

let computersCardSlot = document.querySelector(".computers-card");
let computerDeckDiv = document.querySelector(".computers-deck");
let computerCardCount = document.querySelector(".computer-card-count");

let result = document.querySelector(".text");

let playersCardSlot = document.querySelector(".players-card");
let playerDeckDiv = document.querySelector(".players-deck");
let playerCardCount = document.querySelector(".player-card-count");

document.addEventListener("click", () => {
        flipCard();
})

startNewGame()
function startNewGame() {
    shuffleDeck();

    playerDeck = firstHalf;
    computerDeck = secondHalf;

    freshDeck()
}
//add a way to reset/count number of cards in deck
function freshDeck() {
    result.innerHTML = "";
    computerCardCount.innerHTML = "";
    playerCardCount.innerHTML = "";

    cardsInDeck()
}

//move previously made flipcard function here and move event listner to under global variables
function flipCard() {
    let playerCard = playerDeck.shift();
    let computerCard = computerDeck.shift();
    
    playersCardSlot.innerText = playerCard[0]
    computersCardSlot.innerText = computerCard[0]

    cardsInDeck()

    if (wonTheRound(playerCard, computerCard)) {
        playerCardCount.innerHTML = cardsInDeck()
    } else if (wonTheRound(computerCard, playerCard)) {
        computerCardCount.innerHTML = cardsInDeck()
    }  
}

//updates the card count in each deck
function cardsInDeck() {
    computerCardCount.innerHTML = computerDeck.length
    playerCardCount.innerHTML = playerDeck.length
}

//make function to compare two cards and see who won
function wonTheRound(firstCard, secondCard) {
    if (grabPlayerCardValue(firstCard) > grabComputerCardValue(secondCard)){
        result.innerHTML = "You lost this round"  
        playerDeck.push(grabPlayerCardValue(firstCard))
        playerDeck.push(grabComputerCardValue(secondCard))

    } else if (grabComputerCardValue(secondCard) > grabPlayerCardValue(firstCard)) {
        result.innerHTML = "You won this round!"
        computerDeck.push(grabPlayerCardValue(firstCard))
        computerDeck.push(grabComputerCardValue(secondCard))
        
    } else {
        result.innerHTML = "WAR! - play another card"
        
    }
}

function grabPlayerCardValue (card) {
    if (card.includes("A")) {
        return 14
    } else if (card.includes("K")) {
        return 13
    } else if (card.includes("Q")) {
        return 12
    } else if (card.includes("J")) {
        return 11
    } else if (card.includes("10")) {
        return 10
    } else if (card.includes("9")) {
        return 9
    } else if (card.includes("8")) {
        return 8
    } else if (card.includes("7")) {
        return 7
    } else if (card.includes("6")) {
        return 6
    } else if (card.includes("5")) {
        return 5
    } else if (card.includes("4")) {
        return 4
    } else if (card.includes("3")) {
        return 3
    } else if (card.includes("2")) {
        return 2
    } 
}

function grabComputerCardValue(card) {
    if (card.includes("A")) {
        return 14
    } else if (card.includes("K")) {
        return 13
    } else if (card.includes("Q")) {
        return 12
    } else if (card.includes("J")) {
        return 11
    } else if (card.includes("10")) {
        return 10
    } else if (card.includes("9")) {
        return 9
    } else if (card.includes("8")) {
        return 8
    } else if (card.includes("7")) {
        return 7
    } else if (card.includes("6")) {
        return 6
    } else if (card.includes("5")) {
        return 5
    } else if (card.includes("4")) {
        return 4
    } else if (card.includes("3")) {
        return 3
    } else if (card.includes("2")) {
        return 2
    } 
}