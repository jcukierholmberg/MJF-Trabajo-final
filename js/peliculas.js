

let queryString = location.search;
// console.log(queryString);


let queryObject = new URLSearchParams(queryString);
console.log(queryObject);


let id = queryObject.get('id');
console.log(id);

let apiKey = "4aafc89b60967c61ce5438ca044af061"
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`



fetch(url)
    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        console.log(data)


    let info = data;

    let destino = document.querySelector('.infopeli');

   
   destino.innerHTML +=  `
                        <img class="portada" src="https://image.tmdb.org/t/p/w500/${info.poster_path}" alt="${info.title}">
                        <div class= "informacionpelicula" >
                        <h2 class= "titulo" > ${info.title} </h2> 
                        <a class= "estrella" href="" target="_blank"> <i class="far fa-star fa-3x"></i> </a> 
                        <h2 class "puntuacion"> Puntuación: ${info.vote_average} </h2>
                        <a class= "duracion" > Duración: ${info.runtime} min </a>
                        <p class="no-mobile">${info.overview}</p>

                        </div>`    



                const storage =localStorage.getItem ("favoritos")
                console.log(storage);

                if (storage == null) {
                    localStorage.setItem("favoritos" , "[]")
                } 

                let button = document.querySelector(".estrella")

                button.addEventListener ("click", function(e) {
                    e.preventDefault()

                    let storage =localStorage.getItem ("favoritos")
                    let storageJs= JSON.parse (storage)
                    if (!storageJs.includes(id)) {
                        storageJs.push(id)
                        let dataFavs = JSON.stringify(storageJs)
                        localStorage.setItem ("favoritos", dataFavs)
                    }
                    else { 
                        storageJs = storageJs.filter(function(movie) {
                            return movie != id
                        })
                    }
                    
                })




        
    let urlSimilares = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&page=1`

    fetch(urlSimilares)
    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(recomendados){
       console.log(recomendados);


    let destino = document.querySelector('.otraspelis');

   
    if (recomendados.results.length !=0){
   
    for(let i=0; i<7; i++){   
        destino.innerHTML += `<div class="contenedor-pelicula">
                                    <a href="pelicula.html?id=${recomendados.results[i].id}"> 
                                     <img class="foto" src="http://image.tmdb.org/t/p/w500/${recomendados.results[i].poster_path}" alt="${recomendados.results[i].title}"></a>
                                    <h4> ${recomendados.results[i].title} </h4>
                        

                                </div>`

    }
    }   
    else {
        document.querySelector('.noresults').innerText = 'No hay peliculas recomendadas';
    }   

    })
    .catch( function(error){
        console.log(error);
    }) 

    })
    .catch( function(error){
        console.log(error);
    }) 





