function Mostrar()
{
  /*var importe;
  var importeFinal;

  importe=prompt("Ingrese importe");
  importeFinal=importe*1.21
  document.getElementById('importeFinal').value=importeFinal;*/

	var precio;
	var porcentaDescuento;
	var resultado;

	precio=prompt("Ingrese precio: ");
	precio=parseInt(precio);
	porcentaDescuento=prompt("Ingrese porcentaje de descuento: ");


	resultado=(precio*porcentaDescuento)/100;

	importe=precio-resultado

	document.getElementById("importeFinal").value=importe;
}


//Mostrar importe final, pedir precio y porcentaje de descuento