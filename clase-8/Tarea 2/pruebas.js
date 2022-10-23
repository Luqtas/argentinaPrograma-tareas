function probarValidacionesSalariosFamilia(){
	console.assert(
		validarSalariosFamilia("") === "El campo de salarios no puede estar vacío",
		"La validación de salarios con un string vacío no ha funcionado correctamente."
		);

	console.assert(
		validarSalariosFamilia("0") === "El salario anual no puede ser 0",
		"La validación de salarios con valor 0 no ha funcionado correctamente."
		);

	console.assert(
		validarSalariosFamilia("asdsadsa") === "El campo de salarios solo acepta números",
		"La validación de salarios con letras no ha funcionado correctamente."
		);

	console.assert(
		validarSalariosFamilia("12") === "El campo de salarios no puede tener menos de 3 digitos",
		"La validación de salarios con menos de dos caracteres no ha funcionado correctamente."
		);

	console.assert(
		validarSalariosFamilia("123123123") === "",
		"La validación de salarios con un valor correcto no ha funcionado correctamente."
		);
};
probarValidacionesSalariosFamilia();