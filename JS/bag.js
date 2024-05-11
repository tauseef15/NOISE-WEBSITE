let bagItemObjects;

// Load bagItems and display them on page load
onLoad();

function onLoad() {
  loadBagItems();
  displayBagItems();
  displayBagSummary();
}

function loadBagItems() {
  bagItemObjects = bagItems.map((itemId) => {
    for (let i = 0; i < item.length; i++) {
      if (itemId == item[i].id) {
        return item[i];
      }
    }
  });
}

function displayBagItems() {
  let cartItem = document.querySelector(".cart-items");
  let innerHTML = "";
  bagItemObjects.forEach((bagItem) => {
    innerHTML += generateHtml(bagItem);
  });
  cartItem.innerHTML = innerHTML;
}

function removeItem(itemId) {
  bagItems = bagItems.filter((bagItemId) => bagItemId != itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  loadBagItems();
  displayBagItems();
  displayBagIcon();
  displayBagSummary();
}

function displayBagSummary() {
  let bagSummary = document.querySelector(".bag-summary");
  let totalMRP = 0;
  let originalMRP = 0;
  bagItemObjects.forEach((bagItem) => {
    // Remove currency symbol and comma before parsing
    let priceWithoutSymbol = bagItem.price.replace("₹", "").replace(",", "");
    totalMRP += parseFloat(priceWithoutSymbol);
  });

  let formattedTotalMRP = "₹" + totalMRP.toFixed(2); 

  bagItemObjects.forEach((bagItem) => {
    let priceWithoutSymbols = bagItem.original_price
      .replace("₹", "")
      .replace(",", "");
    originalMRP += parseFloat(priceWithoutSymbols);
  });

  let formattedOriginalMRP = "₹" + originalMRP.toFixed(2);

  bagSummary.innerHTML = `
    <div class="total-section flex">
      <h1>Total: <span class="total-price">${formattedTotalMRP}</span><span class="original-price">${formattedOriginalMRP}</span></h1>
      <button>Proceed to pay</button>
    </div>
  `;
}
function generateHtml(item) {
  return `
    <div class="cart-item flex">
      <div class="product-image"><img src="${item.image}" alt=""></div>
      <div class="product-info">
        <div class="info">
          <div style="justify-content: space-between; padding: 10px 20px;" class="name-delete flex">
            <h1>${item.name}</h1>
            <div onclick="removeItem(${item.id})"><img src="icons/delete.svg" alt="Delete"></div>
          </div>
          <h2 class="item-price">${item.price}</h2>
          <h4 class="original-price-up">${item.original_price}</h4>
          <h4 class="specs">${item.specs}</h4>
        </div>
        <div class="gift flex">
          <input type="checkbox">
          <p>Get your order wrapped @ ₹30</p>
        </div>
      </div>
    </div>
  `;
}


function closeItem() {
  var addToCartDiv = document.querySelector(".add-to-cart");
  addToCartDiv.style.display = "none";
}
function showItem() {
  var addToCartDiv = document.querySelector(".add-to-cart");
  addToCartDiv.style.display = "block";
}
