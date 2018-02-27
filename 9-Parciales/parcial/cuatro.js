function Mostrar()
{
	/*var numeroUno;
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
	}	*/
	var numeroUno;
	var numeroDos;
	var numeroTres;


	numeroUno=prompt("Ingrese el primer numero:");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese el segundo numero:");
	numeroDos=parseInt(numeroDos);
	numeroTres=prompt("Ingrese el tercer numero:");
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroDos && numeroUno>numeroTres)
	{
			alert("El mayor numero es: "+numeroUno);
	}
	else
	{
		if(numeroDos>numeroUno && numeroDos>numeroTres)
		{
			alert("El mayor numero es: "+numeroDos);
		}
		else
		{
			alert("El mayor numero es: "+numeroTres);
		}
	}

	if(numeroUno<numeroDos && numeroUno<numeroTres)
	{
		alert("El menor es: "+numeroUno);
	}
	else
	{
		if(numeroDos<numeroUno && numeroDos<numeroTres)
		{
			alert("El menor es: "+numeroDos);
		}
		else
		{
			alert("El menor es: "+numeroTres);
		}
	}


}

//no usar if
//ingreso 3 numeros muestro el promedio