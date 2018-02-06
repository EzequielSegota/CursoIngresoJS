/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var Numero1;
	var Numero2;
	var sumar

	Numero1=document.getElementById('numeroUno').value;
	Numero2=document.getElementById('numeroDos').value;
	sumar=(parseInt(Numero1) + parseInt(Numero2));

	alert("La suma de los numeros es: "+sumar );
}

