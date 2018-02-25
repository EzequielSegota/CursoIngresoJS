function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var acumuladorDeNegativos=0;
	var cantidadNegativos=0;
	var acumuladorDePositivos=0;
	var cantidadPositivos=0;
	var cantidadDeCeros=0;
	var cantidadDePares=0;
	var promedioNegativos;
	var promedioPositivos;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;

		acumulador=prompt("ingrese número");
		acumulador=parseInt(acumulador);

		if(acumulador==0)
		{
			cantidadDeCeros++;
		}
		else
		{
			if(acumulador>0)
			{
				cantidadPositivos++;
				acumuladorDePositivos=acumuladorDePositivos+acumulador;
			}
			else
			{
				cantidadNegativos++;
				acumuladorDeNegativos=acumuladorDeNegativos+acumulador;
			}
		}

		if(acumulador%2==0)
		{
			cantidadDePares++;
		}



		respuesta=prompt("Ingrese no para detener");
	}
	promedioNegativos=acumuladorDeNegativos/cantidadNegativos;
	pomedioPositivos=acumuladorDePositivos/cantidadPositivos;
	document.write("<br>La cantidad de ceros es: "+cantidadDeCeros);
	document.write("<br>La suma de negativos es: "+acumuladorDeNegativos);
	document.write("<br>La suma de positivos es: "+acumuladorDePositivos);
	document.write("<br>La cantidad de negativos es: "+cantidadNegativos);
	document.write("<br>La cantidad de positivos es: "+cantidadPositivos);
	document.write("<br>La cantidad de pares es: "+cantidadDePares);
	document.write("<br>Promedio de negativos: "+promedioNegativos);
	document.write("<br>Promedio de positivos: "+pomedioPositivos);



}//FIN DE LA FUNCIÓN