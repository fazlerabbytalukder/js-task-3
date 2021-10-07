// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function ready() {
//     var removeCartItemButton = document.getElementsByClassName('remove-btn');

//     for (var i = 0; i < removeCartItemButton.length; i++) {
//         var button = removeCartItemButton[i];
//         button.addEventListener('click', removeCartItem)
//     }

//     var addToCartButton = document.getElementsByClassName('add-to-cart-button');

//     for (var i = 0; i < removeCartItemButton.length; i++) {
//         var button = addToCartButton[i];
//         button.addEventListener('click', addToCartClicked)
//     }

//     function removeCartItem(event) {
//         var buttonClicked = event.target;
//         buttonClicked.parentElement.remove();
//         updateCartTotal();
//     }

//     function addToCartClicked(event) {
//         var button = event.target;
//         var shopItem = button.parentElement.parentElement;
//         var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
//         var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
//         var imageSrc = shopItem.getElementsByClassName('shop-item-img')[0].src;
//         console.log(title, price, imageSrc);
//         addItemToCart(title, price, imageSrc);
//         updateCartTotal();
//     }

//     function addItemToCart(title, price, imageSrc) {
//         var cartRow = document.createElement('div');
//         cartRow.classList.add('cart-row');
//         var cartItems = document.getElementsByClassName('cart-items')[0];

//         var cartItemName = cartItems.getElementsByClassName('cart-item-name');
//         for (var i = 0; i < cartItemName.length; i++) {
//             if (cartItemName[i].innerText == title) {
//                 alert('This Item Is Already Added');
//                 return;
//             }
//         }
//         var cartRowsContent = `
//     <div class="card-item">
//     <img src=${imageSrc} alt="">
//     <p class="cart-item-name">${title}</p>
//     <p class="cart-price">BDT ${price}</p>
//     <i class="fas fa-trash-alt remove-btn"></i>
// </div>
//     `;
//         cartRow.innerHTML = cartRowsContent;
//         cartItems.append(cartRow);
//         cartRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeCartItem);

//     }
// }



// function updateCartTotal() {
//     cartItemContainer = document.getElementsByClassName('cart-products')[0];
//     var cartRows = cartItemContainer.getElementsByClassName('single-cart-product');
//     var total = 0;
//     for (var i = 0; i < removeCartItemButton.length; i++) {
//         var cartRow = cartRows[i];
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0];
//         var price = parseFloat(priceElement.innerText.replace('BDT', ''));
//         total = (total + price);
//     }
//     total = Math.round(total * 100) / 100;
//     document.getElementsByClassName('cart-total-price')[0].innerText = 'BDT' + total;
//     document.getElementsByClassName('pay-button-price')[0].innerText = 'BDT' + total;
//     document.getElementsByClassName('sub-total-price')[0].innerText = 'BDT' + total;
// }

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButton = document.getElementsByClassName('remove-btn');
    for (var i = 0; i < removeCartItemButton.length; i++) {
        var button = removeCartItemButton[i];
        button.addEventListener('click', removeCartItem)
    }

    var addToCartButton = document.getElementsByClassName('add-to-cart-button');
    for (var i = 0; i < addToCartButton.length; i++){
        var button = addToCartButton[i];
        button.addEventListener('click', addCartClicked)
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-img')[0].src;
    addItemToCart(title, price, imageSrc)
    updateCartTotal();
}

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