let contenedorCasa = document.getElementById("listaCasas");
let cantidad = document.getElementById("cant");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
cantidad.innerText = `🛒${carrito.length}`;

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const formulario = document.getElementById("form");
const parrafo = document.getElementById("alertas");
const usuarioName = [];

// formulario de registro
formulario.addEventListener("submit", evento=>{
    evento.preventDefault();
    let warnings = [];
    let entrar = false;
    let usuario = [];

    parrafo.innerHTML = [];
    if(nombre.value.length <3){
        warnings += `Nombre corto o invalido <br>`;
        entrar = true;
    };
    if(!email.value.includes("@")||!email.value.includes(".")){
        warnings += `El email es invalido <br>`;
        entrar = true;
    };

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: `Perfecto ${usuarioName}!! Te registraste`,
                    })
                    document.getElementById("form").innerHTML = "";
            }, 1000);
            usuario.push(nombre.value);
            usuarioName.push(usuario)
        }
})

// agrega casas a la tabla del carrito
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
    let totalCarrito = carrito.reduce((acumulador, casa) => acumulador + casa.precio, 0);
    document.getElementById("total").innerText = "Presupuesto total: $" + totalCarrito;
}


// renderizado
function renderizarProductos(casasArray) {
    for (const casa of casasArray) {
        contenedorCasa.innerHTML += `
            <div class="card--general card col-sm-4 col-lg-3">
                <div class="card--cuerpo card-body text-center">
                    <h5 class="card-title">${casa.id}</h5>
                    <p class="card-text">${casa.tipo}</p>
                    <p class="card-text">$ ${casa.precio}</p>
                    <p class="card-text"> ${casa.zona}</p>
                    <p class="card-text"> ${casa.agregado}</p>
                    <button id='btn${casa.id}' class="boton--cards btn btn-success align-bottom">Comprar</button>
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


// funcion agregar a carrito
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


// agrega info de zonas en 3 seg
const fetchCasa = async () => {
    try {
        const url = "/casa.json";
        const response = await fetch (url);
        const data = await response.json();

        const pedirInfo = () => {
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    resolve(data)
                }, 3000)
            })
        }

        let info = []

        const renderInfo = () => {
            data.map ((item) => {
                document.getElementById("listaInfo").innerHTML += `
                    <div class="card--general__info card col-sm-12 gap-2">
                        <div class="card--cuerpo__info card-body text-center">
                            <h5 class="card-title">${item.zona}</h5>
                            <p class="card-text">${item.info}</p>
                        </div>
                    </div>
                `;
            })
        };


        pedirInfo()
            .then((res) => {
            productos = res
            renderInfo();
        })


    } catch (err) {
        console.log(err);
    }
};

fetchCasa();


// botones de comprar y cancelar
let finBoton = document.getElementById("finalizar");
let cancelarBoton = document.getElementById("cancelar")

finBoton.onclick = () => {
    if(usuarioName==""){
        Swal.fire({
            icon: "error",
            title: "No te suscribiste",
            text: "Antes de comprar debes suscribirte",
        })
    } else if(carrito==""){
        Toastify({
            text: "No seleccionaste ninguna casa",
            duration: 3000,
            gravity: "top",
            position: "left",
            close: true,
            style: {
                background: "rgb(197,2,2)",
                background: "linear-gradient(90deg, rgba(197,2,2,1) 0%, rgba(255,0,0,1) 50%, rgba(197,2,2,1) 100%)",
            },
        }).showToast();
    } else {
    setTimeout(() => {
        Swal.fire({
            icon: "success",
            title: "Compra Exitosa",
            text: `Gracias ${usuarioName} por tu compra! Un asesor se comunicara con usted`,
        })

        carrito = [];
        document.getElementById("tablabody").innerHTML = "";
        cantidad.innerText = `🛒${carrito.length}`;
        document.getElementById("total").innerText = "Presupuesto total: $";
        localStorage.removeItem("carrito");
    }, 1500)
    }
}

cancelarBoton.onclick = () => {
    if(carrito==""){
        Toastify({
            text: "No seleccionaste ninguna casa",
            duration: 3000,
            gravity: "top",
            position: "left",
            close: true,
            style: {
                background: "rgb(197,2,2)",
                background: "linear-gradient(90deg, rgba(197,2,2,1) 0%, rgba(255,0,0,1) 50%, rgba(197,2,2,1) 100%)",
            },
        }).showToast();
    } else {
    Swal.fire({
        icon: 'error',
        title: 'Cancelaste la compra',
        })

    carrito = [];
    document.getElementById("tablabody").innerHTML = "";
    cantidad.innerText = `🛒${carrito.length}`;
    document.getElementById("total").innerText = "Presupuesto total: $";
    localStorage.removeItem("carrito");
    }
    }