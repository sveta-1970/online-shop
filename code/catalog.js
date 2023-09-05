//инфо с адресной строки можно прочитать при помощи location
const category = document.location.search.substr(1);
//?category нужно теперь убрать вопрос, для этого исп. метод строки substr(1),
//т.е. нам нужна инфо начиная с первого индекса

let currentData = [];
if (category) {
  currentData = JSON.parse(localStorage.getItem(category));
  document.querySelector("title").innerHTML = category;
  document.getElementById("selected-type").innerHTML = category;
} else {
  currentData = JSON.parse(localStorage.getItem("all_products"));
  document.querySelector("title").innerHTML = "Catalog";
  document.getElementById("selected-type").innerHTML = "Catalog";
}

//вивід інфо на карточки на сторінці catalog
const page = document.getElementById("catalog-cards");
let page_number = 0;
page_number = document.querySelector(".pagination");
const links = document.querySelectorAll(".pagination_button"),
  active_link_1 = document.querySelector("#page_one"),
  active_link_2 = document.querySelector("#page_two"),
  active_link_3 = document.querySelector("#page_three"),
  active_link_4 = document.querySelector("#page_four");
currentData.forEach((obj, i) => {
  const card = `<div class="card">
                <img
                  class="product_image"
                  src="${obj.image1}"
                  alt="${obj.type + " " + obj.id}"
                />
                <img
                  class="product_image2"
                  src="${obj.image2}"
                  alt="${obj.type}"
                />
                <h5>${obj.description}</h5>
                <div class="stars">
                  ${
                    obj.rating !== 0
                      ? Array.from(
                          { length: 5 },
                          (_, index) =>
                            `<img
                      src="../images/homepage_images/Star ${
                        index < obj.rating ? 1 : 5
                      }.png"
                      alt="star"
                    />`
                        ).join("")
                      : Array.from(
                          { length: 5 },
                          () =>
                            `<img
                      src="../images/homepage_images/Star 5.png"
                      alt="star"
                    />`
                        )
                  }
                </div>
                <p><span class="catalog_price">${obj.price} hrv</span></p>
                <button>Add to cart</button>
              </div>`;
  if (i >= 0 && i < 10) {
    page.insertAdjacentHTML("beforeend", card);
  }
});

//pagination for 4 pages
page_number.addEventListener("click", (e) => {
  switch (e.target.innerText) {
    case "1":
      page.innerHTML = ""; //clear previously shown objects
      links.forEach((link) => {
        link.classList.remove("active");
      });
      active_link_1.classList.add("active");
      currentData.forEach((obj, i) => {
        const card = `<div class="card">
                <img
                  class="product_image"
                  src="${obj.image1}"
                  alt="${obj.type + " " + obj.id}"
                />
                <img
                  class="product_image2"
                  src="${obj.image2}"
                  alt="${obj.type}"
                />
                <h5>${obj.description}</h5>
                <div class="stars">
                  ${
                    obj.rating !== 0
                      ? Array.from(
                          { length: 5 },
                          (_, index) =>
                            `<img
                      src="../images/homepage_images/Star ${
                        index < obj.rating ? 1 : 5
                      }.png"
                      alt="star"
                    />`
                        ).join("")
                      : Array.from(
                          { length: 5 },
                          () =>
                            `<img
                      src="../images/homepage_images/Star 5.png"
                      alt="star"
                    />`
                        )
                  }
                </div>
                <p><span class="catalog_price">${obj.price} hrv</span></p>
                <button>Add to cart</button>
              </div>`;
        if (i >= 0 && i < 10) {
          page.insertAdjacentHTML("beforeend", card);
        }
      });
      break;
    case "2":
      page.innerHTML = "";
      links.forEach((link) => {
        link.classList.remove("active");
      });
      active_link_2.classList.add("active");
      currentData.forEach((obj, i) => {
        const card = `<div class="card">
                <img
                  class="product_image"
                  src="${obj.image1}"
                  alt="${obj.type} + " " + obj.id"
                />
                <img
                  class="product_image2"
                  src="${obj.image2}"
                  alt="${obj.type}"
                />
                <h5>${obj.description}</h5>
                <div class="stars">
                  ${
                    obj.rating !== 0
                      ? Array.from(
                          { length: 5 },
                          (_, index) =>
                            `<img
                      src="../images/homepage_images/Star ${
                        index < obj.rating ? 1 : 5
                      }.png"
                      alt="star"
                    />`
                        ).join("")
                      : Array.from(
                          { length: 5 },
                          () =>
                            `<img
                      src="../images/homepage_images/Star 5.png"
                      alt="star"
                    />`
                        )
                  }
                </div>
                <p><span class="catalog_price">${obj.price} hrv</span></p>
                <button>Add to cart</button>
              </div>`;
        if (i >= 10 && i < 20) {
          page.insertAdjacentHTML("beforeend", card);
        }
      });
      break;
    case "3":
      page.innerHTML = "";
      links.forEach((link) => {
        link.classList.remove("active");
      });
      active_link_3.classList.add("active");
      currentData.forEach((obj, i) => {
        const card = `<div class="card">
                <img
                  class="product_image"
                  src="${obj.image1}"
                  alt="${obj.type} + " " + obj.id"
                />
                <img
                  class="product_image2"
                  src="${obj.image2}"
                  alt="${obj.type}"
                />
                <h5>${obj.description}</h5>
                <div class="stars">
                  ${
                    obj.rating !== 0
                      ? Array.from(
                          { length: 5 },
                          (_, index) =>
                            `<img
                      src="../images/homepage_images/Star ${
                        index < obj.rating ? 1 : 5
                      }.png"
                      alt="star"
                    />`
                        ).join("")
                      : Array.from(
                          { length: 5 },
                          () =>
                            `<img
                      src="../images/homepage_images/Star 5.png"
                      alt="star"
                    />`
                        )
                  }
                </div>
                <p><span class="catalog_price">${obj.price} hrv</span></p>
                <button>Add to cart</button>
              </div>`;
        if (i >= 20 && i < 30) {
          page.insertAdjacentHTML("beforeend", card);
        }
      });
      break;
    case "4":
      page.innerHTML = "";
      links.forEach((link) => {
        link.classList.remove("active");
      });
      active_link_4.classList.add("active");
      currentData.forEach((obj, i) => {
        const card = `<div class="card">
                <img
                  class="product_image"
                  src="${obj.image1}"
                  alt="${obj.type} + " " + obj.id"
                />
                <img
                  class="product_image2"
                  src="${obj.image2}"
                  alt="${obj.type}"
                />
                <h5>${obj.description}</h5>
                <div class="stars">
                  ${
                    obj.rating !== 0
                      ? Array.from(
                          { length: 5 },
                          (_, index) =>
                            `<img
                      src="../images/homepage_images/Star ${
                        index < obj.rating ? 1 : 5
                      }.png"
                      alt="star"
                    />`
                        ).join("")
                      : Array.from(
                          { length: 5 },
                          () =>
                            `<img
                      src="../images/homepage_images/Star 5.png"
                      alt="star"
                    />`
                        )
                  }
                </div>
                <p><span class="catalog_price">${obj.price} hrv</span></p>
                <button>Add to cart</button>
              </div>`;
        if (i >= 30 && i < 40) {
          page.insertAdjacentHTML("beforeend", card);
        }
      });
      break;
  }
});

//виклик модального вікна
const catalog_cards = document.getElementsByClassName("card");
// Loop through the collection of cards
for (let i = 0; i < catalog_cards.length; i++) {
  // Add event listener to each card
  catalog_cards[i].addEventListener("click", (e) => {
    console.log(catalog_cards[i]);
    let altValue = document
      .querySelector(".card:nth-child(" + (i + 1) + ") img")
      .getAttribute("alt");
    console.log(altValue);
    let key = "current_product";
    let productClicked = localStorage.setItem("current_product", altValue);
    // open a modal window as a page
    const url = `../modal/index.html?${altValue}`; // URL of the modal page
    window.open(url); // Open the modal page in a new tab or window
  });
}

/*

//головне зображення
  const main_image = document.getElementsByClassName("main-image");
  main_image = document.getElementsByClassName("product_image");

  //мініатюрне зображення
  const subnail_image = document.getElementsByClassName("subnail-image");
  subnail_image = main_image.classList.add("subnail-image");
  main_image.classList.remove("subnail-image");

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

//ціна
const obj_price = document.getElementsByClassName("catalog_price");
document.getElementsByClassName("price").innerHTML = `<p><span>${obj_price} hrv</span></p>`;

//колір

//розмір

*/
