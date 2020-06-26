// Fetch API

const apiKey = '4spQrqJHxgysyLL39JnhDCahPWfqmr2C';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// Promesa sin cadena
peticion
    .then(resp => resp.json())
    .then(({ data }) => {

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        // console.log(img)


    })
    .catch(console.warn)



