let item2page = document.querySelector(".item");
let currentQuantity1 = 1; // Initialize currentQuantity1
// Quantity functions
function add() {
  currentQuantity1++;
  document.querySelector(".current-quantity1").textContent = currentQuantity1;
}

function sub() {
  if (currentQuantity1 > 1) {
    currentQuantity1--;
    document.querySelector(".current-quantity1").textContent = currentQuantity1;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let itemvariable = localStorage.getItem("itemSelectedId");
  console.log(itemvariable);

  // Check if itemvariable is a valid item ID
  if (itemvariable && item[itemvariable]) {
    item2page.innerHTML = `
            <div class="items flex">
                <div class="images flex">
                    <!-- Image slides -->
                    <img class="slide" src="${
                      item[itemvariable].slider1.image1
                    }" alt="">
                    <img class="slide" src="${
                      item[itemvariable].slider1.image2
                    }" alt="">
                    <img class="slide" src="${
                      item[itemvariable].slider1.image3
                    }" alt="">
                    <img class="slide" src="${
                      item[itemvariable].slider1.image4
                    }" alt="">
                    <img class="slide" src="${
                      item[itemvariable].slider1.image5
                    }" alt="">
                </div>
                <div class="all-about">
                    <div class="details">
                        <div class="all-details" style="justify-content: space-between; margin-top: 90px;">
                            <div class="name-saver flex">
                                <h1>${
                                  item[itemvariable].name
                                }</h1><span>SUPER SAVER</span>
                            </div>
                            <!-- Product price and rating -->
                            <div class="price-rating flex" style="justify-content: space-between; margin-top: 1rem;">
                                <h2>${item[itemvariable].price}</h2>
                                <h3 style="margin-right: 2rem;">${
                                  item[itemvariable].rating
                                }</h3>
                            </div>
                            <!-- Original price -->
                            <h4 class="original-price-bag">${
                              item[itemvariable].original_price
                            }</h4>
                            <h5 style="font-weight: 500; margin-top: 9px;">Inclusive of all taxes</h5>
                            <div class="super-offer">
                                <p style="margin-left: 1rem;">Super saver deal<span>${
                                  item[itemvariable].offer
                                }</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="color">
                        <h2>Colour</h2>
                        <div class="all-color flex" style="justify-content: space-evenly;">
                            ${generateColorImages(itemvariable)}
                        </div>
                    </div>
                    <div class="quantity-buy flex">
                        <div class="quantity">
                            <span>QUANTITY</span>
                            <button onclick="sub()">-</button>
                            <span class="current-quantity1">${currentQuantity1}</span>
                            <button onclick="add()">+</button>
                        </div>
                        <div class="buy-now">
                            <button onclick="addToBag('${itemvariable}')">Add To Cart</button>
                        </div>
                    </div>
                    <div class="services flex">
                        <div class="replacement">
                            <img src="https://www.gonoise.com/cdn/shop/files/rupee_square_5ee889ca-710c-4b9d-baae-16adab9d84d4.svg?v=1684401789">
                            <h4>7 day replacement</h4>
                        </div>
                        <div class="replacement">
                            <img src="https://www.gonoise.com/cdn/shop/files/Document_verified_-_1_398219e2-8134-4693-a498-58635f9c03d7.svg?v=1684401789">
                            <h4>1 year warranty</h4>
                        </div>
                        <div class="replacement">
                            <img src="https://www.gonoise.com/cdn/shop/files/Shield_Done_04409ec8-3d1b-414b-96f8-7d2211b7f52f.svg?v=1684401789">
                            <h4>Secure payment</h4>
                        </div>
                    </div>
                </div>
            </div>
        `;
  } else {
    // Handle the case where itemvariable is not valid
    console.log("Invalid item ID");
  }

  // Slide functionality
  const slides = document.querySelectorAll(".slide");
  let counter3 = 0;

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  const goNext = () => {
    if (counter3 < slides.length - 1) {
      counter3++;
    } else {
      counter3 = 0; // Reset to first image if at the end
    }
    slideImage();
  };

  const goPrev = () => {
    if (counter3 > 0) {
      counter3--;
    } else {
      counter3 = slides.length - 1; // Go to last image if at the beginning
    }
    slideImage();
  };

  const slideImage = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter3 * 200}%)`;
    });
  };

  // Function to start the auto slideshow
  const startSlideShow = () => {
    setInterval(goNext, 3000); // Call goNext() every 3 seconds
  };

  // Start the slideshow when the page loads
  startSlideShow();

  // Function to generate color images dynamically
  function generateColorImages(itemvariable) {
    let colorImagesHTML = "";
    // Iterate over the slider objects
    for (let slider of Object.values(item[itemvariable])) {
      // Check if the object is a slider
      if (slider && slider.image1) {
        // Append image HTML
        colorImagesHTML += `<img src="${slider.image1}" alt="">`;
      }
    }
    return colorImagesHTML;
  }

  funt
});
