//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var par;

	numeroUno=prompt("Ingrese el primer número: ");
	numeroDos=prompt("Ingrese el segundo número: ");

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno+numeroDos;
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno*numeroDos;
		}

		if(resultado%2==0 && resultado!=0)
		{
			resultado=resultado+" Es par";
		}

		if(numeroUno<numeroDos)
		{
			resultadoa=numeroUno - numeroDos;
		}
	}
	alert("El resultado es: "+resultado);
}

/*
No usar while y no validar
Solo if
Se ingresan 2 números
Si son iguales se concatenan
Si el mayor es el primero se multiplican
De lo contrario se restan
Si la multiplicaciòn es par alert "es par"
*/