//Traer los parametros de la url query y mediatype

//fetch con el endpoint de Multisearch

//Dentro del then que procesa los datos hay que meter un if que chequee que tipo de mediatype seleccionó el usuario para mostrar todos los resultados o solo el tipo de dato elegido.
//all => mostramos todo.

let queryString = location.search;
// console.log(queryString);

//2 Transformarla en un objeto literal//

let queryObject = new URLSearchParams(queryString);
console.log(queryObject);

//3 Obtener el dato para completar el endpoint//

let id = queryObject.get('id');
console.log(id);

//DECLARAR 4 URLS CON DIFERENTES NOMBRES PARA IDENTIFICARLOS TV MOVIE PERSON Y ALL
let urlmovies = `https://api.themoviedb.org/3/search/movie?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${media_type}&page=1&include_adult=false`
let urltv = `https://api.themoviedb.org/3/search/tv?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&page=1&query=${media_type}&include_adult=false`
let urlperson = `https://api.themoviedb.org/3/search/person?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${media_type}&page=1&include_adult=false`
let urlall = `https://api.themoviedb.org/3/search/multi?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${media_type}&page=1&include_adult=false`



if(queryString != ""){
    if(mediatype = "movies"){
        //Ejecuto fetch de tv 
        fetch(urlmovies)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data;
                let destino = document.querySelector('.container');

            //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
            destino.innerHTML += `<div class="container">
                                <p type="none" class="pelicula"> 
                                <a href="pelicula.html?id=${info[i].id}">  <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="${info[i].title}"></a>
                                </p>
                                <h4> ${info[i].title} </h4>
                                <h5> Puntuación: ${info[i].vote_average}</h5>
                                <a class= "estrella" href="" target="_blank"> <i class="far fa-star fa-2x"></i> </a>
                                </div>`

            })
            .catch( function(error){
                console.log(error);
            }) 
            
}
}


//} else if(movie){
    //Ejecuto fetch de mcoevi 
        //}else if(person){
    //Ejecuto fetch de persona 
        //} else {
    //Ejecuto fetch de milti
        //}