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

// Create a reference to the 'posts' node in the database
const postRef = ref(db, 'posts')

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
            <span class="bold likes-${index + 1}">${post.likes}</span>
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
  set(newPostRef, post)
})

function addLikeButtonListeners() {
  posts.forEach((post, index) => {
    const likeButton = document.getElementById(`like-btn-${index + 1}`)
    const likesDisplay = document.querySelector(`.likes-${index + 1}`)
    const postRef = ref(db, `posts/postId${index + 1}`);

    //add a click event to the like butn

    likeButton.addEventListener('click', () => {
      //increment locally the like count
      post.likes += 1;

      //updates the UI with the new like count
      likesDisplay.innerText = post.likes;

      //update the like count in Firebase
      update(postRef, { likes: post.likes });
    });
  });
}

function renderPosts() {
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = '';
  posts.forEach((post, index) => {
    postContainer.innerHTML += createPostHTML(post, index);
  });

  addLikeButtonListeners();
}

renderPosts()

