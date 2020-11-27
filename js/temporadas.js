let queryString = location.search;
// console.log(queryString);

let queryObject = new URLSearchParams(queryString);
console.log(queryObject);

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
        
        let destino = document.querySelector('.capitulos');

        destino.innerHTML += ` <div class="infocapitulos">

                                <img class = "fotoscapitulos" src="http://image.tmdb.org/t/p/w500//${data.still_path}" alt="">
                                <a class = "textocapitulos" href="">${data.name} </a>
        
                                </div> `
                            })

}


