import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js'
import {
  getDatabase,
  ref,
  set,
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
//Store each post in the Firebase
posts.forEach((post, index) => {
  const newPostRef = ref(db, `posts/postId${index + 1}`)
  set(newPostRef, post)
})
posts.forEach((post, index) => {
  const postRef = ref(db, `posts/postId${index + 1}`)

  //ouvir firebase
  onValue(postRef, (snapshot) => {
    const postData = snapshot.val()

    if (postData) {
      posts[index].likes = postData.likes
      console.log(index)

      /* document.querySelector(`.likes-${index+1}`).innerText = `${posts[index].likes} likes`; */
    }
  })
})

// Handle dark mode toggle (optional)
const toggle = document.getElementById('darkmode-toggle')
toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', toggle.checked)
})

const firstPostAvatar = document.querySelector('#post-avatar')
console.log(firstPostAvatar)
firstPostAvatar.src = 'images/avatar-vangogh.jpg'

const namePostAvatar = document.querySelector('#avatar-name-1')
namePostAvatar.innerHTML = `<p class="bold avatar-name" id="avatar-name-1">${posts[0].name}</p> <br>
<p class=avatar-location> ${posts[0].location}</p>
`

//interaction of the buttons wait and at the end build a real time database for this .

const likes = document.querySelector('.likes-1')

const likeBtn = document.getElementById('like-btn')
const commentBtn = document.querySelector('.comment-btn')
const shareBtn = document.querySelector('.share-btn')

//firebase
const updateLikes = (postId, newLikes) => {
  const postRef = ref(db, `posts/${postId}/likes`)

  set(postRef, newLikes)
    .then(() => {
      console.log('likes updated in Firebase sucessfully')
    })
    .catch((error) => {
      console.error('Error updating likes in Firebase', error)
    })
}

likeBtn.addEventListener('click', () => {
  const postId = 0
  posts[postId].likes++
  likes.innerText = posts[postId].likes + ` likes`
  // Firebase
  updateLikes(postId, posts[postId].likes)
})

commentBtn.addEventListener('click', () => {
  alert('you want to comment')
})

shareBtn.addEventListener('click', () => {
  alert('You shared this post')
})

//comments username and comment

let comments = document.querySelector('.comments')
comments.innerHTML = `<span class="bold margin-bottom" >${posts[0].username} </span> <span> ${posts[0].comment}</span> `
