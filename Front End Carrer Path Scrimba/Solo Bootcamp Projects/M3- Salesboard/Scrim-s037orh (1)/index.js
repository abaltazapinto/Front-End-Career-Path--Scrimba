// Product A info
let productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50
}

// Product B info
let productB = {
    emoji: "🔥",
    revenue: 300,
    commision: 75
}

let achievements = {
    bell: "🔔",
    money: "💰",
    trophy: "🏆"
}

//variables
//fire and star
const star = document.getElementById("star");
const fire = document.getElementById("fire");

let salesTitle = document.querySelector(".sales-heading")
let achievementsTitle = document.querySelector(".achievements-heading")

//board for live sales
let liveSalesBoard = document.getElementById("live-sales")
let listAchievements = document.querySelector(".live-achievements")
// Total Revenue board
let totalRevenueBoard = document.getElementById("total-revenue")
// Total comission board
let totalComissionBoard = document.getElementById("commission-value")

// arrays

// Loops

// functions
const maxElements = 21;
let countElement = 0
let liveAchievements = 0;
let totalRevenue = 0;
let totalComission = 0;

// Flags
let moneyAchievementAwareded = false

function addStar() {
    if(countElement < maxElements) {
        console.log("clicked")
        liveSalesBoard.innerText += productA.emoji ;
        totalRevenue += productA.revenue;
        totalComission += productA.commision;
        updateBoards();
        countElement++;
        checkAchievements();
    }else {
        alert("Maximum number of elements (star & fire)")
    }

}

function addFire() {
    if (countElement < maxElements) {
        liveSalesBoard.innerText += productB.emoji;
        totalRevenue += productB.revenue;
        totalComission += productB.commision;
        updateBoards();
        countElement++;
        checkAchievements();
    }else {
        alert("Maximum number of elements (star & fire)")
    }
    salesTitle.innerText = `Live Sales - ${countElement}`

}

function updateBoards() {
    totalRevenueBoard.innerText = totalRevenue;
    totalComissionBoard.innerText = totalComission;
    salesTitle.innerText = `Live Sales - ${countElement}`;
    achievementsTitle.innerText = `Live Achievements - ${liveAchievements}`
}

function checkAchievements() {
    if (countElement === 1)  {
        listAchievements.innerText += achievements.bell;
        liveAchievements++;
    }else if (totalRevenue > 2500 && !moneyAchievementAwareded){
        listAchievements.innerText += achievements.money
        liveAchievements++;
        moneyAchievementAwareded = true
    }else if (countElement === 15) {
        listAchievements.innerText += achievements.trophy
        liveAchievements++;
    }
}

// event listeners
star.addEventListener("click", addStar)
fire.addEventListener("click", addFire)

//toggle buton for dark-mode and light mode
const toggleButton = document.getElementById("theme-toggle")
const container = document.querySelector(".container");

if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
}

if (localStorage.getItem("theme") === "dark") {
    container.classList.add("dark-mode");
    toggleButton.innerText = "Switch to Light Mode"
} else {
    container.classList.add("light-mode");
    toggleButton.innerText = "Switch to Dark Mode";
}

toggleButton.addEventListener("click", function() {
    if(container.classList.contains("dark-mode")) {
        container.classList.remove("dark-mode");
        container.classList.add("light-mode");
        toggleButton.classList.remove("dark-mode");
        toggleButton.classList.add("light-mode");
        toggleButton.innerText = "Switch to Dark Mode"
        localStorage.setItem("theme", "light");
    }else {
        container.classList.remove("light-mode");
        container.classList.add("dark-mode");
        toggleButton.classList.remove("light-mode");
        toggleButton.classList.add("dark-mode");
        toggleButton.innerText = "Switch to Light Mode";
        localStorage.setItem("theme", "dark");
    }
});


console.log(localStorage.getItem("theme"));