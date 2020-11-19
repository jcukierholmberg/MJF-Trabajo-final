let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US`
let apiKey = "4aafc89b60967c61ce5438ca044af061"

fetch(url)
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
            destino.innerHTML += `<a href="">ACCIÓN</a>
            <div class="accion">
                <div class="contenedor-pelicula">
                    <img class="foto"src="./Fotos/generos/accion/1.jpg" alt="Avengers" width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto"src="./Fotos/generos/accion/2.jpg" alt="El septimo hijo" width="100%" >
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/accion/3.jpg" alt="El niño" width="100%" >
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/accion/4.jpg" alt="Adios" width="100%" >
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/accion/5.jpg" alt="Micmacs"width="100%" >
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/accion/6.jpg" alt="Harry Potter" width="100%" >
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/accion/7.jpg" alt="Aguila" width="100%" >
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
    
            </div>

        <a href="">COMEDIA</a>
            <div class="comedia">
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/comedia/1.jpg" alt="Malditos vecinos" width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/comedia/2.jpg" alt="Public disturbance"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>  
                <div class="contenedor-pelicula">  
                     <img class="foto" src="./Fotos/generos/comedia/3.jpg" alt="Pasante de moda"width="100%">
                     <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/comedia/4.jpg" alt="Focus"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/comedia/5.jpg" alt="Son como niños"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/comedia/6.jpg" alt="Quien ?!*! son los miller"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/comedia/7.jpg" alt="Tammy"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>

            </div>

        <a href="">TERROR</a>
            <div class="terror">
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/terror/1.jpg" alt="Let me in" width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/terror/2.jpg" alt="Man of medan"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/terror/4.jpg" alt="Outlast"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/terror/5.jpg" alt="Anabelle"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/terror/6.jpeg" alt="Silencio"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/terror/6.jpg" alt="Expediente warren"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                 </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/terror/7.jpg" alt="Caso 39"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                
            </div>

        <a href="">ROMANCE</a>
            <div class="romance">
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/amor/1.jpg" alt="The fault in our stars"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/amor/2.jpg" alt="Diario de una pasion"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/amor/3.jpg" alt="Yo antes de ti"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/amor/4.jpg" alt="The last song"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/amor/5.jpg" alt="Un lugar donde refugiarse"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/amor/6.jpg" alt="Tres metros sobre el cielo"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/amor/8.jpg" alt="Titanic"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
            </div>  

        <a href="">DOCUMENTALES</a>
            <div class="documentales">
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/documentales/1.jpg" alt="The rolling stones"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/documentales/2.jpg" alt="Rising phoenix"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/documentales/3.jpg" alt="Dime quien soy"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/documentales/4.jpeg" alt="The social dialema"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula"> 
                    <img class="foto" src="./Fotos/generos/documentales/5.jpg" alt="Casting Jonbenet"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/documentales/6.jpg" alt="El caso alcasser"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
                <div class="contenedor-pelicula">
                    <img class="foto" src="./Fotos/generos/documentales/7.jpg" alt="Cowspiracy"width="100%">
                    <i class="far fa-play-circle fa-3x center"> </i>
                </div>
  
            </div>`

        }
        
    })
    .catch( function(error){
        console.log(error);
})

