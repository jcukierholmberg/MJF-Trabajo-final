//Traer los parametros de la url query y mediatype


//Dentro del then que procesa los datos hay que meter un if que chequee que tipo de mediatype seleccionó el usuario para mostrar todos los resultados o solo el tipo de dato elegido.
//all => mostramos todo.

let queryString = window.location.search;
//console.log(queryString);

//2 Transformarla en un objeto literal//
let queryObject = new URLSearchParams(queryString);
//console.log(queryObject);

//3 Obtener el dato para completar el endpoint//
let searchData = queryObject.get('searchData');
let mediaType = queryObject.get ('mediaType');
//console.log(searchData);
//console.log(mediaType);

window.addEventListener("load", function(){
    let spinner = document.querySelector('.loader')
    spinner.style.display= "none"
})

//DECLARAR 4 URLS CON DIFERENTES NOMBRES PARA IDENTIFICARLOS TV MOVIE PERSON Y ALL
let urlmovies = `https://api.themoviedb.org/3/search/movie?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`
let urltv = `https://api.themoviedb.org/3/search/tv?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&page=1&query=${searchData}&include_adult=false`
let urlperson = `https://api.themoviedb.org/3/search/person?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`
let urlall = `https://api.themoviedb.org/3/search/multi?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`




if(queryString != ""){
    if(mediaType == "movies"){
        fetch(urlmovies)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data;
                let destino = document.querySelector('.container');

            destino.innerHTML += `<article class="card-wrapper col-sm-3">
                                <div class="card my-3">
                                    <img class="foto" src="http://image.tmdb.org/t/p/w500/${info.poster_path}" alt="...">
                                        <div class="card-body">
                                            <h5> ${info.title} </h5>
                                            <p> ${info.overview}</p>
                                            <a href="pelicula.html?id=${info.id}"> Ver más </a>
                                    <   /div>
                                </div>
                            </article>`
                          

            })
            .catch( function(error){
                console.log(error);
            }) 


        } else if(mediaType == "tv"){
        fetch(urltv)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data;
                let destino = document.querySelector('.container');

             //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
             destino.innerHTML += `<article class="card-wrapper col-sm-3">
                                        <div class="card my-3">
                                            <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="...">
                                            <div class="card-body">
                                                <h5> ${info[i].name} </h5>
                                                <p> ${info[i].overview}</p>
                                            <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                        </div>
                                    </div>
                                    </article>`
            })
            .catch( function(error){
                console.log(error);
            }) 

        }else if(mediaType == "person"){
        fetch(urlperson)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data;
                let destino = document.querySelector('.container');

             //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
             destino.innerHTML +=  `<article class="card-wrapper col-sm-3">
                                        <div class="card my-3">
                                            <img class="foto" src="http://image.tmdb.org/t/p/w500/${info.poster_path}" alt="...">
                                            <div class="card-body">
                                                <h5> ${info.name} </h5>
                                                <p> ${info.overview}</p>
                                            <a href="pelicula.html?id=${info.id}"> Ver más </a>
                                        </div>
                                    </div>
                                    </article>`
        })
            .catch( function(error){
                console.log(error);
            }) 
        
        
        
    }
    else if(mediaType == "multi"){
        fetch(urlall)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data;
                let destino = document.querySelector('.container');

             //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
             destino.innerHTML +=  `<article class="card-wrapper col-sm-3">
                                         <div class="card my-3">
                                            <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="...">
                                            <div class="card-body">
                                                <h5> ${info.name} </h5>
                                                <p> ${info.overview}</p>
                                                <a href="pelicula.html?id=${info.id}"> Ver más </a>
                                            </div>
                                        </div>
                                    </article>`
            })
            .catch( function(error){
                console.log(error);
            }) 

    }
}

