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
        } else { // can be shortened
            homeCounterDiv.classList.remove('winner');
            awayCounterDiv.classList.remove('winner');
        }

}



const displayTime = document.querySelector('#cronometer')
const startBtn = document.querySelector("#start-btn")    
const resetBtn = document.querySelector("#reset-btn")
let timer;
let isRunning = false;
let [minutes, seconds] = [12, 0]



function startCronometer() { 
    // if paused start
    if (isRunning) {
        pauseCronometer()
    }else {
        start();
    }
};

function start() {
    isRunning = true;
    startBtn.textContent = '⏸'
    timer = setInterval(updateTime, 1000)
    enablePointsButton()
}

function updateTime() {
    if(seconds === 0 && minutes === 0) {
        clearInterval(timer);
        isRunning = false;
        return;
    }

    if(seconds === 0) {
        seconds = 59;
        minutes--;
    } else {
        seconds --;
    }

    displayTime.textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function pauseCronometer() {
    isRunning = false;
    startBtn.textContent = '⏵'
    clearInterval(timer);
}



const stopCronometer = () => { 
    clearInterval(cronometroInterval);
}
const resetCronometer = () => {
    pauseCronometer();
    minutes = 12;
    seconds = 0;
    displayTime.textContent = `${pad(minutes)}:${pad(seconds)}`;

}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}
const newGame = () =>  {
    homePoints = 0;
    awayPoints = 0;
    document.getElementById('home-points').textContent = homePoints;
    document.getElementById('away-points').textContent = awayPoints;
        stopCronometer();
        resetCronometer();
        highlightLeader();
        enableButtons()
        document.getElementById('period').innerText = 0;
        nextPeriodBtn();
        enablePointsButton()
        showButton();       
}

const nextPeriodBtn = () => {
    const period = document.getElementById('period').innerText
    let periodNumber = Number(period)
    periodNumber = (periodNumber + 1) % 5;
    document.getElementById('period').innerText = periodNumber;
    console.log("click")

};

function enableButtons() {
    startBtn.disabled = false;
    resetBtn.disabled = false;
    
}

const addHomePointsBtns = document.querySelectorAll(".points-button");

function enablePointsButton() {
    addHomePointsBtns.forEach(button => {
        button.disabled = false;
    });
    
}

const hideButton= (button) => {
    button.classList.add("hidden");
}

const showButton= (button) => {
    button.classList.remove("hidden");
}