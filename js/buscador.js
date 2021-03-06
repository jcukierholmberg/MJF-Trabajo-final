let queryString = window.location.search;

let queryObject = new URLSearchParams(queryString);
//console.log(queryObject);

let searchData = queryObject.get('searchData');
let mediaType = queryObject.get ('mediaType');
//console.log(searchData);
//console.log(mediaType);

window.addEventListener("load", function(){
    let spinner = document.querySelector('.loader')
    spinner.style.display= "none"
})

let urlmovie = `https://api.themoviedb.org/3/search/movie?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`
let urltv = `https://api.themoviedb.org/3/search/tv?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&page=1&query=${searchData}&include_adult=false`
let urlperson = `https://api.themoviedb.org/3/search/person?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`
let urlall = `https://api.themoviedb.org/3/search/multi?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US&query=${searchData}&page=1&include_adult=false`




    if(mediaType == "movie"){
        fetch(urlmovie)
    
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)
       
            

                let info = data.results;
                let destino = document.querySelector('.resultados');
                
                

            for(let i=0; i<10; i++){
                destino.innerHTML += 
                                     `<article class="card-wrapper col-sm-3">
                                    <div class="card my-3">
                                    <img class="fotobuscar" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="No hay imagen disponible"  <a> href="pelicula.html?id="</a>>
                                    <div class="card-body">
                                     <h5> ${info[i].title} </h5>
                                     <p> ${info[i].release_date}</p>
                                    <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                    </div>
                                    </div>
                                    </article>`
                           
                        }
                       

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
                let destino = document.querySelector('.resultados');

            for(let i=0; i<10; i++){
             destino.innerHTML += `<article class="card-wrapper col-sm-3">
                                        <div class="infoseries">
                                            <img class="fotobuscar" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="No hay imagen disponible">
                                            <div class="card-body">
                                                <h5> ${info[i].original_name} </h5>
                                                <p> ${info[i].first_air_date}</p>
                                            <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                        </div>
                                    </div>
                                    </article>`
            
                }
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
                let destino = document.querySelector('.resultados');

                for(let i=0; i<10; i++){
             destino.innerHTML +=  `<article class="card-wrapper col-sm-3">
                                        <div class="card my-3">
                                            <img class="fotobuscar" src="http://image.tmdb.org/t/p/w500/${info[i].profile_path}" alt="No hay imagen disponible">
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
    if(mediaType == "all"){
        fetch(urlall)
            .then(function(respuesta){
                return respuesta.json()
            })

            .then(function(data){
                console.log(data)

                let info = data.results;
                let destino = document.querySelector('.resultados');


             for(let i=0; i<10; i++){
                if(info[i].media_type == "movie"){
                    destino.innerHTML +=  `<article class="card-wrapper col-sm-3">
                                         <div class="card my-3">
                                            <img class="fotobuscar" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="No hay imagen disponible">
                                            <div class="card-body">
                                                <h5> ${info[i].title} </h5>
                                                <p> ${info[i].release_date}</p>
                                                <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                            </div>
                                        </div>
                                    </article>`
                }else if(info[i].media_type == "tv"){
                    destino.innerHTML +=  `<article class="card-wrapper col-sm-3">
                                                <div class="card my-3">
                                                    <img class="fotobuscar" src="http://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="No hay imagen disponible">
                                                    <div class="card-body">
                                                        <h5> ${info[i].original_name} </h5>
                                                        <p> ${info[i].release_date}</p>
                                                    <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                                </div>
                                            </div>
                                            </article>`
                }else if(info[i].media_type == "person"){ 
                    destino.innerHTML +=  `<article class="card-wrapper col-sm-3">
                                                <div class="card my-3">
                                                    <img class="fotobuscar" src="http://image.tmdb.org/t/p/w500/${info[i].profile_path}" alt="No hay imagen disponible">
                                                    <div class="card-body">
                                                        <h5> ${info[i].name} </h5>
                                                        <p> ${info[i].popularity}</p>
                                                    <a href="pelicula.html?id=${info[i].id}"> Ver más </a>
                                                </div>
                                            </div>
                                            </article>`
             }

             


             }

            })
            .catch( function(error){
                console.log(error);
            }) 
        

    }


