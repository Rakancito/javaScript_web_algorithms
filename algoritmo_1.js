/*
	Algoritmo 1.
	Autor: Roberto Cortes.
	
	Instrucciones:
		Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
		
	Ejemplos de uso:
		"()"              =>  true
		")(()))"          =>  false
		"("               =>  false
		"(())((()())())"  =>  true
		
	Código de ejemplo:
		function validParentheses(parens) {
		  // your code here ..
		  return false;
		}
		
	Funciones extra de control de excepciones:
		function validStringNoEmpty(string)
*/

/*
    Esta función es un extra para poder verificar si se ha enviado un null a la función, lo que nos regresaría un error en caso de ser así.
    Simplemente verifica que la cadena no se encuentre vacía y si está vacía, nos retornará un error.
*/

function validStringNoEmpty(string) {
	if (string.length === 0) {
		throw new Error('No ha enviado datos en la cadena.');
	}
}

function validParentheses(parens) {
	/*
		Fragmento de código que genera una excepción si la cadena enviada se encuentra vacía.
	*/
	try
	{
		validStringNoEmpty(parens);
	}
	catch(error)
	{
		console.error('Error:', error.message);
		return false;
	}
    
	// Contador que ocuparemos para revisar si existen delimitador que abre o cierra.
	counter = 0;
        
	/*
	Iniciamos ciclo for para recorrer la cadena como un conjunto de elementos array.
        
		index será el índice que nos indicará la posición en la que se encuentra dentro del conjunto de elementos.
		length nos indicará el tamaño de la caja "array"
            
		El punto del ciclo es contar la cantidad de ( que abren y la cantidad de ) que cierran.
            
		Si encuentra un parentesis que abre, sumará un valor al contador y si encuentra un parentesis que cierra, reducirá en uno el contador.
	*/
	for (let index = 0; index < parens.length; index++)
	{
		if (parens[index] == '(')
			counter++;
		else if (parens[index] == ')')
		{
			/* 
				Condición obligatoria, si el contador es  menor a 1 la entrada es falsa debido a que no hay paréntesis abierto que inicie al paréntesis que va a cerrar.
			*/
			if (counter == 0)
				return false;
			else
				counter--;
		}
	}
        
	/*
		Condición obligatoria: Si el contador es 0, significa que todos los paréntesis que abrieron y cerraron son los mismos y por lo tanto se encuentra equilibrado.
	*/
	if (counter == 0)
		return true;
        
	return false;
}

/*
	No usar en producción, solo es para pruebas.
*/
const parens = "(())((()())())"; 
console.log(validParentheses(parens));