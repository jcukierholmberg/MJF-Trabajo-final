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
if(queryString != ""){
    if(mediatype = "tv"){
        //Ejecuto fetch de tv 
    }else if(movie){
//Ejecuto fetch de mcoevi 
    }else if(person){
//Ejecuto fetch de persona 
    } else {
//Ejecuto fetch de milti
    }
}