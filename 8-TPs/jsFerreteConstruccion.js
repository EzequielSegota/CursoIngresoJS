/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var suma;
	var resultado;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);

	suma=(largo+ancho)*2;
	resultado=suma*3;

	alert("La cantidad de alambre a comprar es: "+resultado);
}
function Circulo () 
{
	var radio;
	var perimetro;
	var resultado;

	radio=document.getElementById('Radio').value;
	perimetro=2*3.14*radio;

	resultado=perimetro*3;

	alert("La cantidad de alambre a comprar es: "+resultado);
}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	cemento=(largo+ancho)*2
	cal=(largo+ancho)*3

	alert("La cantidad de cemento es: "+cemento+" y la cantidad de cal es: "+cal)
}