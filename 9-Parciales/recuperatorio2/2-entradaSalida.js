//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var resultado;

	importe=prompt("Ingrese importe");
	resultado=importe*1.21;

	document.getElementById('importe').value=resultado;
}

