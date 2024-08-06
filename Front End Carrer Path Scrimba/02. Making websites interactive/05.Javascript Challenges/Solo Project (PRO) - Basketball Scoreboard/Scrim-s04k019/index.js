const homeCounter = document.getElementById('home-points');
const awayCounter = document.getElementById('away-points');
const homeCounterDiv = document.getElementById('points-home');
const awayCounterDiv = document.getElementById('points-away');

const homePoints = parseInt(homeCounter.textContent)
const awayPoints = parseInt(awayCounter.textContent)

if (homePoints > awayPoints) {
    homeCounterDiv.classList.add('winner');
} else if (awayPoints > homePoints) {
    awayCounterDiv.classList.add('winner');
}


