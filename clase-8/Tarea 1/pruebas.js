function probarValidarCantidadGrupoFamiliar(){
	console.assert(
		validarCantidadGrupoFamiliar("") === "El campo para calcular la cantidad del grupo familiar no puede estar vacío.",
		"La validación para calcular la cantidad del grupo familiar con un string vacío no ha funcionado correctamente."
		);

	console.assert(
		validarCantidadGrupoFamiliar(0) === "La cantidad del grupo familiar no puede ser menor que 1.",
		"La validación para calcular la cantidad del grupo familiar con valor menor a 1 no ha funcionado correctamente."
		);

	console.assert(
		validarCantidadGrupoFamiliar(100) === "La cantidad del grupo familiar no puede ser mayor a 99.",
		"La validación para calcular la cantidad del grupo familiar con tres o más caracteres no ha funcionado correctamente."
		);

	console.assert(
		validarCantidadGrupoFamiliar(12) === "",
		"La validación para calcular la cantidad del grupo familiar con un valor correcto no ha funcionado como debería."
		);
};
probarValidarCantidadGrupoFamiliar();

function probarValidarEdadesDelGrupoFamiliar(){
	console.assert(
		validarEdadesDelGrupoFamiliar(0) === "El campo de edades no puede estar vacio.",
		"La validación para calcular la edad del grupo familiar con un string vacío no ha funcionado correctamente."
		);

	console.assert(
		validarEdadesDelGrupoFamiliar(".-.-") === "El campo solo acepta números.",
		"La validación para calcular la edad del grupo familiar con caractéres distintos a números no ha funcionado correctamente."
		);

	console.assert(
		validarEdadesDelGrupoFamiliar(100) === "La edad del miembro de la familia no puede ser mayor a 99 años.",
		"La validación para calcular la edad del grupo familiar con mas de 3 caracteres no ha funcionado correctamente."
		);

	console.assert(
		validarEdadesDelGrupoFamiliar(12) === "",
		"La validación para calcular la edad del grupo familiar con un valor correcto no ha funcionado correctamente."
		);
};
probarValidarEdadesDelGrupoFamiliar();
