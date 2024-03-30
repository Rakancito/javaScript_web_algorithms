/*
	Algoritmo 2.
	Autor: Roberto Cortes.
	
	Instrucciones:
		Your task is write a function which formats a duration, given as a number of seconds, in a human-friendly way.
		The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

		
	Ejemplos de uso:
		- For seconds = 62, your function should return
		"1 minute and 2 seconds"

		- For seconds = 3662, your function should return
		"1 hour, 1 minute and 2 seconds"
		
	Código de ejemplo:
		function formatDuration (seconds) {
			// Complete this function
		}

*/

function formatDuration (seconds) {

	/*
		CONTROL: non-negative values.
		...
		Control en caso de que tengamos el valores negativos, podríamos invocar la biblioteca para abs con valores absolutos, pero preferimos indicarle al usuario si el tiempo que ha colocado es negativo.
	*/

	if (Math.sign(seconds) == -1)
		return "Error!!, esta función solo permite valores positivos.";
	
	
	/*
		Declaramos los tiempos correspondientes por cada periodo de tiempo en segundos para años, días, horas, minutos y segundos.
	*/
	var timeFormat = {
		year : 3600*24*365,
		day : 3600*24,
		hour : 3600,
		minute : 60,
		second : 1,
	};
	
	/*
		En este pequeño arreglo guardaremos cada uno de los elementos que se encuentren dentro de nuestro formato de tiempo.
	*/
	var resultado = [];
	
	/*
		Control en caso de que tengamos el valor 0 que retornará el tiempo "now"
	*/
	if (seconds == 0)
		return "now";

	/*
		Vamos a recorrer nuestra lista de variables de la siguiente forma:
			Primero: Observaremos si los segundos que nos brindaron son mayores al primer elemento de nuestras variables dentro de nuestro diccionario, de lo contrario continuaremos con el siguiente elemento de la lista.
			Segundo: Dividiremos el valor de nuestro tiempo redondeandolo y lo guardaremos en una variable nueva llamada value.
			Tercero: Necesitamos ver si la variable value es mayor a uno, en caso de que sea así, simplemente vamos a agregar una s al tiempo para indicar plural y que no solo sea singular, ejemplo: año a años.
			Cuarto: Necesitamos guardar únicamente el resto de lo que nos queda del tiempo para poder continuar evaluando el tiempo con el resto de los elementos de la lista.
	*/
	for (var index in timeFormat) {
		if (seconds >= timeFormat[index]) {
			var value = Math.floor(seconds/timeFormat[index]);
			resultado.push(value += value > 1 ? " " + index + "s" : " " + index);
			seconds = seconds % timeFormat[index];
		}
	}
 
	/*
		Aquí simplemente vamos a regresar el resultado de lo que obtuvimos en las operaciones anteriores contemplando lo siguiente:
			1. Verificamos si nuestra lista de elementos es mayor a un elemento con el operador ternario o condicional y si es así agregaremos una , en cada uno de los elementos, además de que evaluaremos y con una expresión regular y en el penultimo elemento de la lista agregaremos un and.
			2. Si no encontramos más de un elemento de la lista, simplemente regresaremos el primer resultado que se almacenó.
	*/
	return resultado.length > 1 ? resultado.join(", ").replace(/,([^,]*)$/," and"+"$1") : resultado[0]
}

/*
	No usar en producción, solo es para pruebas.
*/
const seconds = 31598654
console.log(formatDuration(seconds));
