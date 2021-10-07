// if page page not load the function not work as i use script in header part. if load properly the ready function call
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    // remove cart item
    var removeCartItemButton = document.getElementsByClassName('remove-btn');
    for (var i = 0; i < removeCartItemButton.length; i++) {
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem)
    }

    //add card item to the cart
    var addToCartButton = document.getElementsByClassName('add-to-cart-button');
    for (var i = 0; i < addToCartButton.length; i++){
        var button = addToCartButton[i];
        button.addEventListener('click', addCartClicked)
    }
}

// remove cart item function
function removeCartItem(event) {
    var buttonClicked = event.target;
    var buttonPrice = buttonClicked.parentElement;
    var cartPrice = parseFloat(buttonPrice.getElementsByClassName('cart-price')[0].innerText.replace('BDT', ''));
    afterDeleteTotalPrice(cartPrice);
    buttonClicked.parentElement.remove();
    
}


//add item to the cart. when click add cart button
function addCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-img')[0].src;
    addItemToCart(title, price, imageSrc)
    updateCartTotal();
}


//add item cart design and here use dynamic value
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemName = cartItems.getElementsByClassName('cart-item-name');
    for (var i = 0; i < cartItemName.length; i++){
        if (cartItemName[i].innerText == title) {
            alert('This Item is already added to the cart')
            return;
        }
    }
    var cartRowContains = `
                        <div class="card-item">
                            <img src=${imageSrc} alt="">
                            <p class="cart-item-name">${title}</p>
                            <p class="cart-price">BDT ${price}</p>
                            <i class="fas fa-trash-alt remove-btn"></i>
                        </div>
    `
    cartRow.innerHTML = cartRowContains;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeCartItem);
}

//update total price before delete any item to the cart
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var price = parseFloat(priceElement.innerText.replace('BDT', ''));
        total = (total + price);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = 'BDT' + total;
    document.getElementsByClassName('pay-button-price')[0].innerText = 'BDT' + total;
    document.getElementsByClassName('sub-total-price')[0].innerText = 'BDT' + total;
}

//after delete any cart element update price
function afterDeleteTotalPrice(cartPrice) {
    var totalPrice = parseFloat(document.getElementsByClassName('cart-total-price')[0].innerText.replace('BDT', ''));
    totalPrice = totalPrice - cartPrice;
    document.getElementsByClassName('cart-total-price')[0].innerText = 'BDT' + totalPrice;
    document.getElementsByClassName('pay-button-price')[0].innerText = 'BDT' + totalPrice;
    document.getElementsByClassName('sub-total-price')[0].innerText = 'BDT' + totalPrice;
}