
//bienvenidos a sitio//

let mensaje = prompt ("Tenes una cuenta?")

//Cambiar para que no sea un texto sino que sea un coso de opciones//

if (mensaje == "si" ) {
    alert ("apreta ok para iniciar sesión");

    window.location.href = "formulario.html";
}

else if (mensaje == "no" )
{
    alert ("Create una cuenta gratuita haciendo click en 'Iniciar Sesion'");
}