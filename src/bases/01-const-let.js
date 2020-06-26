console.log('Hola mundo');

// Variables y constantes

const nombre = 'Peter';
const apellido = 'Araya';

let valorDado = 5;
valorDado = 4;



console.log(nombre + " " + apellido, +" "+valorDado);

// estas variables se crean en ambiente de ambito en particular (scope)

if (true) {
    let valorDado = 6; // este valor dado solo va a existir en este ambiente de scope
    console.log(valorDado);
}

// Imprime el valorDado
console.log(valorDado);


// var no se debe usar .......