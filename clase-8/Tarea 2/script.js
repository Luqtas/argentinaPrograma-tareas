const $calcularSalariosFamilia = document.querySelector (".boton-calcular-ingresos");
const $reiniciarTramite = document.querySelector (".boton-reiniciar-formulario");
const $botonAgregarSalario = document.querySelector (".boton-agregar");
const $botonEliminarSalario = document.querySelector (".boton-eliminar");

let cantidadDeNodosCreados = 0;

function validarSalariosFamilia(salarios){
	if(salarios === ""){
		return "El campo de salarios no puede estar vacío";
	}
	else if(salarios === 0){
		return "El salario anual no puede ser 0";
	}
	else if(!/^[0-9]+$/.test(salarios)){
		return "El campo de salarios solo acepta números";
	}
	else if(salarios <= 100){
		return "El campo de salarios no puede ser menor a 100";
	}
	else{
		return "";
	}
}

function agregarNuevoSalario(){
	const $nodoFormulario = document.querySelector (".formulario")

	const nuevoLabel = document.createElement ("label");
	const textoLabel = document.createTextNode ("Ingresar salario anual del familiar")
	nuevoLabel.className = "formulario-label label-agregado";
	nuevoLabel.appendChild (textoLabel);
	$nodoFormulario.appendChild (nuevoLabel);

	const nuevoInput = document.createElement ("input");
	nuevoInput.type = "number";
	nuevoInput.placeholder = "Salario anual";
	nuevoInput.className = "formulario-sueldos input-agregado";
	$nodoFormulario.appendChild (nuevoInput);

	cantidadDeNodosCreados++;
}

$botonAgregarSalario.onclick = function(){
	agregarNuevoSalario();

	return false;
};

function eliminarNodos ($nodoFormulario, labelAgregado, inputAgregado){
		$nodoFormulario.removeChild(labelAgregado);
		$nodoFormulario.removeChild(inputAgregado);
}

function eliminarNuevoSalario(){
	const $nodoFormulario = document.querySelector (".formulario");
	const labelAgregado = document.querySelector (".label-agregado");
	const inputAgregado = document.querySelector (".input-agregado");

	if(cantidadDeNodosCreados > 0){
	eliminarNodos($nodoFormulario, labelAgregado, inputAgregado);

	cantidadDeNodosCreados--;
	}
}

$botonEliminarSalario.onclick = function(){
	eliminarNuevoSalario();

	return false;
};

function validarResultado(listaSalarios){
	let esExito;
	let esError;

	for(let i = 0; i < listaSalarios.length; i++){
		if(validarSalariosFamilia(listaSalarios[i]) === ""){
			esExito = validarSalariosFamilia(listaSalarios[i]);
		}
		else{
			esError = validarSalariosFamilia(listaSalarios[i]);

			return esError;
		}
	}

	return esExito;
}

function guardarSalariosEnLista(salariosGrupoFamiliar){
	let listaSalarios = [];

	for(let i = 0; i < salariosGrupoFamiliar.length; i++){
		listaSalarios.push (Number(salariosGrupoFamiliar[i].value));
	}

	return listaSalarios;
}

function guardarSalarioMensual(mesesDelAnio, listaSalarios){
	let listaSalarioMensual = [];

	for (let i = 0; i < listaSalarios.length; i++){
		listaSalarioMensual.push (listaSalarios[i] / mesesDelAnio);
	}

	return listaSalarioMensual;
}

function darRespuestaExito(listaSalarios){
	const respuestaMayorSueldoAnual = document.querySelector (".respuesta-mayor-salario-anual");
	const respuestaMenorSueldoAnual = document.querySelector (".respuesta-menor-salario-anual");
	const respuestaPromedioSueldoAnual = document.querySelector (".respuesta-promedio-salario-anual");
	const respuestaPromedioSueldoMensual = document.querySelector (".respuesta-promedio-salario-mensual");

	respuestaMayorSueldoAnual.innerText = "El mayor sueldo anual es de " + encontrarMayorSalarioAnual(listaSalarios);
	respuestaMenorSueldoAnual.innerText = "El menor sueldo anual es de " + encontrarMenorSalarioAnual(listaSalarios);
	respuestaPromedioSueldoAnual.innerText = "El promedio de salarios anuales es de " + Math.trunc (promediarSalarioAnual(listaSalarios));
	respuestaPromedioSueldoMensual.innerText = "El promedio de salarios mensuales es de " + Math.trunc (promediarSalarioMensual(listaSalarios));

	respuestaMayorSueldoAnual.id = "";
	respuestaMenorSueldoAnual.id = "";
	respuestaPromedioSueldoAnual.id = "";
	respuestaPromedioSueldoMensual.id = "";

	const mostrarErrores = document.querySelector (".contenedor-errores");
	mostrarErrores.id = "oculto";

	const salariosGrupoFamiliar = document.querySelectorAll (".formulario-sueldos");
	let exitos;

	for(let i = 0; i < salariosGrupoFamiliar.length; i++){
		exitos = validarSalariosFamilia(salariosGrupoFamiliar[i].value);

		if(!exitos){
			salariosGrupoFamiliar[i].id = "";
		}
	}
}

function darRespuestaError(resultadoFinal){
	const mostrarErrores = document.querySelector (".contenedor-errores");
	mostrarErrores.innerText = resultadoFinal;
	mostrarErrores.id = "texto-errores";

	const salariosGrupoFamiliar = document.querySelectorAll (".formulario-sueldos");
	let errores;

	for(let i = 0; i < salariosGrupoFamiliar.length; i++){
		salariosGrupoFamiliar[i].id = "";
		errores = validarSalariosFamilia(salariosGrupoFamiliar[i].value);

		if(errores){
			salariosGrupoFamiliar[i].id = "error-validacion";
		}
	}
}

$calcularSalariosFamilia.onclick = function (){
	const salariosGrupoFamiliar = document.querySelectorAll (".formulario-sueldos");
	let listaSalarios = guardarSalariosEnLista(salariosGrupoFamiliar);

	let resultadoFinal = validarResultado(listaSalarios);

	if(resultadoFinal != ""){
		darRespuestaError(resultadoFinal);
	}
	else{
		darRespuestaExito(listaSalarios);
	}

	return false;
};

function eliminarSalariosFamiliaresCreados(){
	const $labelsCreados = document.querySelectorAll (".label-agregado");
	const $inputsCreados = document.querySelectorAll (".input-agregado");

	for (let i = 0; i < $labelsCreados.length; i++){
		$labelsCreados[i].remove();
		$inputsCreados[i].remove();
	};

	cantidadDeNodosCreados = 0;
}

function quitarRemarcadoDeErrorSueldos(sueldosFamilia){
	for(let i = 0; i < sueldosFamilia.length; i++){
		sueldosFamilia[i].id = "";
	}
}

function ocultarRespuestas(){
	const respuestaMayorSueldoAnual = document.querySelector (".respuesta-mayor-salario-anual");
	const respuestaMenorSueldoAnual = document.querySelector (".respuesta-menor-salario-anual");
	const respuestaPromedioSueldoAnual = document.querySelector (".respuesta-promedio-salario-anual");
	const respuestaPromedioSueldoMensual = document.querySelector (".respuesta-promedio-salario-mensual");

	respuestaMayorSueldoAnual.innerText = "";
	respuestaMenorSueldoAnual.innerText = "";
	respuestaPromedioSueldoAnual.innerText = "";
	respuestaPromedioSueldoMensual.innerText = "";
}

function ocultarErrores(){
	const errores = document.querySelector (".contenedor-errores");
	errores.innerText = "";
}

$reiniciarTramite.onclick = function (){
	const sueldosFamilia = document.querySelectorAll (".formulario-sueldos");
	quitarRemarcadoDeErrorSueldos(sueldosFamilia);

	eliminarSalariosFamiliaresCreados();
	ocultarRespuestas();
	ocultarErrores();

	return false;
};
