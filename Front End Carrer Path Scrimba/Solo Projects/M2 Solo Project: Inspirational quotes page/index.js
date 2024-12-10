import quotes from "./quotes.js";

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./images/nature.jpg",
    "./images/photo-1719937050792-a6a15d899281.avif",
    "./images/photo-1722050764765-836958ab98eb.avif",
    "./images/photo-1722448614145-551f03e44e1c.avif",
    "./images/photo-1722648404090-2179fba1b4b0.avif",
    "./images/photo-1722648404113-b71577ddd17d.avif",
    "./images/premium_photo-1722008867967-8ce75c5f06b3.avif",
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url('${randomImage}')`;

  //quotes

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // select the quote in a different way but at the same time effective !!

  const quoteElement = document.querySelector(".quote .text");
  quoteElement.innerHTML = `<h1>${randomQuote.quote}</h1><h2>- ${randomQuote.author}</h2>`;
});
