function Mostrar()
{
	/*var importe;
	var contador=0;
	var iteraciones=24;
	var importeMaximo=0;
	var importeMinimo=0;
	

	while(contador<iteraciones)
	{
		contador++;
		importe=prompt("Ingrese importe");
		
		if(importe<=0)
		{
			alert("Numero no valido");
			continue;
		}
		else
		{
			if(importe>importeMaximo)
				{
					importeMaximo=importe;
				}
			else(importe<importeMinimo)
				{
					importeMinimo=importe;
				}
		}
	}
	importe=document.getElementById('importeFinal');
	*/
	var respuesta="";
	var numeros;
	var contadorPares=0;
	var contadorImpares=0;
	var contadorCeros=0;

	var contadorPositivos=0;
	var acumuladorPositivos=0;
	var promedioPositivos;

	var max=-51;
	var min=51;

	while(respuesta !="no")
	{
		numeros=prompt("Ingrese numero entre -50 y 50");
		numeros=parseInt(numeros);

		if(numeros<-50 || numeros>50 || isNan(numeros))
		{
			numeros=prompt("Error, ingrese numero entre -50 y 50");
			numeros=parseInt(numeros);
		}
		
		if(numeros==0)
		{
			contadorCeros++;
		}
		else
		{
			if(numeros%2==0)
			{
				contadorPares++;
			}
			else
			{
				contadorImpares++;
			}
		}
		
		if(numeros>0)
		{
			contadorPositivos++;
			acumuladorPositivos=acumuladorPositivos+numeros;
		}
		respuesta=prompt("Ingrese no para detenerse");


		if(numeros>max)
		{
			max=numeros;
		}
		if(numeros<min)
		{
			min=numeros;
		}
	}

		alert("La cantidad de pares es: "+contadorPares);
		alert("La cantidad de impares es: "+contadorImpares);

		promedioPositivos=acumuladorPositivos/contadorPositivos;
		alert("El promedio de positivos es: "+promedioPositivos);

		alert("El minimo es: "+min);
		alert("El maximo es: "+max);
}
//Ingresar numeros hasta que el cliente quiera
// numeros entre -50 y 50 incluidos y validados
// informar pares e impares que hay y promedio de positivos además de máx y mínimo