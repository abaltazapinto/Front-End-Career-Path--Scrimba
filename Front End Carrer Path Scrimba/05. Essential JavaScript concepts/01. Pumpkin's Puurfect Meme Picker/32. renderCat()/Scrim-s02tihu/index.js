import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
let memeModalInner = document.getElementById('meme-modal-inner')
console.log("mememModalInner",memeModalInner)
const memeModal = document.getElementById('meme-modal')

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        
        const matchingCatsArray = catsData.filter(function(cat){
            
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotion)
            }            
        })
        console.log("matching Cats array:", matchingCatsArray)
        return matchingCatsArray 
    } else {
        console.log('No emotion selected')
        return [];
    }
}

function getSingleCatObject(){
    
    const catsArray = getMatchingCatsArray()

    console.log("Cats Array", catsArray);

    if(!catsArray || catsArray.length === 0) {
        console.log('No matching cats found or no emotion selected')
        return null
    }

    if (catsArray.length === 1){
        return catsArray[0]
    }
    else {
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return catsArray[randomNumber]
    }
    
}

function renderCat(){
/*
Challenge:
1. Take the object that is returned by 
   getSingleCatObject and save it to a const 
   called "catObject".
   maybe
2. Set memeModalInner’s innerHTML to the HTML 
   string below, remembering to insert the relevant 
   data from catObject to replace the UPPERCASE text.

3. Set memeModal’s display property to "flex". 
 
       `<img 
        class="cat-img" 
        src="./images/CAT IMAGE"
        alt="CAT ALT TEXT"
        >`
*/ 

const catObject = getSingleCatObject();
console.log("catObject", catObject)
function getData(catObject) {
    for (let properties in catObject) {
       console.log(`${key}: ${catObject[key]}`) 
    }
} 

if(!catObject) {
        console.log('No cat to display')
        return;
    }

    // proceed with rendering if there's a valid catObject
    console.log(catObject)

    const emotionsHTML = catObject.emotionTags.map(tag => `<span>${tag}</span>`).join(' & ');

    
    const htmlContent = `
        <img 
            class="cat-img"
            src= "./images/${catObject.image}"
            alt="${catObject}">
        <div class="emotions">Emotions: <b>${emotionsHTML}</b></div>
    `;

    memeModalInner.innerHTML = htmlContent
    console.log(htmlContent)
    console.log(emotionsHTML)
    console.log

    memeModal.style.display = "flex"

        
}

renderCat()
 
function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)

const closeBtnModal = document.querySelector('#meme-modal-close-btn')
console.log(closeBtnModal)

function closeModal(closeBtnModal) {
    memeModal.style.display = 'none';    
}

closeBtnModal.addEventListener('click', closeModal)


