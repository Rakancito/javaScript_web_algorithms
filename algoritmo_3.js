/*
	Algoritmo 3.
	Autor: Roberto Cortes.
	
	Instrucciones:
		My friend John likes to go to the cinema. He can choose between system A and system B.

		System A : he buys a ticket (15 dollars) every time
		System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price,
		then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

		John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

		The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

		
	Ejemplos de uso:
		movie(500, 15, 0.9) should return 43
			(with card the total price is 634, with tickets 645)
		movie(100, 10, 0.95) should return 24
			(with card the total price is 235, with tickets 240)

		
	Código de ejemplo:
		function formatDuration (seconds) {
			// Complete this function
		}

*/

function movie(card, ticket, perc) {
	/*
		Declaramos todas las variables que vamos a ocupar como:
			price_A que será el precio si fuese solamente por tickets, es decir que es la opción A.
			price_b que será el precio si fuese por la tarjeta y los descuentos, es decir la opción B.
			counter será la cantidad de veces que ha ido a cinema.
	*/
    var price_A = 0, price_B = 0, counter = 0;
	
	/*
		Es importante que asignemos la opción B al valor total de la tarjeta, así nos aseguramos que nuestra recursión se realizará con éxito.
	*/
	price_B = card;
	
	/*
		Recursión: Repetiremos el siguiente procedimiento hasta que la opción B sea menor a la opción A.
			1. Sumaremos la ida al cinema, se encontraba en cero y de ahora en adelante se encontrará en valores superiores.
			2. Multiplicamos el precio de los ticket y la cantidad de veces que ha ido para conocer  cuánto saldrá el coste.
			3. Ahora simplemente debemos sumarle al precio de la tarjeta el precio de los ticket's elevado a la potencia del porcentaje y cantidad de veces que ha ido Jhon al cinema, así conoceremos el coste.
		
	*/
	while (price_B >= price_A)
	{
		counter++;
		
		price_A = ticket * counter;
		
		price_B = price_B + ticket * Math.pow(perc, counter)
	}
	
	/*
		Retornamos la cantidad de veces que Jhon debió ir al Cinema para que el coste de la tarjeta sea menor a la opción de ir únicamente por tickets, aunque en este caso colocamos un mensaje bonito para que lo tengamos en lenguaje humano y no solo retorne el número.
	*/
	return "You needs go to cinema: "+counter + " times (with card the total price is "+Math.round(price_B)+", with tickets "+price_A;
};

/*
	No usar en producción, solo es para pruebas.
*/
console.log(movie(500, 15, 0.9));