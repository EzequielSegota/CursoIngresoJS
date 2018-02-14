function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor(Math.random() * 10) + 1;

	if(nota>8)
	{
		alert("EXCELENTE");
	}
	if(nota>3 && nota<9)
	{
		alert("APROBO");
	}
	if(nota<4)
	{
		alert("Vamos que se puede");
	}
}//FIN DE LA FUNCIÓN