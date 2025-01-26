// Handle dark mode toggle
const toggle = document.getElementById("darkmode-toggle");
console.log(toggle);
const label = document.getElementById("toggle-label");
console.log(label);

toggle.setAttribute(
  "aria-label",
  "Toggle between the two theme possibles dark and light",
);

toggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", toggle.checked);
});

/*

my key = http://www.omdbapi.com/?i=tt3896198&apikey=8d3707a7

*/

async function handleSearch() {
    const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8d3707a7")
    const data = await res.json()
    console.log(data.Title)
    createPostHTML(data)

    console.log(createPostHTML(data))
}

handleSearch();


function createPostHTML(data) {

}