function probarValidarHoras() {
  console.assert(
    validarHoras("") === "El campo no puede estar vacio",
    "Validar horas con un string vacio no ha funcionado correctamente."
  );

  console.assert(
    validarHoras("-1") === "El valor ingresado no puede ser menor a 0",
    "Validar horas con un valor menor a 0 no ha funcionado correctamente."
  );

  console.assert(
    validarHoras("123") === "El valor ingresado no puede ser de más de dos dígitos",
    "Validar horas con un valor de más de 2 digitos no ha funcionado correctamente."
  );
}
probarValidarHoras();

function probarValidarMinutos() {
  console.assert(
    validarMinutos("") === "El campo no puede estar vacio",
    "Validar minutos con un string vacio no ha funcionado correctamente."
  );

  console.assert(
    validarMinutos("-1") === "El valor ingresado no puede ser menor a 0",
    "Validar minutos con un valor menor a 0 no ha funcionado correctamente."
  );

  console.assert(
    validarMinutos("79") === "El valor ingresado no puede ser mayor a 59",
    "Validar minutos con un valor mayor a 59 no ha funcionado correctamente."
  );
}
probarValidarMinutos();

function probarValidarSegundos() {
  console.assert(
    validarSegundos("") === "El campo no puede estar vacio",
    "Validar segundos con un string vacio no ha funcionado correctamente."
  );

  console.assert(
    validarSegundos("-1") === "El valor ingresado no puede ser menor a 0",
    "Validar segundos con un valor menor a 0 no ha funcionado correctamente."
  );

  console.assert(
    validarSegundos("70") === "El valor ingresado no puede ser mayor a 59",
    "Validar segundos con un valor mayor a 59 no ha funcionado correctamente."
  );
}
probarValidarSegundos();
