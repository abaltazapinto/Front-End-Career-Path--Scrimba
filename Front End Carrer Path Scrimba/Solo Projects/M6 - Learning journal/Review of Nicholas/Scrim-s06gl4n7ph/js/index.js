// javascript
// Handle dark mode toggle
const toggle = document.getElementById("darkmode-toggle");
toggle.setAttribute(
  "aria-label",
  "Toggle between the two theme possibles dark and light",
);

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", toggle.checked);
  });

  /********************************************************************************
   * ******************Menu-toogle-----------------------------*****************
   * *******************************************************************************
   */

const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
  
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("hidden")
  })