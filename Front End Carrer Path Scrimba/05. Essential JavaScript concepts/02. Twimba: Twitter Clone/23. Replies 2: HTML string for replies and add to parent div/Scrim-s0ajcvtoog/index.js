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
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
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
            console.log(tweet.uuid)
/*
Challenge:
1. If a tweet has replies, iterate through the replies
   and wrap each one in the HTML template provided below. 
   Make sure to replace words in UPPERCASE with data from 
   the tweet. On each iteration, add this HTML to repliesHtml.
   
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="PROFILE PIC" class="profile-pic">
            <div>
                <p class="handle">HANDLE</p>
                <p class="tweet-text">TWEET TEXT</p>
            </div>
        </div>
</div>
*/
    tweet.replies.forEach(function(reply) {
            repliesHtml = `
                <div class="tweet-reply">
                <div class="tweet-inner">
                    <img src="${reply.profilePic}" class="profile-pic">
                        <div>
                            <p class="handle">${reply.handle}</p>
                            <p class="tweet-text">${reply.tweetText}</p>
                        </div>
                    </div>
            </div>
            `;
    });               

          
        feedHtml += `
                        <div class="tweet">
                            <div class="tweet-inner">
                                <img src="${tweet.profilePic}" class="profile-pic">
                                <div>
                                    <p class="handle">${tweet.replies.handle}</p>
                                    <p class="tweet-text">${tweet.replies.tweetText}</p>
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
                            <div id="replies-${tweet.reply}">
                                ${repliesHtml}
                            </div>
                        </div>
                        `
/*
Challenge:
2. Place repliesHtml in its parent div remembering 
   to update that divs id.
*/

        }
   })
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()

