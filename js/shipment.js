

function setInfo(){
    
    let cartItems = sessionStorage.getItem('cart');

    let totalProducts = document.getElementById('totalProducts');

    cartItems = JSON.parse(cartItems);

    totalProducts.innerHTML = `$${cartItems.total}`;

}


function finishOrder(){
    setTimeout(function(){
        sessionStorage.removeItem('cart');
        window.location.href = '/index.html';
     }, 1000);
}

setInfo();