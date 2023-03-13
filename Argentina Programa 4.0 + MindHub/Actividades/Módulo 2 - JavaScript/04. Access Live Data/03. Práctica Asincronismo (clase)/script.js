console.log("Asincronismo en Marcha");

const API_URL = "https://jsonplaceholder.typicode.com/users";

console.log(API_URL);

// Palabra reservada: fetch(obtener)
// Toma como parámetro: Una dirección, string, headers, APY-KEY

// * This function return a user list
//  * @param   no use.
//  * @returns return an array of users.

// TASK 4 !!!
const fetchData = () => {
  fetch(API_URL)
    .then((response) => response.json()) // Esto también devuelve una promesa
    .then((data) => console.log(data));
};
fetchData();

// paintDom(
// Utiliza datos que creo que llegaron de la API
// Si la promesa no se maneja correctamente, aparece UNDEFINED
// )

//const API_URL = "https://jsonplaceholder.typicode.com/users";

// const getUsers = () => {
//   fetch(API_URL)
//     //fetch(API_URL).then((response) => console.log(response));
//     .then((response) => response.json)
//     .then((data) => data);
// };
// getUsers();

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(user); // Esto rompió el código y cortó el hilo de ejecución
// console.log(4); // No se muestra

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 3000);
  }, 7000);
}, 5000);

console.log("1");

setTimeout(function () {
  console.log("2");
}, 5000);

console.log("3");

setTimeout(function () {
  console.log("4");
  setTimeout(() => {
    console.log("5");
  }, 4000);
}, 2000);
// 1, 3, 4, 2, 5 *

const API_URL_GET_PRODUCTS = "https://fakestoreapi.com/products";
//NOTA: ES NECESARIO IMPORTAR AXIOS ANTES

/**
 * This function realize a GET request to the API in FakeStoreAPI
 * @param   no use.
 * @returns return an array of products.
 */
const getProducts = async () => {
  try {
    const responseAxios = await axios.get("https://fakestoreapi.com/products");
    const dataProducts = responseAxios.data;
    console.log("dataProducts", dataProducts);
    return dataProducts;
  } catch (error) {
    console.log("Error status", error.response.status);
    if (error.response.status === 404) {
      alert("La URL consultada parece no estar funcionando");
    }
  } finally {
    console.log("perrito malvado");
  }
};
getProducts();

// TRY - CATCH  - TRY: Intenta ejecutar una fracción de código - CATCH : Captura el error y lo muestra en consola

// TRY - FINALLY  - TRY: Intenta ejecutar una fracción de código - FINALLY: Ejecutá este código al margen del resultado.

// TRY - CATCH - FINALLY  - Combina los dos casos

const API_URL_EVENTS = "https://amazing-events.herokuapp.com/api/events";

// ASYNC / AWAIT

const getEvents = async () => {
  const response = await fetch(API_URL_EVENTS);
  const dataEvents = await response.json();
  // console.log("response", response)
  console.log("events", dataEvents);
  console.log("array de eventos", dataEvents.events);
};
getEvents();

// uncaught ReferenceError  USER: ???????????????????????????????????????
// Upps, nuestros programadores han cometido un error. Intentaremos solucionarlo rápidamente
