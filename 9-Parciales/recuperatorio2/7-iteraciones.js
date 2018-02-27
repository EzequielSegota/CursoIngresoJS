//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var iteraciones=6;
	var contador=0;
	var acumuladorNota=0;
	var promedioNotas;
	var notaMin=10;
	var contadorVaron=0;

	while(contador<iteraciones)
	{
		contador++;

		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("Ingrese nota");
			nota=parseInt(nota);
		}
		acumuladorNota=acumuladorNota+nota;

		sexo=prompt("Ingrese f ó m");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese f ó m");
		}

		if(nota<notaMin)
		{
			notaMin=nota;
		}

		if(nota>5 && sexo=="m")
		{
			contadorVaron++;
		}

	}

	promedioNotas=acumuladorNota/contador;
	alert("El promedio de las notas es: "+promedioNotas);

	alert("La nota más baja fue: "+notaMin);

	alert("La cantidad de varones con nota mayor o igual a 6 fue:"+contadorVaron);
}

