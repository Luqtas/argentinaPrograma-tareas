const calcularIngresos = document.querySelector (".formulario-ingresos__calcular-ingresos-mes");

const MESES_DEL_ANIO = 12;


calcularIngresos.onclick = function(){

    let resultadoIngresos;

    let ingresosAnuales = Number (document.querySelector (".formulario-ingresos__sueldo-anual").value);

    resultadoIngresos = ingresosAnuales / MESES_DEL_ANIO;
 
    if (resultadoIngresos > 0){
        document.querySelector (".formulario-ingresos__ingreso-mensual").value = `Sueldo mensual de ${resultadoIngresos}`;
    }
    else{
        document.querySelector (".formulario-ingresos__ingreso-mensual").value = `Número inválido`;
    };

    return false;
};

const calcularIngresosPorAnio = document.querySelector (".formulario-ingresos__calcular-ingresos-anio");

calcularIngresosPorAnio.onclick = function (){

    let resultadoIngresos;

    const ingresosMensuales = Number (document.querySelector (".formulario-ingresos__sueldo-mensual").value);

    resultadoIngresos = ingresosMensuales * MESES_DEL_ANIO;

    if (resultadoIngresos > 0){
        document.querySelector (".formulario-ingresos__ingreso-anual").value = `Sueldo anual de ${resultadoIngresos}`;
    }
    else{
        document.querySelector (".formulario-ingresos__ingreso-anual").value = `Número inválido`;
    };

    return false;
};

const calcularIngresosDiarios = document.querySelector (".formulario-ingresos__calcular-ingresos-dia");

calcularIngresosDiarios.onclick = function (){

    const DIAS_DEL_MES = 30;
    const FINES_DE_SEMANA_EN_UN_MES = 8;

    let resultadoIngresos;

    const ingresosMensuales = Number (document.querySelector (".formulario-ingresos__sueldo-mes-dos").value);

    resultadoIngresos = ingresosMensuales / (DIAS_DEL_MES - FINES_DE_SEMANA_EN_UN_MES);

    if (resultadoIngresos > 0){
        document.querySelector (".formulario-ingresos__ingreso-diario").value = `Sueldo diario de ${resultadoIngresos}`;
    }
    else{
        document.querySelector (".formulario-ingresos__ingreso-diario").value = `Número inválido`;
    };

    return false;
};
