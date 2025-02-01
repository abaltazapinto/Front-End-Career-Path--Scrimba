/* Utils.js:
    Contains common features like updateLcallStorage, toggleWatchlist, and updateButtonState 
*/

// Get the wathclist from LocalStorage
const getWatchlist = ( ) => JSON.parse(localStorage.getItem('My Watchlist')) || []

// Update watchlist in localStorage
const updateLocalStorage = watchlist => localStorage.setItem('My Watchlist', JSON.stringify(watchlist))

const toggleWatchlist = (movie, isAdding) => {
    let watchlist = getWatchlist()

    if(isAdding) {
        if(!watchlist.some(m => m.Title === movie.Title)) watchlist.unshift(movie)
    } else watchlist = watchlist.filter(m => m.Title !== movie.Title)

    updateLocalStorage(watchlist)
}

//update button state (add/remove)
const updateButtonState = (button, isInWatchlist) => {
    button.textContent = isInWatchlist ? "Remove From Watchlist" : "Add To Watch list"
    button.classList.toggle('add-btn', !isInWatchlist)
    button.classList.toggle('remove-btn', isInWatchlist)
}

export {
    getWatchlist,
    updateButtonState,
    updateLocalStorage,
    toggleWatchlist
}
