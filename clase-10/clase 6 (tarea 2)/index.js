const $botonAgregarInput = document.querySelector(".boton-agregar-input");
const $botonEliminarInput = document.querySelector(".boton-eliminar-input");
const $botonCalcular = document.querySelector(".boton-calcular");
const $botonReiniciar = document.querySelector(".boton-reiniciar");

function validarSueldos(sueldoAnual) {
  if (sueldoAnual < 1000) {
    return "El sueldo anual no puede ser menor a 1000";
  } else if (sueldoAnual > 999999999) {
    return "El sueldo anual no puede ser mayor a 999999999";
  } else {
    return "";
  }
}

function agregarInput() {
  const $inputsTotales = document.querySelectorAll("input");
  const cantidadMaximaInputs = 5;

  if ($inputsTotales.length < cantidadMaximaInputs) {
    const $contenedorInputs = document.querySelector(".contenedor-input");

    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "input-group contenedor-sueldo contenedor-agregado";

    const nuevoSpan = document.createElement("span");
    nuevoSpan.className = "input-group-text";
    nuevoSpan.innerText = "Sueldo anual";

    const nuevoInput = document.createElement("input");
    nuevoInput.className = "form-control sueldo-anual";
    nuevoInput.type = "number";

    nuevoDiv.appendChild(nuevoSpan);
    nuevoDiv.appendChild(nuevoInput);
    $contenedorInputs.appendChild(nuevoDiv);
  }
}

function eliminarUltimoNodoCreado() {
  const $inputsTotales = document.querySelectorAll("input");
  const cantidadMinimaInputs = 1;

  if ($inputsTotales.length > cantidadMinimaInputs) {
    const $nodoFormulario = document.querySelector(".contenedor-input");
    const $divAgregado = document.querySelector(".contenedor-agregado");

    $nodoFormulario.removeChild($divAgregado);
  }
}

function mostrarErrores(lugarErrores, errores) {
  for (let i = 0; i < errores.length; i++) {
    lugarErrores[i].classList.add("is-invalid");
    lugarErrores[i].value = "";
    lugarErrores[i].placeholder = errores[i];
  }
}

function ocultarErrores(lugarErrores) {
  for (let i = 0; i < lugarErrores.length; i++) {
    if (lugarErrores[i].classList.contains("is-invalid")) {
      lugarErrores[i].classList.remove("is-invalid");
      lugarErrores[i].placeholder = "";
    }
  }
}

function calcularMayorSueldoAnual(sueldos) {
  let mayorSueldoAnual = sueldos[0];

  for (let i = 1; i < sueldos.length; i++) {
    if (sueldos[i] > mayorSueldoAnual) {
      mayorSueldoAnual = sueldos[i];
    }
  }

  return mayorSueldoAnual;
}

function calcularMenorSueldoAnual(sueldos) {
  let menorSueldoAnual = sueldos[0];

  for (let i = 1; i < sueldos.length; i++) {
    if (sueldos[i] < menorSueldoAnual) {
      menorSueldoAnual = sueldos[i];
    }
  }

  return menorSueldoAnual;
}

function calcularPromedioSueldoAnual(sueldos) {
  let promedioSueldoAnual = 0;

  for (let i = 0; i < sueldos.length; i++) {
    promedioSueldoAnual += sueldos[i];
  }

  return Math.trunc(promedioSueldoAnual / sueldos.length);
}

function calcularSueldoMensual(sueldos, mesesDelAnio) {
  let sueldosMensuales = [];

  for (let i = 0; i < sueldos.length; i++) {
    sueldosMensuales.push(sueldos[i] / mesesDelAnio);
  }

  return sueldosMensuales;
}

function calcularPromedioSueldoMensual(sueldos) {
  const mesesDelAnio = 12;
  let promedioSalarioMensual = 0;
  let sueldosMensuales = calcularSueldoMensual(sueldos, mesesDelAnio);

  for (let i = 0; i < sueldosMensuales.length; i++) {
    promedioSalarioMensual += sueldosMensuales[i];
  }

  return Math.trunc(promedioSalarioMensual / sueldosMensuales.length);
}

function mostrarRespuestaUsuario(sueldos) {
  let listaDeSueldos = [];

  for (let i = 0; i < sueldos.length; i++) {
    listaDeSueldos.push(Number(sueldos[i].value));
  }

  const $contenedorRespuesta = document.querySelector(".contenedor-respuesta");
  $contenedorRespuesta.id = "";
  const $mostrarTextoRespuestas = document.querySelector(".respuesta-usuario");
  $mostrarTextoRespuestas.innerText = `El mayor sueldo anual es de ${calcularMayorSueldoAnual(listaDeSueldos)}
  El menor sueldo anual es de ${calcularMenorSueldoAnual(listaDeSueldos)}
  El promedio anual de sueldos es de ${calcularPromedioSueldoAnual(listaDeSueldos)}
  El promedio mensual de sueldos es de ${calcularPromedioSueldoMensual(listaDeSueldos)}`;
}

function ocultarRespuestaUsuario() {
  const $mostrarTextoRespuestas = document.querySelector(".respuesta-usuario");
  $mostrarTextoRespuestas.innerText = "";
  const $contenedorRespuesta = document.querySelector(".contenedor-respuesta");
  $contenedorRespuesta.id = "oculto";
}

function borrarTodosLosNodosCreados() {
  const $nodoFormulario = document.querySelector(".contenedor-input");
  const $divsCreados = document.querySelectorAll(".contenedor-agregado");

  for (let i = 0; i < $divsCreados.length; i++) {
    $nodoFormulario.removeChild($divsCreados[i]);
  }
}

function reiniciarValorInputs() {
  const $inputsExistentes = document.querySelectorAll("input");

  for (let i = 0; i < $inputsExistentes.length; i++) {
    $inputsExistentes[i].value = "";
  }
}

$botonAgregarInput.addEventListener("click", () => {
  agregarInput();
});

$botonEliminarInput.addEventListener("click", () => {
  eliminarUltimoNodoCreado();
});

$botonCalcular.addEventListener("click", () => {
  const $totalDeSueldosAnuales = document.querySelectorAll("input");
  let ubicacionErrores = [];
  let errores = [];

  for (let i = 0; i < $totalDeSueldosAnuales.length; i++) {
    if (validarSueldos(Number($totalDeSueldosAnuales[i].value)) !== "") {
      ubicacionErrores.push($totalDeSueldosAnuales[i]);
      errores.push(validarSueldos(Number($totalDeSueldosAnuales[i].value)));
    }
  }

  if (errores.length > 0) {
    ocultarErrores($totalDeSueldosAnuales);
    mostrarErrores(ubicacionErrores, errores);
  } else {
    ocultarErrores($totalDeSueldosAnuales);
    mostrarRespuestaUsuario($totalDeSueldosAnuales);
  }
});

$botonReiniciar.addEventListener("click", () => {
  const $totalDeSueldosAnuales = document.querySelectorAll("input");

  reiniciarValorInputs();
  ocultarErrores($totalDeSueldosAnuales);
  ocultarRespuestaUsuario();
  borrarTodosLosNodosCreados();
});
