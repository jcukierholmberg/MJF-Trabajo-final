
//bienvenidos a sitio//

let mensaje = prompt ("Tenes creada una cuenta?")

//Cambiar para que no sea un texto sino que sea un coso de opciones//

if (mensaje == "si" ) {
    alert ("apreta 'ok' para ir a iniciar sesión");

    window.location.href = "iniciosesion.html"

    //mandarlo a la pagina de Inicio de sesion//

}

else if (mensaje == "no" )
{
    alert ("apreta 'ok' para crearte una cuenta");

    window.location.href = "iniciosesion.html";
}

const query = location.search
const queryString = new URLSearchParams(query)
const idMovie = queryString.get("id")


const storage =localStorage.getItem ("favoritos")
console.log(storage);

if (storage == null) {
    localStorage.setItem("favoritos" , "")
} 

container = document.querySelector(".favoritos")
