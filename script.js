let openshopping = document.querySelector(".shopping");
let closeshopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openshopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeshopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: " Veg Italian Pizza",
    image: "1.PNG",
    price: 120000,
  },
  {
    id: 2,
    name: "Veg Margherita Pizza",
    image: "2.PNG",
    price: 130000,
  },
  {
    id: 3,
    name: "Spaghetti",
    image: "3.PNG",
    price: 140000,
  },
  {
    id: 4,
    name: "Naruto Japanese Ramen",
    image: "4.PNG",
    price: 145000,
  },
  {
    id: 5,
    name: "Oreo McFlurry",
    image: "5.PNG",
    price: 150000,
  },
  {
    id: 6,
    name: "Cappuccino",
    image: "6.PNG",
    price: 160000,
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `<img src="images/${value.image}" alt="images/${
      value.name
    }" />
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addToCard(${key})">Add To Cart</button>`;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = { ...products[key], quantity: 1 };
  } else {
    listCards[key].quantity += 1;
    listCards[key].price = listCards[key].quantity * products[key].price;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    if (value != null) {
      totalPrice += value.price;
      count += value.quantity;

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
          <div><img src="images/${value.image}" alt="images/${
        value.name
      }"/></div>
          <div>${value.name}</div>
          <div>${value.price.toLocaleString()}</div>
          <div>${value.quantity}</div>
          <div>
              <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
              <div class="count">${value.quantity}</div>
              <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
          </div>
      `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerHTML = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
``;
