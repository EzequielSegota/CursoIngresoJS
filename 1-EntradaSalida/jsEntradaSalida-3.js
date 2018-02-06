/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//alert("Esto anda")
	var nombre;
	nombre=document.getElementById('elNombre').value;
	//Recordar .value al final
	//document.getElementById extrae dato de HTML
	alert(nombre);
}


