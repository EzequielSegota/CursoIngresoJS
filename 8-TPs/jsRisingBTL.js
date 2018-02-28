/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var numLegajo;
 	var nacionalidad;
 	var contadorLegajo=0;
 	var legajo;


 		edad=prompt("Ingrese edad");

 		while(edad<18 || edad>90 || isNaN(edad) || edad=="")
 		{
 			edad=prompt("Ingrese edad");
 		}

 		sexo=prompt("Ingrese sexo, F ó M:");
 		
 		while(sexo!="F" && sexo!="M")
 		{
 			sexo=prompt("Ingrese sexo, F ó M:");
 		}

 		estadoCivil=prompt("Ingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")

 		while(estadoCivil<1 || estadoCivil>4 && isNaN(estadoCivil) && estadoCivil=="")
 		{
 			 	estadoCivil=prompt("Ingrese estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
 		}

 		sueldoBruto=prompt("Ingrese sueldo bruto");

 		while(sueldoBruto<8000 || isNaN(sueldoBruto) || estadoCivil=="")
 		{
 			sueldoBruto=prompt("Ingrese sueldo bruto no menor a 8000");
 		}

 		numLegajo=prompt("Ingrese numero legajo:");
 		numLegajo=parseInt(numLegajo);

 		while(legajo>=1)
 		{
 			contadorLegajo++;
 			legajo=numLegajo/10;
 			numLegajo=parseInt(numLegajo);
 		}

 		while(numLegajo<1000 || numLegajo>9999 || contadorLegajo!=4 || isNaN(numLegajo) || numLegajo=="")
 		{
 			numLegajo=prompt("Ingrese numero legajo:");
 			numLegajo=parseInt(numLegajo);
 		}

 		nacionalidad=prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

 		while(nacionalidad!=isNaN(nacionalidad) && nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
 		{
 			nacionalidad=prompt("Ingrese nacionalidad: “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 		}

 	document.getElementById('Edad').value=edad;
 	document.getElementById('Sexo').value=sexo;
 	document.getElementById('EstadoCivil').value=estadoCivil;
 	document.getElementById('Sueldo').value=sueldoBruto;
 	document.getElementById('Legajo').value=numLegajo;
 	document.getElementById('Nacionalidad').value=nacionalidad;
}
