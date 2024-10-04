import { playlistArr } from './playlist.js'

/*
Challenge
1. Refactor the code below to use .map() 
   instead of the for loop.
   ⚠️ Don't worry about the commas for now.
*/

const playlistHtml = [] 


playlistArr.map(function(album) {
    playlistHtml.unshift(
            `<section class="card">
                <div class="card-start">
                    <img src="./images/${album.albumArt}">
                </div>
                    <div class="card-mid">
                        <h4 class="card-title">${album.title}</h4>
                        <p class="card-artist">${album.artist}</p>
                    </div>
                <div class="card-end">
                    <p class="card-menu">...</p>
                </div>
            </section>
                `
    )

    
})


document.getElementById('container').innerHTML = playlistHtml.join('')
