/* 
	Pedir:
	1.Cantidad de alumnos sin saber limite
	3.Edad de alumno.Verificar.
	4.Nota de alumno.Verificar
	6.Cantidad de alumnos aprobados, desaprobados
	7-Promedio de alumnos aprobados, desaprobados
	8-Promedio de notas
	9.Cantidad de hombres y mujeres.
	10-Cantidad de hombres (11)mujeres que tienen que recursar
	12-Promedio de mujeres que tienen que recursar
	13-Promedio de hombres que tienen que recursar
	14-Sexo y Edad del menor de edad
	15-Sexo y Edad del mayor de edad
	17-Cantidad de ceros
*/
function Mostrar()
{
	/*var alumnos;
	var contadorDeAlumnos=0;
	var respuesta="si";

	var edad;

	var notaAlumno;

	var contadorAprobado=0;
	var contadorDesaprobado=0;

	var promedioAprobados;
	var promedioDesaprobados;

	var acumuladorNota=0;
	var promedioNotas;

	var sexo;
	var contadorMujeres=0;
	var contadorHombres=0;

	var hombresARecursar=0;
	var mujeresARecursar=0;

	var promedioMujeresRecursar;
	var promedioHombresRecursar;

	var menorEdad=101;
	var sexoMenor;
	var mayorEdad=0;
	var sexoMayor;

	var contadorCeros=0;

	while(respuesta!="no")
	{
		contadorDeAlumnos++;
		alumnos=prompt("Ingrese nombre de alumno");

		edad=prompt("Ingrese la edad: ");
		edad=parseInt(edad);

		while(edad>100 || edad<0)
		{
			edad=prompt("Error ingrese la edad: ");
			edad=parseInt(edad);
		}

		nota=prompt("Ingrese nota de alumno");
		nota=parseInt(nota);

		while(nota<0 || nota>10)
		{
			nota=prompt("Error ingrese nota de alumno");
			nota=parseInt(nota);
		}
		acumuladorNota=acumuladorNota+nota;

		if(nota=0)
		{
			contadorCeros++;
		}
		else
		{
			if(nota>3)
			{
				contadorAprobado++;
			}
			else
			{
				contadorDesaprobado++;
			}
		}
		sexo=prompt("Ingrese sexo F ó M:");

		while(sexo!="F" && sexo!="M")
		{
			sexo=prompt("Error, intente con F ó M:")
		}

		if(sexo=="F")
		{
			contadorMujeres++;
		}
		else
		{
			contadorHombres++;
		}

		if(sexo=="F" && nota<4)
		{
			mujeresARecursar++;
		}
		if(sexo=="M" && nota<4)
		{
			hombresARecursar++;
		}

		if(edad>mayorEdad)
		{
			mayorEdad=edad;
			sexoMayor=sexo;
		}
		if(edad<menorEdad)
		{
			menorEdad=edad;
			sexoMenor=sexo;
		}

		respuesta=prompt("Ingrese no para detener");
	}
	document.write("<br>La Cantidad de alumnos es: "+contadorDeAlumnos);

	document.write("<br>Cantidad de alumnos aprobados: "+contadorAprobado);

	document.write("<br>Cantidad de alumnos desaprobados: "+contadorDesaprobado);

	promedioAprobados=contadorAprobado/contadorDeAlumnos;
	document.write("<br>Promedio de alumnos aprobados es: "+promedioAprobados);

	promedioDesaprobados=contadorDesaprobado/contadorDeAlumnos;
	document.write("<br>Promedio de alumnos desaprobados es: "+promedioDesaprobados);

	promedioNotas=acumuladorNota/contadorDeAlumnos;
	document.write("<br>Promedio de notas: "+promedioNotas);

	document.write("<br>Cantidad de mujeres: "+contadorMujeres);
	document.write("<br>Cantidad de hombres: "+contadorHombres);

	document.write("<br>Mujeres a recursar: "+mujeresARecursar);
	document.write("<br>Hombres a recursar: "+hombresARecursar);

	promedioMujeresRecursar=contadorDeAlumnos/mujeresARecursar;
	document.write("<br>El promedio de mujeres a recursar es: "+promedioMujeresRecursar);

	promedioHombresRecursar=contadorDeAlumnos/hombresARecursar;
	document.write("<br>El promedio de hombres a recursar es: "+promedioHombresRecursar);

	document.write("<br>El sexo del menor de edad es:"+sexoMenor+"<br>Y el del mayor es: "+sexoMayor);

	document.write("<br>Cantidad de ceros: "+contadorCeros);*/

	var numerosPositivos;
	var contadorPositivos=0;
	var respuesta="";
	var contadorPares=0;
	var acumuladorPositivos=0
	var promedioPositivos;
	var max=0;
	var min= Number.MAX_VALUE
	
	while(respuesta!="no")
	{
		numerosPositivos=prompt("Ingrese numero positivo:");
		numerosPositivos=parseInt(numerosPositivos);

		while(numerosPositivos<1)
		{
			numerosPositivos=prompt("Ingrese numero positivo:");
			numerosPositivos=parseInt(numerosPositivos);

		}
		contadorPositivos++;
		acumuladorPositivos=acumuladorPositivos+numerosPositivos

		if(numerosPositivos%2==0)
		{
			contadorPares++;
		}

		if(numerosPositivos<min)
		{
			min=numerosPositivos;
		}
		if(numerosPositivos>max)
		{
			max=numerosPositivos;
		}

		respuesta=prompt("Ingrese no para detener");
	}
	document.write("<br>La cantidad de números pares es: "+contadorPares);

	promedioPositivos=acumuladorPositivos/contadorPositivos;
	document.write("<br>El promedio de números es: "+promedioPositivos);

	document.write("<br>La suma de todos los números es: "+acumuladorPositivos);

	document.write("<br>El mayor número fue: "+max);
	document.write("<br>El menor número fue: "+min);

}
