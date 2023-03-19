//------------------------------------------------------------------- API --------------------------------------------------------------------//

let apiPast = "https://mindhub-xj03.onrender.com/api/amazing";

async function fetchDataPast() {
  try {
    const response = await fetch(apiPast);
    const pastData = await response.json();
    const pastCards = pastData.events
      .filter((parameter) => parameter.date < pastData.currentDate)
      .map((cardUp) => enabledCardPast(cardUp))
      .join("");
    pastContainer.innerHTML = pastCards;
    formContainerPast.addEventListener("keyup", (event) => {
      event.preventDefault();
      if (event.key === "Escape") finderContainerPast.value = "";
      if (event.key === "Enter")
        finderContainerPast.value === finderContainerPast;
      let nameFilter = pastData.events
        .filter((parameter) =>
          parameter.name
            .toLowerCase()
            .includes(finderContainerPast.value.toLowerCase())
        )
        .map((card) => enabledCardPast(card))
        .join("");
      pastContainer.innerHTML = nameFilter;
      if (!nameFilter) {
        wrongCardPast;
        pastContainer.innerHTML = wrongCardPast;
      }
    });

    formContainerPast.addEventListener("submit", (event) => {
      event.preventDefault();
      finderContainerPast.value;
      finderContainerPast === finderContainerPast.value;
    });
    let categoriesPast = "";
    pastData.events.map((parameter) => {
      if (!categoriesPast.includes(parameter.category)) {
        categoriesPast += enableCheckboxPast(parameter);
      }
    });
    categoryContainerPast.innerHTML = categoriesPast;

    let activePast = [];
    categoryContainerPast.addEventListener("click", (events) => {
      if (events.target.checked != undefined) {
        if (events.target.checked) {
          let create = pastData.events
            .filter(
              (argument) =>
                argument.category.toLowerCase() === events.target.value
            )
            .map((card) => enabledCardPast(card))
            .join("");
          activePast.push(create);
          pastContainer.innerHTML = create;
        } else {
          let inactive = activePast.indexOf(events.target.value);
          if (inactive != -1) {
            activePast.splice(inactive, 1);
            pastContainer.innerHTML = create;
          }
          pastContainer.innerHTML = upcomingCards;
        }
      }
      console.log(events);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchDataPast();
//---------------------------------------------------- Capturo ---------------------------------------------------------//

const pastContainer = document.getElementById("past-container");
const finderContainerPast = document.getElementById("finder-container-past");
const formContainerPast = document.getElementById("form-container-past");
const categoryContainerPast = document.getElementById(
  "category-container-past"
);

//----------------------------------------------- Upcoming Events Cards -------------------------------------------------//

function enabledCardPast(array) {
  genericCardUp = `<div class="card-scale ms-5 mt-5 d-flex flex-wrap">
  <div class="card" style="width: 14rem">
    <img
      src="${array.image}"
      class="card-img m-1"
      alt="img-food"
    />
    <div class="card-body">
      <h5 class="card-title text-center">${array.name}</h5>
      <p class="card-description text-center">${array.description}</p>
      <a
        href="./details.html?id=${array._id}"
        class="btn btn-outline-danger details-boton"
        id="food-boton"
        >More Details</a
      >
    </div>
  </div>
</div>`;
  return genericCardUp;
}

//------------------------------------------------------------------ Search ------------------------------------------------------------------//

const wrongCardPast = `<div class="card-scale ms-5 mt-5 d-flex flex-wrap">
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

function enableCheckboxPast(array) {
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
