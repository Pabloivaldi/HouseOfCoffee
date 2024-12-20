const productos = [
    {
        cod: "cod. 9XXF45-BM",
        nombre: "Máquina Expresso Saeco",
        imagen: "image/cafexpreso1.jpg",
        precio: 5590000,
    },
    {
        cod: "cod. 6y6F40-BX",
        nombre: "Máquina Expresso Saeco",
        imagen: "image/cafexpreso2.jpg",
        precio: 7380000,
    },
    {
        cod: "cod. MAGIC32-B2",
        nombre: "Máquina Expresso MAGIC",
        imagen: "image/cafexpreso3.jpg",
        precio: 6890000,
    },
    {
        cod: "cod. TTYcr450cc",
        nombre: "Cafetera filtro cristal",
        imagen: "image/cafetera.jpg",
        precio: 98000,
    },
    {
        cod: "cod. BonkaEF500",
        nombre: "Café BONKA exta fuerte",
        imagen: "image/cafe4.jpg",
        precio: 20990,
    },
    {
        cod: "cod. Cabrales cápsulas I6",
        nombre: "Cabrales I6 - x10  Liviano",
        imagen: "image/capsulas1.jpg",
        precio: 14900,
    },
    {
        cod: "cod. Cabrales cápsulas I8",
        nombre: "Cabrales I8 - x10  Intenso",
        imagen: "image/capsulas2.jpg",
        precio: 14900,
    },
    {
        cod: "cod. Cabrales cápsulas I12",
        nombre: "Cabrales I12 - x10  Fuerte",
        imagen: "image/capsulas3.jpg",
        precio: 14900,
    },
    {
        cod: "cod. HR399-LP",
        nombre: "Distribuidor",
        imagen: "image/acc1.jpg",
        precio: 45500,
    },
    {
        cod: "cod. CD455-LL",
        nombre: "Molinillo aluminio",
        imagen: "image/acc2.jpg",
        precio: 32000,
    },
    {
        cod: "cod. TX33",
        nombre: "Tamper mediano",
        imagen: "image/acc3.jpg",
        precio: 21900,
    },
    {
        cod:"cod. PC330",
        nombre: "Vaso 330cc c/tapa x100u.",
        imagen: "image/desc1.jpg",
        precio: 19000,
    },
]

//console.log(productos[3].precio)

let productosHTML = "";

for(let indice = 0; indice <productos.length; indice++){
    productosHTML += `
                <div class="producto">
                    <img src=${productos[indice].imagen} alt="cafetera1"
                    <h4>${productos[indice].nombre}</h4>
                    <p>${productos[indice].cod}</p>
                    <h4>$${productos[indice].precio}</h4>
                    <input class="botonAgregar" type="button" value="Agregar">
                </div>
    `;
}

console.log(productosHTML);

const carrito = document.getElementById("carrito");
carrito.innerHTML = productosHTML



//Agregar un listener a los botones de productos

//Preparamos los botones AGREGAR

const botonesAgregar = document.querySelectorAll(".botonAgregar"); //Utilizo QUERYSELECTOR ALLA para indicar que voy a tomar info de todos los botones AGREGAR
console.log(botonesAgregar); //Cada vez que haga clic en un boton voy a tener que llamar a la lista

const listaPedido = document.querySelector ("#pedido ul");
console.log(listaPedido);

const totalPedido = document.querySelector("#pedido p");
console.log(totalPedido);

let totalAPagar = 0; //variable donde se va a ir sumando el importe de los productos agregados a mi pedido


//Ahora se agrega el listener a cada boton

//Declaramos una variable CONTADOR que va a ir acumulando (la llamamos indice)


for(let indice = 0; indice < botonesAgregar.length; indice++){
    
    function agregarElementoPedido(){
        console.log("clic" + indice); // para que memuestre la palabra clic + el indice y asi saber desde que boton viene el clic
        const elementoLi = document.createElement("li");
        
        elementoLi.innerText = `${productos[indice].nombre} .....$${productos[indice].precio}`
        console.log(elementoLi)

        listaPedido.appendChild(elementoLi) //otra opcion: 
     // listaPedido.innerHTML = elementoLi

        totalAPagar += productos[indice].precio;

        totalPedido.innerText = "Total a pagar $" + totalAPagar; //Se puede hacer tambien usando el acento invertido
        mensajePagarPedido.innerText = ""
    }

    botonesAgregar[indice].addEventListener("click", agregarElementoPedido);//Cuando hagamos un clic en cada boton se va a ejecutar la funcion ArgegarElementoPedido. Solo se agrega el nombre de la funcion que al hacer clic se va a ejecutar. Hay que crearla.
    
}

// Agregar el boton borrar

const mensajePagarPedido = document.getElementById("mensajePagarPedido");

const botonBorrar = document.querySelector("#btnBorrar");
console.log(botonBorrar);

function borrarPedido(){
    listaPedido.innerHTML = "";
    totalPedido.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
    mensajePagarPedido.innerText = "";
}

botonBorrar.addEventListener("click", borrarPedido);

// Agregar LISTENER al boton Pagar

const botonPagar = document.querySelector("#btnPagar");

function irAPagar(){
    if (listaPedido.innerText === ""){
        mensajePagarPedido.innerText = "No seleccionaste ningún producto"
    }
    else {
        window.location.href = "./html/pagos.html";     
    }
    
}

botonPagar.addEventListener("click", irAPagar);