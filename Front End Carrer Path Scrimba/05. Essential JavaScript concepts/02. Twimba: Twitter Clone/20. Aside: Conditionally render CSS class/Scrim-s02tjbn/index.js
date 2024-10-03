const galleryContainer = document.getElementById('gallery-container')

/*
Challenge:
1. Add functionality so that when a user 
   clicks the share icon it turns green. 
   Clicking it a second time should return 
   it to white.
*/


let isLiked = false
let isShared = false

document.addEventListener('click', function(e){
    if(e.target.dataset.heart){
        isLiked = !isLiked
        render()
    }
    else if(e.target.dataset.share){
        isShared = !isShared
        render()
    }
})

function render(){ 
    
    let heartClass = ''
    let sharedClass = ''
    
    if(isLiked){
        heartClass = 'liked'
    }

    if (isShared) {
        sharedClass = 'shared'
    }
       
    let imageHtml = `
    		<div id="image-1" class="img-container">
			<img src="dino2.jpeg" alt="Man in front of dinosaur">
			<div class="social-icons-container">
				<i class="fa-solid fa-heart ${heartClass}" data-heart="image-1"></i>
				<i class="fa-solid fa-share ${sharedClass}" data-share="image-1"></i>
			</div>
    `
    galleryContainer.innerHTML = imageHtml
    console.log(galleryContainer)
}

render()