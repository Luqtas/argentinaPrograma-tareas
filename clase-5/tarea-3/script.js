function convertirInputATiempo (tiempoTotal){

    let tiempoFinal = 0;

    for (let i = 0; i < tiempoTotal.length; i++){
        tiempoFinal += Number(tiempoTotal[i].value);
    };

    return tiempoFinal;
}

const $horas = document.querySelectorAll (".calcular-tiempo__horas");
const $minutos = document.querySelectorAll (".calcular-tiempo__minutos");
const $segundos = document.querySelectorAll (".calcular-tiempo__segundos");

const $calcularTiempoTotal = document.querySelector (".contenedor-respuesta__boton-calcular");

const $respuestaFinal = document.querySelector (".contenedor-respuesta__respuesta-usuario");

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
