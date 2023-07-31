console.log("Hola mundo!");

// Ejemplo 1 - Edad

let edadIngresada = prompt("Ingrese edad");

if (edadIngresada > 18) {
  console.log("Mayor, puede ingresar!");
  alert("Puedes pasar, mayor de edad");
} else {
  console.log("Menor, no puede ingresar!");
  alert("No puedes pasar, menor de edad");
}

// Ejemplo 2 - Semáforo

let colorSemaforo = prompt("Ingrese color de semáforo: ");

if (colorSemaforo === "rojo") {
  alert("Frena, no puedes avanzar!");
} else if (colorSemaforo === "amarillo") {
  alert("Cuidaddo, baja la velocidad!");
} else if (colorSemaforo === "verde") {
  alert("Avanza, tienes libre circulación");
} else {
  alert("Color ingresado inválido!");
}

// Ejemplo 3 - Notas

let notaAlumno = parseInt(prompt("Ingrese nota de 1 a 5: "));

switch (notaAlumno) {
  case 5:
    alert(`Tu calificación es ${notaAlumno}. Felicitaciones, nota máxima!`);
    break;
  case 4:
    alert(`Tu calicación es ${notaAlumno}. Casi perfecto!`);
    break;
  case 3:
    alert(`Tu calificación es ${notaAlumno}. Tuviste algunos errores!`);
    break;
  case 2:
    alert(`Tu calificación es ${notaAlumno}. No es suficiente!`);
    break;
  case 1:
    alert(`Tu calificación es ${notaAlumno}. No aprobaste, nota mínima!`);
    break;
  default:
    alert(`Nota ingresada '${notaAlumno}' inválida!`);
}
