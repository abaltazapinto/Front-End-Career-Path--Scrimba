let deckId;

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            
            deckId = data.deck_id

            document.getElementById("draw-cards").disabled = false;
        })
}

document.getElementById("new-deck").addEventListener("click", handleClick)

document.getElementById("draw-cards").addEventListener("click", () => {
    if (!deckId) {
        console.error('Deck not created yet!')
        return;
    }
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            const imageUrls = data.cards.map(card => card.image);

            const container = document.getElementById('card-container');
            container.innerHTML = '';
            imageUrls.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                container.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error fetching cards:', error);
        })
})


/**
 * Challenge:
 * 
 * Display the images of the 2 cards you drew in the browser.
 * Probably best to use `innerHTML` to insert a couple <img> elements
 * on the page.
 */