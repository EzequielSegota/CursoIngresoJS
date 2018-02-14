function Mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad>18 && estadoCivil=="Soltero")
		{
		alert("Es soltero y no es menor.");
		}
	if(edad<18 && estadoCivil!="Soltero")
		{
			console.log("NO HACER NADA");
		}
		//Console.log muestra un mensaje en la consola, console.info nos muestra informaciòn de una variable seleccionada ejemplo:console.info(variable);
}//FIN DE LA FUNCIÓN