function probarValidacionNombre(){
  console.assert (
  validarNombre("") === "Este campo debe tener al menos 1 caracter", 
  "Validar nombre no validó que el nombre no sea vacío."
  );

  console.assert(
  validarNombre("ssssssssssssssssssssssssssssssssssssssssssssssssssssss") === "Este campo debe tener menos de 50 caracteres",
  "Validar nombre no validó que nombre tenga menos de 50 caracteres."
  );

  console.assert(
  validarNombre ("12312312") === "Este campo solo puede contener letras",
  "Validar nombre no validó que el nombre solo tenga letras.");

  console.ass(
  validarNombre("Lucas") === "",
  "La validación del nombre falló con un nombre válido."
  );

};
probarValidacionNombre();

function probarValidacionCiudad(){
  console.assert(
    validarCiudad("") === "Por favor indique la Ciudad donde vive",
    "Ha ocurrido un error al validar las ciudades."
    );
};
probarValidacionCiudad();

function probarValidacionDescripcionRegalo(){
  console.assert(
    validarDescripcionRegalo("") === "Este campo debe tener al menos un caracter",
    "Ha habido un fallo al validar la descripción vacia del textarea"
    );

  console.assert(
    validarDescripcionRegalo("ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss") === "Este campo debe tener menos de 120 caracteres",
    "Ha habido un fallo al validar la descripción de 120 caracteres del textarea"
    );
};
probarValidacionDescripcionRegalo();