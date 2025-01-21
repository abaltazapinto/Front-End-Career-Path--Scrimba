let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `

            determineCardWinner(data.cards[0], data.cards[1]);
        })
        .catch(error => {
            console.error("Error fetching cards:",error);
        });
})
/**
 * Challenge:
 * 
 * Try to determine which of the 2 cards is the "winner" (has higher value)
 * Aces are the card with the highest "score"
 * 
 * Part 2:
 * Instead of logging the winner to the console, 
 * display an `h2` on the screen above the 2 cards 
 * that declares who the winner is.
 * 
 * If card1 is the higher card, display "Computer wins!"
 * If card2 is the higher card, display "You win!"
 * If they're equal, display "War!"
 */

function determineCardWinner(card1, card2) {
    const winnerDiv = document.getElementById("winner")
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        winnerDiv.textContent = "Card 1 wins!";
    } else if (card1ValueIndex < card2ValueIndex) {
        winnerDiv.textContent = "Card 2 wins!";
    } else {
        winnerDiv.textContent = "War!";
    }
}

// Keeping this test case for reference, but should delete later
// const card1Obj = {
//     value: "JACK"
// }
// const card2Obj = {
//     value: "QUEEN"
// }

// determineCardWinner(card1Obj, card2Obj)