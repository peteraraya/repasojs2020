// Operador condicional ternario

// es una manera corta de hacer una condición

const activo = true;

//let mensaje = '';

// if (activo) {
//     mensaje = 'Activo';
// }else{
//     mensaje = 'Inactivo';
// }


// Operador ternario

// const mensaje = (activo)? 'Activo':'Inactivo';

const mensaje = !activo && 'Activo';

console.log(mensaje);