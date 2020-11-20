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

    let destino = document.querySelector('.infoseries');

    //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
   {
   destino.innerHTML +=  `  
                                <img class="portada" src="https://image.tmdb.org/t/p/w500/${info.poster_path}" alt="${info.title}">
                            

                            <div class="informacionseries">
                            
                                <h2 class= "titulo"> ${info.name} </h2>

                                <a class= "estrella" href="" target="_blank"> <i class="far fa-star fa-3x"></i> </a>

                                <h2 class "puntuacion"> Puntuación: ${info.vote_average} </h2>

                                <p class="no-mobile"> ${info.overview} </p>

                            
                            </div>
                        `    

        }
        
    })
    .catch( function(error){
        console.log(error);
    }) 


// let urlcapitulos = `https://api.themoviedb.org/3/tv/${id}/season/1/episode/{episode_number}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US`

// fetch(urlcapitulos)
//         .then(function(respuesta){
//             return respuesta.json()
//         })
        
//         .then(function(data){
//             console.log(data)
//             // consguir la información
//             let info = data.results;
//             //Capturar el destino a donde insertaremos los bloques de cada peli.
//             let destino = document.querySelector('.capitulos');
    
//             //recorrer el array y por cada posición del array tenemos que crear un bloque de pelicula en html
//             for(let i=0; i<15; i++){   
//                 destino.innerHTML += `<div class="capitulo">
//                                     <img src="https://image.tmdb.org/t/p/w500/${info.still_path}" alt="${info.name}">
//                                     <h4>${info.name}</h4>
                                
//                                     <h5>${info.episode_number}</h5>
//                                     <p>${info.overview}</p>
//                                     </div>`
    
//             }
           
//         })
//         .catch( function(error){
//             console.log(error);
// })
