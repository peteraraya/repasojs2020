// Arreglos : es una coleccion de información que se encuentra en una misma variable


// no se recomienda hacer los arreglos de esta forma
// exceptuando cuando se requiere declarar un arreglo con tamaño fijo o predefinido
// const arreglo = new Array( 100 ); 
// arreglo.push(1);

const arreglo = [1, 2, 3, 4];
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);
// arreglo.push(5);
console.log(arreglo);

let arreglo2 = [...arreglo, 5];

console.log(arreglo2);

// map() : permite poder modificar arreglo 3  sin afectar
const arreglo3 = arreglo2.map((numero) => {
    return numero * 2;
});

console.log(arreglo3);

// arreglo2.push( 6 );

// [] : essto es un arreglo

// no es recomendable utilizar el push , ya que este modifica el objeto principal - se recomienda utilizar el operador spread

// el operador spread extrae la información y manda indivisualmente cada uno de ellos


// El operador map() crea un nuevo arreglo con los resultados de la llamada a la función indicada
// el operador map espera una función, el metodo map es prototype

