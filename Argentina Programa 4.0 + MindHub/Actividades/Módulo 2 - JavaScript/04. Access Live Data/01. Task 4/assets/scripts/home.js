//----------------------------------------------------------------- Capture ------------------------------------------------------------------//

let api = "https://mindhub-xj03.onrender.com/api/amazing";

async function fetchData() {
  try {
    const response = await fetch(api);
    const homeObject = await response.json();
    const homeCards = homeObject.events
      .map((cards) => enabledCard(cards))
      .join("");
    homeContainer.innerHTML = homeCards;
    formContainerHome.addEventListener("keyup", (event) => {
      event.preventDefault();
      if (event.key === "Escape") finderContainerHome.value = "";
      if (event.key === "Enter")
        finderContainerHome.value === finderContainerHome;
      let nameFilter = homeObject.events
        .filter((parameter) =>
          parameter.name
            .toLowerCase()
            .includes(finderContainerHome.value.toLowerCase())
        )
        .map((card) => enabledCard(card))
        .join("");
      homeContainer.innerHTML = nameFilter;
      if (!nameFilter) {
        wrongCard;
        homeContainer.innerHTML = wrongCard;
      }
    });

    formContainerHome.addEventListener("submit", (event) => {
      event.preventDefault();
      finderContainerHome.value;
      finderContainerHome === finderContainerHome.value;
    });
    let categories = "";
    homeObject.events.map((parameter) => {
      if (!categories.includes(parameter.category)) {
        categories += enableCheckbox(parameter);
      }
    });
    categoryContainerHome.innerHTML = categories;

    let active = [];
    categoryContainerHome.addEventListener("click", (events) => {
      if (events.target.checked != undefined) {
        if (events.target.checked) {
          let create = homeObject.events
            .filter(
              (argument) =>
                argument.category.toLowerCase() === events.target.value
            )
            .map((card) => enabledCard(card))
            .join("");
          active.push(create);
          homeContainer.innerHTML = create;
        } else {
          let inactive = active.indexOf(events.target.value);
          if (inactive != -1) {
            active.splice(inactive, 1);
            homeContainer.innerHTML = create;
          }
          homeContainer.innerHTML = homeCards;
        }
      }

      console.log(events);
    });
  } catch (error) {
    console.log(error);
  }
}
fetchData();

//----------------------------------------------------------------- Capture ------------------------------------------------------------------//

const homeContainer = document.getElementById("home-container");
const finderContainerHome = document.getElementById("finder-container-home");
const formContainerHome = document.getElementById("form-container-home");
const categoryContainerHome = document.getElementById(
  "category-container-home"
);
const foodCheckbox = document.getElementById("food-checkbox");

//---------------------------------------------------------------- Home Cards ----------------------------------------------------------------//

function enabledCard(array) {
  genericCard = `<div class="card-scale ms-5 mt-5 d-flex flex-wrap">
  <div class="card bg-body-tertiary" style="width: 14rem">
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
        id="details-boton"
        >More Details</a
      >
    </div>
  </div>
</div>`;
  return genericCard;
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
