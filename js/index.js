
//URL//
let media = "movie"
let url= `https://api.themoviedb.org/3/trending/${media}/day?api_key=4aafc89b60967c61ce5438ca044af061`


//Fetch para seccion "Peliculas mas vistas" (En nuestro HTML) //

fetch(url)
    .then(function(respuesta){
        return respuesta.json()
    })
    
    .then(function(data){
        console.log(data)
        // consguir la información
        let info = data.results;
        //Capturar el destino a donde insertaremos los bloques de cada peli.
        let destino = document.querySelector('.listaseries');

        //recorrer el array y por cada posición del array tenemos que crear un bloque de pelicula en html
        for(let i=0; i<10; i++){   
            destino.innerHTML += `<div class="contenedor-series">
                                    <p type="none" class="pelicula"> 
                                    <a href="pelicula.html?id=${info[i].id}">  <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}"></a>
                                    </p>
                                    <h4> ${info[i].title} </h4>
                                    <h5> 145 min</h5>
                                  </div>`

        }
        
    })
    .catch( function(error){
        console.log(error);
})


let urlseries = "https://api.themoviedb.org/3/tv/{tv_id}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US"

fetch(urlseries)
    .then(function(respuesta){
        return respuesta.json()
    })
    
    .then(function(data){
        console.log(data)
        // consguir la información
        let info = data.results;
        //Capturar el destino a donde insertaremos los bloques de cada peli.
        let destino = document.querySelector('.listapeliculas');

        //recorrer el array y por cada posición del array tenemos que crear un bloque de pelicula en html
        for(let i=0; i<10; i++){   
            destino.innerHTML += `<div class="contenedor-pelicula">
                                    <p type="none" class="serie"> 
                                    <a href="pelicula.html?id=${info[i].id}">  <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}"></a>
                                    </p>
                                    <h4> ${info[i].title} </h4>
                                    <h5> 145 min</h5>
                                  </div>`

        }
        
    })
    .catch( function(error){
        console.log(error);
})




