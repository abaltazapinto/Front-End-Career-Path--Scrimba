/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.
 
 Hints: 
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you 
   can then put into the div with `innerHTML`
 */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const postsArr = data.slice(0, 5)
        const postDiv = document.getElementById("posts");
        console.log(postsArr)
        // my answer
        // for (let i = 0; i < postsArr.length; i++) {
        //   let postsDiv = document.getElementById("posts");
        //   let h3[i] = document.createElement('h3');
        //   h3.textContent = data[i].title;
        //   console.log(h3.textContent)
        //   let h6 = document.createElement('h6');
        //   h6.textContent = data[i].body;
        //   console.log(h6.textContent) 
        //   posts.appendChild(h3)
        //   posts.appendChild(h6)
        // }
        postsArr.array.forEach(post => {    

          const postContainer = document.createElement("div");
          postContainer.className = "post";

          const postTitle = document.createElement("h3");
          postTitle.textContent = post.title;

          const postBody = document.createElement("p");
          postBody.textContent = post.body;

          postContainer.appendChild(postTitle);
          postContainer.appendChild(postBody);

          postDiv.appendChild(postContainer);
        });  
    })
    .catch(err => console.error("Error fetching posts:", err))