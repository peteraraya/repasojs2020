// Promesas

import { getHeroeById } from "./bases/08-imp-exp";


// las promessas se crean con un argumento llamado callback
// el callback recibe dos argumentos, uno llamado resolve y otro reject

// const promesa = new Promise( (resolve,reject)=>{

//     setTimeout(() => {
//         // console.log('2 segundos');

//         // Tarea
//         const p1  = getHeroeById(2);
//         console.log(p1)

//         // notifica  a quien este escuchando el then
//         //resolve( p1 ); 
//         // le traspasamos el valor del argumento al then

//         reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('Then de la promesa' + heroe);
// })
// .catch( err=> console.warn(err));


// está función por defecto regresa void
const getHeroeByIdAsync = (id) => {

    // const promesa = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // Tarea
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {

                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
    // retornamos para reeemplazar el  retorno void
    // return promesa;

}

// Imprimo promesa
getHeroeByIdAsync(3)
    // .then(heroe=> console.log('Heroe' , heroe))
    .then(console.log) // envia el primer elemento
    // .catch( err => console.warn(err));
    .catch(console.warn);


// then: indica que la promesa se hizo correctamente  --> se llama con un resolve()
// catch: dio un error y hay que manejar la excepción
// finally : esalgo que se va a ejecutar despues del then y del catch





// Las promesas por naturaleza son asincronas 

// Primero se ejecuta todo el codigo que sincrono (secuencial)

// Y las promesas caen una pila espacial de javascript, cuando se termine lo sicrono va ejecutar las promesas