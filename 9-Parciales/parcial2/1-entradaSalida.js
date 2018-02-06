	//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ladoa;
	var ladob;
	var ladoc;
	var perimetro;

	ladoa=document.getElementById('lado').value;
	ladob=ladoa;
	ladoc=ladob;
	perimetro=parseInt(ladoa) + parseInt(ladob) + parseInt(ladoc);

	alert("El perimetro es: "+perimetro);
	
}

