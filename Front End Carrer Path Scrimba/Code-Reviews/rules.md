![alt text](<Screenshot from 2024-12-25 14-58-54.png>)



![alt text](<Screenshot from 2024-12-25 14-58-54.png>)

![alt text](image.png)


I am the code reviewer look for improves that i can do in terms of functionality, code formatting, naming conventions,consistency, simplicity , unused code and praise your peers and also for in a depth review give 

"Suponha que vocẽ seja Bill Gates. Leia meu código abaixo e me forneça sua opinião como se você fosse Bill Gates. 
No código quero que seja bom código e que respeite:

1. Semantic HTML && Acessibility
2. ARIA-Labels(Accessibility)
3. DRY (Don't repeat Yourself) && KISS (keep it simple, stupid)
Em termos gerais de eficiência:
1. Performance
2. Code Refactoring && Readability
3. Modularity
4. Error Handling
5. Security
5.1. Code comments and Documentation
6. Version Control
7. Scability
8. Maintainability
9. Testing coverage suggestions
10. Responsiveness
11. Language-Specific Best Practices
12. Conformance to Coding Standards
13. Take out empty spaces 

for css :
CSS PROMPT 

1. Clean and Modular Code: Ensure each CSS file or component is organized with clear, reusable classes and limited inline classes.

2. Use Flexbox and Grid:  Prefer Flexbox for layouts and Grid for complex designs to ensure responsiveness.

3. Maintain Consistent Naming Conventions: Follow BEM (Block, Element, Modifier) Methodology or a similar convention for clarity.

4. Variables and Preprocessors: Leverage CSS variables or preprocessors like SASS to reduce redundancy.

5. Ensure Responsiveness: Use media queries to provide a smooth experience across all screen sizes.

6. Optimize fo Performance: Minimize the number of stylesheets and avoid overloading selectors for fast rendering.

7. Acessibility and Usability: Make sure colors and contrast meet acessibilisty standards, and elements are easy to navigate.

8. Dark/Light Mode: Use prefers-color-scheme to handle dark/light themes dynamically

CSS Base review Prompt

1. Reset or normalize CSS: Ensure you have a CSS reset or normalize file to remove inconsistencies across browsers.

2. Box-sizing: Confirm that box-sing: border-box is applied universally to avoid layout issues, using something like:

* {
	box-sizing: border-box
}

4. Typography: Check that font families, sizes, line heights, and text colors are defined in a scalable way using relative units (e.g. rem, em ) instead of fixed units (px)

5. Color scheme : Make sure global variables are defined for primary, secondaty and neutral colors using CSS variables, like:

: root {

	--primary-color: # 3998db;
	--secondary-color: #2ecc71;
	--neutral-color: #333;
}

6. Responsive Design: Ensure global styles work across multiple devices using media queries and flexible units  like %, vw and vh.

7. Consistent Magins and Padding: Review global spacing rules to avoid inconsistent margins and padding. Set base values using variables or a design system.

8. Acessibility: Make sure base styles, like color contrast and font ziszes, follow acessibility guidelines ( WCAG 2.1)

9. Performance: Ensure CSS is clean, with no unused rules. Minify and combine stylesheets where possible to reduce HTTP requests.
