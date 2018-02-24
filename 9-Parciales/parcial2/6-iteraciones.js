//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeDeVentas;
	var iteraciones=7;
	var contador=0
	var importeMax=0;
	var importeMin=99999999999;


	while(contador<iteraciones)
	{
		contador++;
		importeDeVentas=prompt("Ingrese el importe");
		importeDeVentas=parseInt(importeDeVentas);
		while(importeDeVentas==0)
		{
			importeDeVentas=prompt("Ingrese el importe");
			importeDeVentas=parseInt(importeDeVentas);
		}
		if(importeDeVentas<importeMin)
		{
			importeMin=importeDeVentas;
		}
		if(importeDeVentas>importeMax)
		{
			importeMax=importeDeVentas;
		}
	}
	document.write("<br>El importe Maximo es: "+importeMax);
	document.write("<br >El importe Minimo es: "+importeMin);
}

