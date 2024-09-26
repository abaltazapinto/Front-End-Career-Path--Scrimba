import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')

emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
/*
Challenge:
1. Change the code in line 8 so we add the 
   'highlight' class to the parent of the 
   selected input radio.
*/
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




