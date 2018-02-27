function Mostrar()
{
	var respuesta="";
	var letra;
	var numero;
	var numeroMax=-201;
	var numeroMin=201;
	var letraMin;
	var letraMax;

	var contadorA=0;
	var contadorE=0;
	var contadorI=0;
	var contadorO=0;
	var contadorU=0;

	var acumuladorA=0;
	var acumuladorE=0;
	var acumuladorI=0;
	var acumuladorO=0;
	var acumuladorU=0;

	var promedio;

	while(respuesta!="no")
	{
		letra=prompt("Ingrese letra");

		while(!(isNaN(letra)))
		{
			letra=prompt("Ingrese letra solamente");
		}

		numero=prompt("Ingrese numero entre -200 y 200");
		numero=parseInt(numero);
		while(numero<-200 || numero>200 || isNaN(numero))
		{
			numero=prompt("Ingrese un numero entre -200 y 200");
			numero=parseInt(numero);
		}

		if(numero<numeroMin)
		{
			numeroMin=numero;
			letraMin=letra;
		}
		if(numero>numeroMax)
		{
			numeroMax=numero;
			letraMax=letra;
		}

		switch(letra)
		{
			case "a":
				contadorA++;
				acumuladorA=acumuladorA+numero;
				break;
			case "e":
				contadorE++;
				acumuladorE=acumuladorE+numero;
				break;
			case "i":
				contadorI++;
				acumuladorI=acumuladorI+numero;
				break;
			case "o":
				contadorO++;
				acumuladorO=acumuladorO+numero;
				break;
			case "u":
				contadorU++;
				acumuladorU=acumuladorU+numero;
				break;
			
		}



		respuesta=prompt("Ingrese no para detener:");
	}

	alert("La letra del numero más bajo es: "+letraMin);

	promedio=(acumuladorA+acumuladorE+acumuladorI+acumuladorO+acumuladorU)/(contadorA+contadorE+contadorI+contadorO+contadorU);

	alert("El promedio de numeros por vocal es: "+promedio);

	alert("La letra del numero maximo es: "+letraMax);
}

//Pedir hasta que el cliente quiera (una letra-validar-no puede ser un número)
//Ingrear numeros entre -200 y 200 inclusive
//Mostrar letra del número más bajo
//El promedio de todos los números ingresas después de una vocal.
//Letra del max