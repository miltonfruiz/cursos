//------------------------------------------------------------------- API --------------------------------------------------------------------//

let api = "https://mindhub-xj03.onrender.com/api/amazing";

async function fetchData() {
  try {
    const response = await fetch(api);
    const homeData = await response.json();

    let eventCategory = homeData.events.map((ecategory) => ecategory.category);
    let filtByCategory = eventCategory.reduce((a, e) => {
      if (!a.includes(e)) {
        a.push(e);
      }
      return a;
    }, []);
    const homeContainer = document.getElementById("home-container");

    formContainerHome.addEventListener("submit", (event) => {
      event.preventDefault();
      finderContainerHome.value;
      finderContainerHome === finderContainerHome.value;
    });
    let categories = "";
    homeData.events.map((parameter) => {
      if (!categories.includes(parameter.category)) {
        categories += enableCheckbox(parameter);
      }
    });
    categoryContainerHome.innerHTML = categories;

    let inputData = "";
    let searchFilter = [];
    let categoryChecked = [];
    let checkFilter = [];

    formContainerHome.addEventListener("keyup", (event) => {
      inputData = event.target.value.toLowerCase();
      renderFilter();
    });

    categoryContainerHome.addEventListener("click", (event) => {
      if (event.target.categoryChecked) {
        categoryChecked.push(event.target.value);
      } else {
        categoryChecked = categoryChecked.filter(
          (notChecked) => notChecked !== event.target.value
        );
      }
      renderFilter();
    });

    function createCategory(evento) {
      let bform = "";
      for (let check of evento) {
        bform += `
          <label id="label-switch" for="category[]"><input class="check-box" type="checkbox" name="${check}" id="${check}" value=${check}> ${check}</label>
          `;
      }
      categoryContainerHome.innerHTML = bform;
    }

    function renderFilter() {
      //filtrar searh --> Devuelve los nombres - fechas - categorias de lo ingresado en searchbar
      searchFilter = homeData.events.filter(
        (f) =>
          f.category.toLowerCase().includes(inputData) ||
          f.name.toLowerCase().includes(inputData) ||
          f.date.includes(inputData)
      );
      //----------------------------------------------------------------------------//
      //filtroCheck --> Devuelve los elementos chequeados
      checkFilter = homeData.events.filter((evento) =>
        categoryChecked.includes(evento.category)
      );
      //---------------------------------------------------------------------------//

      //renderCard
      if (searchFilter.length > 0) {
        homeContainer.innerHTML = createcards(searchFilter);
        let finalControl = searchFilter.filter((e) =>
          e.category.includes(categoryChecked.toString())
        );
        homeContainer.innerHTML = createcards(finalControl);
        //contenedorHome.innerHTML = createcards(filtroCheck)
      } else if (searchFilter == 0) {
        homeContainer.innerHTML = wrongCard;
      }
      if (checkFilter.length > 0) {
        homeContainer.innerHTML = createcards(checkFilter);
        let finalControlBy = checkFilter.filter((ch) =>
          ch.name.toLowerCase().includes(inputData.toString())
        );
        homeContainer.innerHTML = createcards(finalControlBy);
      }
    }

    createCategory(filtByCategory);
    renderFilter;
    // let active = [];
    // categoryContainerHome.addEventListener("click", (events) => {
    //   if (events.target.checked != undefined) {
    //     if (events.target.checked) {
    //       let create = homeData.events
    //         .filter(
    //           (argument) =>
    //             argument.category.toLowerCase() === events.target.value
    //         )
    //         .map((card) => enabledCard(card))
    //         .join("");
    //       active.push(create);
    //       homeContainer.innerHTML = create;
    //     } else {
    //       let inactive = active.indexOf(events.target.value);
    //       if (inactive != -1) {
    //         active.splice(inactive, 1);
    //         homeContainer.innerHTML = create;
    //       }
    //       homeContainer.innerHTML = homeCards;
    //     }
    //   }

    //   console.log(events);
    // });
  } catch (error) {
    console.log(error);
  }
}
fetchData();

//----------------------------------------------------------------- Capture ------------------------------------------------------------------//

const finderContainerHome = document.getElementById("finder-container-home");
const formContainerHome = document.getElementById("form-container-home");
const categoryContainerHome = document.getElementById(
  "category-container-home"
);
const foodCheckbox = document.getElementById("food-checkbox");

//---------------------------------------------------------------- Home Cards ----------------------------------------------------------------//

// function enabledCard(array) {
//   genericCard = `<div class="card-scale ms-5 mt-5 d-flex flex-wrap">
//   <div class="card bg-body-tertiary" style="width: 14rem">
//     <img
//       src="${array.image}"
//       class="card-img m-1"
//       alt="img-food"
//     />
//     <div class="card-body">
//       <h5 class="card-title text-center">${array.name}</h5>
//       <p class="card-description text-center">${array.description}</p>
//       <a
//         href="./details.html?id=${array._id}"
//         class="btn btn-outline-danger details-boton"
//         id="details-boton"
//         >More Details</a
//       >
//     </div>
//   </div>
// </div>`;
//   return genericCard;
// }

function createcards(evento) {
  let card = "";
  for (let eventos of evento) {
    card += `<section id="card">
                  <figure>
                      <img class="card-body-img" src="${eventos.image}" alt="">
                  </figure>
                  <div class="card-body-top">
                      <h2 class="card-title">${eventos.name}</h2>
                      <p class="card-category">Category: ${eventos.category}</p>
                      <p class="card-date">${eventos.date}</p>
                      <p class="card-descr">${eventos.description}</p>
                  </div>
                  <div class="card-body-bot">
                      <p>$ ${eventos.price}</p>
                      <button class="card-but"><a href="pages/details.html?id=${eventos._id}">More Info</a></button>
                  </div>
              </section>`;
  }
  return card;
}

//------------------------------------------------------------------ Search ------------------------------------------------------------------//

const wrongCard = `<div class="card-scale ms-5 mt-5 d-flex flex-wrap">
<div class="card" style="width: 14rem">
  <img
    id="error-img"
    src="./assets/images/lupa-x.jpg"
    class="card-img m-1"
    alt="img-food"
  />
  <div class="card-body">
    <h5 class="card-title text-center">Card Not Found</h5>
    <p class="card-description text-center"></p>
    <a
      href="./index.html"
      class="btn btn-outline-danger details-boton"
      id="error-boton"
      >Return to home</a
    >
  </div>
</div>
</div>`;

//-------------------------------------------------------------- Category CheckBox -----------------------------------------------------------//

function enableCheckbox(array) {
  genericCheckbox = `<div class="form-check form-check-inline p-3 ms-2">
  <input
    class="form-check-input"
    type="checkbox"
    id="${array.category.toLowerCase()}-checkbox"
    value="${array.category.toLowerCase()}"
  />
  <label class="form-check-label" for="homeCheckbox1"
    >${array.category}</label
  >
</div>`;
  return genericCheckbox;
}
