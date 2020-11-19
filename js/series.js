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



let urlseries = `https://api.themoviedb.org/3/tv/${id}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&page=1`



fetch(urlseries)
    .then(function(respuesta){
        return respuesta.json()
    })

    .then(function(data){
        console.log(data)

    let info = data;

    let destino = document.querySelector('.infoseries');

    //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
   {
   destino.innerHTML +=  `  <div class="foto">
                                <img class="portada" src="https://image.tmdb.org/t/p/w500/${info.poster_path}" alt="${info.title}">
                            </div>   

                            <div class="infoseries">
                            <div >
                                <a class= "titulo"> ${info.name} </a>

                                <a class= "estrella" href="" target="_blank"> <i class="far fa-star fa-3x"></i> </a>

                                <h2 class "puntuacion"> Puntuación: ${info.vote_average} </h2>

                                <p class="no-mobile"> ${info.overview} </p>

                            </div>
                            </div>
                        `    

        }
        
    })
    .catch( function(error){
        console.log(error);
    }) 