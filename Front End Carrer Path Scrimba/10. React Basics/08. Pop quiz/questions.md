1. Where does React put all of the elements I create in JSX when I
   call `root.render()`?

When you call root.render*() in React, you're telling React to take the JSX you wrote and render it into the DOM node you gave it - usually a <div id="root"> in your html.

For example:

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

This means" " REnder the <App /> component inside the element with ID root."

React creates a virtual DOM from your JSX and updates the actual DOM inside the root element to match.

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
this line will not crash - JSX is just sintax. If youre in a React setup (e.g. with Babel), the JSX will compile into a React element.

running:

	console.log(<h1>Hello world!</h1>)

will output an object similar to this (simplified):

	{
		type: "h1",
		props: { children: "Hello world!| },
		...
	}
React creates a JavaScript object to represent this element. That's why gets logged - it's not HTML.

	> ***Bonus***: Parentheses are only needed when JSX spans multiple lines.

3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

You cannot return multiple JSX elements side by side without wrapping them into a single parent.

root.render(
	<>
		<h1>Hi there</h1>
		<p>This is my website!</p>
	</>
)
JSX must return one root element. Thats why wrapping is required.

i dont know everything but i think that imperative is like the way that works js before hand the react.


4. What does it mean for something to be "declarative" instead of "imperative"?

	> Imperative: you tell the browser how to do things, step by step.
	> example:
		const h1 = document.createElement("h1")
	h1.textContent = "Hello"
	document.getElementById("root").appendChild(h1)

	> Declarative: You tell React what you want, and React figures out the steps.

	> Example (React)
		<h1>Hello</h1>

React is declarative - you declare what the UI should look like based on state, and React handles the DOM updates for you.

5. What does it mean for something to be "composable"?

that we van use the same element in different in different parts of the page just needed to call this compound


Composable means you can build small, reusable components and combine them to create more complex UIs.

function Header() {
  return <h1>My Site</h1>
}

function Footer() {
  return <footer>© 2025</footer>
}

function App() {
  return (
    <>
      <Header />
      <main>Welcome!</main>
      <Footer />
    </>
  )
}



