//Esto es para sacar el ID para cada pelicula o serie//
//1 Obtener la querystring//
let queryString = location.search;
// console.log(queryString);

//2 Transformarla en un objeto literal//
let queryObject = new URLSearchParams(queryString);
console.log(queryObject);

//3 Obtener el dato para completar el endpoint//
let id = queryObject.get('id');
console.log(id);

let season= queryObject.get('season');
console.log(season);

let episodesCount = queryObject.get('episodesCount');
console.log(episodesCount);

for (let i=1; i<=episodesCount; i++) {
let url= `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${i}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US`

fetch(url)
    .then(function(respuesta){
        return respuesta.json()
    })
    
    .then(function(data){
        console.log(data)
        // consguir la información
        
        //Capturar el destino a donde insertaremos los bloques de cada peli.
        let destino = document.querySelector('.capitulos');

        destino.innerHTML += ` <div class="infocapitulos">

                                <img src="http://image.tmdb.org/t/p/w500//${data.still_path}" alt="">
                                <a href="">${data.name} </a>
        
                                </div> `
                            })

}






// for (let i=1; i<=10; i++) {

// let url= `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${i}?api_key=4aafc89b60967c61ce5438ca044af061&language=en-US`


// fetch(url)
//     .then(function(respuesta){
//         return respuesta.json()
//     })
    
//     .then(function(data){
//         console.log(data)
//         // consguir la información
//         let info = data.results;
//         //Capturar el destino a donde insertaremos los bloques de cada peli.
//         let destino = document.querySelector('.seccion');

//         //recorrer el array y por cada posición del array tenemos que crear un bloque de pelicula en html
//         for(let j=1; j<10; j++){  

//             destino.innerHTML += `
//             <div class= "contenedor-pelicula>
//             <li type="none" class="pelicula"> 
//             <a href="pelicula.html">  <img class="foto" src="http://image.tmdb.org/t/p/w500//${info[j].still_path}" alt="El padrino"></a>
//             </li>
//             <h4> ${data[j].name} </h4>
//              <h5> ${data[j].episode_number} </h5> 
//              </div> `

//         }
        
//     })
//     .catch( function(error){
//         console.log(error);
// })
// }