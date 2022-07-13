const numerosLi = document.querySelectorAll (".item");

let listaDeNumeros = [];

for (let i = 0; i < numerosLi.length; i++){
    listaDeNumeros.push (Number (numerosLi[i].innerText));
};

const resultadoPromedio = document.querySelector (".respuesta-promedio");
const resultadoPequeño = document.querySelector (".respuesta-pequeño");
const resultadoMayor = document.querySelector (".respuesta-grande");
const resultadoNumeroFrecuente = document.querySelector (".respuesta-frecuente");

const botonPromedio = document.querySelector (".calcular__promedio");

botonPromedio.onclick = function(){
    let promedioDeLaLista = 0;

    for (let i = 0; i < listaDeNumeros.length; i++){
        promedioDeLaLista += listaDeNumeros[i];
    };

    resultadoPromedio.innerText = `El promedio de los números es de: ${promedioDeLaLista}`;

    return false;
};

const botonPequeño = document.querySelector (".calcular__pequeño");

botonPequeño.onclick = function (){
    let numeroMasPequeño = 0;

    let j = listaDeNumeros.length;

    for(let i = 0; i < listaDeNumeros.length; i++){

        if (j > listaDeNumeros[i]){
            numeroMasPequeño = listaDeNumeros[i];
            j--;
        };

    };

    resultadoPequeño.innerText = `El número más pequeño es: ${numeroMasPequeño}`;

    return false;
}; 

const botonMayor = document.querySelector (".calcular__grande");

botonMayor.onclick = function (){
    let numeroMasGrande = 0;

    let j = listaDeNumeros.length;

    for(let i = 0; i < listaDeNumeros.length; i++){

        if (j < listaDeNumeros[i]){
            numeroMasGrande = listaDeNumeros[i];
            j = listaDeNumeros[i]
        };

    };

    resultadoMayor.innerText = `El número más grande es: ${numeroMasGrande}`;

    return false;
};

const respuestaNumeroFrecuente = document.querySelector (".calcular__frecuente");

respuestaNumeroFrecuente.onclick = function (){
    let numeroFrecuente = 0;

    let j = listaDeNumeros.length;

    for (let i = 0; i < listaDeNumeros.length; i++){

        if (j < listaDeNumeros[i]){
            numeroFrecuente = listaDeNumeros[i];
        };
    };

    resultadoNumeroFrecuente.innerText = `El número más frecuente es: ${numeroFrecuente}`;

    return false;
};

const botonReinicio = document.querySelector (".limpiar-resultados");

botonReinicio.onclick = function(){
    resultadoPromedio.innerText = "";
    resultadoPequeño .innerText = "";
    resultadoMayor.innerText = "";
    resultadoNumeroFrecuente .innerText = "";
};
