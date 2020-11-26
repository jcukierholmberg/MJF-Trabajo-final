let queryString = location.search;
let queryObject = new URLSearchParams(queryString);

let genres = queryObject.get("genres");

let url =`https://api.themoviedb.org/3/discover/movie?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres}`;

fetch(url)
    .then (function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        console.log(data);

    let info = data.results;

        let destino = document.querySelector('.containerContent');
        console.log(destino);

        for(let i=0; i<10; i++){
        
            destino.innerHTML += `<div class="containerContent">
                                                 <div> <a href="pelicula.html?id=${info[i].id}">   
                                                 <img class="portada" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt=""> </a> 
                                                 </div>
                                                <h2> Hola hola </h2>
                                        </div>`
        }
    })

.catch(function(error){
    console.log(error)
})