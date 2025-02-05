import { getWatchlist, toggleWatchlist, updateButtonState } from "./helper.js";

// Handle dark mode toggle
const apiKey = '8d3707a7'
const toggle = document.getElementById("darkmode-toggle");
const label = document.getElementById("toggle-label");

toggle.setAttribute(
  "aria-label",
  "Toggle between the two theme possibles dark and light",
);

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", toggle.checked);
});

/*
my key = http://www.omdbapi.com/?i=tt3896198&apikey=8d3707a7
*/

async function handleSearch() {
    const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8d3707a7")
    const data = await res.json()
    console.log(data.Title)
    
}

handleSearch();

/* Index.js
Manages search and adding to or removing movies from the watchlist */

const form = document.getElementById("form");
const inputSearch = document.getElementById("search-movie")
const resultsCount = document.getElementById("results-count");
const resultList = document.getElementById("main-films");


let resultsArray = []

// User input
form.addEventListener('submit', async(event) => {
  event.preventDefault()
  const movieTitle = new FormData(form).get('movie-title').trim()
  inputSearch.value = "";
  console.log(inputSearch.value);
  if(movieTitle) {
    console.log('Searching for movie:', movieTitle);
    searchMovies(movieTitle)
  } else {
    alert('Please enter a movie name')
  }
})

// API CALL: SEARCHING THE Movie
async function searchMovies(movieTitle) {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`)
    const data = await response.json();
    console.log('Search results:', data);
    console.log(data.Search)
    if(data.Search){
      fetchMovieDetails(data.Search)
    }
  } catch(err){
    console.error(err)
  }
}

// API call: Fetch movie details (title, poster, ratings, runtime, genre, plot)
async function fetchMovieDetails(movies) {
  try {
    resultsArray = await Promise.all(movies.map(async(movie) => {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`)
      return await response.json()
    }))
    renderResults()
  } catch(err) {
    console.error(err)
  }
}

function renderResults() {
  document.querySelector('.no-data-initial').style.display = 'none'
  resultsCount.textContent = `About ${resultsArray.length} results`
  console.log(resultsArray);

  resultList.innerHTML = resultsArray.map(movie => `
    <ul class="movie">
        <li class="movie-details">
            <img src="${movie.Poster}" alt="${movie.Title} poster" class="movie-poster"/>
            <div class="movie-details-container">
                <div class="row-1">
                    <p class="movie-title-p">${movie.Title}</p>
                    <p class="movie-ratings-p">⭐ ${movie.imdbRating}</p>
                </div>
                <div class="row-2">
                    <p>${movie.Runtime}</p>
                    <p>${movie.Genre}</p>
                    <button class="add-btn" data-title="${movie.Title}">Add To Watchlist</button>
                </div>
                <p class="movie-plot-p">${movie.Plot}</p>
            </div>
        </li>
    </ul>
`).join('')

    resultList.addEventListener("click",e => {
      const btn = e.target.closest('.add-btn') || e.target.classList.closest('.remove-btn')
      if(btn){
        const movie = resultsArray.find(m => m.Title === e.target.dataset?.title)
        const isAdding = btn.textContent?.includes("Add To Watchlist") ? true : false
        toggleWatchlist(movie, isAdding)
        updateButtonState(btn, isAdding)
      }
    })
}


