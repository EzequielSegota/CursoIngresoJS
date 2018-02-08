function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var resultado;

	largo=document.getElementById('largo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	perimetro=largo+largo+ancho+ancho
	resultado=perimetro*3

	alert("Los metros de alambre que se necesitan son: "+resultado);
}
