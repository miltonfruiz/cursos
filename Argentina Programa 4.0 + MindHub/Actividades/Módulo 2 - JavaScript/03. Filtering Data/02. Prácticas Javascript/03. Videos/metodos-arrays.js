// Funciones de orden superior

//----------------------------------------------------

// forEach()
// No retorna nada y la iteración no se puede frenar

let nombres = ["Nick", "Taylor", "Kevin", "Selena"];
nombres.forEach((nombre) => console.log("Hola " + nombre));

// function saludar(nombre) {
//   return console.log("Hola " + nombre);
// }
// nombres.forEach(saludar);

//----------------------------------------------------

//Map()
// Retorna un nuevo array de igual cantidad de elementos
// Los elementos del nuevo array van a ser igual al return de la función

let numeros = [2, 6, 9, 10, 13, 21];
//console.log(numeros);

let numerosPorDos = numeros.map((numero) => numero * 2);
console.log(numeros);
console.log(numerosPorDos);

//----------------------------------------------------

//filter()
// Retorna un array con los elementos que cumplan la condición (category)

let numerosFilter = [2, 6, 9, 10, 13, 21];

let numerosFiltrados = numerosFilter.filter((numero) => numero >= 10);
console.log(numerosFiltrados);

//----------------------------------------------------

//find
//Retorna el primer elmento encontrado con esa condición

// findIndex
// Retorna el índice del elemento a buscar (details por id)

let personas = [
  { nombre: "Nick", edad: 24 },
  { nombre: "Taylo", edad: 27 },
  { nombre: "Kevin", edad: 31 },
  { nombre: "Selena", edad: 21 },
];

let numerosFind = [2, 6, 9, 10, 13, 21];

console.log(personas.find((persona) => persona.edad > 28));
console.log(numerosFind.find((numero) => numero == 15));
console.log(numerosFind.findIndex((numero) => numero >= 10));
console.log(numerosFind.findIndex((persona) => persona.nombre == "John"));

//----------------------------------------------------

// sort()
// Ordena el array (menor a mayor) original modificandolo, No crea uno nuevo

let materias = ["Química", "Música", "Inglés", "Geografía"];
let numeros2 = [53, 42, 123, 24, 52, 41];

let materiasOrdenadas = materias.sort();
let numerosOrdenados = numeros2.sort(ordenar);
console.log(materiasOrdenadas);
console.log(numerosOrdenados);

function ordenar(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  {
    return 0;
  }
}

//----------------------------------------------------

// reduce()
// Recorre un array según y permite realizar una operación mediante un acumulador (table stats)

let arrayReducido = numeros2.reduce((valorAnterior, valorActual) => {
  return valorAnterior + valorActual;
});
console.log(arrayReducido);

let materiasReducidas = materias.reduce((valorAnterior, valorActual) => {
  return valorAnterior + ` ${valorActual}, `;
}, "Materias:");
console.log(materiasReducidas);
