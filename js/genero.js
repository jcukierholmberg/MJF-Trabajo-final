let urlGeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US`
let apiKey = "4aafc89b60967c61ce5438ca044af061"

fetch(urlGeneros)
    .then(function(respuesta){
        return respuesta.json()
    })
    
    .then(function(data){
        console.log(data)
        // consguir la información
        let info = data.results;
        //Capturar el destino a donde insertaremos los bloques de cada peli.
        let destino = document.querySelector('.generos');

        //recorrer el array y por cada posición del array tenemos que crear un bloque de pelicula en html
        for(let i=0; i<10; i++){   
            destino.innerHTML += `<a href="">${info[i].name}</a>
            <div class="${info[i].name}
            ">
                <div class="contenedor-pelicula">
                    <img class="foto"src="./Fotos/generos/accion/1.jpg" alt="Avengers" width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>`

        }
        
    })
    .catch( function(error){
        console.log(error);
})

