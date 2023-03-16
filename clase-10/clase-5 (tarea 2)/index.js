const $botonConfirmarReserva = document.querySelector("button");

let errorNombre = false;
let errorApellido = false;
let errorNumeroTelefonico = false;
let errorReserva = false;

let nombreDelUsuario = "";
let apellidoDelUsuario = "";
let numeroTelefonicoDelUsuario = 0;

let fechasYaReservadas = [];

function validarNombreUsuario(nombreUsuario){
  if(nombreUsuario.length <= 3){
    return "Este campo debe tener 3 o mas caracteres";
  } else if(nombreUsuario.length >= 20){
    return "Este campo debe tener menos de 20 caracteres";
  } else if(!/^[A-z]+$/i.test(nombreUsuario)){
    return "Este campo solo acepta letras";
  } else{
    return "";
  }
}

function validarApellidoUsuario(apellidoUsuario){
  if(apellidoUsuario.length <= 3){
    return "Este campo debe tener 3 o mas caracteres";
  } else if(apellidoUsuario.length >= 20){
    return "Este campo debe tener menos de 20 caracteres";
  } else if(!/^[A-z]+$/i.test(apellidoUsuario)){
    return "Este campo solo acepta letras";
  } else{
    return "";
  }
}

function validarNumeroTelefonico(numeroTelefonico){
  if(!/^[0-9]/i.test(numeroTelefonico)){
    return "El campo solo acepta números";
  } else if(numeroTelefonico === 0){
    return "El numero telefonico no puede ser 0";
  } else if(numeroTelefonico.length < 8){
    return "El numero telefónico no puede tener menos de 8 digitos";
  } else if(numeroTelefonico.length === 9){
    return "El numero telefónico no puede tener 9 digitos";
  } else if(numeroTelefonico.length > 10){
    return "El numero telefónico no puede tener más de 10 digitos";
  } else{
    return "";
  }
}

function validarReservaDisponible(fechaUsuario){
  if(fechasYaReservadas.length !== 0){
    for(let i = 0; i < fechasYaReservadas.length; i++){
      if(fechasYaReservadas[i] === fechaUsuario){
        return "Fecha ya reservada. Por favor elija otra";
      } else{
        return "";
      }
    }
  } else{
    return "";
  }
}

function gestionarValidaciones(nombreUsuario, apellidoUsuario, numeroTelefonicoUsuario, fechaUsuario){
  if(validarNombreUsuario(nombreUsuario) !== ""){
    errorNombre = true;
    const $nombreUsuario = document.querySelector (".nombre-usuario")
    const $ubicacionTextoError = document.querySelector (".texto-error-nombre");
    mostrarErrorUsuario($nombreUsuario);
    mostrarTextoError($ubicacionTextoError, validarNombreUsuario(nombreUsuario));
  } else{
    const $nombreUsuario = document.querySelector (".nombre-usuario")
    const $ubicacionTextoError = document.querySelector (".texto-error-nombre");

    if(errorNombre){
      dejarDeMostrarError($nombreUsuario);
      eliminarMensajeError($ubicacionTextoError);
      errorNombre = false;
    }
  }

  if(validarApellidoUsuario(apellidoUsuario) !== ""){
    errorApellido = true;
    const $apellidoUsuario = document.querySelector (".apellido-usuario");
    const $ubicacionTextoError = document.querySelector (".texto-error-apellido");
    mostrarErrorUsuario($apellidoUsuario);
    mostrarTextoError($ubicacionTextoError, validarApellidoUsuario(apellidoUsuario));
  } else{
    const $apellidoUsuario = document.querySelector (".apellido-usuario");
    const $ubicacionTextoError = document.querySelector (".texto-error-apellido");

    if(errorApellido){
      dejarDeMostrarError($apellidoUsuario);
      eliminarMensajeError($ubicacionTextoError);
      errorApellido = false;
    }
  }

  if(validarNumeroTelefonico(numeroTelefonicoUsuario) !== ""){
    errorNumeroTelefonico = true;
    const $numeroTelefonicoUsuario = document.querySelector (".numero-telefonico-usuario");
    const $ubicacionTextoError = document.querySelector (".texto-error-numero");
    mostrarErrorUsuario($numeroTelefonicoUsuario);
    mostrarTextoError($ubicacionTextoError, validarNumeroTelefonico(numeroTelefonicoUsuario));
  } else{
    const $numeroTelefonicoUsuario = document.querySelector (".numero-telefonico-usuario");
    const $ubicacionTextoError = document.querySelector (".texto-error-numero");

    if(errorNumeroTelefonico){
      dejarDeMostrarError($numeroTelefonicoUsuario);
      eliminarMensajeError($ubicacionTextoError);

      errorNumeroTelefonico = false;
    }
  }

  if(validarReservaDisponible(fechaUsuario) !== ""){
    errorReserva = true;
    const $fechasDeReserva = document.querySelector (".fecha-reserva");
    const $ubicacionTextoError = document.querySelector (".texto-error-reserva");
    mostrarErrorUsuario($fechasDeReserva);
    mostrarTextoError($ubicacionTextoError, validarReservaDisponible(fechaUsuario));
  } else{
    const $fechasDeReserva = document.querySelector (".fecha-reserva");
    const $ubicacionTextoError = document.querySelector (".texto-error-reserva");

    if(errorReserva){
      dejarDeMostrarError($fechasDeReserva);
      eliminarMensajeError($ubicacionTextoError);
      errorReserva = false;
    }

    if(verificarErrores() === ""){
      fechasYaReservadas.push(fechaUsuario);
    }
  }

  return verificarErrores();
}

function mostrarErrorUsuario(ubicacionError){
  ubicacionError.classList.add("is-invalid");
}

function dejarDeMostrarError(ubicacionError){
  ubicacionError.classList.remove("is-invalid");
}

function mostrarTextoError(ubicacionTextoError, error){
  ubicacionTextoError.innerText = error;
}

function eliminarMensajeError(ubicacionTextoError){
  ubicacionTextoError.innerText = "";
}

function verificarErrores(){
  if(errorNombre === false && errorApellido === false && errorNumeroTelefonico === false && errorReserva === false){
    return "";
  } else{
    return false;
  }
}

function guardarInformacionUsuario(nombre, apellido, numeroTelefononico){
  nombreDelUsuario = nombre;
  apellidoDelUsuario = apellido;
  numeroTelefonicoDelUsuario = numeroTelefononico;
}

function mostrarInformacionReserva(fechaReserva){
  const $mostrarReserva = document.querySelector (".contenedor-reserva");
  $mostrarReserva.id = "";

  const $informacionReserva = document.querySelector (".informacion-reserva");
  $informacionReserva.innerText = `Hola ${nombreDelUsuario} ${apellidoDelUsuario}! tenés fecha reservada para el ${fechaReserva}.
  Por cualquier inconveniente te estaremos llamando al ${numeroTelefonicoDelUsuario}.`;
}

function resetearInformacion(){
  if(fechasYaReservadas.length > 0){
    nombreDelUsuario = "";
    apellidoDelUsuario = "";
    numeroTelefonicoDelUsuario = 0;
  } else{
    return false;
  }
}

$botonConfirmarReserva.addEventListener("click", () => {
  const nombreUsuario = document.querySelector (".nombre-usuario").value;
  const apellidoUsuario = document.querySelector (".apellido-usuario").value;
  const numeroTelefonicoUsuario = Number(document.querySelector (".numero-telefonico-usuario").value);
  const fechasDeReserva = document.querySelector (".fecha-reserva").value;

  if(gestionarValidaciones(nombreUsuario, apellidoUsuario, numeroTelefonicoUsuario, fechasDeReserva) === ""){
    guardarInformacionUsuario(nombreUsuario, apellidoUsuario, numeroTelefonicoUsuario);
    mostrarInformacionReserva(fechasDeReserva);
    resetearInformacion();
  } else{
    return false;
  }
}) 
