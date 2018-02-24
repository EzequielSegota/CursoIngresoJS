function Mostrar()
{
	var importe;
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
}
