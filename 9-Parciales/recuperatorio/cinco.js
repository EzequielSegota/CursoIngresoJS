function Mostrar()
{
	var mes;

	mes=prompt("Ingrese mes:");

	switch(mes)
	{
		case "Enero":
			alert("Comienza el año");
			break;

		case "Diciembre":
			alert("Se vienen las fiestas");
			break;

		default:
			alert("no es enero, ni diciembre");
	}
}
