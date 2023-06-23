var content = document.getElementsByTagName("body")[0];

var darkMode = document.getElementById("dark-change");

darkMode.addEventListener("click", function () {
  darkMode.classList.toggle("active");
  content.classList.toggle("night");
  // darkMode.classList.toggle("active");
});




/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "230px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
