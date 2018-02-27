//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var respuesta=""
	var contadorPares=0;
	var numeroPositivo;
	var acumulador=0;
	var promedioPositivos;
	var contadorNumeros=0;
	var numeroMax=0;
	var numeroMin=Number.MAX_VALUE;

	while(respuesta!="no")
	{
		contadorNumeros++;

		numeroPositivo=prompt("Ingrese un número positivo");
		numeroPositivo=parseInt(numeroPositivo);
		while(numeroPositivo<0)
		{
			numeroPositivo=prompt("Ingrese un número positivo");
			numeroPositivo=parseInt(numeroPositivo);
		}

		if(numeroPositivo%2==0)
		{
			contadorPares++;
		}

		acumulador=acumulador+numeroPositivo;

		if(numeroPositivo>numeroMax)
		{
			numeroMax=numeroPositivo;
		}
		if(numeroPositivo<numeroMin)
		{
			numeroMin=numeroPositivo;
		}

		respuesta=prompt("Ingrese no para detener");
	}

	promedioPositivos=acumulador/contadorNumeros;

	document.write("<br>La cantidad de pares es: "+contadorPares);

	document.write("<br>El promedio de positivos es: "+promedioPositivos);

	document.write("<br>La suma de todos los numeros ingresados es: "+acumulador);

	document.write("<br>El número máximo es: "+numeroMax+" y el mínimo es: "+numeroMin);
}

