function convertirInputATiempo (tiempoTotal){

    let tiempoFinal = 0;

    for (let i = 0; i < tiempoTotal.length; i++){
        tiempoFinal += Number(tiempoTotal[i].value);
    };

    return tiempoFinal;
}

const $horas = document.querySelectorAll (".horasClases");
const $minutos = document.querySelectorAll (".minutosClases");
const $segundos = document.querySelectorAll (".segundosClases");

const $calcularTiempoTotal = document.querySelector (".botonCalcular");

const $respuestaFinal = document.querySelector (".respuesta__usuario");

$calcularTiempoTotal.onclick = function (){

    let horasTotales = convertirInputATiempo ($horas);
    let minutosTotales = convertirInputATiempo ($minutos);
    let segundosTotales = convertirInputATiempo ($segundos);

    while (minutosTotales >= 60){
        minutosTotales -= 60;
        horasTotales += 1;        
    };
    
    while (segundosTotales >= 60){
        segundosTotales -= 60;
        minutosTotales += 1;       
    };

    $respuestaFinal.innerText = `El total de tiempo de las clases es de ${horasTotales}:${minutosTotales}:${segundosTotales}`;

    return false;
};
