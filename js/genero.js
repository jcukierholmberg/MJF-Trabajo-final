
let urlgeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US`


//Fetch para seccion "Peliculas mas vistas" (En nuestro HTML) //

fetch(urlgeneros)
    .then(function(respuesta){
        return respuesta.json()
    })
    
    .then(function(data){
        console.log(data)
        // consguir la información
        let info = data.genres;
        //Capturar el destino a donde insertaremos los bloques de cada peli.
        let destino = document.querySelector('.generos');
        console.log(destino)

        //recorrer el array y por cada posición del array tenemos que crear un bloque de pelicula en html
        for(let i=0; i<10; i++){   

            destino.innerHTML += `<div class="containerContent">
                                    
                                    <a href="./genresdetail.html?genres=${info[i].id}" ${info[i].id}  </a> 
                                    <h2 class="titulo"> ${info[i].name} </h2>
                                    </a>
                                    </div>`
                
        }
        
    })
    .catch( function(error){
        console.log(error);
})


