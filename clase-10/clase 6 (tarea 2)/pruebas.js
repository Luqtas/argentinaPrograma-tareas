function probarValidarSueldos() {
  console.assert(
    validarSueldos(0) === "El sueldo anual no puede ser menor a 1000",
    "validarSueldos con un valor menor a 1000 no ha funcionado correctamente"
  );

  console.assert(
    validarSueldos(1000000000) === "El sueldo anual no puede ser mayor a 999999999",
    "validarSueldos con un valor mayor a 9999999 no ha funcionado correctamente"
  );
}
probarValidarSueldos();
