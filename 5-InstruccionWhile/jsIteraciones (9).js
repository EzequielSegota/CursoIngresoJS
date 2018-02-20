function Mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("Ingrese número");
		numero=parseInt(numero);
		
		if(contador==1)
		{
			maximo=minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			else
			{
				minimo=numero;
			}
		}
		respuesta=prompt("no=detener");
	}
	document.getElementById('maximo')=maximo;
	document.getElementById('minimo')=minimo;



}//FIN DE LA FUNCIÓN