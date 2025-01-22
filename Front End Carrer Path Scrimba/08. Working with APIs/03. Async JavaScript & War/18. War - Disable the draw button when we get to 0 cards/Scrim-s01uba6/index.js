let deckId
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingText = document.getElementById("remaining")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`
            deckId = data.deck_id
            console.log(deckId)
            console.log(drawCardBtn)
            console.log(data.remaining)
            if(data.remaining < 0) {
                drawCardBtn.disabled = true;
            }
        })
}

newDeckBtn.addEventListener("click", handleClick)

/**
 * Challenge:
 * 
 * Disable the Draw button when we have no more cards to draw from
 * in the deck.
 * 
 * Disable both the functionality of the button (i.e. change
 * `disabled` to true on the button) AND the styling (i.e. add
 * a `disabled` CSS class to make it look unclickable)
 */

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards: ${data.remaining}`

            if(data.remaining > 0) 
            {         
                cardsContainer.children[0].innerHTML = `
                    <img src=${data.cards[0].image} class="card" />
                `
                cardsContainer.children[1].innerHTML = `
                    <img src=${data.cards[1].image} class="card" />
                `
                const winnerText = determineCardWinner(data.cards[0], data.cards[1])
                header.textContent = winnerText
            }

            console.log(typeof data.remaining)
            console.log(data.cards)

            console.log(data.remaining < 2)

            if(data.cards.length < 2){
                header.textContent = "Game over! No cards remaining.";
                console.log("Attempting to disable button...")
                drawCardBtn.disabled = true;
                console.log("Button disabled state:", drawCardBtn.disabled);
                return;
            }
            if(data.remaining < 0) {
                drawCardBtn.disabled = true;
                header.textContent += " - Game Over!";
            }
        })
})

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    
    if (card1ValueIndex > card2ValueIndex) {
        return "Card 1 wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
        return "Card 2 wins!"
    } else {
        return "War!"
    }
}

