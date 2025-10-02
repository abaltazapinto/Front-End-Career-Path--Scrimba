1. What is a React component?

A react Component is a reusable piece of UI defined in Javacript. It can be:
    > A functional component (prefered today)
    > Or a class component (older, less common now)

Functional components are now the standard in modern React (with hooks replacing the need for most class-based logic).

React element.

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
Nothing wrong with the code unless the lack of Capital letter on the function name


3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())

the way they use to call the functional component they should use  <Header/>
Using the <>Header /> tekks React: "This is a component" and React will manage it properly (e.g. reconciliation, hooks, etc.).
```
