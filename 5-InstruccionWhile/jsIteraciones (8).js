function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo=positivo+numero;
		}
		else
		{
			if(numero<0)
				{
					negativo=negativo*numero;
				}
			else
				{
					alert("El número es cero");
				}	
		}
		respuesta=prompt("si=continuar");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN