// ------------------ Operadores Aritméticos

// +, -, *, /, **, %

let a = 6;
let b = 2;

// Suma y Concatenación
console.log(a + b);
console.log(a + "2"); // Concatena en string
console.log(a + 2 + 5 + 10 + 100);

// Resta
console.log(a - b);

// Multiplicación
console.log(a * b);

// División
console.log(a / b);

// Potencia
console.log(a ** b);

// Resto
console.log(a % b);

// ------------------ Operadores de Comparación

// ==, ===, !=, !===, <, >, <=, >=

// = -> Con un sigo '=' asigno
let c = 5;
let cc = "5";
let d = 10;
let dd = "10";

// == -> Comparación debil (solo valor)
console.log(c == cc);

// === -> Comparación Fuerte (valor y tipo de dato)
console.log(c === cc);

// != -> Distinto
console.log(c != d);
console.log(c != cc);

// !== -> Distinto Estricto
console.log(c !== d);
console.log(c !== cc);

// < Menor que
console.log(c < d);

// > Mayor que
console.log(c > d);

// <= Menor igual que
console.log(5 <= 5);

// >= Mayor igual que
console.log(10 >= 10);

// ------------------ Operadores Lógicos

// &&. ||, !

let edadMinima = 18;
let edadMaxima = 35;
let edadUsuario = 33;

// && = 'y' (and)
console.log(!(edadUsuario > edadMinima) && edadUsuario < edadMaxima);

// || = 'o' (or)
console.log(edadUsuario > edadMinima || edadUsuario < edadMaxima);

// ! = 'not' (negación)
let verdadero = true;
console.log(!verdadero);
