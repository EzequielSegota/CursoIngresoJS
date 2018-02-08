/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var resta;
	var multiplicación;
	var resultado;

	temperatura=document.getElementById('Temperatura').value;
	resta=temperatura-32;
	multiplicación=resta*5;
	resultado=multiplicación/9

	alert(temperatura+" Fahrenheit son "+resultado+" Centígrados.");
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var multiplicación;
	var división;
	var resultado;

	temperatura=document.getElementById('Temperatura').value;
	multiplicación=temperatura*9;
	división=multiplicación/5;
	resultado=división+32;

	alert(temperatura+" Celsius son "+resultado+" Fahrenheit.");
}
