function Mostrar()
{
	for(contador=0;;contador++)
	{
		document.write("<br>"+contador);
		if(contador==10)
		{
			break;
		}
		if(contador==5)
		{
			continue;
		}
		document.write("Despues de continue");
	}
	document.write("Fin del for");
	

}