async function addToCart(id) {



    let res = await axios.get('http://localhost:3000/books');
    let data = res.data;
    let alreadyInCart = false;

    for (book of data) {
        if (book.id == id) {
            let price = parseInt(book.price);
            if (sessionStorage.getItem("cart") == null) {
                let cart = { 
                    "items": [
                        {
                            "title": `${book.title}`,
                            "price": `${book.price}`,
                            "id": `${book.id}`,
                            "cant" : 1
                        }
                    ],
                    "total": + price
                };
                sessionStorage.setItem("cart", JSON.stringify(cart));
                loadNavbar();
            } else {
                cart = JSON.parse(sessionStorage.getItem("cart"));
                console.log(id);
                for(bookCart of cart.items){
                    if(bookCart.id == id){
                        bookCart.cant += 1;
                        cart.total += parseInt(book.price);
                        alreadyInCart = true;
                        break;
                    }
                }

                if(!alreadyInCart){
                    cart.items.push({
                        "title": `${book.title}`,
                        "price": `${book.price}`,
                        "id": `${book.id}`,
                        "cant" : 1
                    }) 

                    cart.total += parseInt(book.price);
                }
                
                sessionStorage.setItem("cart", JSON.stringify(cart));
            }
        }


        
    }
}
