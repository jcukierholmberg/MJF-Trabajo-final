
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


const storage =localStorage.getItem ("favoritos")
console.log(storage);

if (storage == null) {
    localStorage.setItem("favoritos" , "[]")
} 


let container = document.querySelector(".otraspelis")
//Transformo los favoritos en un array
let storageJs =JSON.parse(storage)
let movies = ""

//Por cada id en el array de favoritos pido su informacion
storageJs.forEach(id => {

    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=4aafc89b60967c61ce5438ca044af061`)
    .then (datos => datos.json())
    .then (respuesta => {
        
        console.log(respuesta);
                movies = `<article>
                                <h2> ${respuesta.title} </h2>
                                <img src= "https://image.tmdb.org/t/p/w500/${respuesta.poster_path}" />
                            </article>` ;
                container.innerHTML += movies;
    })

    .catch (error=>console.log(error))
    
});



let button = document.querySelector(".favorite")

button.addEventListener ("click", function() {
    let storage =localStorage.getItem ("favoritos")
    let storageJs= JSON.parse (storage)
    if (!storageJs.includes(idMovie)) {
        storageJs.push(idMovie)
    }
    else { 
        storageJs = storageJs.filter(function(movie) {
            return movie != idMovie
        })
    }
    
})