let urlApi = "https://rickandmortyapi.com/api/character";

// fetch(urlApi)
//   .then((response) => response.json())
//   .then((datos) => {
//     throw new Error("Error al traer datos");
//     console.log(datos);
//     console.log(datos.results);
//     console.log(datos.results[5]);
//     console.log(datos.results[5].name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function traerDatos() {
  //   fetch(urlApi)
  //     .then((response) => response.json())
  //     .then((datos) => {
  //throw new Error("Error al traer datos");
  //console.log(datos);
  //console.log(datos.results);
  // console.log(datos.results[5]);
  // console.log(datos.results[5].name);
  // })
  // .catch((error) => {
  //   console.log(error);
  //});
  try {
    //throw new Error("Error al traer datos");
    const response = await fetch(urlApi);
    console.log(response);
    const datos = await response.json();
    console.log(datos.results);
  } catch (error) {
    console.log(error);
  }
}
traerDatos();
