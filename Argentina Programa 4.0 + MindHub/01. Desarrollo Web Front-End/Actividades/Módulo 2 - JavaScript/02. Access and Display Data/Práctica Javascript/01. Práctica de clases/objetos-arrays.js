// -----------------------Arrays------------------------

// Muestro elementos de array
let array = [1, "str", null, undefined, [], {}];
// console.log(array[4]);

// Cambio elemtno de array
// array[0] = 2;
// console.log(array[0]);

// array[3] = "defined";
// console.log(array[3]);

// Agrego elemento al principio del array
// array.unshift();
// console.log(array);

// Agrego elemento al final del array
// array.push("Milton");
// console.log(array);

// Eliminar el primer elemento del array
// array.shift();
// console.log(array);

// Elimina el ultimo elemento del array
// array.pop();
// console.log(array);

// Ejemplo de frutas
let frutas = ["Pera", "Manzana", "Sandia"];

// Concatenar arrays
// console.log(array.concat(frutas));

// Busco el elemento si existe dentro del array
//console.log(frutas.includes("Pera"));

// Busco el indice del elemento
//console.log(frutas.indexOf("Pera"));

// Junta los elementos en un string
//frutas = frutas.toString();
// console.log(frutas);

// Devuelve elementos separados en formato array
//console.log(frutas.split(","));

// Devuelve elementos separados por el simbolo que agreguemos
//console.log(frutas.join("--"));

// -----------------------Objetos------------------------

let persona = {
  nombre: "Milton",
  apellido: "Ruiz",
  edad: "33",
};
//console.log(persona.nombre);

// Modificar una propiedad
// persona.nombre = "Franco";
// console.log(persona);

// Eliminar una propiedad
delete persona.nombre;
console.log(persona);

// Agregar una propiedad
persona.email = "email@exaple.com";
console.log(persona);

// Devuelve nombre de las propiedades
console.log(Object.keys(persona));

// Devuelve valores de las propiedades
console.log(Object.values(persona));

// Combinando las dos anteriores (matrices)
console.log(Object.entries(persona));
