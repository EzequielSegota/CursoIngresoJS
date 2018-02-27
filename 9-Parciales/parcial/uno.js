/*
	Pedir altura por prompt de un triangulo equilatero y informar altura y superficie



*/
function Mostrar()
{
	/*var Base;
	var Perimetro;

	Base=document.getElementById('laBase').value;

	Perimetro=Base*4;

	alert ("El perimetro es "+Perimetro);*/

	var altura;
	var superficie;
	var lado;


	altura=prompt("Ingrese altura del triangulo:");
	altura=parseInt(altura);

	lado=altura+(lado/2)

	alert("La altura es: "+altura+"y la superficie es: "+lado);

}