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

//window.addEventListener("load", function(){
    //let spinner = document.querySelector('.loader')
    //spinner.style.display= "none"
//})

//DECLARAR 4 URLS CON DIFERENTES NOMBRES PARA IDENTIFICARLOS TV MOVIE PERSON Y ALL
let urlmovie = `https://api.themoviedb.org/3/search/movie?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`
let urltv = `https://api.themoviedb.org/3/search/tv?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&page=1&query=${searchData}&include_adult=false`
let urlperson = `https://api.themoviedb.org/3/search/person?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`
let urlall = `https://api.themoviedb.org/3/search/multi?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`




if(queryString != ""){
    if(mediaType == "movie"){
        fetch(urlmovie)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data.results;
                let destino = document.querySelector('.container');
                console.log(container);

            //for(let i=0; i<10; i++){
            destino.innerHTML += `
                                <div class="contenedor-pelicula">
                                <li type="none" class="pelicula">
                                </li>
                                    <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="...">
                                            <h4> ${info[i].title} </h4>
                                            <p> ${info[i].overview}</p>
                                            <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                    </div>
                                
                            `
                            
                           // `<article class="card-wrapper col-sm-3">
                                //<div class="card my-3">
                                  //  <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="...">
                                    //    <div class="card-body">
                                      //      <h5> ${info[i].title} </h5>
                                        //    <p> ${info[i].overview}</p>
                                          //  <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                    //</div>
                               // </div>
                           // </article>`
                       // }
                       


                          

            })
            .catch( function(error){
                console.log(error);
            }) 


        } if(mediaType == "tv"){
        fetch(urltv)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data.results;
                let destino = document.querySelector('.container');

             
             destino.innerHTML += `<article class="card-wrapper col-sm-3">
                                        <div class="infoseries">
                                            <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="...">
                                            <div class="card-body">
                                                <h5> ${info[i].original_name} </h5>
                                                <p> ${info[i].overview}</p>
                                            <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                        </div>
                                    </div>
                                    </article>`
            })
            .catch( function(error){
                console.log(error);
            }) 

        }if(mediaType == "person"){
        fetch(urlperson)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data.results;
                let destino = document.querySelector('.container');

            
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
    if(mediaType == "all"){
        fetch(urlall)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data.result;
                let destino = document.querySelector('.container');


             for(let i=0; i<info.length; i++);
                if(info[i].media_type == "movie"){
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
                }else if(info[i].media_type == "tv"){
                    destino.innerHTML +=  `<article class="card-wrapper col-sm-3">
                                                <div class="card my-3">
                                                    <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="...">
                                                    <div class="card-body">
                                                        <h5> ${info[i].original_name} </h5>
                                                        <p> ${info[i].overview}</p>
                                                    <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                                </div>
                                            </div>
                                            </article>`
                }else {
                    destino.innerHTML +=  `<article class="card-wrapper col-sm-3">
                                                <div class="card my-3">
                                                    <img class="foto" src="http://image.tmdb.org/t/p/w500/${info[i].profile_path}" alt="...">
                                                    <div class="card-body">
                                                        <h5> ${info[i].name} </h5>
                                                        <p> ${info[i].popularity}</p>
                                                    <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                                </div>
                                            </div>
                                            </article>`
                }

            })
            .catch( function(error){
                console.log(error);
            }) 

    }
}

