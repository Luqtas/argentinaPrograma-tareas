function probarValidarNumerosDelUsuario(){
  console.assert(
    validarNumerosDelUsuario("") === "El campo no puede quedar vacío",
    "validarNumerosDelUsuario con un string vació no ha funcionado correctamente"
  );

  console.assert(
    validarNumerosDelUsuario(0) === "El valor ingresado no puede ser 0",
    "validarNumerosDelUsuario con valor 0 no ha funcionado correctamente"
  );

  console.assert(
    validarNumerosDelUsuario(-1) === "El valor ingresado no puede ser menor a 0",
    "validarNumerosDelUsuario con valor menor a 0 no ha funcionado correctamente"
  );
}
probarValidarNumerosDelUsuario();
