let nombre = prompt("Ingrese su nombre");
let contenedorCasa = document.getElementById("listaCasas")

for (let i = 1; i <= 2; i++)
    if (nombre == "") {
        alert("No ingresaste el nombre");
        nombre = prompt("Ingrese su nombre");
    } else {
        continue;
    }

let presupuestoTotal = 0;
const iva = 1.10;

let zonas = prompt("Hola " + nombre + ", en donde te gustaria adquirir una casa?\n1-Zona norte\n2-Zona sur\n3-Zona este\n4-Zona oeste\n0-Salir/Finalizar compra");

while (zonas != "0") {
    switch (zonas) {

        //zona norte

        case "1":

            casaNorte.sort((a,b) => a.precio - b.precio);

            function filtrarPorAgr(includes) {
                if(piletaUsuario== "1"){
                const filtrar = casaNorte.filter((casa) => casa.agregado.includes("c"));
                return filtrar;
                }else{
                const filtrar2 = casaNorte.filter((casa) => casa.agregado.includes("s"));
                return filtrar2;
                }
            }

            let piletaUsuario = prompt("¿" + nombre + ", quiere agregar pileta?\n1-Si\n2-No");

            while (piletaUsuario != 0) {
                if (piletaUsuario==1) {
                    alert('tu casa tendra pileta');
                    const casasFiltradas = filtrarPorAgr(piletaUsuario);
                    console.table(casasFiltradas);
                    renderizarCasas(casasFiltradas);
                }else if(piletaUsuario ==2){
                    alert("tu casa no tendra pileta");
                    const casasFiltradas = filtrarPorAgr(piletaUsuario);
                    console.table(casasFiltradas);
                    renderizarCasas(casasFiltradas);
                }else {
                    alert("error en el codigo");
                    break;
                }
                piletaUsuario = prompt(nombre + " apriete 0 para Continuar");
            }

            function renderizarCasas(listaCasas){

                for(const casa of listaCasas){
                    contenedorCasa.innerHTML += `
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h3 class="card-title">${casa.tipo}</h3>
                    <h5 class="card-subtitle, pt/2">${casa.zona}</h5>
                    <p class="card-text">${casa.agregado}</p>
                    <p class="card-text">${casa.precio}</p>
                    <a href="#" class="btn btn-dark">Comprar</a>
                    </div>
                </div>
                    `;
                }
            }
            break;

        case "2":

        casaSur.sort((a,b) => a.precio - b.precio);

        function filtrarPorAgr2(includes) {
            if(piletaUsuario2== "1"){
            const filtrar = casaSur.filter((casa) => casa.agregado.includes("c"));
            return filtrar;
            }else{
            const filtrar2 = casaSur.filter((casa) => casa.agregado.includes("s"));
            return filtrar2;
            }
        }

        let piletaUsuario2 = prompt("¿" + nombre + ", quiere agregar pileta?\n1-Si\n2-No");

        while (piletaUsuario2 != 0) {
            if (piletaUsuario2==1) {
                alert('tu casa tendra pileta');
                const casasFiltradas2 = filtrarPorAgr2(piletaUsuario2);
                console.table(casasFiltradas2);
                renderizarCasas(casasFiltradas2);
            }else if(piletaUsuario2 ==2){
                alert("tu casa no tendra pileta");
                const casasFiltradas2 = filtrarPorAgr2(piletaUsuario2);
                console.table(casasFiltradas2);
                renderizarCasas(casasFiltradas2);
            }else {
                alert("error en el codigo");
                break;
            }
            piletaUsuario2 = prompt(nombre + " apriete 0 para Continuar");
        }

        function renderizarCasas(listaCasas){

            for(const casa of listaCasas){
                contenedorCasa.innerHTML += `
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h3 class="card-title">${casa.tipo}</h3>
                <h5 class="card-subtitle, pt/2">${casa.zona}</h5>
                <p class="card-text">${casa.agregado}</p>
                <p class="card-text">${casa.precio}</p>
                <a href="#" class="btn btn-dark">Comprar</a>
                </div>
            </div>
                `;
            }
        }
        break;
        //zona este

        case "3":
            casaEste.sort((a,b) => a.precio - b.precio);
            function filtrarPorAgr3(includes) {
                if(piletaUsuario3 == "1"){
                const filtrar = casaEste.filter((casa) => casa.agregado.includes("c"));
                return filtrar;
                }else{
                const filtrar2 = casaEste.filter((casa) => casa.agregado.includes("s"));
                return filtrar2;
                }
            }

            let piletaUsuario3 = prompt("¿" + nombre + ", quiere agregar pileta?\n1-Si\n2-No");

            while (piletaUsuario3 != 0) {
                if (piletaUsuario3==1) {
                    alert('tu casa tendra pileta');
                    const casasFiltradas3 = filtrarPorAgr3(piletaUsuario3);
                    console.table(casasFiltradas3);
                    renderizarCasas(casasFiltradas3);
                }else if(piletaUsuario3 ==2){
                    alert("tu casa no tendra pileta");
                    const casasFiltradas3 = filtrarPorAgr3(piletaUsuario3);
                    console.table(casasFiltradas3);
                    renderizarCasas(casasFiltradas3);
                }else {
                    alert("error en el codigo");
                    break;
                }
                piletaUsuario3 = prompt(nombre + " apriete 0 para Continuar");
            }

            function renderizarCasas(listaCasas){

                for(const casa of listaCasas){
                    contenedorCasa.innerHTML += `
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h3 class="card-title">${casa.tipo}</h3>
                    <h5 class="card-subtitle, pt/2">${casa.zona}</h5>
                    <p class="card-text">${casa.agregado}</p>
                    <p class="card-text">${casa.precio}</p>
                    <a href="#" class="btn btn-dark">Comprar</a>
                    </div>
                </div>
                    `;
                }
            }
            break;

        //zona oeste

        case "4":
            casaOeste.sort((a,b) => a.precio - b.precio);
            function filtrarPorAgr4(includes) {
                if(piletaUsuario4== "1"){
                const filtrar = casaOeste.filter((casa) => casa.agregado.includes("c"));
                return filtrar;
                }else{
                const filtrar2 = casaOeste.filter((casa) => casa.agregado.includes("s"));
                return filtrar2;
                }
            }

            let piletaUsuario4 = prompt("¿" + nombre + ", quiere agregar pileta?\n1-Si\n2-No");

            while (piletaUsuario4 != 0) {
                if (piletaUsuario4==1) {
                    alert('tu casa tendra pileta');
                    const casasFiltradas4 = filtrarPorAgr4(piletaUsuario4);
                    console.table(casasFiltradas4);
                    renderizarCasas(casasFiltradas4);
                }else if(piletaUsuario4 ==2){
                    alert("tu casa no tendra pileta");
                    const casasFiltradas4 = filtrarPorAgr4(piletaUsuario4);
                    console.table(casasFiltradas4);
                    renderizarCasas(casasFiltradas4);
                }else {
                    alert("error en el codigo");
                    break;
                }
                piletaUsuario4 = prompt(nombre + " apriete 0 para Continuar");
            }

            function renderizarCasas(listaCasas){

                for(const casa of listaCasas){
                    contenedorCasa.innerHTML += `
                    <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h3 class="card-title">${casa.tipo}</h3>
                    <h5 class="card-subtitle, pt/2">${casa.zona}</h5>
                    <p class="card-text">${casa.agregado}</p>
                    <p class="card-text">${casa.precio}</p>
                    <a href="#" class="btn btn-dark">Comprar</a>
                    </div>
                </div>
                    `;
                }
            }
            break;

        default:
            alert("El codigo ingresado es incorrecto")

    }

    zonas = prompt("Hola " + nombre + ", en donde te gustaria adquirir una casa?\n1-Zona norte\n2-Zona sur\n3-Zona este\n4-Zona oeste\n0-Finalizar compra");
}