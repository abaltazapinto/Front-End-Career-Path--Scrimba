import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value)
})

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
})

function handleLikeClick(tweetId){
    console.log(tweetId)
    const targetTweetObj = tweetsData.find(tweet => tweet.uuid === tweetId);
    console.log("targetTweetObj", targetTweetObj) 
    if (targetTweetObj) {
        targetTweetObj.likes += 1;
        console.log(`Updated likes for UUID ${tweetId}: ${targetTweetObj.likes}`);
        const heartIconElement = document.querySelector(`.fa-heart[data-like="${tweetId}"]`)
        console.log("Heart icon element:", heartIconElement)
        if (heartIconElement) {
           const tweetElement = heartIconElement.closest('.tweet')
            console.log("Parent tweet element", tweetElement)
            if(tweetElement) {
                const likeCountElement = tweetElement.querySelector('.like-count');
                console.log("likeCountElement:", likeCountElement)
                if(likeCountElement) {
                    likeCountElement.innerHTML = `${targetTweetObj.likes}`
                } else {
                    console.log("likeCountElement not Found")
                    }
                }
            } else {
                console.log("Heart icon element not found!")
            }
         } else {
            console.log("Tweet not found")
        }
    }



function getFeedHtml(){
    let feedHtml = ``
    
    tweetsData.forEach(function(tweet){
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart"
                    data-like="${tweet.uuid}"
                    ></i>
                    <span class="like-count">
                    ${tweet.likes}
                    </span>
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
`
   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
