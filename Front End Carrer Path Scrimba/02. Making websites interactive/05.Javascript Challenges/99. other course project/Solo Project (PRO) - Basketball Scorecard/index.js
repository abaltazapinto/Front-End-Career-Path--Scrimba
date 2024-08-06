let homePoints = 0;
let awayPoints = 0;
let cronometroInterval; // Certifique-se de que esta variável está no escopo global

console.log(awayPoints);

function addHomePoints(points) {
    homePoints += points;
    document.getElementById('home-points').innerHTML = homePoints;
    highlightLeader();
}

function addAwayPoints(points) {
    awayPoints += points;
    document.getElementById('away-points').innerHTML = awayPoints;
    highlightLeader();
}

function reset() {
    homePoints = 0;
    awayPoints = 0;
    document.getElementById('home-points').innerHTML = homePoints;
    document.getElementById('away-points').innerHTML = awayPoints;
    highlightLeader();
}

function highlightLeader() {
    var homeScoreElement = document.getElementById('home-points');
    var guestScoreElement = document.getElementById('away-points');

    var homeScore = +homeScoreElement.innerText || 0;
    var guestScore = +guestScoreElement.innerText || 0;

    homeScoreElement.classList.remove('leader');
    guestScoreElement.classList.remove('leader');

    if (homeScore > guestScore) {
        homeScoreElement.classList.add('leader');
    } else if (guestScore > homeScore) {
        guestScoreElement.classList.add('leader');
    }
}

function startCronometro() {
    const display = document.querySelector('#cronometro');
    let duration = 60 * 10; // 10 minutos em segundos
    let timer = duration, minutes, seconds;

    cronometroInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10); // Pega a parte inteira dos minutos
        seconds = parseInt(timer % 60, 10); // Pega os segundos restantes

        // Adiciona zero à esquerda se menor que 10
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.log(minutes + ":" + seconds);

        let tempo = minutes + ":" + seconds;
        display.innerHTML = tempo; // Atualiza o display

        // Decrementa o timer e para o cronômetro quando chegar a zero
        if (--timer < 0) {
            clearInterval(cronometroInterval);
        }
    }, 1000);
}

function stopCronometro() {
    clearInterval(cronometroInterval);
}

function resetCronometro() {
    clearInterval(cronometroInterval);
    document.querySelector('#cronometro').textContent = '10:00';
}

// Função adicional para verificar se um objeto está vazio
var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        console.log(`object is empty ${Object.keys(obj)}`);
        return Object.keys(obj).length === 0;
    }
}
