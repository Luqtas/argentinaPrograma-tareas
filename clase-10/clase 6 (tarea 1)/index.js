const $botonEnviarCantidadInvitados = document.querySelector(".boton-enviar");
const $botonEnviarDatosInvitado = document.querySelector(".boton-enviar-datos");
const $botonReiniciarTramite = document.querySelector(".boton-reiniciar");

const cantidadMaximaDeInvitados = 10;
let cantidadInvitadosFinal = 0;

let errores = 0;

let datosInvitados = [];
let edadesInvitados = [];

let invitadoDeMenorEdad = "";
let invitadoDeMayorEdad = "";
let promedioDeEdadInvitados = 0;

function validarCantidadInvitados(cantidadInvitados) {
  if (cantidadInvitados === 0) {
    return "El valor ingresado no puede ser 0";
  } else if (cantidadInvitados < 0) {
    return "El valor ingresado no puede ser menor a 0";
  } else if (cantidadInvitados > cantidadMaximaDeInvitados) {
    return "La cantidad máxima de invitados es de 10";
  } else {
    return "";
  }
}

function validarNombreYApellidoInvitado(datoInvitado) {
  if (datoInvitado.length < 3) {
    return "El campo no puede contener menos de 3 caracteres";
  } else if (datoInvitado.length > 20) {
    return "El campo no puede contener mas de 20 caracteres";
  } else if (!/^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/.test(datoInvitado)) {
    return "El campo solo puede contener letras";
  } else {
    return "";
  }
}

function validarEdadesInvitados(edadInvitado) {
  if (!/^[0-9]+$/i.test(edadInvitado)) {
    return "El campo solo acepta numeros";
  } else if (edadInvitado < 1) {
    return "La edad del invitado no puede ser menor a 1 año";
  } else if (edadInvitado > 99) {
    return "La edad del invitado no puede ser mayor a 99 años";
  } else {
    return "";
  }
}

function mostrarErrorCantidadInvitados(error) {
  const $ubicacionError = document.querySelector(".cantidad-invitados");
  $ubicacionError.classList.add("is-invalid");
  const $ubicacionRespuestaError = document.querySelector(".error-cantidad-invitados");
  $ubicacionRespuestaError.innerText = error;
}

function ocultarErroresCantidadInvitados() {
  const $ubicacionError = document.querySelector(".cantidad-invitados");
  $ubicacionError.classList.remove("is-invalid");
  const $ubicacionRespuestaError = document.querySelector(".error-cantidad-invitados");
  $ubicacionRespuestaError.innerText = "";
}

function mostrarErrorDatosInvitados($ubicacionError, error) {
  if ($ubicacionError.classList.contains("nombre-invitado")) {
    $ubicacionError.classList.add("is-invalid");
    const $textoErrorNombre = document.querySelector(".error-nombre-invitado");
    $textoErrorNombre.innerText = error;
  } else if ($ubicacionError.classList.contains("apellido-invitado")) {
    $ubicacionError.classList.add("is-invalid");
    const $textoErrorApellido = document.querySelector(".error-apellido-invitado");
    $textoErrorApellido.innerText = error;
  } else if ($ubicacionError.classList.contains("edad-invitado")) {
    $ubicacionError.classList.add("is-invalid");
    const $textoErrorEdad = document.querySelector(".error-edad-invitado");
    $textoErrorEdad.innerText = error;
  }
}

function ocultarErroresDatosInvitados($ubicacionError) {
  if ($ubicacionError.classList.contains("is-invalid")) {
    $ubicacionError.classList.remove("is-invalid");
  } else {
    return false;
  }
}

function gestionarErrores(nombreInvitado, apellidoInvitado, edadInvitado) {
  if (validarNombreYApellidoInvitado(nombreInvitado.value) !== "") {
    mostrarErrorDatosInvitados(nombreInvitado, validarNombreYApellidoInvitado(nombreInvitado.value));

    if (errores < 3) {
      errores++;
    }
  } else {
    if (nombreInvitado.classList.contains("is-invalid")) {
      if (errores > 0) {
        errores--;
      }
      ocultarErroresDatosInvitados(nombreInvitado);
    }
  }

  if (validarNombreYApellidoInvitado(apellidoInvitado.value) !== "") {
    mostrarErrorDatosInvitados(apellidoInvitado, validarNombreYApellidoInvitado(apellidoInvitado.value));

    if (errores < 3) {
      errores++;
    }
  } else {
    if (apellidoInvitado.classList.contains("is-invalid")) {
      if (errores > 0) {
        errores--;
      }
      ocultarErroresDatosInvitados(apellidoInvitado);
    }
  }

  if (validarEdadesInvitados(Number(edadInvitado.value)) !== "") {
    mostrarErrorDatosInvitados(edadInvitado, validarEdadesInvitados(Number(edadInvitado.value)));

    if (errores < 3) {
      errores++;
    }
  } else {
    if (edadInvitado.classList.contains("is-invalid")) {
      if (errores > 0) {
        errores--;
      }
      ocultarErroresDatosInvitados(edadInvitado);
    }
  }

  if (errores === 0) {
    errores = 0;
    return "";
  } else {
    errores = 0;
  }
}

function mostrarFormularioCantidadInvitados(){
  const $formularioCantidadInvitados = document.querySelector(".contenedor-cantidad-invitados");
  $formularioCantidadInvitados.id = "";
}

function ocultarFormularioCantidadInvitados() {
  const $formularioCantidadInvitados = document.querySelector(".contenedor-cantidad-invitados");
  $formularioCantidadInvitados.id = "oculto";
}

function mostrarFormularioDatosInvitados() {
  const $formularioDatosInvitados = document.querySelector(".contenedor-formulario-datos");
  $formularioDatosInvitados.id = "";
}

function ocultarFormularioDatosInvitados(){
  const $formularioDatosInvitados = document.querySelector(".contenedor-formulario-datos");
  $formularioDatosInvitados.id = "oculto";
}

function guardarDatosInvitados(nombreInvitado, apellidoInvitado, edadInvitado) {
  datosInvitados.push([nombreInvitado, apellidoInvitado, edadInvitado]);
  edadesInvitados.push(edadInvitado);
}

function actualizarFormulario() {
  const $inputNombreInvitado = document.querySelector(".nombre-invitado");
  const $inputApellidoInvitado = document.querySelector(".apellido-invitado");
  const $inputEdadInvitado = document.querySelector(".edad-invitado");

  $inputNombreInvitado.value = "";
  $inputApellidoInvitado.value = "";
  $inputEdadInvitado.value = "";
}

function calcularEdadMenorInvitados() {
  let invitadoDeMenorEdad = edadesInvitados[0];

  for (let i = 1; i < edadesInvitados.length; i++) {
    if (edadesInvitados[i] < invitadoDeMenorEdad) {
      invitadoDeMenorEdad = edadesInvitados[i];
    }
  }

  return invitadoDeMenorEdad;
}

function calcularEdadMayorInvitados() {
  let invitadoDeMayorEdad = edadesInvitados[0];

  for (let i = 1; i < edadesInvitados.length; i++) {
    if (edadesInvitados[i] > invitadoDeMayorEdad) {
      invitadoDeMayorEdad = edadesInvitados[i];
    }
  }

  return invitadoDeMayorEdad;
}

function calcularPromedioDeEdadInvitados() {
  let promedioEdadesInvitados = 0;

  for (let i = 0; i < edadesInvitados.length; i++) {
    promedioEdadesInvitados += edadesInvitados[i];
  }

  return Math.floor(promedioEdadesInvitados = promedioEdadesInvitados / edadesInvitados.length);
}

function mostrarRespuestaUsuario(){
  const $mostrarTextoUsuario = document.querySelector(".respuesta-final");
  $mostrarTextoUsuario.innerText = 
  `${invitadoDeMenorEdad}

  ${invitadoDeMayorEdad}

  ${promedioDeEdadInvitados}`;

  const $contenedorRespuesta = document.querySelector (".contenedor-respuesta");
  $contenedorRespuesta.id = "";
}

function ocultarRespuesta(){
  const $contenedorRespuesta = document.querySelector (".contenedor-respuesta");
  $contenedorRespuesta.id = "oculto";
}

function reiniciarTramite(){
  const $posiblesErroresDatos = document.querySelectorAll (".dato-invitado");
  const $inputCantidadInvitados = document.querySelector (".cantidad-invitados");
  $inputCantidadInvitados.value = "";
  for(let i = 0; i < $posiblesErroresDatos.length; i++){
    ocultarErroresDatosInvitados($posiblesErroresDatos[i]);
  }
  ocultarFormularioDatosInvitados();
  mostrarFormularioCantidadInvitados();
  ocultarRespuesta();
}

$botonEnviarCantidadInvitados.addEventListener("click", () => {
  const cantidadDeInvitados = Number(document.querySelector(".cantidad-invitados").value);

  if (validarCantidadInvitados(cantidadDeInvitados) !== "") {
    mostrarErrorCantidadInvitados(validarCantidadInvitados(cantidadDeInvitados));
  } else {
    cantidadInvitadosFinal = cantidadDeInvitados;
    ocultarErroresCantidadInvitados();
    ocultarFormularioCantidadInvitados();
    mostrarFormularioDatosInvitados();
  }
});

$botonEnviarDatosInvitado.addEventListener("click", () => {
  const $nombreInvitado = document.querySelector(".nombre-invitado");
  const $apellidoInvitado = document.querySelector(".apellido-invitado");
  const $edadInvitado = document.querySelector(".edad-invitado");

  if (gestionarErrores($nombreInvitado, $apellidoInvitado, $edadInvitado) !== "") {
    return false;
  } else {
    guardarDatosInvitados($nombreInvitado.value, $apellidoInvitado.value, Number($edadInvitado.value));
    actualizarFormulario();

    if (edadesInvitados.length === cantidadInvitadosFinal) {
      for (let i = 0; i < edadesInvitados.length; i++) {
        if(datosInvitados[i].includes(calcularEdadMenorInvitados())){
          invitadoDeMenorEdad = `El invitado de menor edad es ${datosInvitados[i][0]} ${datosInvitados[i][1]} con ${calcularEdadMenorInvitados()} años`; 
        }

        if(datosInvitados[i].includes(calcularEdadMayorInvitados())){
          invitadoDeMayorEdad = `El invitado de mayor edad es ${datosInvitados[i][0]} ${datosInvitados[i][1]} con ${calcularEdadMayorInvitados()} años`; 
        }
      }

      promedioDeEdadInvitados = `El promedio de edad de los invitados es de ${calcularPromedioDeEdadInvitados()} años`;
      mostrarRespuestaUsuario();
    }
  }
});

$botonReiniciarTramite.addEventListener("click", () =>{
  reiniciarTramite();
})
