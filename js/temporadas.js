//Esto es para sacar el ID para cada pelicula o serie//
//1 Obtener la querystring//
let queryString = location.search;
// console.log(queryString);

//2 Transformarla en un objeto literal//
let queryObject = new URLSearchParams(queryString);
console.log(queryObject);

//3 Obtener el dato para completar el endpoint//
let id = queryObject.get('id');
console.log(id);

let season= queryObject.get('season');
console.log(season);

let episodesCount = queryObject.get('episodesCount');
console.log(episodesCount);

for (let i=1; i<=episodesCount; i++) {
let url= `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${i}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US`

fetch(url)
    .then(function(respuesta){
        return respuesta.json()
    })
    
    .then(function(data){
        console.log(data)
        // consguir la información
        
        //Capturar el destino a donde insertaremos los bloques de cada peli.
        let destino = document.querySelector('.capitulos');

        destino.innerHTML += ` <div class="infocapitulos">

                                <img class = "fotoscapitulos" src="http://image.tmdb.org/t/p/w500//${data.still_path}" alt="">
                                <a class = "textocapitulos" href="">${data.name} </a>
        
                                </div> `
                            })

}


