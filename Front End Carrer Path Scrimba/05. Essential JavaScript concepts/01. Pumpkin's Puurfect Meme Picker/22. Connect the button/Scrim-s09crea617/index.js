import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImage = document.getElementById('get-image-btn')

/*
Challenge:
1. Set up an eventlistener which calls a new
   function called "getMatchingCatsArray" when
   the "Get Image" button is clicked.
2. getMatchingCatsArray should save the value
   of the checked radio input to a const and 
   log out that const.
*/

getImage.addEventListener('click', getMatchingCatsArray)

function getMatchingCatsArray(e) {
    const checkedRadio = document.querySelector('input[type="radio"]:checked')
    console.log(checkedRadio.value)
}



emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    // remove all instances of the highlight class
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

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




