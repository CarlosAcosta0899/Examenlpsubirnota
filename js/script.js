var fecha = document.getElementById("fecha");
var cliente = document.getElementById("cliente");
var producto = document.getElementById("producto");
var precio = document.getElementById("precio");
var cantidad = document.getElementById("cantidad");
var i = 0;
var filita = "";
var estado = 0;
function agregar(){  
    if(estado==0){
        alert("save");
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");
    var fila = document.createElement("tr");
    var celda_fecha = document.createElement("td");
    celda_fecha.innerHTML=fecha.value;

    var celda_cliente = document.createElement("td");
    celda_cliente.innerHTML=cliente.value;

    var celda_producto = document.createElement("td");
    celda_producto.innerHTML=producto.value;

    var celda_precio = document.createElement("td");
    celda_precio.innerHTML=precio.value;

    var celda_cantidad = document.createElement("td");
    celda_cantidad.innerHTML=cantidad.value;
   


    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<a href='#' class='icono2' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";

    fila.appendChild(celda_fecha);
    fila.appendChild(celda_cliente);
    fila.appendChild(celda_producto);
    fila.appendChild(celda_precio);
    fila.appendChild(celda_cantidad);
    fila.appendChild(celda_accion);    
    tbody.appendChild(fila);
    table.appendChild(tbody);
    limpiar();
    i+=1;
    }else{
        alert("editar");
        filita.cells[0].innerHTML = fecha.value;
        filita.cells[1].innerHTML = cliente.value;
        filita.cells[2].innerHTML = producto.value;
        filita.cells[3].innerHTML = precio.value;
        filita.cells[4].innerHTML = cantidad.value;
        filita = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    fecha.value="";
    cliente.value="";
    producto.value="";
    precio.value="";
    cantidad.value="";
    fecha.focus();
}
function editar(row){
    filita = row.parentNode.parentNode;  
    fecha.value = filita.cells[0].innerHTML;
    cliente.value = filita.cells[1].innerHTML;
    producto.value = filita.cells[2].innerHTML;
    precio.value = filita.cells[3].innerHTML;
    cantidad.value = filita.cells[4].innerHTML;
    estado = 1;
}
function eliminar(row){
    var fil = row.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}

