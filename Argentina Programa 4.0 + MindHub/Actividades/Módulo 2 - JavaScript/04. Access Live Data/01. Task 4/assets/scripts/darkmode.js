//------------------------------------------------------------------- Capture ----------------------------------------------------------------//

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

darkModeIcon.addEventListener("click", () => {
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
});
