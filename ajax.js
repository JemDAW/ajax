const key = 'yv7AE1nYWMcjPtGryWIkjGZXfmJzzNRv';
const body = document.querySelector('body');

var botonBuscar= document.getElementById("buscarBoton");
botonBuscar.addEventListener('click', busqueda,false);

const getJSON = function (url){
    return fetch(url).then(response => {
        return response.json();
    });
}

function busqueda(){
    let elementoBuscar = document.getElementById("buscar").value;
    getJSON(`http://api.giphy.com/v1/gifs/search?q=${elementoBuscar}&api_key=${key}&limit=5`)
    .then(data =>{
        renderizarGif(data[0]);
    })
}

function renderizarGif(data){
    const html = `<img src="${data.url}" />`
    body.insertAdjacentHTML('beforeend', html);
}