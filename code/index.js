//перевірка чи є data масивом

if (!Array.isArray(data)) {
  throw new Error(`Ми отримали щось інше...`);
}

//збереження в локал сторидж
let all_products = "",
  shirts = "",
  shorts = "",
  pants = "",
  belts = "",
  swimtrunks = "";

let allShorts = [];
let allShirts = [];
let allPants = [];
let allBelts = [];
let allSwimTrunks = [];

localStorage.clear();
data.forEach((obj) => {
  if (obj.type === "shirts") {
    allShirts.push(obj);
  } else if (obj.type === "shorts") {
    allShorts.push(obj);
  } else if (obj.type === "pants") {
    allPants.push(obj);
  } else if (obj.type === "belts") {
    allBelts.push(obj);
  } else if (obj.type === "swimtrunks") {
    allSwimTrunks.push(obj);
  } else {
    alert("The is no such category in data array");
  }
});

localStorage.setItem("all_products", JSON.stringify(data));
localStorage.setItem("shirts", JSON.stringify(allShirts));
localStorage.setItem("shorts", JSON.stringify(allShorts));
localStorage.setItem("pants", JSON.stringify(allPants));
localStorage.setItem("belts", JSON.stringify(allBelts));
localStorage.setItem("swimtrunks", JSON.stringify(allSwimTrunks));

//перехід на сторінку каталогу, збереження в локал сторидж ключа для фильтрации продукту
const buttons = document.getElementsByClassName("button-to-catalog");
let key = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    localStorage.categoryClicked = "";
    let buttonText = e.target.innerText.toLowerCase();
    console.log(buttonText);
    if (buttonText.includes("shirts")) {
      key === "shirts";
    }
    if (buttonText.includes("shorts")) {
      key === "shorts";
    }
    if (buttonText.includes("pants")) {
      key === "pants";
    }
    if (buttonText.includes("swimtrunks")) {
      key === "swimtrunks";
    }
    if (buttonText.includes("belts")) {
      key === "belts";
    }
    console.log(key);
    localStorage.categoryClicked = key; //зберігаємо в локальному хранилищі на яку кнопку ми натиснули
    //const wind = window.open(`./catalog/index.html?${key}`); //відкриваємо сторінку каталога
  });
});

/*
//вивід інфо на карточки на сторінці catalog
  const page = document.getElementById("catalog-cards");
  let page_number = 0;
  page_number = document.querySelector(".pagination");
  const links = document.querySelectorAll(".pagination_button"),
    active_link_1 = document.querySelector("#page_one"),
    active_link_2 = document.querySelector("#page_two"),
    active_link_3 = document.querySelector("#page_three"),
    active_link_4 = document.querySelector("#page_four");

data.forEach((obj, i) => {
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
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                </div>
                <p><span class="catalog_price">${obj.price} hrv</span></p>
                <button>Add to cart</button>
              </div>`;
if (i >= 0 && i < 10){
  page.insertAdjacentHTML("beforeend", card);
}
  //document.getElementById("catalog-cards").innerHTML += card;
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
        data.forEach((obj, i) => {
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
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
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
        data.forEach((obj, i) => {
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
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
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
        data.forEach((obj, i) => {
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
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
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
        data.forEach((obj, i) => {
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
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
                  <img src="../images/homepage_images/Star 1.png" alt="star" />
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
*/
