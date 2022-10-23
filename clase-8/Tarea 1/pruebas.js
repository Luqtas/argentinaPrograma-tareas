function probarValidarCantidadGrupoFamiliar(){
	console.assert(
		validarCantidadGrupoFamiliar("") === "El campo para calcular la cantidad del grupo familiar no puede estar vacío.",
		"La validación para calcular la cantidad del grupo familiar con un string vacío no ha funcionado correctamente."
		);

	console.assert(
		validarCantidadGrupoFamiliar("0") === "La cantidad del grupo familiar no puede ser menor que 1.",
		"La validación para calcular la cantidad del grupo familiar con valor menor a 1 no ha funcionado correctamente."
		);

	console.assert(
		validarCantidadGrupoFamiliar("123") === "El campo no puede contener más de 3 caractéres.",
		"La validación para calcular la cantidad del grupo familiar con tres o más caractéres no ha funcionado correctamente."
		);

	console.assert(
		validarCantidadGrupoFamiliar("12") === "",
		"La validación para calcular la cantidad del grupo familiar con un valor correcto no ha funcionado como debería."
		);
};
probarValidarCantidadGrupoFamiliar();

function probarValidarEdadesDelGrupoFamiliar(){
	console.assert(
		validarEdadesDelGrupoFamiliar("") === "El campo de edades no puede estar vacio.",
		"La validación para calcular la edad del grupo familiar con un string vacío no ha funcionado correctamente."
		);

	console.assert(
		validarEdadesDelGrupoFamiliar(".-.-") === "El campo solo acepta números.",
		"La validación para calcular la edad del grupo familiar con caractéres distintos a números no ha funcionado correctamente."
		);

	console.assert(
		validarEdadesDelGrupoFamiliar("123123") === "El campo de edades no puede tener mas de 3 caractéres.",
		"La validación para calcular la edad del grupo familiar con mas de 3 caractéres no ha funcionado correctamente."
		);

	console.assert(
		validarEdadesDelGrupoFamiliar("132") === "",
		"La validación para calcular la edad del grupo familiar con un valor correcto no ha funcionado correctamente."
		);
};
probarValidarEdadesDelGrupoFamiliar();
