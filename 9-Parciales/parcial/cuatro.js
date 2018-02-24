function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var suma;
	var resta;

	numeroUno=prompt("Ingrese 1er número: ");
	numeroDos=prompt("Ingrese 2do número: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		multiplicacion=numeroUno*numeroDos
		document.write("El resultado de la multiplicacion es: "+multiplicacion);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			document.write("El resultado de la resta es: "+resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			document.write("El resultado de la suma es: "+suma);
		}
	}	
}
