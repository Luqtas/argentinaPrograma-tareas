const calcularIngresos = document.querySelector (".calcularIngresosPorMes");

const MESES_DEL_ANIO = 12;
const DIAS_DEL_MES = 30 - 8; // (Se restan los fines de semana)

calcularIngresos.onclick = function(){

    let resultadoIngresos;

    let ingresosAnuales = Number (document.querySelector (".sueldoAnualUsuario").value);

    resultadoIngresos = ingresosAnuales / MESES_DEL_ANIO;
 
    if (resultadoIngresos > 0){
        document.querySelector (".ingresoMensualUsuario").value = `Sueldo mensual de ${resultadoIngresos}`;
    }
    else{
        document.querySelector (".ingresoMensualUsuario").value = `Número inválido`;
    };

    return false;
};

const calcularIngresosPorAño = document.querySelector (".calcularIngresosPorAño");

calcularIngresosPorAño.onclick = function (){

    let resultadoIngresos;

    const ingresosMensuales = Number (document.querySelector (".sueldoPorMes").value);

    resultadoIngresos = ingresosMensuales * MESES_DEL_ANIO;

    if (resultadoIngresos > 0){
        document.querySelector (".IngresoAnual").value = `Sueldo anual de ${resultadoIngresos}`;
    }
    else{
        document.querySelector (".IngresoAnual").value = `Número inválido`;
    };

    return false;
};

const calcularIngresosDiarios = document.querySelector (".calcularIngresosPorDia");

calcularIngresosDiarios.onclick = function (){

    let resultadoIngresos;

    const ingresosMensuales = Number (document.querySelector (".sueldoPorMesDos").value);

    resultadoIngresos = ingresosMensuales / DIAS_DEL_MES;

    if (resultadoIngresos > 0){
        document.querySelector (".IngresoDiario").value = `Sueldo diario de ${resultadoIngresos}`;
    }
    else{
        document.querySelector (".IngresoDiario").value = `Número inválido`;
    };

    return false;
};
