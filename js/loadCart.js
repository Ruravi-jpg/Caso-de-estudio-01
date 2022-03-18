let myCartTable = document.getElementById("tableRows");


function setTable() {
    let cartItems = sessionStorage.getItem("cart");
    if(cartItems == null){
        return;
    }


    cartItems = JSON.parse(cartItems);
    for(item of cartItems.items){
        let rowCartItem = `
                <tr>
                  <td scope="row">${item.cant}</td>
                  <td>${item.title}</td>
                  <th>$${item.price}</th>
                </tr>
        `;
        myCartTable.innerHTML += rowCartItem;
    }
    myCartTable.innerHTML += `
    <tr>
    <td scope="row"></td>
    <th class="d-flex justify-content-end">Total</th>
    <th>$${cartItems.total}</th>
  </tr>
  <tr>
  <td><button class="btn btn-danger" onclick="sessionStorage.removeItem('cart'); window.location.href = '/index.html'">Limpiar carrito</button></td>
  <td></td>
  <td><button class="btn btn-primary" onclick="window.location.href = '/html/confirmCart.html';">Continuar</button></td>
  </tr>
    `
}


setTable();
