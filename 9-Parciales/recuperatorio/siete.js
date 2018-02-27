function Mostrar()
{
	var contador=0;
	var iteraciones=100;
	var edad;
	var sexo;

	var acumuladorEdad=0;
	var promedioEdad;

	var edadBaja=101;

	var contadorVaron=0;

	while(contador<iteraciones)
	{
		contador++;
		edad=prompt("Ingrese edad");
		edad=parseInt(edad);
		
		while(edad<0 || edad>100)
		{
			edad=prompt("Ingrese edad");
			edad=parseInt(edad);
		}
		acumuladorEdad=acumuladorEdad+edad;

		if(edad<edadBaja)
		{
			edadBaja=edad;
		}

		sexo=prompt("Ingrese f ó m");

		while(sexo!="f" && sexo!="m")
		{
		sexo=prompt("Ingrese f ó m");			
		}

		if(edad>=20 && sexo=="m")
		{
			contadorVaron++;
		}

	}
	promedioEdad=acumuladorEdad/contador;
	alert("El promedio de la edad es: "+promedioEdad);

	alert("La edad más baja es: "+edadBaja);

	alert("La cantidad de varones con edad mayor o igual a 20 son: "+contadorVaron);
}
