//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
	var iteraciones=7;
	var importe;
	var menor=Number.MAX_VALUE;
	var mayor=0;

	while(contador<iteraciones)
	{
		contador++;

		importe=prompt("Ingrese importe");
		importe=parseInt(importe);

		while(importe<0)
		{
			importe=prompt("Ingrese importe");
			importe=parseInt(importe);
		}
		
		if(importe<menor)
		{
			menor=importe;
		}
		if(importe>mayor)
		{
			mayor=importe;
		}

	}

	alert("El mayor importe fue: "+mayor);
	alert("El menor importe fue: "+menor);
}

