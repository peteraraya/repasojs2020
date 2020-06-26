// Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];


console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// asignamos entre [] para la destructaración de arreglos
const [, p2, p3] = personajes;

// colocando la coma sola ignoramos


console.log(p2, p3)

// f2 : para cambiar referencias en todos lados



const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);


// Tarea 
// 1. Crear una función 
// 2. el primer valor del arr se llamará nombre
// 3. el segundo valor del arr se llamará setNombre

const useState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo')
    }];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();
// arr[1]();

