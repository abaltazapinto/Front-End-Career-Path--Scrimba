// import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))

// root.render(
//     <h1>Hello, React!</h1>
// )


/*
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this.

*/

const h1 = document.createElement("h1")
h1.textContent = "Hello, React!"
h1.className = "header"

document.getElementById("root").appendChild(h1)

/*

Another test
/*

/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */

//import { createRoot } from "react-dom/client"

//const root = createRoot(document.getElementById("root"))

//root.render(
//    <h1> I am learning React </h1>
//)
