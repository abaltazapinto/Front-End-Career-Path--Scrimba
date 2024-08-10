// Cronometro 
let cronometroInterval 
let homePoints = 0;
let awayPoints = 0;

const addHomePoints = (points) => {
    homePoints += points
    document.getElementById('home-points').innerHTML = homePoints;
    highlightLeader();
}

const addAwayPoints = (points) => {
    awayPoints += points
    document.getElementById('away-points').innerHTML = awayPoints;
    
    highlightLeader();
}

const highlightLeader = () => {

const homeCounter = document.getElementById('home-points');
const awayCounter = document.getElementById('away-points');
const homeCounterDiv = document.getElementById('points-home');
const awayCounterDiv = document.getElementById('points-away');

const homePoints = parseInt(homeCounter.textContent)
const awayPoints = parseInt(awayCounter.textContent)

    if (homePoints > awayPoints) {
        homeCounterDiv.classList.add('winner');
        awayCounterDiv.classList.remove('winner');
    } else if (awayPoints > homePoints) {
        awayCounterDiv.classList.add('winner');
        homeCounterDiv.classList.remove('winner');
    } else if (homePoints == awayPoints) {
        homeCounterDiv.classList.remove('winner');
        awayCounterDiv.classList.remove('winner');
    }

}





function startCronometer() { 
    const display = document.querySelector('#cronometer')
    let duration = 60 * 20;
    let timer = duration, minutes, seconds;

    cronometroInterval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = Math.floor(timer % 60);

        // se o numero for menor que dez para adicionar o  04
        minutes = minutes < 10? "0" + minutes : minutes;
        seconds = seconds < 10? "0" + seconds : seconds;

        const tempo = `${minutes}:${seconds}`;
        display.innerHTML = tempo;

        if (--timer < 0) {
            clearInterval(cronometroInterval);
        }
    }, 1000);
}

const stopCronometer = () => { 
    clearInterval(cronometroInterval);
}

const resetCronometer = () => {
    document.querySelector('#cronometer').textContent = '20:00';
}

const newGame = () =>  {
    homePoints = 0;
    awayPoints = 0;
    document.getElementById('home-points').textContent = homePoints;
    document.getElementById('away-points').textContent = awayPoints;

    stopCronometer();
    resetCronometer();
    highlightLeader();
}