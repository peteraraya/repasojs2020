// Async y Await

const getImagen = async () => {
    return 'http://api.giphy.com/v1/gifs/';
}

// console.log(getImagen());

// getImagen().then(console.log)


// await nos ayuda a trabajar nuestro codigo como si fuera sincrono
const getImagen2 = async () => {

    // Manejo de errores
    try {
        // intenta hacer esto

        const apiKey = '4spQrqJHxgysyLL39JnhDCahPWfqmr2C';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json()

        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error)
    }


}

getImagen2();

