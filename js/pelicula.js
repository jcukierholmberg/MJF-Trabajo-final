//Esto es para sacar el ID para cada pelicula//

//1 Obtener la querystring//

let queryString = location.search;
console.log(queryString)

//2 Transformarla en un objeto literal//

let queryObject = new URLSearchParams(queryString)
console.log(queryObject)

//3 Obtener el dato para completar el endpoint//

let id = queryObject.get('id');
console.log(id)

let apiKey = 4aafc89b60967c61ce5438ca044af061

let url = 'https://api.themoviedb.org/3/movie/${id}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US'

fetch(url)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(data){
        console.log(data)
 
   //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
   destino.innerHTML += ''

 
   

        }
        
    })
    .catch( function(error){
        console.log(error);
    })
