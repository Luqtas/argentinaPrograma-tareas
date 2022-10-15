const $botonCalcularCantidadFamiliar = document.querySelector(".formulario-enviar");
const $botonEmpezarDeNuevo = document.querySelector (".boton-resetear");
const $botonCalcularEdadesFamilia = document.querySelector (".boton-calcular");
const $cantidadPersonasGrupoFamiliar = document.querySelector(".formulario-input");
const $nodoFormulario = document.querySelector (".formulario");
const $respuestaUsuarioFamiliarMayor = document.querySelector (".respuesta-familiar-mayor");
const $respuestaUsuarioFamiliarMenor = document.querySelector (".respuesta-familiar-menor");
const $respuestaUsuarioPromedioEdadFamilia = document.querySelector (".respuesta-promedio-edad-familia");

function guardarEdadesGrupoFamiliar(){
	const $edadesGrupoFamiliar = document.querySelectorAll (".edades-familia");
    let edadesFamilia = [];

	for (let i = 0; i < $edadesGrupoFamiliar.length; i++){
	    edadesFamilia.push(Number($edadesGrupoFamiliar[i].value));
	};

	return edadesFamilia;
};

function encontrarIntegranteMasGrande(edadesFamilia){
	let familiarMayor = edadesFamilia[0];

	for (let i = 1; i < edadesFamilia.length; i++){
		if(edadesFamilia[i] > familiarMayor){
			familiarMayor = edadesFamilia[i];
		};
	};

	return familiarMayor;
};

function encontrarIntegranteMasChico(edadesFamilia){
	let familiarMenor = edadesFamilia[0];

	for (let i = 1; i < edadesFamilia.length; i ++){
		if (edadesFamilia[i] < familiarMenor){
			familiarMenor = edadesFamilia[i];
		};
	};

	return familiarMenor;
};

function calcularPromedioEdadFamiliaUsuario(edadesFamilia){
	let promedioFinal = 0;

	for (let i = 0; i < edadesFamilia.length; i++){
		promedioFinal +=  edadesFamilia[i];
	};

	return promedioFinal = promedioFinal / edadesFamilia.length;
};

function crearLabelsEInputs(){
	for (let i = 1; i <= $cantidadPersonasGrupoFamiliar.value; i++){
		const nuevoLabel = document.createElement ("label");
		const textoLabel = document.createTextNode ("Edad familiar " + i);
		nuevoLabel.className = "label-de-respuesta";

		const nuevoInput = document.createElement ("input");
		nuevoInput.className = "edades-familia";
		nuevoInput.type = "number";
		nuevoInput.placeholder = "Ingrese su respuesta";

		nuevoLabel.appendChild (textoLabel);
		$nodoFormulario.appendChild (nuevoLabel);
		$nodoFormulario.appendChild (nuevoInput);
	};
};

function ocultarElementos(){
	$cantidadPersonasGrupoFamiliar.id = "oculto";
	$botonCalcularCantidadFamiliar.id = "oculto";
};

function agregarNuevoTitulo(){
	const $tituloCalcularGrupoFamiliar = document.querySelector (".titulo");
	const nuevoTitulo = "Calcular edades de su grupo familiar";

	$tituloCalcularGrupoFamiliar.innerText = nuevoTitulo;
};

$botonCalcularCantidadFamiliar.onclick = function (){
	if($cantidadPersonasGrupoFamiliar.value >= 1){
		$botonCalcularEdadesFamilia.id = "";

        crearLabelsEInputs();
        ocultarElementos();
        agregarNuevoTitulo();
	}

	return false;
};

function mostrarRespuestas(){
    let edadesFamilia = guardarEdadesGrupoFamiliar();

	$respuestaUsuarioFamiliarMayor.innerText = `El familiar con mayor edad tiene ${encontrarIntegranteMasGrande(edadesFamilia)} años.`;
	$respuestaUsuarioFamiliarMenor.innerText = `El familiar con menor edad tiene ${encontrarIntegranteMasChico(edadesFamilia)} años.`;
	$respuestaUsuarioPromedioEdadFamilia.innerText = `El promedio de edad de la familia es de ${calcularPromedioEdadFamiliaUsuario(edadesFamilia)} años.`;
};

$botonCalcularEdadesFamilia.onclick = function (){
	mostrarRespuestas();

	return false;
};

function volverACambiarTitulo(){
	const $tituloCalcularGrupoFamiliar = document.querySelector (".titulo");
	const viejoTitulo = "¿Cuántas personas hay en tu grupo familiar?";
	$tituloCalcularGrupoFamiliar.innerText = viejoTitulo;
};

function volverAMostrarElementosOcultos(){
	const cantidadPersonasGrupoFamiliar = document.querySelector (".formulario-input");
	cantidadPersonasGrupoFamiliar.id = "";

	$botonCalcularCantidadFamiliar.id = "";
};

function ocultarBotonCalcularEdades(){
	$botonCalcularEdadesFamilia.id = "oculto";
};

function eliminarNodosCreados(){
	const $nodoFormulario = document.querySelector (".formulario");

	const $labelCreados = document.querySelectorAll (".label-de-respuesta");
	const $inputCreados = document.querySelectorAll (".edades-familia");

	for(let i = 0; i < $cantidadPersonasGrupoFamiliar.value; i++){
		$nodoFormulario.removeChild($labelCreados[i]);
	    $nodoFormulario.removeChild($inputCreados[i]);
	};
};

$botonEmpezarDeNuevo.onclick = function(){
	const inputsExistentes = document.querySelectorAll ("input");

	if(inputsExistentes.length > 1){
        volverACambiarTitulo();
        volverAMostrarElementosOcultos();
        ocultarBotonCalcularEdades();
        eliminarNodosCreados();
	};

	return false;
};
