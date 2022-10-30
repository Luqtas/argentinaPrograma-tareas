const $botonAgregarInterfaz = document.querySelector (".boton-agregar");
const $botonEliminarInterfaz = document.querySelector (".boton-eliminar");
const $botonCalcularSalarios = document.querySelector (".boton-calcular-ingresos");
const $botonReiniciar = document.querySelector (".boton-reiniciar-tramite");
const $nodoFormulario = document.querySelector (".formulario");
const $respuestaSalarioMayorAnual = document.querySelector (".respuesta-mayor-salario-anual");
const $respuestaSalarioMenorAnual = document.querySelector (".respuesta-menor-salario-anual");
const $respuestaPromedioAnual = document.querySelector (".respuesta-promedio-salario-anual");
const $respuestaPromedioMensual = document.querySelector (".respuesta-promedio-salario-mensual");

function crearNuevosElementos(){
	const nuevoLabel = document.createElement ("label");
	const textoLabel = document.createTextNode ("Ingresar salario anual del familiar");
	nuevoLabel.className = "formulario-label label-agregado";
	nuevoLabel.appendChild (textoLabel);
	$nodoFormulario.appendChild (nuevoLabel);

	const nuevoInput = document.createElement ("input");
	nuevoInput.type = "number"
	nuevoInput.placeholder = "Salario anual"
	nuevoInput.className = "formulario-input input-agregado";
	$nodoFormulario.appendChild (nuevoInput);
};

$botonAgregarInterfaz.onclick = function (){
	crearNuevosElementos();

	return false;
};

function eliminarElementosCreados(){
	const $inputsExistentes = document.querySelectorAll ("input");

	if($inputsExistentes.length > 1){
	    const $labelCreado = document.querySelector (".label-agregado");
	    const $inputCreado = document.querySelector (".input-agregado");

	    $nodoFormulario.removeChild($labelCreado);
	    $nodoFormulario.removeChild($inputCreado);
	}
	else{
		return false;
	};
};

$botonEliminarInterfaz.onclick = function (){
    eliminarElementosCreados();

	return false;
};

function guardarSalariosEnlista(todosLosSalarios){
    let listaDeSalarios = [];

	for (let i = 0; i < todosLosSalarios.length; i++){
		if (todosLosSalarios[i].value === ''){

		}
	    else if(todosLosSalarios[i].value <= 0){
	    	
	    }
	    else{
	        listaDeSalarios.push (todosLosSalarios[i].value);	
	    };
	};

	return listaDeSalarios;
};

function encontrarMayorSalarioAnual(listaDeSalarios){
    let mayorSalarioAnual = listaDeSalarios[0];

	for (let i = 1; i < listaDeSalarios.length; i++){
		if (listaDeSalarios[i] > mayorSalarioAnual){
			mayorSalarioAnual = listaDeSalarios[i];
		};
	};

	return mayorSalarioAnual;
};

function encontrarMenorSalarioAnual(listaDeSalarios){
    let menorSalarioAnual = listaDeSalarios[0];

	for (let i = 1; i < listaDeSalarios.length; i++){
		if (listaDeSalarios[i] < menorSalarioAnual){
			menorSalarioAnual = listaDeSalarios[i];
		};
	};

	return menorSalarioAnual;
};

function promediarSalarioAnual(listaDeSalarios){
    let promedioSalarioAnual = 0;
	for (let i = 0; i < listaDeSalarios.length; i++){
		promedioSalarioAnual += listaDeSalarios[i];
	};

	return Math.trunc (promedioSalarioAnual / listaDeSalarios.length);
};

function guardarSalarioMensual(listaDeSalarios, mesesDelAnio){
    let listaSalarioMensual = [];

	for (let i = 0; i < listaDeSalarios.length; i++){
	    listaSalarioMensual.push (listaDeSalarios[i] / mesesDelAnio);
	};

	return listaSalarioMensual;
};

function promediarSalarioMensual(listaDeSalarios){
	const mesesDelAnio = 12;
	let promedioSalarioMensual = 0;
	let listaSalarioMensual = guardarSalarioMensual(listaDeSalarios, mesesDelAnio);

	for (let i = 0; i < listaSalarioMensual.length; i++){
		promedioSalarioMensual += listaSalarioMensual[i];
	};

	return Math.trunc (promedioSalarioMensual / listaSalarioMensual.length);
};

function darRespuestaUsuario(listaDeSalarios){
	if (listaDeSalarios.length !== 0){
		$respuestaSalarioMayorAnual.innerText = "El mayor sueldo anual es de " + encontrarMayorSalarioAnual(listaDeSalarios);
		$respuestaSalarioMenorAnual.innerText = "El menor sueldo anual es de " + encontrarMenorSalarioAnual(listaDeSalarios);
		$respuestaPromedioAnual.innerText = "El promedio de salarios anuales es de " + promediarSalarioAnual(listaDeSalarios);
		$respuestaPromedioMensual.innerText = "El promedio de salarios mensuales es de " + promediarSalarioMensual(listaDeSalarios);
	}
};

$botonCalcularSalarios.onclick = function(){
	const $salarios = document.querySelectorAll ("input");
	let listaDeSalarios = guardarSalariosEnlista($salarios)

	darRespuestaUsuario(listaDeSalarios);

	return false;
};

function eliminarRespuestas(){
	$respuestaSalarioMayorAnual.innerText = "";
	$respuestaSalarioMenorAnual.innerText = "";
	$respuestaPromedioAnual.innerText = "";
	$respuestaPromedioMensual.innerText = "";
};

function eliminarTodosLosNodosCreados(){
	const $labelsCreados = document.querySelectorAll (".label-agregado");
	const $inputsCreados = document.querySelectorAll (".input-agregado");

	for (let i = 0; i < $labelsCreados.length; i++){
		$labelsCreados[i].remove();
		$inputsCreados[i].remove();
	};
};

$botonReiniciar.onclick = function(){
    eliminarTodosLosNodosCreados()
	eliminarRespuestas();

	return false;
};
