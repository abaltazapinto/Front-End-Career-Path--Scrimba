// script.js

const buttons = document.querySelectorAll("[data-carousel-button]")
console.log(buttons)
if (buttons) {  
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const offsetless = button.dataset.carouselButton === "prev" ? -1 : 1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        console.log("active slide",activeSlide)

        let newIndex = [...slides.children].indexOf(activeSlide) + offset 
        console.log("new index", newIndex)

        if(newIndex < 0) newIndex = slides.children - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
}
)
}