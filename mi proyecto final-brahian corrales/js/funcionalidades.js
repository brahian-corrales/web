
function runMyFunction(){
	alert("esta es la alerta mi funcion");
}

function agregaralcarrito(nombreproducto, precio){
	alert(nombreproducto);
	var divnuevo = document.createElement("div");
	var nombreproducto = document.createTextNode(nombreproducto);
	divnuevo.appendChild(nombreproducto);
    document.getElementById("cuerpo").appendChild(divnuevo);
}