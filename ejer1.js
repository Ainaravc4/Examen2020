function ejercicio1(parantesis){
    var arrayIz=[];
    var arrayDr=[];
    for (let i = 0; i < parantesis.length; i++) {
        if(parantesis[i]=="("){
            arrayIz.push(i);
        }
        if(parantesis[i]==")"){
            arrayDr.push(i);
        }
    }
    if(arrayDr.length===arrayIz.length){
        return true;
    }else{
        return false;
    }
}
console.log(ejercicio1(")(cccc)C(dsfdsf)("))