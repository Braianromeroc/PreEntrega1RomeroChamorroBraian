let casasArray =  [];

class casaNorte{
    constructor(id, tipo, agregado, precio, zona){
        this.id = id;
        this.tipo = tipo;
        this.agregado = agregado;
        this.precio = precio;
        this.zona = zona
    }
}


const casaNorte1 = new casaNorte (1, "Casa estandar", "C/pileta", 80000, "Zona norte");
const casaNorte2 = new casaNorte (2, "Casa de dos pisos", "C/pileta", 160000, "Zona norte");
const casaNorte3 = new casaNorte (3, "Casa estandar", "S/pileta", 45000, "Zona norte");
const casaNorte4 = new casaNorte (4, "Casa de tres pisos", "S/pileta", 170000, "Zona norte");
const casaNorte5 = new casaNorte (5, "Casa de dos pisos", "S/pileta", 130000, "Zona norte");

casasArray.push(casaNorte1, casaNorte2, casaNorte3, casaNorte4, casaNorte5);

// ----------------------------
class casaSur{
    constructor(id, tipo, agregado, precio, zona){
        this.id = id;
        this.tipo = tipo;
        this.agregado = agregado;
        this.precio = precio;
        this.zona = zona
    }
}

const casaSur1 = new casaSur (6, "Casa de dos pisos", "S/pileta", 139000, "Zona sur");
const casaSur2 = new casaSur (7, "Casa estandar", "C/pileta", 85000, "Zona sur");
const casaSur3 = new casaSur (8, "Casa de dos pisos", "C/pileta", 180000, "Zona sur");
const casaSur4 = new casaSur (9, "Casa de tres pisos", "S/pileta", 156000, "Zona sur");
const casaSur5 = new casaSur (10, "Casa estandar", "S/pileta", 68000, "Zona sur");

casasArray.push(casaSur1, casaSur2, casaSur3, casaSur4, casaSur5);
// ---------------------------------------
class casaOeste{
    constructor(id, tipo, agregado, precio, zona){
        this.id = id;
        this.tipo = tipo;
        this.agregado = agregado;
        this.precio = precio;
        this.zona = zona
    }
}

const casaOeste1 = new casaOeste (11, "Casa estandar", "S/pileta", 70000, "Zona Oeste");
const casaOeste2 = new casaOeste (12, "Casa de dos pisos", "C/pileta", 130000, "Zona Oeste");
const casaOeste3 = new casaOeste (13, "Casa estandar", "C/pileta", 85000, "Zona Oeste");
const casaOeste4 = new casaOeste (14, "Casa de dos pisos", "S/pileta", 138000, "Zona Oeste");
const casaOeste5 = new casaOeste (15, "Casa de tres pisos", "C/pileta", 145000, "Zona Oeste");

casasArray.push(casaOeste1, casaOeste2, casaOeste3, casaOeste4, casaOeste5);