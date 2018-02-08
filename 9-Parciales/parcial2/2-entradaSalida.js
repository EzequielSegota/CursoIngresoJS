//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var IVA;

	importe=prompt("Ingrese importe");

	IVA=importe*1.21;

	document.getElementById('importe').value=IVA;
}

