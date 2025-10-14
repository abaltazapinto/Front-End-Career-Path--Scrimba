/*
	In React function components, you must return JSX from the function.

	/*/


import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

function Page() {
  return (
    <ol>
      <li>
        Clayverest started building their app on JavaScript, Node, and so on.
      </li>
      <li>
        That being said, it’s a good way to start learning a new pathway to web dev.
      </li>
      <li>
        And it’s one of the most important front-end frameworks out there.
      </li>
      <li>
        Another framework that can be used is Angular — I have a book at home to study it.
      </li>
    </ol>
  )
}

root.render(<Page />)
