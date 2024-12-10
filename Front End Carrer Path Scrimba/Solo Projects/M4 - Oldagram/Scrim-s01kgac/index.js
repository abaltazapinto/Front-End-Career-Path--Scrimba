import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js'
import {
  getDatabase,
  ref,
  set,
  update,
  push,
  onValue,
  remove,
} from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js'

const appSettings = {
  databaseURL:
    'https://oldagram-2079c-default-rtdb.europe-west1.firebasedatabase.app/',
}

//initialize firebase
const app = initializeApp(appSettings)
const db = getDatabase(app)

// Identify the use with local Storage
let userId = localStorage.getItem('userId');
if (!userId) {
  userId = 'user_' + Math.floor(Math.random() * 100000);
  localStorage.setItem('userId', userId);
}



const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
]


// Handle dark mode toggle (optional)
const toggle = document.getElementById('darkmode-toggle')
toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', toggle.checked)
})



/* function to automatically create the Post */ 

function createPostHTML(post, index) {
  return `
    <div class="container-avatars">
      <div class="img-name">
        <img id="post-avatar" src="${post.avatar}" alt="User Avatar" />
        <div class="avatar-name" id="avatar-name-${index + 1}">
          <p class=bold avatar-name> ${post.name}</p>
          <p class=avatar-location> ${post.location}</p>
        </div>
      </div>

      <img alt="face of ${post.name}" class="main-images" src="${post.post}" id="post" />
      <div class="interaction">
        <div class="post" data-post-id="${index}">
          <button class="like-btn like" id="like-btn-${index + 1}"><span>❤️</span>
          </button>
          <button class="comment-btn"><span>💬</span></button>
          <button class="share-btn"><span>🔗</span></button>
          <div class="likes-interaction">
            <span class="bold likes-${index + 1}">${post.likes || 0}</span>
            <span class="margin-top-left no-bold">likes</span>
          </div>
          <div class="comments">
            <span class=bold margin-bottom>${post.username} </span>
            <span>${post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

//Store each post in the Firebase in a wai that each one have an index 
posts.forEach((post, index) => {
  const newPostRef = ref(db, `posts/postId${index + 1}`)

  //check if post already exits in Firebase
  onValue(newPostRef, (snapshot) => {
    if (!snapshot.exists()) {
      //If the post does not exist set it !!
      set(newPostRef, post)
    }
  });
});


  
function addLikeButtonListeners() { 
    const postRef = ref(db, `posts`);

    onValue(postRef, (snapshot) => {
      const postData = snapshot.val(); // gets the data from firebase

   
      Object.keys(postData).forEach((key,index) => {
          const post = postData[key];
          const likeButton = document.getElementById(`like-btn-${index + 1}`);
          const likesDisplay = document.querySelector(`.likes-${index + 1}`)
          const postRef = ref(db, `posts/${key}`);

          //check if the user already liked the post
          const likedBy = post.likedBy || []; 


          if (!likedBy.includes(userId)) {
            //add a click event to the like butn
            likeButton.addEventListener('click', () => {
              //increment the like count
              const newLikes = post.likes + 1; 
              const updatedLikedBy = [...likedBy, userId];

              // Update the like count in Firebase with newLikes
              update(postRef, { likes: newLikes, likedBy: updatedLikedBy })
                .then(() => {
                  console.log('Like updated successfully in Firebase!');
                })
                .catch((error) => {
                  console.error('Error updating likes in Firebase: ', error);
                });

              // update UI
              likesDisplay.innerText = newLikes;
            });
          } else {
            console.log("You have already liked this post.")
            console.log(`${userId}`)
          }
        })
    });
}

function renderPosts() {
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = '';

  const postRef = ref(db, 'posts');

  onValue(postRef, (snapshot) => { 
    const postsData = snapshot.val();
    console.log(postsData)

    if (!postsData) {
      console.log("No posts found in the database.");
      return;
    } 

    // loops over the posts data and render each post
    Object.keys(postsData).forEach((key, index) => {
      const post = postsData[key];

      if (typeof post.likes === 'undefined') {
        post.likes = 0;
      }
      postContainer.innerHTML += createPostHTML(post, index);
    });

    addLikeButtonListeners();
    }, {
      onlyOnce: true
    });
}

renderPosts()

//Handle the images of the users .

const firstPostAvatar = posts[0].avatar;

document.getElementById('post-avatar').src = firstPostAvatar
console.log(src, document.getElementById('post-avatar').src) 
console.log("LOL LOL")
