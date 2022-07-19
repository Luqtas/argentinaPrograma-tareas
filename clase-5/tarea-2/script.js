const mostrarInfoUsuario = document.querySelector (".formulario-usuario__enviar-info");

mostrarInfoUsuario.onclick = function (){

    const nombreUsuario = document.querySelector (".formulario-usuario__nombre").value;
    const segundoNombreUsuario = document.querySelector (".formulario-usuario__segundo-nombre").value;
    const apellidoUsuario = document.querySelector (".formulario-usuario__apellido").value;
    const edadUsuario = Number (document.querySelector (".formulario-usuario__edad").value);

    if (nombreUsuario === "" && segundoNombreUsuario === "" && apellidoUsuario === "" && edadUsuario === 0){
        document.querySelector (".informacion-usuario__datos").innerText = "Por favor, completar los formularios.";
    }
    else {
        document.querySelector (".informacion-usuario__datos").innerText = `Su nombre es ${nombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}, y su edad es de ${edadUsuario} años.`;
        document.querySelector (".contenedor__titulo").innerText = `Bienvenido ${nombreUsuario}!`;
    }

    return false;
};
