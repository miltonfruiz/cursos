console.log("Funciones de Orden Superior");

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array: ", array);

// Funciones de Orden Superior");

// Example Arrow Function
//const arrayFunction = (a) => console.log("a", a);

// forEach (solo iterar)
array.forEach((element) => console.log("Elemento", element));

// Buenas Prácticas

const users = ["Mariano", "Leo", "Claribel", "Guille", "Franco"];
users.forEach((user) => console.log("El user es: ", user));

// Map (retorna nuevo array del mismo tamaño)
const usersMap = users.map((user) => "HOLA!");
console.log("UsersMap: ", usersMap);
console.log("users: ", users);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobles = numbers.map((number) => number * 2);
console.log("numbers: ", numbers);
console.log("Dobles: ", dobles);

// Filter
const mariansArray = users.filter((user) => user === "MARIANO");
console.log("marinasArray: ", mariansArray);

// Some (itera hasta encontrar el elemento)
const randomNumbers = [1, 3, 5, 7, 8, 9, 10];
const hasParNumbers = randomNumbers.some(
  (randomNumber) => randomNumber % 2 === 0
);
console.log("hasParNumbers: ", hasParNumbers);

const items = [1, "apple", true, null];
const hasString = items.some((item) => typeof item === "String");

const values = [10, 20, 30, 40];
const hasGreaterValue = values.some((value) => value > 25);
console.log(hasGreaterValue);

// Integrando un map y un filter - Caso #1
const originalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const triplesNumbers = originalNumbers.map(
  (originalNumbers) => originalNumbers * 3
);
console.log("originalNumbers", originalNumbers);
console.log("tripleNumbers", triplesNumbers);
const evenNumbers = triplesNumbers.filter(
  (triplesNumbers) => triplesNumbers % 2 === 0
);
console.log("evenNumbers", evenNumbers);

// Using map and filter
const transformNumbers = originalNumbers
  .map((originalNumbers) => originalNumbers * 3)
  .filter((triplesNumbers) => triplesNumbers % 2 === 0);
console.log("transformNumbers", transformNumbers);

// Reduce
const words = ["JavaScript", "is", "awesome"];
const sentence = words.reduce((acc, val) => acc + " " + val);
console.log(sentence);

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((acc, val) => acc + val, 0);
console.log(sum);

const numbersReduceExampleTwo = [12, 1, 1, 45, 89];
const newSum = numbersReduceExampleTwo.reduce((acc, val) => acc + val, 0);
console.log("numbersReduceExampleTwo", numbersReduceExampleTwo);
console.log(newSum);

// Reduce - Caso #2
const generateBody = (data, headers) => {
  return data.reduce((accumulate, item) => {
    const newRow = headers.reduce((accumulate, headerKey, index) => {
      const rowValue = item[headerKey.toLowerCase()];
      const delimiter = index === headers.length - 1 ? "\n" : "|";
      return `${accumulate}"${rowValue}"${delimiter}`;
    }, "");

    return `${accumulate}${newRow}`;
  }, "");
};

const data = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" },
];

const headers = ["Name", "Age", "Email"];

const tableBody = generateBody(data, headers);

console.log(tableBody);
