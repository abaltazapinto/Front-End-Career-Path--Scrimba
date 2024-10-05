import { propertyForSaleArr } from './properties/propertyForSaleArr.js'
import { placeholderPropertyObj as defaultProperty} from './properties/placeholderPropertyObj.js'

function getPropertyHtml(propertyForSaleArr = defaultProperty ) {


    const card = document.createElement('section')
    card.classList.add('card')



    //IMG
    const img = document.createElement('img');
    img.src = propertyForSaleArr.image || defaultProperty.image
    img.alt = `Image of ${propertyForSaleArr.propertyLocation} `
    img.classList.add('card-img')

    //geral div rigth
    const rigth = document.createElement('div')
    rigth.classList.add('card-right')


    rigth.classList.add('card-right')
    //Location
    const location = document.createElement('h2');
    location.textContent = propertyForSaleArr.
    propertyLocation || defaultProperty.propertyLocation;

    //Price
    const price = document.createElement('h3')
    price.textContent = `Price: ${propertyForSaleArr.priceGBP} `

    //Description
    const description = document.createElement('p')
    description.textContent = `${propertyForSaleArr.comment}` || `${defaultProperty.comment}`
    
    //size 
    //i need to create a reduce function to have the roomsM2total
    const roomTotalm2 = propertyForSaleArr.roomsM2?.reduce((total, room) => total + room, 0) 

    const size = document.createElement('h3')
    size.textContent = `${roomTotalm2} m2` || `${defaultProperty.roomsM2} ` ;
    
    // Append all elements to the card
    rigth.appendChild(location);
    rigth.appendChild(price);
    rigth.appendChild(description)
    rigth.appendChild(size)
    
    card.appendChild(img);
    card.appendChild(rigth)
    return container.appendChild(card)
    
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
// document.getElementById('container').innerHTML = getPropertyHtml(property)

function displayProperties(propertyForSaleArr){
    propertyForSaleArr.forEach(property => {
        getPropertyHtml(property)
    })
}

displayProperties(propertyForSaleArr)
/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms). (wow)

If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.

This is the JS I want you to use to complete this challenge 👇
- import/export
- .map()
- .join()
- Object destructuring
- .reduce()
- Default parameters

The HTML and CSS have been done for you. 
This is the HTML template 👇. Replace everything in UPPERCASE with property data.

<section class="card">
    <img src="/images/IMAGE">
    <div class="card-right">
        <h2>PROPERTY LOCATION</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section> 
*/