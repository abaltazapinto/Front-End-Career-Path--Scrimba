/* Watchlist.js
    Manages rendering and removing movies from watchlist */
    import { getWatchlist, toggleWatchlist } from "./helper.js"


    // Dark-mode 
    
    const toggle = document.getElementById("darkmode-toggle");
    const label = document.getElementById("toggle-label");

    toggle.setAttribute(
  "aria-label",
  "Toggle between the two theme possibles dark and light",
);

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", toggle.checked);
});


    const watchlistCount = document.getElementById("results-count")
    console.log(watchlistCount)

    const watchlistList = document.querySelector(".main-films");
    console.log(watchlistList);
    
    let watchlist = getWatchlist()
    
    console.log(watchlist)
    
    // if (!watchlistCount) {
    //     console.error("Error: .watchlist-count not found in the DOM!");
    //     return;
    // }
    
    function renderWatchlist() {
        if (watchlist.length > 0) {
            document.querySelector('.no-data-initial').style.display = 'none'
            watchlistCount.textContent = `About ${watchlist.length} films in your watchlist`
            watchlistList.innerHTML = watchlist.map(movie => `
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
                            <button class="remove-btn" data-title="${movie.Title}">Remove From Watchlist</button>
                            </div>
                            <p class="movie-plot-p">${movie.Plot}</p>
                            </div>
                            </li>
                            </ul>
                            `).join('')
                        } else {
            watchlistCount.textContent = `No movies in your watchlist`
            watchlistList.innerHTML = ''
            document.querySelector('.no-data-initial').style.display = 'block'
        }
        
    }
    
    renderWatchlist()
    
    watchlistList.addEventListener('click', e => {
        if(e.target.classList.contains('remove-btn')) {
            const movie = watchlist.find(m => m.Title === e.target.dataset.title)
            toggleWatchlist(movie, false)
            watchlist = getWatchlist()
            renderWatchlist()
        }
    })
