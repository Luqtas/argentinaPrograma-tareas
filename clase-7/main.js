/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*/

const formulario = document.querySelector ("#carta-a-santa")

const nombre = document.formulario.nombre.value;
const ciudades = document.formulario.ciudad.value;
const comportamiento = document.formulario.comportamiento.value;
const descripcionRegalo = document.formulario["descripcion-regalo"].value;

function validarNombre(nombre){
	if (nombre.length === 0){
      	return "Este campo debe tener al menos 1 caracter";
	};

	if(nombre.length >= 50){
		return "Este campo debe tener menos de 50 caracteres";
	};

	if(!/^[A-z]+$/i.test(nombre)){
		 return "Este campo solo puede contener letras";
	};

	return "";
};
validarNombre(nombre);

function validarCiudad(ciudades){
  if (ciudades.length === 0) {
    return "Por favor indique la Ciudad donde vive";
  };

  return "";
};
validarCiudad(ciudades);

function validarDescripcionRegalo(descripcionRegalo){
	if(descripcionRegalo.length === 0){
		return "Este campo debe tener al menos un caracter";
	};

	if(descripcionRegalo.length === 120){
		return "Este campo debe tener menos de 120 caracteres";
	};

	return "";
};
validarDescripcionRegalo(descripcionRegalo);
