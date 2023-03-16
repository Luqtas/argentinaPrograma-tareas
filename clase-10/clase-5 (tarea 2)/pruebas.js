function probarValidarNombreUsuario(){
  console.assert(
    validarNombreUsuario("") === "Este campo debe tener 3 o mas caracteres",
    "La validación del texto con un string vacío no ha funcionado correctamente."
  );
  console.assert(
    validarNombreUsuario("asdasdasdasdasdasdasdasdasdasdasasdasdasdasd") 
    === "Este campo debe tener menos de 20 caracteres",
    "La validación del texto con un string vacío no ha funcionado correctamente."
  );
  console.assert(
    validarNombreUsuario(".-.-.-.") === "Este campo solo acepta letras",
    "La validación del texto con un string vacío no ha funcionado correctamente."
  );
}
probarValidarNombreUsuario();

function probarValidarApellidoUsuario(){
  console.assert(
    validarApellidoUsuario("") === "Este campo debe tener 3 o mas caracteres",
    "La validación del texto con un string vacío no ha funcionado correctamente."
  );
  console.assert(
    validarApellidoUsuario("asdasdasdasdasdasdasdasdasdasdasasdasdasdasd") 
    === "Este campo debe tener menos de 20 caracteres",
    "La validación del texto con un string vacío no ha funcionado correctamente."
  );
  console.assert(
    validarApellidoUsuario(".-.-.-.") === "Este campo solo acepta letras",
    "La validación del texto con un string vacío no ha funcionado correctamente."
  );
}
probarValidarApellidoUsuario();

function probarValidarNumeroTelefonico(){
  console.assert(
    validarNumeroTelefonico("asd") === "El campo solo acepta números",
    "La validación del numero telefónico con letras no ha funcionado correctamente."
  );
  console.assert(
    validarNumeroTelefonico(0) === "El numero telefonico no puede ser 0",
    "La validación del numero telefónico siendo 0 no ha funcionado correctamente"
  );
  console.assert(
    validarNumeroTelefonico("1233") === "El numero telefónico no puede tener menos de 8 digitos",
    "La validación del numero telefónico con menos de 8 números no ha funcionado correctamente"
  );
  console.assert(
    validarNumeroTelefonico("123456789") === "El numero telefónico no puede tener 9 digitos",
    "La validación del numero telefónico con 9 numeros no ha funcionado correctamente"
  );
  console.assert(
    validarNumeroTelefonico("123123123132") === "El numero telefónico no puede tener más de 10 digitos",
    "La validación del numero telefónico con mas de diez numeros no ha funcionado correctamente"
  );
}
probarValidarNumeroTelefonico();
