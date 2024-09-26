import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', getMatchingCatsArray)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
} 

function getMatchingCatsArray(){
/*
Challenge:
1. Add code to getMatchingCatsArray so 
   that the two existing lines of code 
   only run if an emotion has been selected.
*/

const selectedEmotion = document.querySelector('input[type="radio"]:checked')

if(selectedEmotion) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        console.log("the emotion was selected and it is:", selectedEmotion)
    }else{
        console.log("no emotion selected")
    }
    
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




