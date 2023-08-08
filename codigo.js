let contenedorCasa = document.getElementById("listaCasas")
let cantidad = document.getElementById("cant");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
cantidad.innerText = `🛒${carrito.length}`;

if (carrito.length != 0) {
    for (const casa of carrito) {
        document.getElementById("tablabody").innerHTML += `
            <tr>
                <td>${casa.id}</td>
                <td>${casa.tipo}</td>
                <td>${casa.precio}</td>
                <td>${casa.zona}</td>
                <td>${casa.agregado}</td>
            </tr>
        `;
    }
    //incrementar el total
    let totalCarrito = carrito.reduce((acumulador, casa) => acumulador + casa.precio, 0);
    document.getElementById("total").innerText = "Presupuesto total: $" + totalCarrito;
}


function renderizarProductos(casasArray) {
    for (const casa of casasArray) {
        contenedorCasa.innerHTML += `
            <div class="d-flex card col-sm-4 col-lg-3 gap-2">
                <div class="card-body text-center">
                    <h5 class="card-title">${casa.id}</h5>
                    <p class="card-text">${casa.tipo}</p>
                    <p class="card-text">$ ${casa.precio}</p>
                    <p class="card-text"> ${casa.zona}</p>
                    <p class="card-text"> ${casa.agregado}</p>
                    <button id='btn${casa.id}' class="btn btn-success align-bottom">Comprar</button>
                </div>
            </div>
        `;
    }

casasArray.forEach((casa) => {
    document.getElementById(`btn${casa.id}`).addEventListener("click", () => {
        agregarACarrito(casa);
    });
});
}

renderizarProductos(casasArray);

function agregarACarrito(casaAAgregar) {
    carrito.push(casaAAgregar);
    cantidad.innerText = `🛒${carrito.length}`;

    Toastify({
        text: `Agregaste ${casaAAgregar.tipo} de ${casaAAgregar.zona} al carrito`,
        duration: 2000,
        gravity: "top",
        position: "left",
        close: true,
        style: {
            background: "rgb(224,140,38)",
            background: "linear-gradient(90deg, rgba(224,140,38,1) 0%, rgba(43,146,31,1) 50%, rgba(224,140,38,1) 100%)",
        },
    }).showToast();

document.getElementById("tablabody").innerHTML += `
<tr>
    <td>${casaAAgregar.id}</td>
    <td>${casaAAgregar.tipo}</td>
    <td>${casaAAgregar.precio}</td>
    <td>${casaAAgregar.zona}</td>
    <td>${casaAAgregar.agregado}</td>
</tr>
`;

let totalCarrito = carrito.reduce((acumulador, casa) => acumulador + casa.precio, 0);
document.getElementById("total").innerText = "Presupuesto total: $" + totalCarrito;
localStorage.setItem("carrito", JSON.stringify(carrito));
}


let finBoton = document.getElementById("finalizar");
let cancelarBoton = document.getElementById("cancelar")

finBoton.onclick = () => {
    Swal.fire({
        icon: "success",
        title: "Compra Exitosa",
        text: "Gracias por tu compra! Un asesor se comunicara con usted",
    })

    carrito = [];
    document.getElementById("tablabody").innerHTML = "";
    cantidad.innerText = `🛒${carrito.length}`;
    document.getElementById("total").innerText = "Presupuesto total: $";
    localStorage.removeItem("carrito");
}

cancelarBoton.onclick = () => {
    Swal.fire({
        icon: "error",
        title: "Se cancelo la compra",
        text: "Usted ha cancelado el proceso de compra.",
    })

    carrito = [];
    document.getElementById("tablabody").innerHTML = "";
    cantidad.innerText = `🛒${carrito.length}`;
    document.getElementById("total").innerText = "Presupuesto total: $";
    localStorage.removeItem("carrito");
}