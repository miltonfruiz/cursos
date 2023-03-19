//------------------------------------------------------------------- API --------------------------------------------------------------------//

let apiUpcoming = "https://mindhub-xj03.onrender.com/api/amazing";

async function fetchDataUpcoming() {
  try {
    const response = await fetch(apiUpcoming);
    const upcomingData = await response.json();
    const upcomingCards = upcomingData.events
      .filter((parameter) => parameter.date > upcomingData.currentDate)
      .map((cardUp) => enabledCardUp(cardUp))
      .join("");
    upcomingContainer.innerHTML = upcomingCards;
    formContainerUp.addEventListener("keyup", (event) => {
      upcomingData;
      event.preventDefault();
      if (event.key === "Escape") finderContainerUp.value = "";
      if (event.key === "Enter") finderContainerUp.value === finderContainerUp;
      let nameFilter = upcomingData.events
        .filter((parameter) =>
          parameter.name
            .toLowerCase()
            .includes(finderContainerUp.value.toLowerCase())
        )
        .map((card) => enabledCardUp(card))
        .join("");
      upcomingContainer.innerHTML = nameFilter;
      if (!nameFilter) {
        wrongCardUp;
        upcomingContainer.innerHTML = wrongCardUp;
      }
    });
    formContainerUp.addEventListener("submit", (event) => {
      event.preventDefault();
      finderContainerUp.value;
      finderContainerUp === finderContainerUp.value;
    });
    let categoriesUp = "";
    upcomingData.events.map((parameter) => {
      if (!categoriesUp.includes(parameter.category)) {
        categoriesUp += enableCheckboxUp(parameter);
      }
    });
    categoryContainerUp.innerHTML = categoriesUp;
    let activeUp = [];
    categoryContainerUp.addEventListener("click", (events) => {
      if (events.target.checked != undefined) {
        if (events.target.checked) {
          let create = upcomingData.events
            .filter(
              (argument) =>
                argument.category.toLowerCase() === events.target.value
            )
            .map((card) => enabledCardUp(card))
            .join("");
          activeUp.push(create);
          upcomingContainer.innerHTML = create;
        } else {
          let inactive = activeUp.indexOf(events.target.value);
          if (inactive != -1) {
            activeUp.splice(inactive, 1);
            upcomingContainer.innerHTML = create;
          }
          upcomingContainer.innerHTML = upcomingCards;
        }
      }
      console.log(events);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchDataUpcoming();
//----------------------------------------------------------------- Capturo ------------------------------------------------------------------//

const upcomingContainer = document.getElementById("upcoming-container");
const finderContainerUp = document.getElementById("finder-container-up");
const formContainerUp = document.getElementById("form-container-up");
const categoryContainerUp = document.getElementById("category-container-up");

//----------------------------------------------------------- Upcoming Events Cards ----------------------------------------------------------//

function enabledCardUp(array) {
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

const wrongCardUp = `<div class="card-scale ms-5 mt-5 d-flex flex-wrap">
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

function enableCheckboxUp(array) {
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
