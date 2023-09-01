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
                <button class="add-to-cart">Add to cart</button>
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
                <button class="add-to-cart">Add to cart</button>
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
                <button class="add-to-cart">Add to cart</button>
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
                <button class="add-to-cart">Add to cart</button>
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
                <button class="add-to-cart">Add to cart</button>
              </div>`;
        if (i >= 30 && i < 40) {
          page.insertAdjacentHTML("beforeend", card);
        }
      });
      break;
  }
});

//виклик модального вікна
const catalog_cards = document.getElementsByClassName("add-to-cart");
// Loop through the collection of cards
for (let i = 0; i < catalog_cards.length; i++) {
  // Add event listener to each card
  catalog_cards[i].addEventListener("click", showModal);
}

//modal window
function showModal() {
  const modal = document.querySelector(".box-modal");
  modal.classList.add("active");
  document.querySelector("#modal-closed").addEventListener("click", () => {
    modal.classList.remove("active");
  });

  const patternModal = `
      <div class="modal-container">
        <div class="modal-images">
          <img
            src="./images/modal_menu_images/image 50.png"
            alt="shorts_back"
            class="main-image"
          />
          <div class="subnail">
            <img
              src="./images/modal_menu_images/image 50.png"
              alt="shorts_front_small"
              class="subnail-image image1"
            />
            <img
              src="./images/modal_menu_images/image 49.png"
              alt="shorts_back_small"
              class="subnail-image image2"
            />
          </div>
        </div>
        <div class="modal-description">
          <h1 id="title">
            Sportif's Original Short <span>ITEM # 670170</span>
          </h1>
          <div class="stars">
            <img src="./images/homepage_images/Star 1.png" alt="star" />
            <img src="./images/homepage_images/Star 1.png" alt="star" />
            <img src="./images/homepage_images/Star 1.png" alt="star" />
            <img src="./images/homepage_images/Star 1.png" alt="star" />
            <img src="./images/homepage_images/Star 1.png" alt="star" />
            <span>93 reviews</span>
          </div>
          <p>As low as</p>
          <p class="price">$67.00</p>
          <h2>Color:</h2>
          <div class="list color">
            <div class="black"></div>
            <div class="brown"></div>
            <div class="blue"></div>
            <div class="green"></div>
            <div class="grey"></div>
          </div>
          <h2>Size:</h2>
          <div class="list size">
            <div>30</div>
            <div>32</div>
            <div>34</div>
            <div>36</div>
            <div>38</div>
            <div>40</div>
            <div>44</div>
            <div>46</div>
          </div>
          <div class="buttons">
            <button class="add-to-bag" title="submit">
              Add to bag
            </button>
            <button class="add-to-whishlist" title="submit">
              Add to whishlist
            </button>
          </div>
          <div class="social-networks">
            <a href="#">
              <img
                src="./images/modal_menu_images/social-networks/facebook.png"
                alt="facebook_logo"
              />
            </a>
            <a href="#">
              <img
                src="./images/modal_menu_images/social-networks/Vector_twitter.png"
                alt="twitter_logo"
              />
            </a>
            <a href="#">
              <img
                src="./images/modal_menu_images/social-networks/pinterest.png"
                alt="pant"
              />
            </a>
            <a href="#">
              <img
                src="./images/modal_menu_images/social-networks/link.png"
                alt="link_logo"
              />
            </a>
          </div>
          <div class="delivery-exchange">
            <h3>- Worry Free Shopping -</h3>
            <div class="container">
              <div class="delivery col">
                <img
                  src="./images/modal_menu_images/Vector_delivery.png"
                  alt="delivery_logo"
                  width="35px"
                  height="28px"
                />
                <p>FREE PRIORITY SHIPPING ON ORDERS $99+*</p>
              </div>
              <div class="exchange col">
                <img
                  src="./images/modal_menu_images/Vector_exchange.png"
                  alt="exchange_logo"
                  width="30px"
                  height="31px"
                />
                <p>FREE RETURNS & EXCHANGES*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;

  document.querySelector(".modal-body").innerHTML = patternModal;
}
//!!!!потрібно добавити функцію, що змінює основне зображення при кліку на друге мініатюрне зображення

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
