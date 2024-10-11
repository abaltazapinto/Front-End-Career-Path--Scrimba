// script.js
import { menuArray } from "./data.js";

// Handle dark mode toggle
const toggle = document.getElementById("darkmode-toggle");
toggle.setAttribute(
  "aria-label",
  "Toggle between the two theme possibles dark and light",
);
toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
//handle the carousel
const buttons = document.querySelectorAll("[data-carousel-button]");
if (buttons) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset =
        button.dataset.carouselButton === "next"
          ? 1
          : -1 || button.dataset.carouselButton === "prev"
            ? 1
            : 2;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      const sanitizedAriaLabel = DOMPurify.sanitize(
        `The magic plates of our restaurant`,
      );
      activeSlide.setAttribute("aria-label", sanitizedAriaLabel);
      // Ensure slides only contain elements that are `li.slide`
      const slideArray = Array.from(slides.children).filter((child) =>
        child.classList.contains("slide"),
      );
      let currentIndex = slideArray.indexOf(activeSlide);
      // Log if we detect an issue
      if (currentIndex === -1) {
        console.error("Error: Active slide not found in slide array.");
        return; // Exit the function if there's an issue
      }
      let newIndex = currentIndex + offset;
      if (newIndex < 0) {
        newIndex = slides.children + 1;
      }
      if (newIndex >= slides.children.length) {
        newIndex = 0;
      }
      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });
}
//hanle the object menu
menuArray.forEach((item, e) => {
  const menuSection = document.getElementById("menu-items");
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-items");
  const imgItem = document.createElement("img");
  imgItem.setAttribute("loading", "lazy");
  imgItem.setAttribute(`aria-label`, `Image of ${item.name}`);
  imgItem.classList.add("img-item");
  imgItem.src = `${item.image}`;
  imgItem.alt = item.name;
  const wrapImgPlus = document.createElement("div");
  wrapImgPlus.classList.add("wrappedItems");
  const itemSolo = document.createElement("div");
  itemSolo.classList.add("description");
  const ariaName = item.name;
  const itemName = document.createElement("h3");
  itemName.setAttribute("aria-label", `Choose one ${ariaName}`);
  itemName.textContent = DOMPurify.sanitize(item.name);
  const itemIngredients = document.createElement("p");
  itemIngredients.textContent = DOMPurify.sanitize(item.ingredients.join(", "));
  const itemING = item.ingredients.join(", ");
  itemIngredients.setAttribute(
    "aria-label",
    `This ${ariaName} has this ingredients ${itemING}`,
  );
  const itemPrice = document.createElement("p");
  const ariaPrice = item.price;
  itemPrice.setAttribute(
    "aria-label",
    `The price of your item is ${ariaPrice}`,
  );
  itemPrice.classList.add("price");
  itemPrice.textContent = DOMPurify.sanitize(`$${item.price}`);
  const button = document.createElement("div");
  button.classList.add("plus");
  const addButton = document.createElement("button");
  addButton.id = "button+";
  addButton.textContent = "+";
  addButton.setAttribute("aria-label", `Add ${ariaName} to your plate`);
  addButton.classList.add("plus-button");
  //append everything
  menuItem.appendChild(imgItem);
  menuItem.appendChild(itemSolo);
  menuItem.appendChild(button);
  button.appendChild(addButton);
  menuItem.appendChild(wrapImgPlus);
  wrapImgPlus.appendChild(itemSolo);
  wrapImgPlus.appendChild(addButton);
  itemSolo.appendChild(itemName);
  itemSolo.appendChild(itemIngredients);
  itemSolo.appendChild(itemPrice);
  menuSection.appendChild(menuItem);
});
// handle the Order
let orderList = [];

function initializeMenuButtons() {
  document.querySelectorAll(".plus-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const menuItem = e.target.closest(".menu-items");
      const itemName = menuItem.querySelector("h3").textContent;
      const itemPrice = menuItem.querySelector(".price").textContent;
      const orderItem = {
        name: itemName,
        price: parseFloat(itemPrice.replace("$", "")),
      };
      orderList.push(orderItem);
      updateOrder();
      document
        .querySelector("#complete-order")
        .addEventListener("click", initializeCardDetails);
    });
  });
}

function updateOrder() {
  const orderSection = document.querySelector(".order-section");
  orderSection.textContent = "";
  const groupedArticles = document.createElement("div");
  groupedArticles.classList.add("grouped-articles");
  //group identical items
  const groupedOrder = orderList.reduce((acc, item) => {
    if (!acc[item.name]) {
      acc[item.name] = { ...item, quantity: 1 };
    } else {
      acc[item.name].quantity += 1;
      acc[item.name].price += item.price;
    }
    return acc;
  }, {});
  let totalPrice = 0;
  //treat the Object created
  Object.values(groupedOrder).forEach((item) => {
    const orderItemDiv = document.createElement("div");
    orderItemDiv.classList.add("name-product");
    const itemSpanNumber = document.createElement("span");
    itemSpanNumber.classList.add("product-number");
    itemSpanNumber.textContent = DOMPurify.sanitize(`${item.quantity}`);
    const itemNameSpan = document.createElement("span");
    itemNameSpan.classList.add("product-name");
    itemNameSpan.textContent = DOMPurify.sanitize(
      `${item.name} x${item.quantity}`,
    );
    const itemNameSpanAriaLabel = DOMPurify.sanitize(
      `You are ordering: ${itemNameSpan.textContent}`,
    );
    itemNameSpan.setAttribute("aria-label", itemNameSpanAriaLabel);

    const itemPriceSpan = document.createElement("span");
    itemPriceSpan.classList.add("product-price");
    itemPriceSpan.textContent = `$${item.price.toFixed(2)}`;
    const itemPriceSpanAriaLabel = DOMPurify.sanitize(
      `The price of your ${itemNameSpan.textContent} is ${itemPriceSpan.textContent}`,
    );
    itemPriceSpan.setAttribute("aria-label", itemNameSpanAriaLabel);

    orderItemDiv.appendChild(itemNameSpan);
    orderItemDiv.appendChild(itemPriceSpan);
    orderSection.appendChild(groupedArticles);
    groupedArticles.appendChild(orderItemDiv);
    totalPrice += item.price;
  });

  // Add total price
  const totalPriceDiv = document.createElement("div");
  totalPriceDiv.classList.add("total-price");
  totalPriceDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
  totalPriceDiv.setAttribute(
    "aria-label",
    `You will pay in total ${totalPriceDiv.textContent}`,
  );
  orderSection.appendChild(totalPriceDiv);

  const buttonOrder = document.createElement("button");
  buttonOrder.id = "complete-order";
  buttonOrder.classList.add("complete-order");
  buttonOrder.setAttribute(
    "aria-label",
    "button that onclick will go to the modal to pay your complete order",
  );
  buttonOrder.textContent = `Complete order`;
  orderSection.appendChild(buttonOrder);
}

initializeMenuButtons();

// handle the completeOrder Function

function initializeCardDetails() {
  const sectionPayementByCard = document.createElement("section");
  sectionPayementByCard.classList.add("section-payment");

  const mainPayementByCard = document.createElement("main");
  mainPayementByCard.classList.add("main-payment");

  let modalContent = document.createElement("form");
  const modalText = document.createElement("h2");
  modalText.textContent = DOMPurify.sanitize(`Enter card details`);
  modalText.setAttribute("aria-label", `Enter your card details input`);
  modalContent.classList.add("modal-content");
  modalContent.id = "paymentForm";

  modalContent.appendChild(modalText);
  // create name
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Enter your name");

  modalContent.appendChild(nameInput);
  nameInput.setAttribute("aria-label", `Enter your name in this input`);
  nameInput.classList.add("card-name");
  nameInput.setAttribute("required", "true");
  nameInput.setAttribute("pattern", "[A-Za-zÀ-ÿ\\s]+");
  nameInput.setAttribute("autocomplete", "off");
  nameInput.setAttribute(
    "title",
    "Name should only contain letters, including accented characters and spaces",
  );

  // create card
  const cardNumberInput = document.createElement("input");
  cardNumberInput.setAttribute("type", "text");
  cardNumberInput.setAttribute("placeholder", "Enter card number");
  cardNumberInput.setAttribute(
    "aria-label",
    `Enter your card number in this input`,
  );
  cardNumberInput.classList.add("card-number");
  cardNumberInput.setAttribute("required", "true");
  cardNumberInput.setAttribute("pattern", "\\d{16}");
  cardNumberInput.setAttribute(
    "title",
    "Please enter a valid 15-digit card number",
  );
  cardNumberInput.setAttribute("min", "0");
  cardNumberInput.setAttribute("autocomplete", "off");
  modalContent.appendChild(cardNumberInput);

  //create Cvv
  const cvvInput = document.createElement("input");
  cvvInput.setAttribute("type", "text");
  cvvInput.setAttribute("placeholder", "Enter CVV");
  cvvInput.setAttribute("required", true);
  cvvInput.setAttribute("aria-label", `Enter card CVV in this input`);
  cvvInput.classList.add("card-cvv");
  cvvInput.setAttribute("pattern", "\\d{3}");
  cvvInput.setAttribute("autocomplete", "off");
  cvvInput.setAttribute("min", "0");
  cardNumberInput.setAttribute("title", "Please enter a valid 3-digit CVV");
  modalContent.appendChild(cvvInput);

  // create pay button
  const buttonPay = document.createElement("button");
  buttonPay.classList.add("complete-payment");
  buttonPay.textContent = "Pay";
  buttonPay.setAttribute("aria-label", "Pay the bill with your card");

  buttonPay.addEventListener("click", function (event) {
    if (
      cvvInput.checkValidity() &&
      cardNumberInput.checkValidity() &&
      nameInput.checkValidity()
    ) {
      //sanitize everything
      const sanitizedCardNumber = DOMPurify.sanitize(cardNumberInput.value);
      const sanitizeCvv = DOMPurify.sanitize(cvvInput.value);
      const sanitizedName = DOMPurify.sanitize(nameInput.value);

      handleCompleteOrder();
    } else {
      //   event.preventDefault();
      if (!nameInput.checkValidity()) {
        alert("Only letters allowed in the name field");
      } else if (!cardNumberInput.checkValidity()) {
        alert("Please enter a valid card number (16 digits)");
      } else if (!cvvInput.checkValidity()) {
        alert(`Please Enter a valid CVV "`);
      }
    }
  });
  mainPayementByCard.appendChild(modalContent);
  mainPayementByCard.appendChild(buttonPay);
  sectionPayementByCard.appendChild(mainPayementByCard);
  document.body.appendChild(sectionPayementByCard);
}

// add an event listener to plot the modal
function handleCompleteOrder() {
  const sectionTotal = document.querySelector(".section-payment");
  sectionTotal.classList.add("hidden");
  let sectionOrder = document.querySelector(".order-section");
  const nameInput = document.querySelector(".card-name");
  const sanitizedName = DOMPurify.sanitize(nameInput.value);
  sectionOrder.textContent = DOMPurify.sanitize(
    `Thanks, ${sanitizedName}! Your order is on its way!`,
  );
  sectionOrder.classList.add("good-bye");
  //clears the form inputs
  document.querySelector("#paymentForm").reset();
  setTimeout(() => {
    sectionTotal.remove();
    sectionOrder.remove();
  }, 2500);
  setTimeout(() => {
    window.location.reload();
  }, 3500);
}
