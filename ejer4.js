function ejercicio4(nFilas, nColumnas, color, nodo){
    var tabla=document.createElement("table");
    tabla.style.border="1px solid black";
    tabla.style.width="10rem";
    tabla.style.height="10rem";
    document.getElementById(nodo).appendChild(tabla);
    for(let i=0;i<nFilas;i++){
        var fila=document.createElement("tr");
        fila.style.border="1px solid black"
        for(let j=0;j<nColumnas;j++){
            var columna=document.createElement("td");
            columna.style.border="1px solid black";
            let texto=llamarAlTexto();
            columna.textContent="Examen";
            columna.onclick=(e)=>{
                let celda=e.currentTarget;
                celda.textContent=" ";
            }
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }

    var impares = [...document.querySelectorAll("tr:nth-child(odd)")];
    for(par of impares){
        par.style.background = color;
    }     
        
    //guardar
    let arrayDatos=[{"nFilas": nFilas, "nColumnas":nColumnas, "color":color, "nodo":nodo}]
    localStorage.setItem("tabla", JSON.stringify(arrayDatos));    
    
}

window.onload=()=>{
    if (localStorage.getItem("tabla") != null){
            
        let arrayDatos = JSON.parse(localStorage.getItem("tabla"));
        
        for (var i=0;i<arrayDatos.length;i++){
            ejercicio4(arrayDatos[i].nColumnas,arrayDatos[i].nFilas,arrayDatos[i].color,arrayDatos[i].nodo);
        } 
    }
}

function llamarAlTexto() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             var texto=this.responseText;
            return texto;
            }
        }
    request.open("GET", "./textoEjercicio4.txt", true);
    request.send();
}
//ejercicio4(4,4,"red","tabla");