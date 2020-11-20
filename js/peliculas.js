//Esto es para sacar el ID para cada pelicula//

//1 Obtener la querystring//

let queryString = location.search;
// console.log(queryString);

//2 Transformarla en un objeto literal//

let queryObject = new URLSearchParams(queryString);
console.log(queryObject);

//3 Obtener el dato para completar el endpoint//

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

    //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
   {
   destino.innerHTML +=  `
                        <div class="fotokillbill">
                            <img class="portada" src="https://image.tmdb.org/t/p/w500/${info.poster_path}" alt="${info.title}">
                        </div>  

                        <div class="infopeli">
                        <a class= "titulo" > ${info.title}</h2> </a>

                        <a class= "estrella" href="" target="_blank"> <i class="far fa-star fa-3x"></i> </a>

                        <h2 class "puntuacion"> Puntuación: ${info.vote_average} </h2>

                        <a class= "duracion" > Duración: ${info.runtime} min </a>

                        <p class="no-mobile">${info.overview}</p>

                        </div>`    

     
            

        }
        
    })
    .catch( function(error){
        console.log(error);
    }) 


let urlSimilares = `https://api.themoviedb.org/3/movie/similar/${id}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&page=1`

    fetch(urlSimilares)
    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        console.log(data)

    let info = data;

    let destino = document.querySelector('.otraspelis');

    //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
    for(let i=0; i<10; i++){   
        destino.innerHTML += `<div class="contenedor-pelicula">
                                    <a href="pelicula.html?id=${info[i].id}">  <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}"></a>
                                    <h1> ${info[i].title} </h1>
                                    <img class="foto" src="./Fotos/generos/terror/2.jpg" alt="${info[i].title}"width="100%">
                                </div>`

    }
        
    })
    .catch( function(error){
        console.log(error);
    }) 