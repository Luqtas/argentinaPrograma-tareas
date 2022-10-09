const $botonCalcularCantidadFamiliar = document.querySelector(".formulario-enviar");
const $botonEmpezarDeNuevo = document.querySelector (".boton-resetear");
const $botonCalcularEdadesFamilia = document.querySelector (".boton-calcular");
const $cantidadPersonasGrupoFamiliar = document.querySelector(".formulario-input");
const $nodoFormulario = document.querySelector (".formulario");
const $respuestaUsuarioFamiliarMayor = document.querySelector (".respuesta-familiar-mayor");
const $respuestaUsuarioFamiliarMenor = document.querySelector (".respuesta-familiar-menor");
const $respuestaUsuarioPromedioEdadFamilia = document.querySelector (".respuesta-promedio-edad-familia");

function guardarEdadesGrupoFamiliar(edades){
    let edadesFamilia = [];

	for (let i = 0; i < edades.length; i++){
	    edadesFamilia.push(Number(edades[i].value));
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
		nuevoLabel.style.margin = "5px 0";
		nuevoLabel.style.fontFamily = "sans-serif";
		nuevoLabel.style.fontSize = "15px";

		const nuevoInput = document.createElement ("input");
		nuevoInput.type = "number";
		nuevoInput.placeholder = "Ingrese su respuesta";
		nuevoInput.style.height = "30px";
		nuevoInput.style.width = "200px";
		nuevoInput.style.margin = "5px 0";
		nuevoInput.className = "edades-familia";

		nuevoLabel.appendChild (textoLabel);
		$nodoFormulario.appendChild (nuevoLabel);
		$nodoFormulario.appendChild (nuevoInput);
	};
};

function borrarElementos(){
	$cantidadPersonasGrupoFamiliar.remove();
	$botonCalcularCantidadFamiliar.remove();
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
        borrarElementos();
        agregarNuevoTitulo();
	}
	else{
		return false;
	};

	return false;
};

function mostrarRespuestas(){
	const $edadesGrupoFamiliar = document.querySelectorAll (".edades-familia");
    let edadesFamilia = guardarEdadesGrupoFamiliar($edadesGrupoFamiliar);

	$respuestaUsuarioFamiliarMayor.innerText = `El familiar con mayor edad tiene ${encontrarIntegranteMasGrande(edadesFamilia)} años.`;
	$respuestaUsuarioFamiliarMenor.innerText = `El familiar con menor edad tiene ${encontrarIntegranteMasChico(edadesFamilia)} años.`;
	$respuestaUsuarioPromedioEdadFamilia.innerText = `El promedio de edad de la familia es de ${calcularPromedioEdadFamiliaUsuario(edadesFamilia)} años.`;
};

$botonCalcularEdadesFamilia.onclick = function (){
	mostrarRespuestas();

	return false;
};

$botonEmpezarDeNuevo.onclick = function(){
    location.reload()

	return false;
};
