const $botonCalcularTiempoTotal = document.querySelector(".boton-calcular-total");

let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;

let errorHoras = false;
let errorMinutos = false;
let errorSegundos = false;

const clasesHastaEstePunto = 5;
let claseActual = 1;

let resultadoMostrado = false;

function validarHoras(horas) {
  if (horas === "") {
    return "El campo no puede estar vacio";
  } else if (horas < 0) {
    return "El valor ingresado no puede ser menor a 0";
  } else if (horas.length > 2) {
    return "El valor ingresado no puede ser de más de dos dígitos";
  } else {
    return "";
  }
}

function validarMinutos(minutos) {
  if (minutos === "") {
    return "El campo no puede estar vacio";
  } else if (minutos < 0) {
    return "El valor ingresado no puede ser menor a 0";
  } else if (minutos > 59) {
    return "El valor ingresado no puede ser mayor a 59";
  } else {
    return "";
  }
}

function validarSegundos(segundos) {
  if (segundos === "") {
    return "El campo no puede estar vacio";
  } else if (segundos < 0) {
    return "El valor ingresado no puede ser menor a 0";
  } else if (segundos > 59) {
    return "El valor ingresado no puede ser mayor a 59";
  } else {
    return "";
  }
}

function gestionarValidaciones(horas, minutos, segundos) {
  if (validarHoras(horas) !== "") {
    errorHoras = true;
    const $errorValorHoras = document.querySelector(".horas-de-clase");
    const $mostrarTextoError = document.querySelector(".texto-error-horas");
    mostrarErrorValorIngresado($errorValorHoras, validarHoras(horas));
    mostrarMensajeError($mostrarTextoError, validarHoras(horas));
  } else if (errorHoras) {
    const $errorValorHoras = document.querySelector(".horas-de-clase");
    const $mostrarTextoError = document.querySelector(".texto-error-horas");
    dejarDeMostrarErrorValorIngresado($errorValorHoras);
    dejarDeMostrarMensajeError($mostrarTextoError);
    errorHoras = false;
  }

  if (validarMinutos(minutos) !== "") {
    errorMinutos = true;
    const $errorValorMinutos = document.querySelector(".minutos-de-clase");
    const $mostrarTextoError = document.querySelector(".texto-error-minutos");
    mostrarErrorValorIngresado($errorValorMinutos, validarMinutos(minutos));
    mostrarMensajeError($mostrarTextoError, validarMinutos(minutos));
  } else if (errorMinutos) {
    const $errorValorMinutos = document.querySelector(".minutos-de-clase");
    const $mostrarTextoError = document.querySelector(".texto-error-minutos");
    dejarDeMostrarErrorValorIngresado($errorValorMinutos);
    dejarDeMostrarMensajeError($mostrarTextoError);
    errorMinutos = false;
  }

  if (validarSegundos(segundos) !== "") {
    errorSegundos = true;
    const $errorValorSegundos = document.querySelector(".segundos-de-clase");
    const $mostrarTextoError = document.querySelector(".texto-error-segundos");
    mostrarErrorValorIngresado($errorValorSegundos, validarSegundos(segundos));
    mostrarMensajeError($mostrarTextoError, validarSegundos(segundos));
  } else if (errorSegundos) {
    const $errorValorSegundos = document.querySelector(".segundos-de-clase");
    const $mostrarTextoError = document.querySelector(".texto-error-segundos");
    dejarDeMostrarErrorValorIngresado($errorValorSegundos);
    dejarDeMostrarMensajeError($mostrarTextoError);
    errorSegundos = false;
  }

  return verificarErrores();
}

function mostrarErrorValorIngresado(ubicacionError) {
  ubicacionError.classList.add("is-invalid");
}

function dejarDeMostrarErrorValorIngresado(ubicacionError) {
  ubicacionError.classList.remove("is-invalid");
}

function mostrarMensajeError(ubicacionMensajeError, error) {
  ubicacionMensajeError.innerText = error;
}

function dejarDeMostrarMensajeError(ubicacionMensajeError) {
  ubicacionMensajeError.innerText = "";
}

function verificarErrores() {
  if (errorHoras === false && errorMinutos === false && errorSegundos === false) {
    return "";
  } else {
    return "Todavia hay errores que resolver";
  }
}

function gestionarValoresUsuario(horas, minutos, segundos) {
  let horasClase = Number(horas);
  let minutosClase = Number(minutos);
  let segundosClase = Number(segundos);

  sumarValores(horasClase, minutosClase, segundosClase);
}

function sumarValores(horas, minutos, segundos) {
  horasTotales += horas;
  minutosTotales += minutos;
  segundosTotales += segundos;

  while (minutosTotales >= 60) {
    minutosTotales -= 60;
    horasTotales += 1;
  }

  while (segundosTotales >= 60) {
    segundosTotales -= 60;
    minutosTotales += 1;
  }
}

function actualizarNumeroDeClase() {
  if (claseActual === clasesHastaEstePunto) {
    return false;
  } else {
    claseActual++;
    const $tituloClase = document.querySelector(".titulo-clase");
    $tituloClase.innerText = `Clase ${claseActual}`;

    const $horasClase = document.querySelector(".horas-de-clase");
    const $minutosClase = document.querySelector(".minutos-de-clase");
    const $segundosClase = document.querySelector(".segundos-de-clase");

    $horasClase.placeholder = `Ingrese las horas de la clase ${claseActual}`;
    $minutosClase.placeholder = `Ingrese las horas de la clase ${claseActual}`;
    $segundosClase.placeholder = `Ingrese las horas de la clase ${claseActual}`;
  }
}

function actualizarValoresUsuario() {
  const $horasClase = document.querySelector(".horas-de-clase");
  const $minutosClase = document.querySelector(".minutos-de-clase");
  const $segundosClase = document.querySelector(".segundos-de-clase");

  $horasClase.value = "";
  $minutosClase.value = "";
  $segundosClase.value = "";
}

function mostrarResultadoFinal() {
  if (resultadoMostrado) {
    return false;
  } else {
    const $mostrarResultado = document.querySelector(".contenedor-mensaje-final");
    $mostrarResultado.id = "";
    $mostrarResultado.innerText = `El total de tiempo de las clases es de ${horasTotales} horas, ${minutosTotales} minutos, y ${segundosTotales} segundos.`;
  }
}

$botonCalcularTiempoTotal.addEventListener("click", () => {
  const horasClase = document.querySelector(".horas-de-clase").value;
  const minutosClase = document.querySelector(".minutos-de-clase").value;
  const segundosClase = document.querySelector(".segundos-de-clase").value;

  if (gestionarValidaciones(horasClase, minutosClase, segundosClase) === "") {
    if (claseActual === clasesHastaEstePunto) {
      gestionarValoresUsuario(horasClase, minutosClase, segundosClase);
      mostrarResultadoFinal();
      resultadoMostrado = true;
    } else {
      gestionarValoresUsuario(horasClase, minutosClase, segundosClase);
      actualizarNumeroDeClase();
      actualizarValoresUsuario();
    }
  }
});
