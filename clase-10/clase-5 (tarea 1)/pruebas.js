function probarValidarSueldoUsuario(){
    console.assert(
        validarSueldoUsuario("--") === "El campo solo acepta números",
        "La validación para calcular el sueldo anual del usuario con un string no ha funcionado correctamente"
    );

    console.assert(
        validarSueldoUsuario(0) === "El sueldo no puede ser menor que 0",
        "La validación para calcular el sueldo anual del usuario con 0 no ha funcionado correctamente"
    );
}
probarValidarSueldoUsuario();
