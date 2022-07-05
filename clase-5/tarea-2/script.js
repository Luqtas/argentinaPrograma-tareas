const mostrarInfoUsuario = document.querySelector (".sendInfo");

mostrarInfoUsuario.onclick = function (){

    const userName = document.querySelector (".userName").value;
    const userSecondName = document.querySelector (".userSecondName").value;
    const userSurname = document.querySelector (".userSurname").value;
    const userAge = Number (document.querySelector (".userAge").value);

    if (userName === "" && userSecondName === "" && userSurname === "" && userAge === 0){
        document.querySelector (".datosUser").innerText = "Por favor, completar los formularios.";
    }
    else {
        document.querySelector (".datosUser").innerText = `Su nombre es ${userName} ${userSecondName} ${userSurname}, y su edad es de ${userAge} años.`;
        document.querySelector (".tittle").innerText = `Bienvenido ${userName}!`;
    }

    return false;
};
