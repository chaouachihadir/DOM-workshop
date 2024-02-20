if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    // button.addEventListener("click", addToCartClicked);
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

// function addToCartClicked(event) {
//   var button = event.target
//   var shopItem = button.parentElement.parentElement
//   var title=shopItem.getElementsByClassName('shop-item-title')[0].innerText
//   var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//   var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//   console.log(title , price , imageSrc)
//   addItemToCart(title , price,imageSrc)
//   updateCartTotal()
// }

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  var cartItem = document.createElement("div");
  cartRow.classList.add("cart-row");
  cartItem.classList.add("cart-item");
  var priceTag = document.createElement("span");
  var titleTag = document.createElement("span");
  var img = document.createElement("img");
  img.setAttribute("src", imageSrc);
  titleTag.innerHTML = title;
  priceTag.innerHTML = price;

  cartRow.append(cartItem);
  cartItem.append(img);
  cartItem.append(titleTag);
  cartItem.append(priceTag);
  document.querySelector(".cart-items").append(cartRow);
}

buttonAddCart = document.querySelectorAll(".shop-item-button");
for (let btn of buttonAddCart) {
  btn.addEventListener("click", function () {
    var parent = btn.parentElement;
    let title =
      parent.parentElement.querySelector(".shop-item-title").innerHTML;
    let price = parent.querySelector(".shop-item-price").innerHTML;
    let img = parent.parentElement.querySelector("img").getAttribute("src");
    addItemToCart(title, price, img);
  });
}
//var cartRowContents=
// <div class="cart-item cart-column" >
// <img class ="cart-item-image"src="${imageSrc}"width="100"
//height="100">
//<span class="cart-item-title">${title}</span>
//</div>
// <span class="cart-price cart-column">${price}</span>
// <div class="cart-quantity cart-column">
// <input class ='cart-quantity-input' type="number" value="1" />
//  <button class="btn-danger"type ="button">REMOVE</button>
//</div>
// cartRow.innerHTML=cartRowContents
//cartItems.append(cartRow)

function updateCartTotal() {
  var cartItemContrainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContrainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
//button-heart//
var hearts = document.querySelectorAll(".heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    console.log(heart.getAttribute("fill"));
    if (heart.getAttribute("fill") == "grey") heart.setAttribute("fill", "red");
    else heart.setAttribute("fill", "grey");
  });
}
