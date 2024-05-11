const itemHotselling = document.querySelector(".hotselling-items");
const itemLaunched = document.querySelector("#just-launched");
let bagItems = []; // Initialize bagItems as an empty array

// Load bagItems from localStorage
onLoad();

function onLoad() {
  const bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayBagIcon();
}

// Add item to bag
function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

// Reset bag
function resetBag() {
  bagItems = [];
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

// Display bag icon with count
function displayBagIcon() {
  const bagItemCountElement = document.querySelector(".bag-count");
  bagItemCountElement.innerText = bagItems.length;
}

// Function to display items
function displayItems(items, container) {
  let innerHTML = "";
  let counter = 0;

  items.forEach((item) => {
    if (counter < 4) {
      innerHTML += generateItemHTML(item);
      counter++;
    }
  });

  container.innerHTML = innerHTML;
}
function closeItem() {
  var addToCartDiv = document.querySelector(".add-to-cart");
  addToCartDiv.style.display = "none";
}
function showItem() {
  var addToCartDiv = document.querySelector(".add-to-cart");
  addToCartDiv.style.display = "block";
}
// Function to generate HTML for each item
function generateItemHTML(item) {
  return `
    <div class="hotselling-products flex-column">
      <div class="hotselling-top">
        <div class="hotselling-products-heading flex">
          <h3>${item.update}</h3>
          <h2>${item.rating}</h2>
        </div>
        <div class="hotselling-product-image"><img src="${item.slider1.image1}" alt="${item.name}"></div>
      </div>
      <div class="hotselling-product-name">
        <h1>${item.name}</h1>
        <h4>${item.specs}</h4>
      </div>
      <div class="hotselling-product-pricing flex">
        <div class="pricing-offers">
          <div class="flex">
            <h2>${item.price}</h2>
            <h4>${item.original_price}</h4>
          </div>
          <h3>${item.offer}</h3>
        </div>
        <a href="${item.link}"><button onclick="selectItem('${item.id}')">GRAB NOW</button></a>
      </div>
    </div>
  `;
}

// Function to handle item selection
function selectItem(itemId) {
  localStorage.setItem("itemSelectedId", itemId);
}

// Filter HOTSELLING items
const hotSellingItems = item.filter((item) => item.category.includes("HOTSELLING"));
displayItems(hotSellingItems, itemHotselling);

// Filter LAUNCHED items
const launchedItems = item.filter((item) => item.category.includes("LAUNCHED"));
displayItems(launchedItems, itemLaunched);
