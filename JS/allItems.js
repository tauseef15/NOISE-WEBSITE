let itemProducts = document.querySelector(".all-products");
let innerHTML3 = "";

function selectItem(itemId) {
    // Store the ID of the selected item in a variable
    let selectedItem = itemId;
  
    // Print the variable to the console
    console.log("Selected item ID:", selectedItem);
    localStorage.setItem("itemSelectedId", selectedItem);
}

item.forEach((item) => {
    // Check if the item's category includes the word "HOTSELLING"
    if (item.category.includes("HOTSELLING")) {
        innerHTML3 += `
            <div class="single-item">
                <a style="text-decoration: none; color: black;" href="${item.link}">
                    <div onclick="selectItem('${item.id}')" class="single-items flex-column">
                        <div class="single-item-top">
                            <div class="single-item-image">
                                <img src="${item.image}" alt="${item.name}">
                            </div>
                        </div>
                        <div class="single-item-name">
                            <h1>${item.name}</h1>
                            <h4>${item.specs}</h4>
                        </div>
                        <div class="single-item-pricing flex">
                            <div class="pricing-offers">
                                <div class="flex">
                                    <h2>${item.price}</h2>
                                    <h4>${item.original_price}</h4>
                                    <h3>${item.offer}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }
});

itemProducts.innerHTML = innerHTML3;
