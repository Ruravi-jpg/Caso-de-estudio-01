let navBarElement = document.getElementById('navbar');




function loadNavbar(){
  let navbarItem = "";
  navbarItem = `
  
  <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <img src="/Assets/Logo/LogoNavbar.png" alt="" width="120" height="96" class="d-inline-block align-text-top">
        </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="/index.html">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/index.html">Libros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/index.html">Sobre nosotros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/index.html">Regístrate</a>
                </li>`;
  
                if(sessionStorage.getItem("cart") != null){
                  navbarItem += `
                  <li class="nav-item">
                  <a class="nav-link" href="/html/cart.html">Carrito</a>
                </li>
                  `;
                }
  
                navbarItem += `
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                <button class="btn" type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </nav>
  `;
  
  navBarElement.innerHTML = navbarItem;
}

loadNavbar();