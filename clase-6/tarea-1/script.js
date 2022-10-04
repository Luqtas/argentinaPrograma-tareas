const botonCalcularCantidadFamiliar = document.querySelector(".contenedor-formulario__enviar");
const botonEmpezarDeNuevo = document.querySelector (".contenedor-formulario__resetear");
const cantidadPersonasGrupoFamiliar = document.querySelector(".contenedor-formulario__input");
const nodoFormulario = document.querySelector (".contenedor-formulario__formulario");
const respuestaUsuarioFamiliarMayor = document.querySelector (".respuesta__usuario-familiar-mayor");
const respuestaUsuarioFamiliarMenor = document.querySelector (".respuesta__usuario-familiar-menor");
const respuestaUsuarioPromedioEdadFamilia = document.querySelector (".respuesta__usuario-promedio-edad-familia");

edadesFamilia = [];

function guardarEdadesGrupoFamiliar(edades){
	for (let i = 0; i < edades.length; i++){
	    edadesFamilia.push(Number(edades[i].value));
	};
};

function encontrarIntegranteMasGrande(){
	let familiarMayor = edadesFamilia[0];

	for (let i = 1; i < edadesFamilia.length; i++){
		if(edadesFamilia[i] > familiarMayor){
			familiarMayor = edadesFamilia[i];
		};
	};

	return familiarMayor;
};

function encontrarIntegranteMasChico(){
	let familiarMenor = edadesFamilia[0];

	for (let i = 1; i < edadesFamilia.length; i ++){
		if (edadesFamilia[i] < familiarMenor){
			familiarMenor = edadesFamilia[i];
		};
	};

	return familiarMenor;
};

function calcularPromedioEdadFamiliaUsuario(){
	let promedioFinal = 0;

	for (let i = 0; i < edadesFamilia.length; i++){
		promedioFinal +=  edadesFamilia[i];
	};

	return promedioFinal = promedioFinal / edadesFamilia.length;
};

botonCalcularCantidadFamiliar.onclick = function (){
	for (let i = 1; i <= cantidadPersonasGrupoFamiliar.value; i++){
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
		nodoFormulario.appendChild (nuevoLabel);
		nodoFormulario.appendChild (nuevoInput);
	};

	const botonCalcularEdadesFamilia = document.createElement ("button");
	botonCalcularEdadesFamilia.innerText = "Calcular";
	botonCalcularEdadesFamilia.className = "boton-calcular-edades";
	botonCalcularEdadesFamilia.style.margin = "5px 0";
	botonCalcularEdadesFamilia.style.padding = "5px";
	botonCalcularEdadesFamilia.style.border = "1px solid #6495ed";
	botonCalcularEdadesFamilia.style.borderRadius = "5px";
	nodoFormulario.appendChild (botonCalcularEdadesFamilia);

	botonCalcularEdadesFamilia.addEventListener("mouseover", function (event) {
		botonCalcularEdadesFamilia.style.color = "#fff";
		botonCalcularEdadesFamilia.style.border = "1px solid black";
		botonCalcularEdadesFamilia.style.backgroundColor = "#6495ed";
	}, false);

    botonCalcularEdadesFamilia.addEventListener("mouseout", function (event) {
      botonCalcularEdadesFamilia.style.color = "black";
      botonCalcularEdadesFamilia.style.border = "1px solid #6495ed";
      botonCalcularEdadesFamilia.style.backgroundColor = "#fff";
    }, false);

	botonCalcularEdadesFamilia.onclick = function (){
		const edadesGrupoFamiliar = document.querySelectorAll (".edades-familia");

		guardarEdadesGrupoFamiliar(edadesGrupoFamiliar);

		respuestaUsuarioFamiliarMayor.innerText = `El familiar con mayor edad tiene ${encontrarIntegranteMasGrande()} años.`;
		respuestaUsuarioFamiliarMenor.innerText = `El familiar con menor edad tiene ${encontrarIntegranteMasChico()} años.`;
		respuestaUsuarioPromedioEdadFamilia.innerText = `El promedio de edad de la familia es de ${calcularPromedioEdadFamiliaUsuario()} años.`;

		return false;
	};

	return false;
};

function borrarLabelsCreados(){
	const labelsCreados = document.querySelectorAll (".label-de-respuesta");
    for (let i = 0; i < labelsCreados.length; i++) {
        labelsCreados[i].remove();
    };
};

function borrarInputsEdad(){
    const inputsCreados = document.querySelectorAll (".edades-familia");
    for (let i = 0; i < inputsCreados.length; i++){
    	inputsCreados[i].remove();
    };
};

function borrarBotonCalcularEdad(){
    const botonCalcularEdades = document.querySelector(".boton-calcular-edades");
    botonCalcularEdades.remove();
};

function borrarRespuesta(){
    respuestaUsuarioFamiliarMayor.innerText = "";
    respuestaUsuarioFamiliarMenor.innerText = "";
    respuestaUsuarioPromedioEdadFamilia.innerText = "";
};

botonEmpezarDeNuevo.onclick = function(){
    borrarLabelsCreados();
    borrarInputsEdad();
    borrarBotonCalcularEdad();
    borrarRespuesta();

	return false;
};
