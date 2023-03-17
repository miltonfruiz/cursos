//------------------------------------------------------------------- Capture ----------------------------------------------------------------//

const cardDarkMode = document.getElementById("cardDarkMode");
const headerDarkMode = document.getElementById("aEvent");
const navDarkMode = document.getElementById("navas");
const upcomingDarkMode = document.getElementById("upcoming-events");
const pastDarkMode = document.getElementById("past-events");
const contactDarkMode = document.getElementById("contact");
const statsDarkMode = document.getElementById("stats");
const h1DarkMode = document.getElementById("h1");
const mainDarkmode = document.getElementById("main");
const darkModeIcon = document.getElementById("darkmode-icon");
const bodyDarkMode = document.getElementById("body-dark-mode");
const redesDarkmode = document.getElementById("redes");
const cohorteDarkmode = document.getElementById("cohorte");

//------------------------------------------------------------------ Dark Mode ---------------------------------------------------------------//

loadMode();

darkModeIcon.addEventListener("click", () => {
  cardDarkMode.classList.toggle("card-title");
  upcomingDarkMode.classList.toggle("inactive-boton");
  pastDarkMode.classList.toggle("inactive-boton");
  contactDarkMode.classList.toggle("inactive-boton");
  statsDarkMode.classList.toggle("inactive-boton");
  bodyDarkMode.classList.toggle("body-dark-mode");
  cohorteDarkmode.classList.toggle("cohorte");
  redesDarkmode.classList.toggle("redes");
  headerDarkMode.classList.toggle("aEvent");
  navDarkMode.classList.toggle("navas");
  h1DarkMode.classList.toggle("h1");
  mainDarkmode.classList.toggle("main");
  storeDarkMode(mainDarkmode.classList.contains("main"));
});

function loadMode() {
  let darkMode = localStorage.getItem("main");
  if (!darkMode) {
    storeDarkMode("false");
  } else if ((darkMode = "true")) {
    mainDarkmode.classList.add("main");
  }
}

function storeDarkMode(value) {
  localStorage.setItem("main", value);
}
