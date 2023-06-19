//перевірка чи є data масивом

if (!Array.isArray(data)) {
  throw new Error(`Ми отримали щось інше...`);
}

data.forEach((obj) => {
  const card = `<div class="card">
                <img
                  class="product_image"
                  src="${obj.image1}"
                  alt="${obj.type}"
                />
                <h5>${obj.description}</h4>
                <div class="stars">
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                </div>
                <p><span>${obj.price} hrv</span></p>
                <button>Add to cart</button>
              </div>`;
  document.getElementById("catalog-cards").innerHTML += card;
});
