//bienvenidos a sitio//
let mensaje = prompt("¿Tienes una cuenta?")

if (mensaje == "si" ) {
    alert ("Bienvenido al sitio 'nombre de la persona'")
}
else if (mensaje == "no") {
    alert ("Create una cuenta gratuita");
}

//URL//
let media = "movie"
let url= `https://api.themoviedb.org/3/trending/${media}/day?api_key=4aafc89b60967c61ce5438ca044af061`

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
            destino.innerHTML += ` <div class="contenedor-series">
                             <p type="none" class="pelicula"> 
                                <a href="series.html">  <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}"></a>
                             </p>
                            <h4> ${info[i].title} </h4>
                            <h5> 145 min</h5>
                        </div>`

        }
       
       

    })
    .catch( function(error){
        console.log(error);
    })




