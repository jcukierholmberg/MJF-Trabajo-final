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



let url= `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/1?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US`

fetch(url)
    .then(function(respuesta){
        return respuesta.json()
    })
    
    .then(function(data){
        console.log(data)
        // consguir la información
        let info = data.results;
        //Capturar el destino a donde insertaremos los bloques de cada peli.
        let destino = document.querySelector('.contenedor-episodios');

        //recorrer el array y por cada posición del array tenemos que crear un bloque de pelicula en html
        for(let i=0; i<10; i++){   
            destino.innerHTML += `<div class="contenedor-episodios">
                                    <h1> ${episode_number} </h1>
                                  </div>`

        }
        
    })
    .catch( function(error){
        console.log(error);
})
