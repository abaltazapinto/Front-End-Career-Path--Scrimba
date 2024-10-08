// script.js

const buttons = document.querySelectorAll("[data-carousel-button]")
console.log(buttons)
if (buttons) {  
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1 || button.dataset.carouselButton === "prev" ? 1 : 2;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")

                    // Ensure slides only contain elements that are `li.slide`
         const slideArray = Array.from(slides.children).filter(child => child.classList.contains('slide'));
        let currentIndex = slideArray.indexOf(activeSlide)

            console.log("currentIndex", currentIndex)

     

         // Log if we detect an issue
         if (currentIndex === -1) {
            console.error("Error: Active slide not found in slide array.");
            return; // Exit the function if there's an issue
        }

        let newIndex = currentIndex + offset

        if(newIndex < 0) {
            newIndex = slides.children + 1
        }
        if(newIndex >= slides.children.length) {
            newIndex = 0
        }

          // Log current and new active slides
          console.log("Current active slide:", activeSlide);
          console.log("New active slide index:", newIndex, "Slide element:", slides.children[newIndex]);


        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
}
)
}



// Handle dark mode toggle (optional)
const toggle = document.getElementById('darkmode-toggle')
toggle.addEventListener('change', function () {
  document.body.classList.toggle('dark-mode', toggle.checked)
})