/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var numero1;
	var numero2;
	var numero3;
	var sumar;

	numero1=document.getElementById('PrecioUno').value;
	numero2=document.getElementById('PrecioDos').value;
	numero3=document.getElementById('PrecioTres').value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);
	sumar=numero1+numero2+numero3;

	alert("La suma es: "+sumar);
}
function Promedio () 
{
	var numero1;
	var numero2;
	var numero3;
	var sumar;
	var promedio;

	numero1=document.getElementById('PrecioUno').value;
	numero2=document.getElementById('PrecioDos').value;
	numero3=document.getElementById('PrecioTres').value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);
	sumar=numero1+numero2+numero3;
	promedio=sumar/3;
	
	alert("El promedio es: "+promedio);
}
function PrecioFinal () 
{
	var numero1;
	var numero2;
	var numero3;
	var sumar;
	var preciofinal;

	numero1=document.getElementById('PrecioUno').value;
	numero2=document.getElementById('PrecioDos').value;
	numero3=document.getElementById('PrecioTres').value;
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	numero3=parseInt(numero3);
	sumar=numero1+numero2+numero3;
	preciofinal=sumar*1.21;

	alert("El precio final es: "+preciofinal)
}