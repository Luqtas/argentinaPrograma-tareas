const $botonCalcularSueldoMensual = document.querySelector(".calcular-sueldo-mensual");
const $botonCalcularSueldoAnual = document.querySelector(".calcular-sueldo-anual");
const $botonCalcularSueldoDiario = document.querySelector(".calcular-sueldo-diario");

let conversionPedida = "";
let errores = [];

function validarSueldoUsuario(sueldoUsuario) {
  if (!/^[0-9]/i.test(sueldoUsuario)) {
    return "El campo solo acepta números";
  } else if (sueldoUsuario <= 0) {
    return "El sueldo no puede ser menor que 0";
  } else {
    return "";
  }
}

function mostrarErrorAlUsuario(sueldoAnualUsuario) {
  if (conversionPedida === "mensual") {
    const $mostrarError = document.querySelector(".sueldo-anual");
    $mostrarError.value = "";
    $mostrarError.placeholder = validarSueldoUsuario(sueldoAnualUsuario);
    $mostrarError.id = "error-validacion";

    errores.push($mostrarError);
  } else if (conversionPedida === "anual") {
    const $mostrarError = document.querySelector(".sueldo-mensual");
    $mostrarError.value = "";
    $mostrarError.placeholder = validarSueldoUsuario(sueldoAnualUsuario);
    $mostrarError.id = "error-validacion";

    errores.push($mostrarError);
  } else if (conversionPedida === "diario") {
    const $mostrarError = document.querySelector(".sueldo-mensual-a-diario");
    $mostrarError.value = "";
    $mostrarError.placeholder = validarSueldoUsuario(sueldoAnualUsuario);
    $mostrarError.id = "error-validacion";

    errores.push($mostrarError);
  }
}

function borrarErrores() {
  for (let i = 0; i < errores.length; i++) {
    errores[i].id = "";
  }
}

function borrarPlaceholderError(inputUtilizado){
  if(conversionPedida === "mensual"){
    inputUtilizado.placeholder = "Sueldo anual";
  } else if(conversionPedida === "anual"){
    inputUtilizado.placeholder = "Sueldo mensual";
  } else if(conversionPedida === "diaria"){
    inputUtilizado.placeholder = "Sueldo mensual";
  }
}

function calcularSueldo(sueldoUsuario) {
  const mesesDelAnio = 12;
  const diasDelMes = 31;

  if (conversionPedida === "mensual") {
    return Math.trunc(sueldoUsuario / mesesDelAnio);
  } else if (conversionPedida === "anual") {
    return Math.trunc(sueldoUsuario * mesesDelAnio);
  } else if (conversionPedida === "diario") {
    return Math.trunc(sueldoUsuario / diasDelMes);
  }
}

function mostrarResultadoUsuario(resultado) {
  if (conversionPedida === "mensual") {
    const $mostrarSueldoMensualUsuario = document.querySelector(".sueldo-mensual-resultado");
    $mostrarSueldoMensualUsuario.value = resultado;
  } else if (conversionPedida === "anual") {
    const $mostrarSueldoAnualUsuario = document.querySelector(".sueldo-anual-resultado");
    $mostrarSueldoAnualUsuario.value = resultado;
  } else if (conversionPedida === "diario") {
    const $mostrarSueldoDiarioUsuario = document.querySelector(".sueldo-diario-resultado");
    $mostrarSueldoDiarioUsuario.value = resultado;
  }
}

$botonCalcularSueldoMensual.onclick = function () {
  const sueldoAnualUsuario = Number(document.querySelector(".sueldo-anual").value);

  if (validarSueldoUsuario(sueldoAnualUsuario) === "") {
    const $sueldoAnualUsuario = document.querySelector(".sueldo-anual");
    conversionPedida = "mensual";
    const sueldoMensualUsuario = calcularSueldo(sueldoAnualUsuario);
    mostrarResultadoUsuario(sueldoMensualUsuario);
    borrarErrores();
    borrarPlaceholderError($sueldoAnualUsuario);
  } else {
    conversionPedida = "mensual";
    mostrarErrorAlUsuario(sueldoAnualUsuario);
  }

  return false;
};

$botonCalcularSueldoAnual.onclick = function () {
  const sueldoMensualUsuario = Number(document.querySelector(".sueldo-mensual").value);

  if (validarSueldoUsuario(sueldoMensualUsuario) === "") {
    const $sueldoMensualUsuario = document.querySelector(".sueldo-mensual").value;
    conversionPedida = "anual";
    const sueldoAnualUsuario = calcularSueldo(sueldoMensualUsuario);
    mostrarResultadoUsuario(sueldoAnualUsuario);
    borrarErrores();
    borrarPlaceholderError($sueldoMensualUsuario);
  } else {
    conversionPedida = "anual";
    mostrarErrorAlUsuario(sueldoMensualUsuario);
  }

  return false;
};

$botonCalcularSueldoDiario.onclick = function () {
  const sueldoMensualUsuario = Number(document.querySelector(".sueldo-mensual-a-diario").value);

  if (validarSueldoUsuario(sueldoMensualUsuario) === "") {
    const $sueldoMensualUsuario = document.querySelector(".sueldo-mensual-a-diario").value;
    conversionPedida = "diario";
    const sueldoDiarioUsuario = calcularSueldo(sueldoMensualUsuario);
    mostrarResultadoUsuario(sueldoDiarioUsuario);
    borrarErrores();
    borrarPlaceholderError($sueldoMensualUsuario);
  } else {
    conversionPedida = "diario";
    mostrarErrorAlUsuario(sueldoMensualUsuario);
  }

  return false;
};
