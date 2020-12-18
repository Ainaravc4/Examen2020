function ejercicio3(...numeros){
    var arr=[...numeros];
    var total=1;

    for(a of arr){
        if(a!=0){
            total=(a*total);  
        }    
    }
    console.log(total);
}
ejercicio3(6,7,5,7);

