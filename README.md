# Algoritmos Java Script
<h1 align="center"> Descripción de los algoritmos.. </h1>

<p align="center">
  <img src="https://img.shields.io/badge/TECNOLOGÍA-%20JavaScript-green">
</p>
<h4 align="center">
:construction: Características y descripción del primer algoritmo: algoritmo_1.js :construction:
</h4>

- `Funcionalidad 1:`: Se necesitaba escribir una función que tomara una cadena de paréntesis y determinara si el orden era el correcto.-
- `Funcionalidad 2:`: La función retornará "true" si el orden de los paréntesis es correcto, sino retornará false.-

Ejemplo de retorno dentro de la función solicitada:

```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

Función inicial a modificar:

```
function validParentheses(parens) {
  // your code here ..
  return false;
}
```

<h4 align="center">
:construction: Características y descripción del segundo algoritmo: algoritmo_2.js :construction:
</h4>

- `Funcionalidad 1:`: Se necesita construir una función que nos retorne duración en lenguaje amigable para el humano dados los segundos enviados.-
- `Funcionalidad 2:`: Se debe recordar que los días son igual a 24 horas y los años son 365 días.-
- `Funcionalidad 3:`: El resultado se debe mostrar en años, días, horas, minutos.-
- `Funcionalidad 4:`: Se deben respetar espacios en la lógica del resultado, si no existe año, día, minuto u hora no se debe mostrar el resultado para esa situación.-
- `Funcionalidad 5:`: Se debe separar con "," si hay más elementos de formato de hora y antes del último elemento si es que hay más de uno, con un "and".-

Ejemplo de retorno dentro de la función solicitada:

```
- For seconds = 62, your function should return
"1 minute and 2 seconds"

- For seconds = 3662, your function should return
"1 hour, 1 minute and 2 seconds"
```

Función inicial a modificar:

```
function formatDuration (seconds) {
  // Complete this function
}
```
<h4 align="center">
:construction: Características y descripción del segundo algoritmo: algoritmo_3.js :construction:
</h4>

- `Funcionalidad 1:`: Se desea un algoritmo de recursión simple donde se necesita conocer en qué momento una opción es mejor que la otra dados tres parámetros.-

Ejemplo de retorno dentro de la función solicitada:

```
System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

movie(500, 15, 0.9) should return 43
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24
    (with card the total price is 235, with tickets 240)


```

Función inicial a modificar:

```
function movie(card, ticket, perc) {
    // your code
};
```

