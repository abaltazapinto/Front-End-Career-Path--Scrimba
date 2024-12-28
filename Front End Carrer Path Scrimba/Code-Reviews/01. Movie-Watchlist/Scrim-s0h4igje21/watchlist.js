const apiKey = '4ba758d6'
const watchlistResultEl = document.getElementById('watchlist-result')

function getWatchlist(){
    let watchlist = localStorage.getItem("watchlist")
    if(watchlist){
        watchlist = JSON.parse(watchlist)
    }
    else {
        watchlist = []
    }
    console.log(watchlist);
    return watchlist
}

function renderEmptyWatchlist() {
    watchlistResultEl.classList.remove('full')
    watchlistResultEl.classList.add('empty')
    watchlistResultEl.innerHTML = `
        <div class="empty-watchlist-content">
            <p>Your watchlist is looking a little empty...</p>
            <a href="index.html">
                <i class="fa-solid fa-circle-plus" aria-hidden="true"></i>
                Let’s add some movies!
            </a>
        </div>`   
}

function renderMovieListHtml(watchlist){
    if(watchlist.length === 0){
        renderEmptyWatchlist()     
    }
    else{
        watchlist.forEach(function(imdbID){
            watchlistResultEl.innerHTML = ""
            watchlistResultEl.classList.remove('empty')
            watchlistResultEl.classList.add('full')
            fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=short&r=json`)
                .then(res => res.json())
                    .then(function(data){
                        // console.log(data)
                        watchlistResultEl.innerHTML += `
                            <div class="movie-container" data-div-id="${imdbID}">
                                <div class="img-container">
                                    <img src="${data.Poster === "N/A" ? "/images/no-poster.jpg" : data.Poster}" alt="Movie Poster">
                                </div>
    
                                <div class="description">
                                    <div class="text-container">
                                        <h2>${data.Title}</h2>
    
                                        <span class="score" aria-label="movie rating">
                                            <i class="fa-solid fa-star" aria-hidden="true"></i>
                                            ${data.imdbRating}
                                        </span>
                                    </div> 
                                    
                                    <div class="text-container">
                                        <span class="runtime">${data.Runtime}</span>
    
                                        <span>${data.Genre}</span>
                                        
                                        <button class="remove-btn" id="remove-btn" data-movie-id="${imdbID}">
                                            <i class="fa-solid fa-circle-minus"></i>
                                            Remove
                                        </button>
                                    </div>
    
                                    <p>${data.Plot}</p>
                                </div>
                            </div>`
                    })
        })
    }
    
}

document.addEventListener('click', function(e){
    const target = e.target.closest('#remove-btn')

    if(target){
        const movieId = target.dataset.movieId
        removeMovie(movieId)

        //Remove the movie div from the content
        document.querySelector(`[data-div-id='${movieId}']`).remove()

        let watchlist = getWatchlist()
        if (watchlist.length === 0){
            renderEmptyWatchlist()
        }
    }
})

function removeMovie(movieId){
    let watchlist = getWatchlist()
    const index = watchlist.indexOf(movieId)

    watchlist.splice(index, 1)
    localStorage.setItem("watchlist", JSON.stringify(watchlist))
}

const watchlist = getWatchlist()
renderMovieListHtml(watchlist)

