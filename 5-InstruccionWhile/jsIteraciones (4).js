function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);

	while(!(numero>0 && numero<11))
	//while(numero<0 || numero>11)
	{
		numero = prompt("ingrese un número entre 0 y 10.");		
		numero=parseInt(numero);
	}
	numero=document.getElementById('Numero');

}//FIN DE LA FUNCIÓN