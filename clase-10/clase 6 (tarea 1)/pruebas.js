function probarValidarCantidadInvitados(){
  console.assert(
    validarCantidadInvitados(0) === "El valor ingresado no puede ser 0",
    "validarCantidadUsuario con 0 no ha funcionado correctamente."
  );
  console.assert(
    validarCantidadInvitados(-1) === "El valor ingresado no puede ser menor a 0",
    "validarCantidadUsuario con un valor menor a 0 no ha funcionado correctamente."
  );
  console.assert(
    validarCantidadInvitados(12) === "La cantidad máxima de invitados es de 10",
    "validarCantidadUsuario con un valor mayor a 10 no ha funcionado correctamente."
  );
}
probarValidarCantidadInvitados();

function probarValidarNombreYApellidoInvitado(){
  console.assert(
    validarNombreYApellidoInvitado("S") === "El campo no puede contener menos de 3 caracteres",
    "validarNombreYApellidoInvitado con menos de 3 caracteres no ha funcionado correctamente."
  );
  console.assert(
    validarNombreYApellidoInvitado("Qwertyuioasdfghjklzxc") === "El campo no puede contener mas de 20 caracteres",
    "validarNombreYApellidoInvitado con mas de 20 caracteres no ha funcionado correctamente."
  );
  console.assert(
    validarNombreYApellidoInvitado("jose12") === "El campo solo puede contener letras",
    "validarNombreYApellidoInvitado con numeros y minuscula en la inicial no ha funcionado correctamente."
  );
}
probarValidarNombreYApellidoInvitado();

function probarValidarEdadesInvitados(){
  console.assert(
    validarEdadesInvitados("asd") === "El campo solo acepta numeros",
    "validarEdadesInvitados con un string no ha funcionado correctamente."
  );
  console.assert(
    validarEdadesInvitados(0) === "La edad del invitado no puede ser menor a 1 año",
    "validarEdadesInvitados con un valor menor a 1 no ha funcionado correctamente."
  );
  console.assert(
    validarEdadesInvitados(100) === "La edad del invitado no puede ser mayor a 99 años",
    "validarEdadesInvitados con un valor mayor a 99 no ha funcionado correctamente."
  );
}
probarValidarEdadesInvitados();
