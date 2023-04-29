const $botonesElegirCalculo = document.querySelectorAll(".botones-elegir-calculo");

const $botonAgregarInput = document.querySelector(".boton-agregar-input");
const $botonEliminarInput = document.querySelector(".boton-eliminar-input");
const maximoDeInputsAceptados = 5;
const minimoDeInputsAceptados = 2;

const $botonCalcular = document.querySelector(".boton-calcular");
const $botonReiniciar = document.querySelector(".boton-reiniciar");

let calculoElegido = "";
let errores = 0;

function cambiarTitulo() {
  const $titulo = document.querySelector(".titulo");

  if (calculoElegido === "promedio") {
    $titulo.innerText = "Calcula el promedio de los numeros!";
  } else if (calculoElegido === "pequeño") {
    $titulo.innerText = "Calcula el numero mas pequeño!";
  } else if (calculoElegido === "mayor") {
    $titulo.innerText = "Calcula el numero mas grande!";
  } else if (calculoElegido === "frecuente") {
    $titulo.innerText = "Calcula el numero mas frecuente!";
  }
}

function mostrarFormulario() {
  const $formulario = document.querySelector(".contenedor-formulario");
  $formulario.id = "";
}

function ocultarFormulario() {
  const $formulario = document.querySelector(".contenedor-formulario");
  $formulario.id = "oculto";
}

function mostrarBotonesElegirCalculo() {
  const $botonesEleccionCalculo = document.querySelector(".contenedor-botones");
  $botonesEleccionCalculo.id = "";
}

function ocultarBotonesElegirCalculo() {
  const $botonesEleccionCalculo = document.querySelector(".contenedor-botones");
  $botonesEleccionCalculo.id = "oculto";
}

function mostrarBotonesAgregarEliminar() {
  const $contenedorBotonesAgregarEliminar = document.querySelector(".contenedor-botones-agregar-eliminar");
  $contenedorBotonesAgregarEliminar.id = "";
}

function ocultarBotonesAgregarEliminar() {
  const $contenedorBotonesAgregarEliminar = document.querySelector(".contenedor-botones-agregar-eliminar");
  $contenedorBotonesAgregarEliminar.id = "oculto";
}

function mostrarBotonCalcular() {
  const $contenedorBotonCalcular = document.querySelector(".contenedor-boton-calcular");
  $contenedorBotonCalcular.id = "";
}

function ocultarBotonCalcular() {
  const $contenedorBotonCalcular = document.querySelector(".contenedor-boton-calcular");
  $contenedorBotonCalcular.id = "oculto";
}

function validarNumerosDelUsuario(numerosDelUsuario) {
  if (numerosDelUsuario === "") {
    return "El campo no puede quedar vacío";
  } else if (numerosDelUsuario === 0) {
    return "El valor ingresado no puede ser 0";
  } else if (numerosDelUsuario < 0) {
    return "El valor ingresado no puede ser menor a 0";
  } else {
    return "";
  }
}

function mostrarErrorValidacion(errorValor) {
  errorValor.classList.add("is-invalid");
}

function dejarDeMostrarValidacion(ubicacionError) {
  ubicacionError.classList.remove("is-invalid");
}

function mostrarTextoError(ubicacionError, error) {
  ubicacionError.value = "";
  ubicacionError.placeholder = error;
}

function gestionarErrores(resultadoValidacion) {
  if (resultadoValidacion !== "") {
    errores++;
  } else {
    if (errores === 0) {
      return false;
    } else {
      errores--;
    }
  }
}

function dejarDeMostrarTextoError(ubicacionError) {
  ubicacionError.placeholder = "Ingrese el valor que desee calcular";
}

function desactivarBotonAgregarInput() {
  $botonAgregarInput.disabled = true;
}

function activarBotonAgregarInput() {
  $botonAgregarInput.disabled = false;
}

function desactivarBotonEliminarInput() {
  $botonEliminarInput.disabled = true;
}

function activarBotonEliminarInput() {
  $botonEliminarInput.disabled = false;
}

function crearElementos() {
  const $contenedorInputs = document.querySelector(".contenedor-formulario");

  const nuevoDiv = document.createElement("div");
  nuevoDiv.className = "input-group mb-3 div-creado";

  const nuevoInput = document.createElement("input");
  nuevoInput.className = "form-control numeros-usuario contenedor input-creado";
  nuevoInput.type = "number";
  nuevoInput.placeholder = "Ingrese el valor que desee calcular";

  nuevoDiv.appendChild(nuevoInput);
  $contenedorInputs.appendChild(nuevoDiv);
}

function eliminarNodosCreados() {
  const $contenedorInputs = document.querySelector(".contenedor-formulario");
  const $inputCreados = document.querySelectorAll(".div-creado");
  $contenedorInputs.removeChild($inputCreados[$inputCreados.length - 1]);
}

function eliminarTodosLosNodosCreados() {
  const $totalInputs = document.querySelectorAll("input");

  if ($totalInputs.length === 2) {
    return false;
  } else {
    const $contenedorInputs = document.querySelector(".contenedor-formulario");
    const $inputCreados = document.querySelectorAll(".div-creado");

    for (let i = 0; i < $inputCreados.length; i++) {
      $contenedorInputs.removeChild($inputCreados[i]);
    }
  }
}

function restaurarTitulo() {
  const $titulo = document.querySelector(".titulo");
  $titulo.innerText = "¿Qué desea calcular?";
}

function guardarNumeros(numeros) {
  let numerosDelUsuario = [];

  for (let i = 0; i < numeros.length; i++) {
    numerosDelUsuario.push(Number(numeros[i].value));
  }

  return numerosDelUsuario;
}

function calcularPromedioNumeros(numeros) {
  let promedioNumeros = 0;

  for (let i = 0; i < numeros.length; i++) {
    promedioNumeros += numeros[i];
  }

  return promedioNumeros / numeros.length;
}

function calcularNumeroMenor(numeros) {
  let numeroMasPequeño = numeros[0];
  let j = 1;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > numeros[j]) {
      if (numeroMasPequeño > numeros[j]) {
        numeroMasPequeño = numeros[j];
      }
    }
    j++;
  }

  return numeroMasPequeño;
}

function calcularNumeroMayor(numeros) {
  let numeroMasGrande = 0;
  let parametroCalcularGrande = numeros.length;

  for (let i = 0; i < numeros.length; i++) {
    if (parametroCalcularGrande < numeros[i]) {
      numeroMasGrande = numeros[i];
      parametroCalcularGrande = numeros[i];
    } else if (numeroMasGrande === 0) {
      numeroMasGrande = numeros[i];
      parametroCalcularGrande = numeros[i];
    }
  }

  return numeroMasGrande;
}

function calcularNumeroFrecuente(numeros) {
  let numeroFrecuente = 0;

  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        numeroFrecuente = numeros[j];
      }
    }
  }

  return numeroFrecuente;
}

function mostrarResultadoUsuario(resultadoCalculo) {
  const $contenedorRespuesta = document.querySelector(".contenedor-respuesta");
  $contenedorRespuesta.id = "";
  const $respuestaUsuario = document.querySelector(".alert-success");

  if (calculoElegido === "promedio") {
    $respuestaUsuario.innerText = "El promedio de los numeros ingresados es " + resultadoCalculo + "!";
  } else if (calculoElegido === "pequeño") {
    $respuestaUsuario.innerText = "El numero mas pequeño de los ingresados es " + resultadoCalculo + "!";
  } else if (calculoElegido === "mayor") {
    $respuestaUsuario.innerText = "El numero mayor de los ingresados es " + resultadoCalculo + "!";
  } else if (calculoElegido === "frecuente") {
    $respuestaUsuario.innerText = "El numero mas frecuente de los ingresados es " + resultadoCalculo + "!";
  }
}

function ocultarRespuestaUsuario() {
  const $contenedorRespuesta = document.querySelector(".contenedor-respuesta");
  $contenedorRespuesta.id = "oculto";
}

$botonesElegirCalculo.forEach((botonApretado) => {
  botonApretado.addEventListener("click", (e) => {
    ocultarBotonesElegirCalculo();
    mostrarFormulario();
    mostrarBotonCalcular();
    mostrarBotonesAgregarEliminar();

    if (e.target.classList.contains("boton-promedio")) {
      calculoElegido = "promedio";
      cambiarTitulo();
    } else if (e.target.classList.contains("boton-mas-pequeño")) {
      calculoElegido = "pequeño";
      cambiarTitulo();
    } else if (e.target.classList.contains("boton-mas-grande")) {
      calculoElegido = "mayor";
      cambiarTitulo();
    } else if (e.target.classList.contains("boton-frecuente")) {
      calculoElegido = "frecuente";
      cambiarTitulo();
    } else {
      return false;
    }
  });
});

$botonAgregarInput.addEventListener("click", () => {
  const $numerosDelUsuario = document.querySelectorAll("input");

  if ($numerosDelUsuario.length === maximoDeInputsAceptados - 1) {
    crearElementos();
    desactivarBotonAgregarInput();
  } else {
    crearElementos();
    activarBotonEliminarInput();
  }
});

$botonEliminarInput.addEventListener("click", () => {
  const $numerosDelUsuario = document.querySelectorAll("input");

  if ($numerosDelUsuario.length === minimoDeInputsAceptados + 1) {
    eliminarNodosCreados();
    desactivarBotonEliminarInput();
  } else {
    eliminarNodosCreados();
    activarBotonAgregarInput();
  }
});

$botonCalcular.addEventListener("click", () => {
  const $numerosDelUsuario = document.querySelectorAll("input");

  for (let i = 0; i < $numerosDelUsuario.length; i++) {
    if (validarNumerosDelUsuario($numerosDelUsuario[i].value) !== "") {
      mostrarErrorValidacion($numerosDelUsuario[i]);
      mostrarTextoError($numerosDelUsuario[i], validarNumerosDelUsuario($numerosDelUsuario[i].value));
      gestionarErrores(validarNumerosDelUsuario($numerosDelUsuario[i].value));
    } else {
      dejarDeMostrarValidacion($numerosDelUsuario[i]);
      dejarDeMostrarTextoError($numerosDelUsuario[i]);
      gestionarErrores(validarNumerosDelUsuario($numerosDelUsuario[i].value));
    }
  }

  if (errores !== 0) {
    errores = 0;
    return false;
  } else {
    errores = 0;
    if (calculoElegido === "promedio") {
      let resultadoCalculo = calcularPromedioNumeros(guardarNumeros($numerosDelUsuario));
      mostrarResultadoUsuario(resultadoCalculo);
    } else if (calculoElegido === "pequeño") {
      let resultadoCalculo = calcularNumeroMenor(guardarNumeros($numerosDelUsuario));
      mostrarResultadoUsuario(resultadoCalculo);
    } else if (calculoElegido === "mayor") {
      let resultadoCalculo = calcularNumeroMayor(guardarNumeros($numerosDelUsuario));
      mostrarResultadoUsuario(resultadoCalculo);
    } else if (calculoElegido === "frecuente") {
      let resultadoCalculo = calcularNumeroFrecuente(guardarNumeros($numerosDelUsuario));
      mostrarResultadoUsuario(resultadoCalculo);
    }
  }
});

$botonReiniciar.addEventListener("click", () => {
  const $totalInputs = document.querySelectorAll("input");

  eliminarTodosLosNodosCreados();
  activarBotonAgregarInput();
  desactivarBotonEliminarInput();
  ocultarFormulario();
  ocultarBotonCalcular();
  ocultarBotonesAgregarEliminar();
  mostrarBotonesElegirCalculo();

  for (let i = 0; i < $totalInputs.length; i++) {
    dejarDeMostrarTextoError($totalInputs[i]);
    dejarDeMostrarValidacion($totalInputs[i]);
    ocultarRespuestaUsuario();
  }
});
