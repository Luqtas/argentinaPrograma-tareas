function encontrarMayor(edadesFamilia){
	let edadMayor = edadesFamilia[0];

	for (let i = 1; i < edadesFamilia.length; i++){
		if(edadesFamilia[i] > edadMayor){
			edadMayor = edadesFamilia[i];
		}
	}

	return edadMayor;
}

function encontrarMenor(edadesFamilia){
	let edadMenor = edadesFamilia[0];

	for(let i = 1; i < edadesFamilia.length; i ++){
		if(edadesFamilia[i] < edadMenor){
			edadMenor = edadesFamilia[i];
		};
	};
	return edadMenor;
}

function calcularPromedio(edadesFamilia){
	let acumuladorEdades = 0;
	let promedioFinal;

	for(let i = 0; i < edadesFamilia.length; i++){
		acumuladorEdades += edadesFamilia[i];
	}
		
	return promedioFinal = acumuladorEdades / edadesFamilia.length;
}
