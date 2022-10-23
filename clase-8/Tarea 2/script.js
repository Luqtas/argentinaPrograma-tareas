const $calcularSalariosFamilia = document.querySelector (".boton-calcular-ingresos");
const $reiniciarTramite = document.querySelector (".boton-reiniciar-formulario");
const $botonAgregarSalario = document.querySelector (".boton-agregar");
const $botonEliminarSalario = document.querySelector (".boton-eliminar");

let cantidadDeNodosCreados = 0;

function validarSalariosFamilia(salarios){
	if(salarios === ""){
		return "El campo de salarios no puede estar vacío"
	}
	else if(salarios === "0"){
		return "El salario anual no puede ser 0"
	}
	else if(!/^[0-9]+$/.test(salarios)){
		return "El campo de salarios solo acepta números"
	}
	else if(salarios.length < 3){
		return "El campo de salarios no puede tener menos de 3 digitos"
	}
	else{
		return "";
	};
};

function agregarNuevoSalario(){
	const $nodoFormulario = document.querySelector (".formulario")

	const nuevoLabel = document.createElement ("label");
	const textoLabel = document.createTextNode ("Ingresar salario anual del familiar")
	nuevoLabel.className = "formulario-label label-agregado";
	nuevoLabel.appendChild (textoLabel);
	$nodoFormulario.appendChild (nuevoLabel);

	const nuevoInput = document.createElement ("input");
	nuevoInput.placeholder = "Salario anual";
	nuevoInput.className = "formulario-sueldos input-agregado";
	$nodoFormulario.appendChild (nuevoInput);

	cantidadDeNodosCreados++;
};

$botonAgregarSalario.onclick = function(){
    agregarNuevoSalario();

	return false;
};

function eliminarNuevoSalario(){
	const $nodoFormulario = document.querySelector (".formulario");

	if(cantidadDeNodosCreados > 0){
	const labelAgregado = document.querySelector (".label-agregado");
	const inputAgregado = document.querySelector (".input-agregado");

	function eliminarNodos (){
		$nodoFormulario.removeChild(labelAgregado);
		$nodoFormulario.removeChild(inputAgregado);
	};
	eliminarNodos();

	cantidadDeNodosCreados--;
	};
};

$botonEliminarSalario.onclick = function(){
	eliminarNuevoSalario();

	return false;
};

// RETOMAR ACÁ

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
		};
	};

	return esExito;
};

function encontrarMayorSalarioAnual(listaSalarios){
    let mayorSalarioAnual = Number(listaSalarios[0]);

	for (let i = 1; i < listaSalarios.length; i++){
		if (Number(listaSalarios[i]) > mayorSalarioAnual){
			mayorSalarioAnual = Number(listaSalarios[i]);
		};
	};
	return mayorSalarioAnual;
};

function encontrarMenorSalarioAnual(listaSalarios){
   	let menorSalarioAnual = Number(listaSalarios[0]);

	for (let i = 1; i < listaSalarios.length; i++){
		if (Number(listaSalarios[i]) < menorSalarioAnual){
			menorSalarioAnual = Number(listaSalarios[i]);
		};
	};

	return menorSalarioAnual;
};

function promediarSalarioAnual(listaSalarios){
   	let promedioSalarioAnual = 0;

	for (let i = 0; i < listaSalarios.length; i++){
		promedioSalarioAnual += Number(listaSalarios[i]);
	};

	return Math.trunc(promedioSalarioAnual / listaSalarios.length);
};

function guardarSalarioMensual(mesesDelAnio, listaSalarios){
    let listaSalarioMensual = [];

	for (let i = 0; i < listaSalarios.length; i++){
		listaSalarioMensual.push (Number(listaSalarios[i]) / mesesDelAnio);
	};

	return listaSalarioMensual;
};

function promediarSalarioMensual(listaSalarios){
	const mesesDelAnio = 12;
	let listaSalarioMensual = guardarSalarioMensual(mesesDelAnio, listaSalarios);
	let promedioSalarioMensual = 0;

	for (let i = 0; i < listaSalarioMensual.length; i++){
		promedioSalarioMensual += Number(listaSalarioMensual[i]);
	};

	return Math.trunc(promedioSalarioMensual / listaSalarioMensual.length);
};

function guardarSalariosEnLista(salariosGrupoFamiliar){
	let listaSalarios = [];

	for(let i = 0; i < salariosGrupoFamiliar.length; i++){
		listaSalarios.push (salariosGrupoFamiliar[i].value);
	};

	return listaSalarios;
};

function darRespuestaExito(listaSalarios){
	const respuestaMayorSueldoAnual = document.querySelector (".respuesta-mayor-salario-anual");
	const respuestaMenorSueldoAnual = document.querySelector (".respuesta-menor-salario-anual");
	const respuestaPromedioSueldoAnual = document.querySelector (".respuesta-promedio-salario-anual");
	const respuestaPromedioSueldoMensual = document.querySelector (".respuesta-promedio-salario-mensual");

	respuestaMayorSueldoAnual.innerText = "El mayor sueldo anual es de " + encontrarMayorSalarioAnual(listaSalarios);
    respuestaMenorSueldoAnual.innerText = "El menor sueldo anual es de " + encontrarMenorSalarioAnual(listaSalarios);
    respuestaPromedioSueldoAnual.innerText = "El promedio de salarios anuales es de " + promediarSalarioAnual(listaSalarios);
    respuestaPromedioSueldoMensual.innerText = "El promedio de salarios mensuales es de " + promediarSalarioMensual(listaSalarios);

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
		};
	};
};

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
		};
	};
};

$calcularSalariosFamilia.onclick = function (){
	const salariosGrupoFamiliar = document.querySelectorAll (".formulario-sueldos");
	let listaSalarios = guardarSalariosEnLista(salariosGrupoFamiliar);

	let resultadoFinal = validarResultado(listaSalarios);

	if(resultadoFinal != ""){
		darRespuestaError(resultadoFinal);
	}
	else{
		darRespuestaExito(listaSalarios);
	};

	return false;
};

function quitarRemarcadoDeErrorSueldos(sueldosFamilia){
   	for(let i = 0; i < sueldosFamilia.length; i++){
        sueldosFamilia[i].id = "";
   	};
};

function ocultarRespuestas(){
	const respuestaMayorSueldoAnual = document.querySelector (".respuesta-mayor-salario-anual");
	const respuestaMenorSueldoAnual = document.querySelector (".respuesta-menor-salario-anual");
	const respuestaPromedioSueldoAnual = document.querySelector (".respuesta-promedio-salario-anual");
	const respuestaPromedioSueldoMensual = document.querySelector (".respuesta-promedio-salario-mensual");

	respuestaMayorSueldoAnual.innerText = "";
    respuestaMenorSueldoAnual.innerText = "";
    respuestaPromedioSueldoAnual.innerText = "";
    respuestaPromedioSueldoMensual.innerText = "";
};

function ocultarErrores(){
	const errores = document.querySelector (".contenedor-errores");
    errores.innerText = "";
};

$reiniciarTramite.onclick = function (){
    const sueldosFamilia = document.querySelectorAll (".formulario-sueldos");
    quitarRemarcadoDeErrorSueldos(sueldosFamilia);

    ocultarRespuestas();
    ocultarErrores();

	return false;
};