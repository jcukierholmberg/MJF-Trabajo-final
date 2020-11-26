
// //bienvenidos a sitio//

// let mensaje = prompt ("Tenes creada una cuenta?")

// //Cambiar para que no sea un texto sino que sea un coso de opciones//

// if (mensaje == "si" ) {
//     alert ("apreta 'ok' para ir a iniciar sesión");

//     window.location.href = "iniciosesion.html"

//     //mandarlo a la pagina de Inicio de sesion//

// }

// else if (mensaje == "no" )
// {
//     alert ("apreta 'ok' para crearte una cuenta");

//     window.location.href = "iniciosesion.html";
// }

const query = location.search
const queryString = new URLSearchParams(query)
const idMovie = queryString.get("id")


let container = document.querySelector(".otraspelis")
//Transformo los favoritos en un array
let storageJs =JSON.parse(storage)
let movies = ""

//Por cada id en el array de favoritos pido su informacion.
storageJs.forEach(id => {

    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=4aafc89b60967c61ce5438ca044af061`)
    .then (datos => datos.json())
    .then (respuesta => {
        
        console.log(respuesta);
                movies = 
                `<!-- <img class="portada" src="Fotos/peliculas/madmax.jpeg" alt="madmax">
                            
                <div class= "informacionpelicula" >
    
                    <h2 class= "titulo" > Mad madmax</h2> 
    
                    <a class= "estrella" href="" target="_blank"> <i class="estrellita far fa-star fa-3x"></i> </a> 
            
                    <h2 class = "puntuacion"> Puntuación: 8 </h2>
    
                    <a class= "duracion" > Duración: 137 min </a>
    
                    <p class="no-mobile"> </p>
    
                </div> --> `
                            

                            

                container.innerHTML += movies;
    })

    .catch (error=>console.log(error))
    
});



