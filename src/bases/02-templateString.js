const nombre = 'Peter';
const apellido = 'Araya';


const nombreCompleto = `Hola 
                        ${nombre} 
                        ${apellido}
                        ${1 + 1}`
    ;


console.log(nombreCompleto);



function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto  :  ${getSaludo('perdro')}`);