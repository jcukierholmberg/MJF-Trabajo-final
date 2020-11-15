//Esto es para sacar el ID para cada pelicula//

//1 Obtener la querystring//

let queryString = location.search;
console.log(queryString)

//2 Transformarla en un objeto literal//

let queryObject = new URLSearchParams(queryString)
console.log(queryObject)

//3 Obtener el dato para completar el endpoint//

let id = queryObject.get('id');
console.log(id) 

let apiKey = "4aafc89b60967c61ce5438ca044af061"

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

let destino = document.querySelector('.infopeli');

fetch(url)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(data){
        console.log(data)

    let info = data

    //Aca ponemos nuestro HTML de pelicula donde se va a poner la informacion// 
   
   destino.innerHTML +=  `<div class="infopeli">
                        <h2> ${info.title} </h2>

                        <p class="no-mobile">Una asesina embarazada, cuyo nombre en código es La novia, entra en coma durante cuatro años después de que su exjefe Bill la ataca brutalmente. Cuando se despierta, se propone vengarse de él y sus asociados.</p>

                        <ul class="no-mobile" type= "circle">
                            <li class= "director" >Director: Quentin Tarantino</li>
                            <li>Género: Acción, Película de violación y venganza, Artes marciales y cine gore</li>
                            <li>Actores: Uma Thurman, David Carradine, Lucy Liu, Vivica A. Fox, Michael Madsen, Daryl Hannah, Gordo Liu, Julie Dreyfus</li>
                        </ul>
                        </div>`    

     
            

        }
        
    })
    .catch( function(error){
        console.log(error);
    }) 
