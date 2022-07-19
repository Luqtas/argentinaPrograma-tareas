const numerosDeLaLista = document.querySelectorAll (".lista__item");

let listaDeNumeros = [];

function guardarNumeros (){
    for (let i = 0; i < numerosDeLaLista.length; i++){
        listaDeNumeros.push (Number (numerosDeLaLista[i].innerText));
    };
}

guardarNumeros();

const resultadoPromedio = document.querySelector (".contenedor-respuesta__promedio");
const resultadoPequeño = document.querySelector (".contenedor-respuesta-pequeño");
const resultadoMayor = document.querySelector (".contenedor-respuesta-grande");
const resultadoNumeroFrecuente = document.querySelector (".contenedor-respuesta-frecuente");

const botonPromedio = document.querySelector (".formulario__calcular__promedio");

botonPromedio.onclick = function(){
    let promedioDeLaLista = 0;

    for (let i = 0; i < listaDeNumeros.length; i++){
        promedioDeLaLista += listaDeNumeros[i];
    };

    resultadoPromedio.innerText = `El promedio de los números es de: ${promedioDeLaLista}`;

    return false;
};

const botonPequeño = document.querySelector (".formulario__calcular__pequeño");

botonPequeño.onclick = function (){
    let numeroMasPequeño = 0;

    let parametroCalcularPequeño = listaDeNumeros.length;

    for(let i = 0; i < listaDeNumeros.length; i++){

        if (parametroCalcularPequeño > listaDeNumeros[i]){
            numeroMasPequeño = listaDeNumeros[i];
            parametroCalcularPequeño--;
        };

    };

    resultadoPequeño.innerText = `El número más pequeño es: ${numeroMasPequeño}`;

    return false;
}; 

const botonMayor = document.querySelector (".formulario__calcular__grande");

botonMayor.onclick = function (){
    let numeroMasGrande = 0;

    let parametroCalcularGrande = listaDeNumeros.length;

    for(let i = 0; i < listaDeNumeros.length; i++){

        if (parametroCalcularGrande < listaDeNumeros[i]){
            numeroMasGrande = listaDeNumeros[i];
            parametroCalcularGrande = listaDeNumeros[i]
        };

    };

    resultadoMayor.innerText = `El número más grande es: ${numeroMasGrande}`;

    return false;
};

const respuestaNumeroFrecuente = document.querySelector (".formulario__calcular__frecuente");

respuestaNumeroFrecuente.onclick = function (){
    let numeroFrecuente = 0;

    let parametroCalcularFrecuente = listaDeNumeros.length;

    for (let i = 0; i < listaDeNumeros.length; i++){

        if (parametroCalcularFrecuente < listaDeNumeros[i]){
            numeroFrecuente = listaDeNumeros[i];
        };
    };

    resultadoNumeroFrecuente.innerText = `El número más frecuente es: ${numeroFrecuente}`;

    return false;
};

const botonReinicio = document.querySelector (".formulario__limpiar-resultados");

botonReinicio.onclick = function(){
    resultadoPromedio.innerText = "";
    resultadoPequeño .innerText = "";
    resultadoMayor.innerText = "";
    resultadoNumeroFrecuente .innerText = "";
};
