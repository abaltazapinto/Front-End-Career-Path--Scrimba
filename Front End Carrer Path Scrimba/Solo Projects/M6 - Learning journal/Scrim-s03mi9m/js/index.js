// Handle dark mode toggle
const toggle = document.getElementById("darkmode-toggle");
console.log(toggle);
console.log("afdsuihdsa");
// toggle.setAttribute(
//   "aria-label",
//   "Toggle between the two theme possibles dark and light",
// );
toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", toggle.checked);
  });

  /********************************************************************************
   * ******************Menu-toogle-----------------------------*****************
   * *******************************************************************************
   */

document.addEventListener("click", function(){
  const menu = document.querySelector(".menu");
  const toggle = document.querySelector(".menu-toggle");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("hidden")
  })
})