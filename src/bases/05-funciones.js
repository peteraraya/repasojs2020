
// Funciones en JS
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}
// console.log(saludar('Goku'));
console.log(saludar);


// Funciones de Flecha  : 
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2('Vegeta'));


// Forma Corta : omitimos el return
const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('Gohan'));


// Función de flecha sin argumentos
const saludar4 = () => `Hola Mundo`;
console.log(saludar4());


// agregamos un () para devolver un objeto de forma implicita
const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'El_papi_1052'

    })

const user = getUser();
console.log(user);


// Tarea
// 1 Transformar a función de flecha ()=>
// 2 Tiene que retornar un objeto implicito ({})
// 3 Pruebas


const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123456',
    username: nombre

})

const usuarioActivo = getUsuarioActivo('Peter');

console.log(usuarioActivo.username);