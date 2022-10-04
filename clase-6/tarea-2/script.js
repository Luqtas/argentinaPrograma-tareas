const botonAgregarInterfaz = document.querySelector (".contenedor-botones__agregar");
const botonEliminarInterfaz = document.querySelector (".contenedor-botones__eliminar");
const botonCalcularSalarios = document.querySelector (".formulario__calcular-ingresos");
const botonReiniciar = document.querySelector (".formulario__reiniciar-formulario");
const nodoFormulario = document.querySelector (".formulario");
const respuestaSalarioMayorAnual = document.querySelector (".contenedor-respuesta__mayor-salario-anual");
const respuestaSalarioMenorAnual = document.querySelector (".contenedor-respuesta__menor-salario-anual");
const respuestaPromedioAnual = document.querySelector (".contenedor-respuesta__promedio-salario-anual");
const respuestaPromedioMensual = document.querySelector (".contenedor-respuesta__promedio-salario-mensual");

botonAgregarInterfaz.onclick = function (){
	const nuevoLabel = document.createElement ("label");
	const textoLabel = document.createTextNode ("Ingresar salario anual del familiar");
	nuevoLabel.style.margin = "5px 0px";
	nuevoLabel.style.fontSize = "20px";
	nuevoLabel.style.fontFamily = "sans-serif";
	nuevoLabel.style.color = "black";
	nuevoLabel.className = "label-agregado";
	nuevoLabel.appendChild (textoLabel);
	nodoFormulario.appendChild (nuevoLabel);

	const nuevoInput = document.createElement ("input");
	nuevoInput.placeholder = "Salario anual"
	nuevoInput.style.margin = "auto"; 
	nuevoInput.style.marginTop = "10px";
	nuevoInput.style.marginBottom = "10px";
	nuevoInput.style.padding = "5px";
	nuevoInput.style.width = "200px";
	nuevoInput.style.height = "20px";
	nuevoInput.style.border = "1px solid black";
	nuevoInput.style.borderRadius = "5px";
	nuevoInput.className = "input-agregado";
	nodoFormulario.appendChild (nuevoInput);

	return false;
};

botonEliminarInterfaz.onclick = function (){
	const labelCreado = document.querySelector (".label-agregado");
	const inputCreado = document.querySelector (".input-agregado");

	nodoFormulario.removeChild(labelCreado);
	nodoFormulario.removeChild(inputCreado);

	return false;
};

let listaDeSalarios = [];

function guardarSalariosEnlista(){
	const salariosAnuales = document.querySelectorAll ("input");

	for (let i = 0; i < salariosAnuales.length; i++){
		if (salariosAnuales[i].value !== ''){
	        listaDeSalarios.push (Number(salariosAnuales[i].value));	
	    };
	};
};

function encontrarMayorSalarioAnual(){
    let mayorSalarioAnual = listaDeSalarios[0];

	for (let i = 1; i < listaDeSalarios.length; i++){
		if (listaDeSalarios[i] > mayorSalarioAnual){
			mayorSalarioAnual = listaDeSalarios[i];
		};
	};

	return mayorSalarioAnual;
};

function encontrarMenorSalarioAnual(){
    let menorSalarioAnual = listaDeSalarios[0];

	for (let i = 1; i < listaDeSalarios.length; i++){
		if (listaDeSalarios[i] < menorSalarioAnual){
			menorSalarioAnual = listaDeSalarios[i];
		};
	};

	return menorSalarioAnual;
};

function promediarSalarioAnual(){
    let promedioSalarioAnual = 0;
	for (let i = 0; i < listaDeSalarios.length; i++){
		promedioSalarioAnual += listaDeSalarios[i];
	};

	return promedioSalarioAnual / listaDeSalarios.length;
};

function promediarSalarioMensual(){
	const mesesDelAnio = 12;
	let listaSalarioMensual = [];
	let promedioSalarioMensual = 0;

	function guardarSalarioMensual(){
		for (let i = 0; i < listaDeSalarios.length; i++){
		    listaSalarioMensual.push (listaDeSalarios[i] / mesesDelAnio);
	    };
	};
	guardarSalarioMensual();

	for (let i = 0; i < listaSalarioMensual.length; i++){
		promedioSalarioMensual += listaSalarioMensual[i];
	};

	return promedioSalarioMensual / listaSalarioMensual.length;
};

function darRespuestaUsuario(){
	respuestaSalarioMayorAnual.innerText = "El mayor sueldo anual es de " + encontrarMayorSalarioAnual();
    respuestaSalarioMenorAnual.innerText = "El menor sueldo anual es de " + encontrarMenorSalarioAnual();
    respuestaPromedioAnual.innerText = "El promedio de salarios anuales es de " + promediarSalarioAnual();
    respuestaPromedioMensual.innerText = "El promedio de salarios mensuales es de " + promediarSalarioMensual();
};

botonCalcularSalarios.onclick = function(){

	guardarSalariosEnlista();

	darRespuestaUsuario();

	return false;
};

function eliminarRespuestas(){
	respuestaSalarioMayorAnual.innerText = "";
	respuestaSalarioMenorAnual.innerText = "";
	respuestaPromedioAnual.innerText = "";
	respuestaPromedioMensual.innerText = "";
};

botonReiniciar.onclick = function(){
	const labelsCreados = document.querySelectorAll (".label-agregado");
	const inputsCreados = document.querySelectorAll (".input-agregado");

	for (let i = 0; i < labelsCreados.length; i++){
		labelsCreados[i].remove();
		inputsCreados[i].remove();
	};

	eliminarRespuestas();

	return false;
};
