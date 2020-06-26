// objetos literales

const persona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        calle: 'new york',
        zip: 554546545,
        lat: 14.554121,
        lng: 34.565524
    }
};


console.log(persona);

// copiamos la referencia 
const persona2 = persona;


// operador spread

const persona3 = { ...persona };


// no hacerlo jamas
// persona2.nombre = 'peter';


console.log(persona2);

console.log(persona3);


// {} : objeto

// buena practica utilizar una coma al final en el objeto

// valor y propiedad del mismo nombre se puede obiar por ejemeplo persona:persona

// console.table


// operador spread : crea un clon con todas las propiedades y asignarlas  al nuevo objeto
