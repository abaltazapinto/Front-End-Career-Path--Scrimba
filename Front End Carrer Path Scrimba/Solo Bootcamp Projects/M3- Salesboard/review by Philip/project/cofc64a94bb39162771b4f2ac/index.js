// javascript

// Product A info
const productA = {
    emoji: "⭐",
    revenue: 200,
    commision: 50
}



// Product B info
const productB = {
    emoji: "🔥",
    revenue: 300,
    commision: 75
}

const achievements = {
    bell: "🔔",
    money: "💰",
    trophy: "🏆"
}

//variables
//fire and star
const star = document.getElementById("star");
const fire = document.getElementById("fire");
const salesTitle = document.querySelector(".sales-heading")
const achievementsTitle = document.querySelector(".achievements-heading")
//board for live sales
const liveSalesBoard = document.getElementById("live-sales")
const listAchievements = document.querySelector(".live-achievements")
// Total Revenue board
const totalRevenueBoard = document.getElementById("total-revenue")
// Total comission board
const totalComissionBoard = document.getElementById("commission-value")

// functions
const maxElements = 21;
let countElement = 0
let liveAchievements = 0;
let totalRevenue = 0;
let totalComission = 0;

// Flags
let moneyAchievementAwareded = false

// function addStar() {
//     if(countElement < maxElements) {
//         liveSalesBoard.innerText += productA.emoji ;
//         totalRevenue += productA.revenue;
//         totalComission += productA.commision;
//         updateBoards();
//         countElement++;
//         checkAchievements();
//     }else {
//         alert("Maximum number of elements (star & fire)")
//     }
// }

// function addFire() {
//     if (countElement < maxElements) {
//         liveSalesBoard.innerText += productB.emoji;
//         totalRevenue += productB.revenue;
//         totalComission += productB.commision;
//         updateBoards();
//         countElement++;
//         checkAchievements();
//     }else {
//         alert("Maximum number of elements (star & fire)")
//     }
//     salesTitle.innerText = `Live Sales - ${countElement}`
// }

function addSale(e) {
    // look up ternary operators
    // let product = null
    // if (e.target.id === 'star') {
    //     product = productA
    // } else product = productB
    
      const product = e.target.id === 'star' ? productA : productB
    
        if (countElement < maxElements) {
        liveSalesBoard.innerText += product.emoji;
        totalRevenue += product.revenue;
        totalComission += product.commision;
        countElement++;
        updateBoards();
       
        checkAchievements();
    }else {
        alert("Maximum number of elements (star & fire)")
    }
    
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
star.addEventListener("click", addSale)
fire.addEventListener("click", addSale)

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
