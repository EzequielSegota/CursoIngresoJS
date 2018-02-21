function Mostrar()
{
	var contador=0
	var iteraciones=10
	var contadorDePares=0;
	var contadorDeImpares=0;
	var contadorDeCeros=0;
	var contadorDePositivos=0;
	var contadorDeNegativos=0;

	for(contador=-10;contador<iteraciones;contador++)
	{
		document.write("<br>"+contador);
		if (contador==0)
		{
			contadorDeCeros++;
		}
		else
		{
			if(contador<0)
			{
				contadorDeNegativos++;
			}
			if(contador>0)
			{
				contadorDePositivos++;
			}
			if(contador%2==0)
			{
				contadorDePares++;
			}
			else
			{
			contadorDeImpares++;
			}
		}
		
		
	}
		//document.write("<br>"+contador);		
		document.write("<br> cantidad de pares: "+contadorDePares);
		document.write("<br> cantidad de impares: "+contadorDeImpares);
		document.write("<br> cantidad de ceros: "+contadorDeCeros);
		document.write("<br> cantidad de positivos: "+contadorDePositivos);
		document.write("<br> cantidad de negativos: "+contadorDeNegativos);
}
