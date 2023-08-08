const arrayPrecios = [];
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

arrayPrecios.push(casaNorte1.precio, casaNorte2.precio, casaNorte3.precio, casaNorte4.precio, casaNorte5.precio);


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

arrayPrecios.push(casaSur1.precio, casaSur2.precio, casaSur3.precio, casaSur4.precio, casaSur5.precio);

// ----------------------------
class casaEste{
    constructor(id, tipo, agregado, precio, zona){
        this.id = id;
        this.tipo = tipo;
        this.agregado = agregado;
        this.precio = precio;
        this.zona = zona
    }
}

const casaEste1 = new casaEste (11, "Casa de cuatro pisos", "S/pileta", 210000, "Zona este");
const casaEste2 = new casaEste (12, "Casa de dos pisos", "S/pileta", 140000, "Zona este");
const casaEste3 = new casaEste (13, "Casa estandar", "C/pileta", 67000, "Zona este");
const casaEste4 = new casaEste (14, "Casa de dos pisos", "C/pileta", 175000, "Zona este");
const casaEste5 = new casaEste (15, "Casa estandar", "S/pileta", 56000, "Zona este");

casasArray.push(casaEste1, casaEste2, casaEste3, casaEste4, casaEste5);

arrayPrecios.push(casaEste1.precio, casaEste2.precio, casaEste3.precio, casaEste4.precio, casaEste5.precio);

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

const casaOeste1 = new casaOeste (16, "Casa estandar", "S/pileta", 70000, "Zona Oeste");
const casaOeste2 = new casaOeste (17, "Casa de dos pisos", "C/pileta", 130000, "Zona Oeste");
const casaOeste3 = new casaOeste (18, "Casa estandar", "C/pileta", 85000, "Zona Oeste");
const casaOeste4 = new casaOeste (19, "Casa de dos pisos", "S/pileta", 138000, "Zona Oeste");
const casaOeste5 = new casaOeste (20, "Casa de tres pisos", "C/pileta", 145000, "Zona Oeste");

casasArray.push(casaOeste1, casaOeste2, casaOeste3, casaOeste4, casaOeste5);

arrayPrecios.push(casaOeste1.precio, casaOeste2.precio, casaOeste3.precio, casaOeste4.precio, casaOeste5.precio);


