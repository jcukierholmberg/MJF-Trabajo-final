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

let urlseries = `https://api.themoviedb.org/3/tv/${id}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&page=1`

fetch(urlseries)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(data){
        console.log(data)
        let info = data;
        let sesasonsContainer = document.querySelector('.seasons')
        let seasons = data.seasons
        let capitulos = data.number_of_episodes
        let destino = document.querySelector('.infoseries');

        //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
        destino.innerHTML += `<img class="portada" src="https://image.tmdb.org/t/p/w500/${info.poster_path}" alt="${info.title}">                  
                                <div class="informacionseries">
                                    <h2 class= "titulo"> ${info.name} </h2>
                                    <a class= "estrella" href="" target="_blank"> <i class="far fa-star fa-3x"></i> </a>
                                    <h2 class "puntuacion"> Puntuación: ${info.vote_average} </h2>
                                    <a href= "Genero.html" > Genero: ${info.genres[0].name} </a> 
                                    <p class="no-mobile"> ${info.overview} </p>
                                </div>`   
                                
        for (let i=0; i<seasons.length; i++) {
            //pasar numero de temporada//
            sesasonsContainer.innerHTML += `<h3>${seasons[i].name}</h3>
                                            <p>${seasons[i].overview}</p>
                                            <a class="episodes" href="temporadas.html?id=${id}&season=${seasons[i].season_number}&episodesCount=${seasons[i].episode_count}"> Ver capítulos </a>` 
        }

        
    })
    .catch( function(error){
        console.log(error);
    }) 
