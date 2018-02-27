function Mostrar()
{
	var numeroUno;
	var numeroDos;

	numeroUno=prompt("Ingrese primer numero:");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("Ingrese segundo numero:");
	numeroDos=parseInt(numeroDos);

	if(numeroUno+numeroDos==0)
	{
		document.write("<br>La suma es 0");
	}
	else
	{
		if(numeroUno+numeroDos>0)
		{
			document.write("<br>La suma da un número positivo");
		}
		else
		{
			document.write("<br>La suma da un número negativo");
		}
	}
}
