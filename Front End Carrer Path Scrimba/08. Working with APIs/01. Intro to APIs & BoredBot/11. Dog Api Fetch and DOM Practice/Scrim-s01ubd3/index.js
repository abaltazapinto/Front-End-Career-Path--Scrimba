/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.message;
       
       // i should create an image elemnt
       const image = document.createElement('img');
       image.src = imageUrl;
       
       // Get a reference to the container in your HTML whe you want to display 
         //the image
         //const container = document.getElementById('image-container')
         
         //or find the first available element in the DOM
         const firstElement = document.querySelector('#image-container');
         
         // Insert the image before the first element
         firstElement.appendChild(image);
    })
         .catch(error => {
            console.error('Error fetching dog image', error)
         });
