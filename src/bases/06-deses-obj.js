// Destructuración de Objetos | Importante !!!!

const persona = {
    nombre: 'Peter',
    edad: 33,
    clave: 'Loco Peter'
};

// NO recomendado
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


// extrae dentro de esas llaves lo que tiene ese objeto
const { nombre, edad, clave, } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);



// Otros usos  : destructuración en el argumento, valores por defecto con = 

const useContext = ({ clave, nombre, edad, rango = 'no tengo niuna wea' }) => {
    // console.log(usuario);

    // console.log(nombre," - ",edad," - ", rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.124554,
            lng: 25.212145,
        }
    }
}
// para extraer objetos anidados : latlng:{lat, lng }
const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);

console.log(nombreClave, anios);

console.log(lat);
console.log(lng);





// Algo que nos permita extraer las propiedades

// en react usamos mas const que let