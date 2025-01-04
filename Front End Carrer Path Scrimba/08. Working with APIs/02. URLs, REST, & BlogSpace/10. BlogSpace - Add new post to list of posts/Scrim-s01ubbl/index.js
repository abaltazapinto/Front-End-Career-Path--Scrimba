fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        const postsArr = data.slice(0, 102)
        let html = ""
        for (let post of postsArr) {
            html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        }
        document.getElementById("blog-list").innerHTML = html
    })

document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };
    
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(newPost => {
            console.log(newPost)
            let blogList = document.getElementById("blog-list");
            const newPostHTML = `
                <h3>${newPost.title}</h3>
                <p>${newPost.body}</p>
                <hr /> 
            `
            blogList.innerHTML = newPostHTML + blogList.innerHTML;

            //clear the form inputs
            document.getElementById("post-title").value = "";
            document.getElementById("post-body").value = "";
            /**
             * Challenge: Update the DOM with the new blog entry
             */
        })
})