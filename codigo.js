let nombre = prompt("Ingrese su nombre");

for(let i=1; i <=2; i++)
if(nombre == ""){
    alert("No ingresaste el nombre");
    nombre = prompt("Ingrese su nombre");
} else {
    continue;
}

let presupuestoTotal = 0;
const iva = 1.10;

let zonas = prompt("Hola " + nombre + ", de que zona sos?\n1-Zona norte\n2-Zona sur\n3-Zona este\n4-Zona oeste\n0-Salir/Finalizar compra");

while(zonas != "0"){
    switch(zonas){

//zona norte

        case "1":
            let norte = prompt("En esta zona tengo para ofrecerte:\n1-Casa c/lago ... U$D 80.000\n2-Casa de dos pisos c/pileta ... U$D 160.000\n3-Casa estandar s/pileta ... U$D 45.000\n0-Finalizar compra");
            while(norte != "0"){
                switch(norte){
                    case "1":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa c/lago ... U$D 80.000");
                        finalizarPresupuestoTotal(80000);
                        break;
                    case "2":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa de dos pisos c/pileta ... U$D 160.000");
                        finalizarPresupuestoTotal(160000);
                        break;
                    case "3":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa estandar s/pileta ... U$D 45.000");
                        finalizarPresupuestoTotal(45000);
                        break;
                    default:
                        alert("El codigo ingresado es incorrecto");
                        break;
                }
                norte = prompt("En esta zona tengo para ofrecerte:\n1-Casa c/lago ... U$D 80.000\n2-Casa de dos pisos c/pileta ... U$D 160.000\n3-Casa estandar s/pileta ... U$D 45.000\n0-Finalizar compra");
            }
            break;

//zona sur

        case "2":
            let sur = prompt("En esta zona tengo para ofrecerte:\n1-Casa de dos pisos c/lago ... U$D 139.000\n2-Casa estandar c/pileta ... U$D 85.000\n3-Casa estandar s/pileta ... U$D 69.000\n0-Finalizar compra");
            while(sur != "0"){
                switch(sur){
                    case "1":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa de dos pisos c/lago ... U$D 139.000");
                        finalizarPresupuestoTotal(139000);
                        break;
                    case "2":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa estandar c/pileta ... U$D 85.000");
                        finalizarPresupuestoTotal(85000);
                        break;
                    case "3":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa estandar s/pileta ... U$D 69.000");
                        finalizarPresupuestoTotal(69000);
                        break;
                    default:
                        alert("El codigo ingresado es incorrecto");
                        break;
                }
                sur = prompt("En esta zona tengo para ofrecerte:\n1-Casa de dos pisos c/lago ... U$D 139.000\n2-Casa estandar c/pileta ... U$D 85.000\n3-Casa estandar s/pileta ... U$D 69.000\n0-Finalizar compra");
            }
            break;

//zona este

        case "3":
            let este = prompt("En esta zona tengo para ofrecerte:\n1-Casa de cuatro pisos s/pileta ... U$D 210.000\n2-Casa de dos pisos s/pileta ... U$D 140.000\n3-Casa estandar c/pileta ... U$D 67.000\n0-Finalizar compra");
            while(este != "0"){
                switch(este){
                    case "1":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa de cuatro pisos ... U$D 210.000");
                        finalizarPresupuestoTotal(210000);
                        break;
                    case "2":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa de dos pisos s/pileta ... U$D 140.000");
                        finalizarPresupuestoTotal(140000);
                        break;
                    case "3":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa estandar c/pileta ... U$D 67.000");
                        finalizarPresupuestoTotal(67000);
                        break;
                    default:
                        alert("El codigo ingresado es incorrecto");
                        break;
                }
                este = prompt("En esta zona tengo para ofrecerte:\n1-Casa de cuatro pisos ... U$D 210.000\n2-Casa de dos pisos s/pileta ... U$D 140.000\n3-Casa estandar c/pileta ... U$D 67.000\n0-Finalizar compra");
            }
            break;

//zona oeste

        case "4":
            let oeste = prompt("En esta zona tengo para ofrecerte:\n1-Casa estandar s/pileta... U$D 70.000\n2-Casa de dos pisos c/pileta ... U$D 160.000\n3-Casa de dos pisos s/pileta ... U$D 138.000\n0-Finalizar compra");
            while(oeste != "0"){
                switch(oeste){
                    case "1":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa estandar s/pileta... U$D 70.000");
                        finalizarPresupuestoTotal(70000);
                        break;
                    case "2":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa de dos pisos c/pileta ... U$D 160.000");
                        finalizarPresupuestoTotal(160000);
                        break;
                    case "3":
                        alert(nombre + ", tenes pendiente la confirmacion de compra de Casa de dos pisos s/pileta ... U$D 138.000");
                        finalizarPresupuestoTotal(138000);
                        break;
                    default:
                        alert("El codigo ingresado es incorrecto");
                        break;
                }
                oeste = prompt("En esta zona tengo para ofrecerte:\n1-Casa estandar s/pileta... U$D 70.000\n2-Casa de dos pisos c/pileta ... U$D 160.000\n3-Casa de dos pisos s/pileta ... U$D 138.000\n0-Salir/Finalizar compra");
            }
            break;

        default:
            alert("El codigo ingresado es incorrecto")

    }

    zonas = prompt("Hola " + nombre + ", de que zona sos?\n1-Zona norte\n2-Zona sur\n3-Zona este\n4-Zona oeste\n0-Finalizar compra");
}

function finalizarPresupuestoTotal(precioCasa){
    presupuestoTotal = presupuestoTotal + precioCasa * iva;
    console.log(nombre + ", tu subtotal hasta el momento es: U$D " + presupuestoTotal + " c/IVA")
}

alert("Muchas gracias por tu compra " + nombre + ", el monto total es de U$D " + presupuestoTotal + " c/IVA");