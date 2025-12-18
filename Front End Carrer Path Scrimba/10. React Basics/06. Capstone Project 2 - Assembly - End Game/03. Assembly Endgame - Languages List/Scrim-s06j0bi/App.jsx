import React from "react"
import { languages } from "./languages"
/**
 * Goal: Build out the main parts of our app
 *
 * Challenge: Create the language chips. Use the
 * `languages.js` file to pull in the array of
 * languages to use, which contains the language
 * name, background color, and text color.
 *
 * Hint for layout: use a flex container that can wrap
 * to layout the languages.
 */

export default function AssemblyEndgame() {

	const languageChips = languages.map((language, index) => (
		<span key={index} style={{backgroundColor: language.backgroundColor, padding: "10px", color: language.color}}>
			{language.name + " "}
		</span>
	))
  
		console.log(languageChips)
    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
			<section className="languages">
				{languageChips}
			</section>
        </main>
    )
}
