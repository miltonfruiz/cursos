// Primer uso de consola

console.log("Hello World!");
console.log("Segundo console.log");

// Creación de variables

var myFirstVariable = "valueVariableVar";
let myFirstLet = "valueVariableLet";
const myFirstConst = "valueVariableConst";

console.log(myFirstVariable);
console.log(myFirstLet);
console.log(myFirstConst);

// Reasignación de variables

myFirstVariable = "newValueVariableVar";
console.log(myFirstVariable);

myFirstLet = "newValueVariableLet";
console.log(myFirstLet);

// myFirstConst = "newValueVariableConst";
// console.log(myFirstConst);

// Tipos de Datos

const string = "String";
console.log("Muestro el string:", string);
console.log("El tipo de dato es: ", typeof string);

const number = 1;
console.log("Muestro el number: ", number);
console.log("El tipo de dato es: ", typeof number);

const negativeNumber = -1;
console.log("Muestro el negativeNumber", negativeNumber);

const floatNumber = 1.1;
console.log("Muestro el floatNumber: ", floatNumber);

const nullValue = null;
console.log("Muestro el nullValue: ", nullValue);
console.log("El tipo de dato es: ", typeof nullValue);

const undefinedValue = undefined;
console.log("Muestro el undefinedValue: ", undefinedValue);
console.log("El tipo de dato es: ", typeof undefinedValue);

const booleanTrue = true;
const booleanFalse = false;
console.log("Muestro el booleanTrue: ", booleanTrue);
console.log("Muestro el booleanFalse: ", booleanFalse);
console.log("El tipo de dato es: ", typeof false);

const array = ["Mariano", "Franco", "Leo", "Nahuel"];
console.log("Muestro el array: ", array);
console.log("El tipo de dato es: ", typeof array);
console.log("¿Es un array?: ", Array.isArray(array));

const object = {
  firstPerson: "Mariano",
  secondPerson: "Franco",
  thirdPerson: "Leo",
  fourthPerson: "Nahuel",
};
console.log("Muestro el object: ", object);
console.log("El tipo de dato es: ", typeof object);

const arrayMixed = ["Milton", 33, true, null, undefined, "otherValue"];
console.log("Muestro el arrayMixed: ", arrayMixed);

const objectMixed = {
  name: "Milton",
  age: 33,
  isDeveloper: true,
  takeVacations: null,
  usInCouple: undefined,
};
console.log("Muestro el objectMixed: ", objectMixed);
