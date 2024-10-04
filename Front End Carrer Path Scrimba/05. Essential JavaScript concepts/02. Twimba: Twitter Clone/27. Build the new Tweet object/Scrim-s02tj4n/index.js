import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@9.0.0/dist/esm-browser/index.js'

/*
Challenge:
1. Bring in uuidjs.
*/

const tweetInput = document.getElementById('tweet-input')
const tweetText = tweetInput.value; //this stores the text of the new tweet


document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }
})
 
function handleLikeClick(tweetId){ 
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++ 
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    render() 
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}

function handleTweetBtnClick(){
    
    const tweetText = tweetInput.value

  

    const newTweet = {
        text: tweetText,
        
        handle: '@Scrimba',
        profilePic: 'images/scrimbalogo.png',
        likes: 0,
        retweets: 0,
        replies: [
            {
                handle: `@TomCruise ✅`,
                profilePic: `./images/flower.png`,
                tweetText: `Yes! Sign me up! 😎🛩`,
            }
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: uuidv4()
    }
    console.log(newTweet)  
//     // appending to the feed

//     const feed = document.getElementById('feed')
//     const tweetElement= document.createElement('div')
//     tweetElement.classList.add('tweet')
//     tweetElement.innerHTML = `
//     <div class="tweet-inner"    
//         <img src="${newTweet.profilePic}" class="profile-pic" alt="Profile pic">
//         <div>
//             <p class=handle> ${newTweet.handle} </p>
//             <p class="tweet-text" > ${newTweet.text} </p>
//             <div class="tweet-details">
//                  <span class="tweet-detail">
//                      <i class="fa-regular fa-comment-dots"
//                      data-reply="${newTweet.uuid}"
//                      ></i>
//                      ${newTweet.replies.length}
//                  </span>
//                 <span class="tweet-detail">
//                      <i class="fa-solid fa-heart "
//                      data-like="${newTweet.uuid}"
//                      ></i>
//                      ${newTweet.likes}
//                  </span>
//                  <span class="tweet-detail">
//                      <i class="fa-solid fa-retweet "
//                      data-retweet="${newTweet.uuid}"
//                      ></i>
//                      ${newTweet.retweets}
//                  </span>
//              </div>   
//          </div>            
//      </div>
//      <div class="hidden" id="replies-${newTweet.uuid}">
         
//     </div>   
//  </div>
//     `
//      feed.appendChild(tweetElement)
// /*

// Challenge:
// 2. When the Tweet button is clicked, log out an object
//    for a new tweet. Make sure you include the text of 
//    the tweet (how can you get that?) and a unique 
//    identifier using uuidjs.
   
//    The handle @Scrimba (or whatever you prefer) and 
//    the profile pic scrimbalogo.png can be hard-coded.
// */ 
    
}

function getFeedHtml(){
    let feedHtml = ``
    
    tweetsData.forEach(function(tweet){
        
        let likeIconClass = ''
        
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }
        
        let retweetIconClass = ''
        
        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }
        
        let repliesHtml = ''
        
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`
            })
        }
        
          
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
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
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

