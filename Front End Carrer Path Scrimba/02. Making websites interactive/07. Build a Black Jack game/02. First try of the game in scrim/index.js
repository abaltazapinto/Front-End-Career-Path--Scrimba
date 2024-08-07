let firstCard = Math.floor(Math.random() * 11) + 2
let secondCard = Math.floor(Math.random() * 11) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.




function startGame() {
console.log(sum)
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
    document.getElementById("cards").innerText = `${firstCard} and a ${secondCard}`
    document.getElementById("sum").innerText = `You got the sum of ${sum}`
    document.getElementById("message-el").innerText = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
        document.getElementById("sum").innerText = `You got the sum of ${sum}`
          document.getElementById("cards").innerText = `${firstCard} and a ${secondCard}`
          document.getElementById("message-el").innerText = "Wohoo! You've got Blackjack! 🥳"
} else {
    message = "You're out of the game! 😭"
    isAlive = false
      document.getElementById("cards").innerText = `${firstCard} and a ${secondCard}`
    document.getElementById("sum").innerText = `You got the sum of ${sum}`
      document.getElementById("message-el").innerText = "You're out of the game! 😭"
}
console.log(message)
    
}