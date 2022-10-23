const $botonCalcularGrupo = document.querySelector (".boton-enviar");
const $botonCalcularEdades = document.querySelector (".boton-calcular-edades");
const $botonReiniciarTramite = document.querySelector (".boton-reiniciar-tramite");

function validarCantidadGrupoFamiliar(cantidadGrupoFamiliar){
	if(cantidadGrupoFamiliar === ""){
		return "El campo para calcular la cantidad del grupo familiar no puede estar vacío.";
	}
	else if(Number(cantidadGrupoFamiliar) < 1){
		return "La cantidad del grupo familiar no puede ser menor que 1.";
	}
	else if(cantidadGrupoFamiliar.length >= 3){
		return "El campo no puede contener más de 3 caractéres.";
	}
	else{
		return "";
	};
};

function crearNuevosElementos(cantidadGrupoFamiliar){
    const $formulario = document.querySelector (".formulario");

	for(let i = 1; i <= cantidadGrupoFamiliar; i++){
		const nuevoLabel = document.createElement ("label");
		const textoLabel = document.createTextNode ("Edad del familiar " + i);
		nuevoLabel.className = "label-de-respuesta";
		nuevoLabel.appendChild(textoLabel);
		$formulario.appendChild(nuevoLabel);

		const nuevoInputCalcularEdades = document.createElement ("input");
		nuevoInputCalcularEdades.className = "input-calcular-edades";
		$formulario.appendChild (nuevoInputCalcularEdades);
	};
};

function cambiarTitulo(){
	const $titulo = document.querySelector (".titulo")
	$titulo.innerText = "Calcular edades grupo familiar";
};

function ocultarElementosExito(){
    const $cantidadGrupoFamiliar = document.querySelector (".cantidad-familia");
    $cantidadGrupoFamiliar.id = "oculto";

    const $contenedorErrores = document.querySelector (".errores");
    $contenedorErrores.id = "oculto";	

    $botonCalcularGrupo.id = "oculto";
};

function mostrarBotonesOcultos(){
	const $botonCalcularEdades = document.querySelector (".boton-calcular-edades");
	const $botonReiniciarTramite = document.querySelector (".boton-reiniciar-tramite");

	$botonCalcularEdades.id = "";
	$botonReiniciarTramite.id = "";
};

function mostrarErroresCantidadGrupoFamiliar(cantidadGrupoFamiliar){
	const $contenedorErrores = document.querySelector (".errores");
    $contenedorErrores.id = "";	

    document.querySelector(".cantidad-familia").id = "error-validacion";

    const $errorCantidadFamilia = document.querySelector (".error-cantidad-familia");
    $errorCantidadFamilia.id = "texto-errores";

    $errorCantidadFamilia.innerText = validarCantidadGrupoFamiliar(cantidadGrupoFamiliar);
};

$botonCalcularGrupo.onclick = function(){
    const $cantidadGrupoFamiliar = document.querySelector (".cantidad-familia").value;

	if(validarCantidadGrupoFamiliar($cantidadGrupoFamiliar) === ""){
		crearNuevosElementos($cantidadGrupoFamiliar);
        cambiarTitulo();
        ocultarElementosExito();
        mostrarBotonesOcultos();
	}
	else{
        mostrarErroresCantidadGrupoFamiliar($cantidadGrupoFamiliar);
	};

	return false;
};

function encontrarIntegranteDeMayorEdad(edadesFamilia){
    let familiarMayor = Number(edadesFamilia[0]);

	for (let i = 1; i < edadesFamilia.length; i++){
			if(Number(edadesFamilia[i]) > familiarMayor){
				familiarMayor = Number(edadesFamilia[i]);
			};
		};
			
	return familiarMayor;
};

function encontrarIntegranteMasChico(edadesFamilia){
    let familiarMenor = Number(edadesFamilia[0]);

	for (let i = 1; i < edadesFamilia.length; i ++){
		if (Number(edadesFamilia[i]) < familiarMenor){
			familiarMenor = Number(edadesFamilia[i]);
		};
	};
	return familiarMenor;
};

function calcularPromedioEdadFamiliaUsuario(edadesFamilia){
    let promedioFinal = 0;

	for (let i = 0; i < edadesFamilia.length; i++){
		promedioFinal +=  Number(edadesFamilia[i]);
	};
		
	promedioFinal = Math.trunc (promedioFinal / edadesFamilia.length);

	return promedioFinal;
};

function validarEdadesDelGrupoFamiliar(edadesFamilia){
	if(edadesFamilia === ""){
		return "El campo de edades no puede estar vacio.";
	}
	else if(!/^[0-9]+$/i.test(edadesFamilia)){
		return "El campo solo acepta números."
	}
	else if (edadesFamilia.length >= 4){
		return "El campo de edades no puede tener mas de 3 caractéres.";
	}
	else{
		return "";
	};
};

function validarResultado(edadesFamilia){
	let esExito;
	let esError;

	for(let i = 0; i < edadesFamilia.length; i++){
		if(validarEdadesDelGrupoFamiliar(edadesFamilia[i]) === ""){
			esExito = validarEdadesDelGrupoFamiliar(edadesFamilia[i]);
		}
		else{
		    esError = validarEdadesDelGrupoFamiliar(edadesFamilia[i]);

			return esError;
	    };
	};

	return esExito;	
};

function guardarEdadesGrupoFamiliar(){
	const $edadesDelGrupoFamiliar = document.querySelectorAll(".input-calcular-edades");
	let edadesFamilia = [];

	for (let i = 0; i < $edadesDelGrupoFamiliar.length; i++){
     		edadesFamilia.push ($edadesDelGrupoFamiliar[i].value);
	};

	return edadesFamilia;
};

function mostrarRespuestaExito(edadesFamilia){
	const $mostrarFamiliarMayor = document.querySelector (".respuesta-familiar-mayor");
	const $mostrarFamiliarMenor = document.querySelector (".respuesta-familiar-menor");
	const $mostrarPromedioEdadFamilia = document.querySelector (".respuesta-promedio-edad-familia");

	$mostrarFamiliarMayor.innerText = "El integrante de la familia con más edad tiene " + encontrarIntegranteDeMayorEdad(edadesFamilia) + " años";
	$mostrarFamiliarMenor.innerText = "El integrante de la familia con menos edad tiene " + encontrarIntegranteMasChico(edadesFamilia) + " años";
	$mostrarPromedioEdadFamilia.innerText = "El promedio de las edades del grupo familiar es de " + calcularPromedioEdadFamiliaUsuario(edadesFamilia) + " años";

	$mostrarFamiliarMayor.id = "";
	$mostrarFamiliarMenor.id = "";
	$mostrarPromedioEdadFamilia.id = "";

	const $mostrarErrores = document.querySelector (".errores-calcular-edades");
	$mostrarErrores.id = "oculto";

	const $edadesGrupoFamiliar = document.querySelectorAll(".input-calcular-edades");
	let exitos;

	for(let i = 0; i < edadesFamilia.length; i++){
		exitos = validarEdadesDelGrupoFamiliar(edadesFamilia[i]);

		if(!exitos){
   			    $edadesGrupoFamiliar[i].id = "";
		};
	};
};

function mostrarRespuestaError(edadesFamilia){
	const $mostrarErrores = document.querySelector (".errores-calcular-edades");
	$mostrarErrores.innerText = validarResultado(edadesFamilia);
	$mostrarErrores.id = "texto-errores";

	const $edadesGrupoFamiliar = document.querySelectorAll(".input-calcular-edades");
	let errores;
		
	for(let i = 0; i < edadesFamilia.length; i++){
		errores = validarEdadesDelGrupoFamiliar(edadesFamilia[i]);

		if(errores){
   		    $edadesGrupoFamiliar[i].id = "error-validacion";
     	};
	};
};

$botonCalcularEdades.onclick = function(){
	let edadesFamilia = guardarEdadesGrupoFamiliar();

	if(validarResultado(edadesFamilia) === ""){
		mostrarRespuestaExito(edadesFamilia);
	}
	else{
		mostrarRespuestaError(edadesFamilia);
	};

	return false;
};

function volverAMostrarPrimerTitulo(){
	const $titulo = document.querySelector (".titulo")
	const primerTitulo = "¿Cuántas personas hay en tu grupo familiar?";

	$titulo.innerText = primerTitulo;
};

function volverAMostrarElementosOcultos(){
	const $cantidadGrupoFamiliar = document.querySelector (".cantidad-familia");
    $cantidadGrupoFamiliar.id = "";

    const $contenedorErrores = document.querySelector (".errores");
    $contenedorErrores.id = "oculto";	

    $botonCalcularGrupo.id = "";
};

function ocultarElementosCreados(){
	const $cantidadDeInputs = document.querySelectorAll ("input");

	const $nodoFormulario = document.querySelector (".formulario");
	const $labelCreados = document.querySelectorAll (".label-de-respuesta");
	const $inputCreados = document.querySelectorAll (".input-calcular-edades");

	if($cantidadDeInputs.length > 1){
		for(let i = 0; i < $labelCreados.length; i++){
		    $nodoFormulario.removeChild($labelCreados[i]);
	        $nodoFormulario.removeChild($inputCreados[i]);
		};
	};

};

function volverAOcultarBotones(){
	$botonCalcularEdades.id = "oculto";
    $botonReiniciarTramite.id = "oculto";
};

function borrarErrores(){
	const $errores = document.querySelector (".errores-calcular-edades");
	$errores.id = "oculto";
};

function borrarRespuestasExito(){
	const respuestaFamiliarMayor = document.querySelector (".respuesta-familiar-mayor");
	const respuestaFamiliarMenor = document.querySelector (".respuesta-familiar-menor");
	const respuestaPromedioEdadFamilia = document.querySelector (".respuesta-promedio-edad-familia");

	respuestaFamiliarMayor.id = "oculto";
	respuestaFamiliarMenor.id = "oculto";
	respuestaPromedioEdadFamilia.id = "oculto";
};

$botonReiniciarTramite.onclick = function(){
    volverAMostrarPrimerTitulo();
    volverAMostrarElementosOcultos();
    volverAOcultarBotones();
    ocultarElementosCreados();
    borrarErrores();
    borrarRespuestasExito();

	return false;
};
