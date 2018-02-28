//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador=0;
	var respuesta="";
	var peso;
	var temperatura;
	var animal;
	var pares=0;
	var impares=0;
	var maxPeso;
	var minPeso;
	var nombreMax;
	var nombreMin;
	var contadorBajaTem=0;
	var acumuladorPeso=0;
	var promedioPeso;
	var temMax=-41;
	var temMin=41;

	while(respuesta!="no")
	{
		contador++;

		nombre=prompt("Ingrese nombre");
		peso=prompt("Ingrese peso");
		peso=parseInt(peso);
		while(peso<1 || isNaN(peso))
		{
			peso=prompt("Ingrese peso");
			peso=parseInt(peso);
		}
		acumuladorPeso=acumuladorPeso+peso;

		temperatura=prompt("Ingrese temperatura en 40 y -40");
		temperatura=parseInt(temperatura);
		while(temperatura<-40 || temperatura>40 || isNaN(temperatura))
		{
			temperatura=prompt("Ingrese temperatura en 40 y -40");
			temperatura=parseInt(temperatura);
		}
		if(temperatura%2==0 && temperatura!=0)
		{
			pares++;
		}
		if(temperatura%2==1 && temperatura!=0)
		{
			impares++;
		}

		if(contador==1)
		{
			maxPeso=peso;
			minPeso=peso;
			nombreMax=nombre;
			nombreMin=nombre;
			temMax=temperatura;
			temMin=temperatura;
		}
		else
		{
			if(peso>maxPeso)
			{
				maxPeso=peso;
				nombreMax=nombre;
			}
			if(peso<minPeso)
			{
				minPeso=peso;
				nombreMin=nombre;
			}
		}

		if(temperatura<=0)
		{
			contadorBajaTem++;
		}

		if(temperatura>temMax)
		{
			temMax=temperatura;
		}
		if(temperatura<temMin)
		{
			temMin=temperatura;
		}


		respuesta=prompt("Ingrese no para detener");
	}

	promedioPeso=acumuladorPeso/contador;

	alert("La cantidad de temperaturas pares es: "+pares);
	alert("La cantidad de temperaturas impares es: "+impares);
	alert("El animal màs pesado es: "+nombreMax);
	alert("El animal menos pesado es: "+nombreMin);
	alert("La cantidad de animales que vives en habitats con temperaturas menos a 0 son: "+contadorBajaTem);
	alert("El promedio del peso de todos los animales es: "+promedioPeso);
	alert("La temperatura máxima es: "+temMax+" y la mínima es: "+temMin);
}
/*
Se ingresa hasta que el usuario quiera
el nombre de un animal
El peso de el mismo
Validar que sea mayor a 0
Y la temperatura del habitat de este animal
Validar entre -40 y 40
Informar la cantidad de temperaturas pares, la cantidad de impares
El nombre del animal màs pesado
El nombres del animal menos pesado.
La cantidad de animales que viven en habitats menores a 0 inclusive
El promedio de el peso de todos los animales
La tem max y min
*/