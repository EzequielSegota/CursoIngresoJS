//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var resta;
	var suma;

	numeroUno=prompt("Ingrese primer número");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Ingrese segundo número");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		multiplicacion=numeroUno*numeroDos;
		document.write("Los numeros eran iguales, la multiplicacion es: "+multiplicacion);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno - numeroDos;
			document.write("El primer número era mayor, la resta es: "+resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			document.write("El primer número era menor, la suma es: "+suma);
		}
	}
}

