function Mostrar()
{
	var peso;
	var iteraciones=50;
	var contador=0;
	var masPesado=0;
	var menosPesado=999999;

	while(contador<iteraciones)
	{
		contador++;

		peso=prompt("Ingrese peso:");
		peso=parseInt(peso);
		while(peso<1)
		{
		peso=prompt("Ingrese peso mayor a 0:");			
		peso=parseInt(peso);
		}
		
		if(peso<menosPesado)
		{
			menosPesado=peso;
		}
		if(peso>masPesado)
		{
			masPesado=peso;
		}

	}

	alert("El más pesado fue: "+masPesado);
	alert("El menos pesado fue: "+menosPesado);
}
