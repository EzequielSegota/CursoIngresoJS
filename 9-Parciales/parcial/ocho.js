/*Ingreso de alumnos
No sabemos cuantos alumnos hay
pedimos el nombre
¿cuantos alumnos ingrese?
document.write se ingresaron x alumnos
*/
function Mostrar()
{
	var ingresarAlumnos=""
	var alumnos;
	var cantidadDeAlumnos=0;
	var nota;
	var acumuladorDeNota=0;
	var promedio;
	var sexo;
	var contadorMasculino=0;
	var contadorFemenino=0;
	var hombresDesaprobados=0;
	var mejorNota=0;
	var nombreMaxNota;
	var notaMujeres=0;
	var promedioNotaMujeres;
	var menorEdad=0;
	var edad=0;
	var sexoMenorDeEdad;
	var edadesAprobados=0;
	var promedioEdadDeAprobados;
	var cantidadDeAlumnosAprobados=0;
	var notasPares=0;
	var notasImpares=0;


	while(ingresarAlumnos != "no")
	{
		alumnos=prompt("Ingrese nombre: ");
		cantidadDeAlumnos++;
		
		nota=prompt("Ingrese nota: ");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("Ingrese nota: ");
			nota=parseInt(nota);
		}
		
		sexo=prompt("Ingrese sexo F ó M");

		while(sexo !="F" && sexo != "M")
		{
			sexo=prompt("Ingrese sexo F ó M");
		}
		if(sexo=="F")
		{
			contadorFemenino++;
			notaMujeres=notaMujeres+nota;
		}
		else
		{
			contadorMasculino++;
		}
		
		edad=prompt("Ingrese edad");

		while(edad<0 || edad>100)
		{
			edad=prompt("Ingrese edad");
		}


		if(sexo=="M" && nota<4)
		{
			hombresDesaprobados++;
		}
		
		if(nota>mejorNota)
		{
			mejorNota=nota;
			nombreMaxNota=alumnos;
		}
		
		if(menorEdad>edad)
		{
			menorEdad=edad;
			sexoMenorDeEdad=sexo
		}

		if(nota>3)
		{
			cantidadDeAlumnosAprobados++;
			edadesAprobados=edadesAprobados+edad;
		}

		if(nota%2==0)
		{
			notasPares++;
		}
		else
		{
			notasImpares++;
		}

		acumuladorDeNota=acumuladorDeNota+nota;

		ingresarAlumnos=prompt("ingrese no para salir");
	}
	document.write("<br>Son "+cantidadDeAlumnos+" alumnos");
	promedio=acumuladorDeNota/cantidadDeAlumnos;
	document.write("<br>El promedio es: "+promedio);
	document.write("<br>La cantidad de mujeres: "+contadorFemenino);
	document.write("<br>La cantidad de hombres es: "+contadorMasculino);
	document.write("<br>Los cantidad de hombres desaprobados es: "+hombresDesaprobados);
	document.write("<br>La mejor nota es de: "+nombreMaxNota);
	promedioNotaMujeres=notaMujeres/contadorFemenino;
	document.write("<br>El promedio de notas femeninas es: "+promedioNotaMujeres);
	document.write("<br>El sexo del menor de edad es: "+sexoMenorDeEdad);
	promedioEdadDeAprobados=edadesAprobados/cantidadDeAlumnosAprobados;
	document.write("<br>El promedio de las edades de los alumnos aprobados es: "+promedioEdadDeAprobados);
	document.write("<br>Cantidad de notas pares es: "+notasPares);
	document.write("<br>Cantidad de notas impares es: "+notasImpares);
}
