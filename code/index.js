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
let categoryClicked = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText.toLowerCase();

    if (
      buttonText.includes("shirts") ||
      buttonText.includes("ecoth") ||
      buttonText.includes("powell")
    ) {
      key = "shirts";
    }
    if (buttonText.includes("shorts")) {
      key = "shorts";
    }
    if (buttonText.includes("pants") || buttonText.includes("pant")) {
      key = "pants";
    }
    if (buttonText.includes("swim trunks")) {
      key = "swimtrunks";
    }
    if (buttonText.includes("belts")) {
      key = "belts";
    }
    //localStorage.setItem("categoryClicked", key);
    const wind = window.open(`./catalog/index.html?${key}`); //відкриваємо сторінку каталога
  });
});
