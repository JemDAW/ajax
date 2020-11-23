const key = 'yv7AE1nYWMcjPtGryWIkjGZXfmJzzNRv';
const div = document.getElementById('contenedorGif');

div.style.opacity = 0;
var botonBuscar= document.getElementById("buscarBoton");
botonBuscar.addEventListener('click', busqueda, false);

const getJSON = function (url){
    return fetch(url).then(response => {
        return response.json();
    });
}


function busqueda(){
    let elementoBuscar = document.getElementById("buscar").value;
    getJSON(`http://api.giphy.com/v1/gifs/search?q=${elementoBuscar}&api_key=${key}&limit=5`)
    .then(data =>{
        let arrayDatos= data.data;
        div.innerHTML = " ";
        for(let i=0; i<arrayDatos.length; i++){
        renderizarGif(arrayDatos, i);
        }
    })
}


function renderizarGif(data, numImg){
    let imagen = data[numImg].images.downsized;
    let html = `<img src="${imagen.url}" />`;
    div.insertAdjacentHTML('beforeend', html);
    div.style.opacity = 1;
}