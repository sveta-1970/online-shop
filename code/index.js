//перевірка чи є data масивом

if (!Array.isArray(data)) {
  throw new Error(`Ми отримали щось інше...`);
}

//вивід інфо на карточки на сторінці catalog
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

let products = [];
data.forEach((obj) => {
  if (!products.includes(obj.type)) {
    products.push(obj.type);
  }
});

const sorted = products.toSorted();
sorted.forEach((el) => {
  document.getElementsByClassName(
    ".dropdownlist.product div.checkbox"
  ).innerHTML = `${sorted[el]}`;
});
