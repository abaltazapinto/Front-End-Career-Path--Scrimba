🔍 --- CODE REVIEW --- 🔍

Hi Andre!
Great job on your approach of  the Learnign journal project!
Your work demonstrates a solid understanding of the fundamentals. Below, I've highlighted your project's strengths and included a few suggestions for improvement.

# HTML

    🌟 Strengths:
	
    - The aside tag is used creatively for dark mode.
    - You've used semantic elements like <header>, <main>, <footer>, and <aside>. This improves readability and accessibility while helping search engines and assistive technologies understand the structure of your page.
    
    ✨ Suggestions:

	- Ensure consistent indentation to improve code readability and maintainability.
    - To add multiple classes to an HTML element, separate them with a space (" ") instead of &&.
    - Use <p> for descriptions and reserve <h> tags for headers and titles.
    - Each section should have only one <h1>. Use <h2> for article titles, <h3> for subtitles, and <p> for body text.
    - In the *<script>* tag, defer is not positioned correctly. It should be inside the *<script>* tag like: "<script src="./js/index.js" defer> </script>"
    
    📋 Tips:

    - Always place your meta tags at the top of the <head> element.
    - The "container" div can be eliminated by just usign the class on the <main> element
    - Its common convention tu use kebab-case (For example, this-is-kebab-case) in HTML and camelCase for JavaScript. You can change your clasess to ensure best practices (ScrimbaDeepDive could be updated to scrimba-deep-dive)
    - Having <h1>, <h2>, <h3>, and <h4> all in one article might overwhelm users and impact SEO.
    
# CSS
*(I made all CSS changes in styles.css. You can check the differences with your previous file or the About Me section stylesheet)*
    
    🌟 Strengths:
    
    - Great job using relative units for flexibility and responsiveness.
	- The use of :root and .dark-mode with variables (--background, --text-color-1, etc.) makes toggling between themes efficient and consistent.
    - Great job with the use of responsive styles with media queries for small, medium, and large devices, ensuring adaptability across screen sizes.
    - Subtle hover effects (.menu a:hover, label:active:after) enhance user interaction without being overly flashy.

    
    ✨ Suggestions:
    
	- ".menu" styles appear twice—this could be merged for simplicity and clarity. (i deleted the first instance sisnce the second one rewrote it completely)
    
    - You can use "object-fit: cover;" to prevent images from being distorted 

    - Update the grid-template-areas names to match standard grid syntax. Ensure they align with the grid-area values in child elements.
    
    - there are several properties that are duplicated. Make sure to double check your code before deploying.
    
    - You can use "align-items: stretch;" in your main container for a cleaner look in your articles 

    📋 Tips:
        
    - Ensure all variables declared in :root are actively used in the styles.
    
    - Where applicable, use min-width, max-width, or min-height/max-height to enhance responsiveness.
    
    - Using "margin: auto;" can be an easy way for centering items. It does not work for all cases but it is a helpful tool


# JavaScript

    🌟 Strengths:

	- Toggling the dark-mode class directly on the body ensures the entire page transitions effectively.
     
    - Handling the dark mode and menu toggle independently maintains clean, modular code.
    
    ✨ Suggestions:

	- You're nesting the menu toggle's addEventListener inside another "click" event on the document. This will reattach the event listener every time any click occurs, leading to performance issues and potential bugs. Instead, move the event listener outside. 

I've implemented most of these changes in this Scrim so you can review them directly.
I hope this feedback is helpful! If you have any questions or need further clarification, feel free to reach out in this project's Discord thread.

    *Keep up the great work!* ✨🚀