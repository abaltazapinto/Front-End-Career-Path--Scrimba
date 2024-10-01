document.addEventListener('click', function(e) {

   if (e.target.dataset.share){
      console.log(e.target.dataset.share)
  }

  if(e.target.dataset) {
   console.log(e.target.dataset.attribute)
  }
})

/*
Challenge:
2. Make clicking on the heart icon log out
   the id of the image.
*/

