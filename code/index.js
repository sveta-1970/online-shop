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
                <img
                  class="product_image2"
                  src="${obj.image2}"
                  alt="${obj.type}"
                />
                <h5>${obj.description}</h5>
                <div class="stars">
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                  <img src="./images/homepage_images/Star 1.png" alt="star" />
                </div>
                <p><span class="catalog_price">${obj.price} hrv</span></p>
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

//catalog page, aside-container => product
const sorted = products.toSorted();
sorted.forEach((el) => {
  document.getElementsByClassName(
    ".dropdownlist.product .checkbox"
  ).innerHTML = `${sorted[el]}`;
});

//modal window
function showModal() {
  //головне зображення
  const main_image = document.getElementsByClassName("main-image");
  main_image = document.getElementsByClassName("product_image");
  
  //мініатюрне зображення
  const subnail_image = document.getElementsByClassName("subnail-image");
  subnail_image = main_image.classList.add("subnail-image");
  main_image.classList.remove("subnail-image");
//!!!!потрібно добавити функцію, що змінює основне зображення при кліку на друге мініатюрне зображення

//заголовок
document.getElementById("title") = document.getElementsByTagName(".card > h5");

//ціна
const obj_price = document.getElementsByClassName("catalog_price");
document.getElementsByClassName("price").innerHTML = `<p><span>${obj_price} hrv</span></p>`;

//колір

//розмір


}

const catalog_card = document.getElementsByClassName("card");
catalog_card.addEventListener("click", showModal);
