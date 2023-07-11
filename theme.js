// var content = document.querySelector(".bboddyy");

// var darkMode = document.getElementById("dark-change");

// darkMode.addEventListener("click", function () {
//   darkMode.classList.toggle("active");
//   content.classList.toggle("night");
//   // darkMode.classList.toggle("active");
// });

/**
 * This function sets the color mode of the app based
 * on a variable stored in localStorage
 */
const setColorMode = () => {
  const colorMode = localStorage.getItem("mode");
  //  const lightt = document.querySelector(".active")
  //   const nightt = document.querySelector(".night");

  const label = document.getElementById("dark-change");

  if (label) {
    label.classList.add(colorMode === "dark" ? "active" : "night");
  }



  const href = colorMode === "dark" ? "dark-mode.css" : "light-mode.css";
  const link = document.getElementById("stylesheet");
  link.setAttribute("href", href);
};

/**
 * This function toggles the color mode and refreshes
 * the page so the color mode can take effect
 */
const toggleColorMode = () => {
  const colorMode = localStorage.getItem("mode");
  const mode = colorMode === "dark" ? "light" : "dark";
  localStorage.setItem("mode", mode);
  location.reload();
};

window.onload = () => {
  setColorMode(); // Set the color mode on load

  const toggleBtn = document.getElementById("dark-change");
  if (toggleBtn) {
    // The toggle button is not on all pages
    // this checks if the button is present before adding the event listener
    toggleBtn.addEventListener("click", toggleColorMode);
  }
};

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "230px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}








// WRITE PAGE

     let btnClear = document.querySelector('button');
        let inputs = document.querySelectorAll('input');
        let input = document.querySelectorAll('textarea');

        btnClear.addEventListener('click', () => {
            inputs.forEach(input => input.value = '');
        });

        btnClear.addEventListener('click', () => {
            input.forEach(textarea => textarea.value = '');
        });