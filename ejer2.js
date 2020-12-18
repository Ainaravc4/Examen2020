function ejercicio2(arrayFechas,fechaInicio,fechaFin){
    var fechas=[];
    var options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    var inicio=new Date(fechaInicio);
    var fin=new Date(fechaFin);

    var devolver=[];
    for(arrayFecha of arrayFechas){
        let f=new Date(arrayFecha);
        fechas.push(f);
    }

    for(fecha of fechas){
        if(fecha > inicio && fecha <fin){
            devolver.push(fecha.toLocaleDateString("es-ES", options));
        }
    }
    return devolver;
}
console.log(ejercicio2(["01/03/2016","02/05/2019","02/08/2019","02/08/2018"],"01/01/2018","01/01/2020"));