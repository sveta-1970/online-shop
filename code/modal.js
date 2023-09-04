//modal window
const currentProduct = localStorage.getItem("current_product");
const currentArr = currentProduct.split(" ");
console.log(currentArr);
const currentType = currentArr[0];
const currentId = currentArr[1];

//отримуємо масив продуктів потрібного типу із локал сторидж
currentTypeProducts = JSON.parse(localStorage.getItem(currentType));
//шукаємо потрібний id серед цих продуктів
for (let i = 0; i < currentTypeProducts.length; i++) {
  if (currentTypeProducts[i].id == currentId) {
    let data = currentTypeProducts[i];
    showModal(data);
  }
}

//modal window
function showModal(obj) {
  const modal = document.querySelector(".modal");

  const patternModal = `
      <div class="modal-container">
        <div class="modal-images">
          <img
            src="${obj.image1}"
            alt="${obj.type}"
            class="main-image"
          />
          <div class="subnail">
            <img
              src="${obj.image2}"
              alt="${obj.type}_front_small"
              class="subnail-image image1"
            />
            <img
              src="${obj.image2}"
              alt="${obj.type}_back_small"
              class="subnail-image image2"
            />
          </div>
        </div>
        <div class="modal-description">
          <h1 id="title">
            ${obj.description} <span>ITEM # ${obj.id}</span>
          </h1>
          <div class="stars">
            <img src="../images/homepage_images/Star 1.png" alt="star" />
            <img src="../images/homepage_images/Star 1.png" alt="star" />
            <img src="../images/homepage_images/Star 1.png" alt="star" />
            <img src="../images/homepage_images/Star 1.png" alt="star" />
            <img src="../images/homepage_images/Star 1.png" alt="star" />
            <span>93 reviews</span>
          </div>
          <p>As low as</p>
          <p class="price">${obj.price} hrv</p>
          <h2>Color:</h2>
          <div class="list color">
          ${
            obj.color.length !== 0
              ? obj.color
                  .map((el) => {
                    return `<div>${el}</div>`;
                  })
                  .join("")
              : `<div>No such product</div>`
          }
            <div class="black"></div>
            <div class="brown"></div>
            <div class="blue"></div>
            <div class="green"></div>
            <div class="grey"></div>
          </div>
          <h2>Size:</h2>
          <div class="list size">
          ${
            obj.size.length !== 0
              ? obj.size
                  .map((el) => {
                    return `<div>${el}</div>`;
                  })
                  .join("")
              : `<div>No such product</div>`
          }
            
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
                src="../images/modal_menu_images/social-networks/facebook.png"
                alt="facebook_logo"
              />
            </a>
            <a href="#">
              <img
                src="../images/modal_menu_images/social-networks/Vector_twitter.png"
                alt="twitter_logo"
              />
            </a>
            <a href="#">
              <img
                src="../images/modal_menu_images/social-networks/pinterest.png"
                alt="pant"
              />
            </a>
            <a href="#">
              <img
                src="../images/modal_menu_images/social-networks/link.png"
                alt="link_logo"
              />
            </a>
          </div>
          <div class="delivery-exchange">
            <h3>- Worry Free Shopping -</h3>
            <div class="container">
              <div class="delivery col">
                <img
                  src="../images/modal_menu_images/Vector_delivery.png"
                  alt="delivery_logo"
                  width="35px"
                  height="28px"
                />
                <p>FREE PRIORITY SHIPPING ON ORDERS $99+*</p>
              </div>
              <div class="exchange col">
                <img
                  src="../images/modal_menu_images/Vector_exchange.png"
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

  document.querySelector(".modal").innerHTML = patternModal;
}
//!!!!потрібно добавити функцію, що змінює основне зображення при кліку на друге мініатюрне зображення
