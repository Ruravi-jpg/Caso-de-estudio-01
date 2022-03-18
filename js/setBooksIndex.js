

const bookList = document.getElementById('bookList');


async function setBookList(){
   let res = await axios.get('http://localhost:3000/books');
    let data = res.data;
    

  for(book of data){
    let itemHtml = "";
    let tags = book.Tags.split(" ");
    itemHtml = `
    <div class="filterDiv `;
    
    for(tag of tags){
        itemHtml += tag + " ";
    }
    
    itemHtml += `">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="/Assets/Libros/${book.id}.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>

                        <a onClick="addToCart(${book.id})" class="btn">Agregar al carrito</a>
                    </div>
                </div>
            </div>
    `;

    bookList.innerHTML += itemHtml;
  }
   
}



setBookList();