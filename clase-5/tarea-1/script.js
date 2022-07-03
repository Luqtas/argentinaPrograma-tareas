const calcularIngresos = document.querySelector (".calcularIngresos");

calcularIngresos.onclick = function(){

    let resultadoIngresos;

    let ingresosAnuales = Number (document.querySelector (".sueldoAnualUsuario").value);
    const mesesDelAnio = 12;

    resultadoIngresos = ingresosAnuales / mesesDelAnio;
 
    if (resultadoIngresos > 0){
        document.querySelector (".ingresoMensualUsuario").value = `Sueldo mensual de ${resultadoIngresos}`;
    }
    else{
        document.querySelector (".ingresoMensualUsuario").value = `Número inválido`;
    };

    return false;
};
