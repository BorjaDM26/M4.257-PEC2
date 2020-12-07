/* ----------------------------------------------------------------------
------------------------------- VARIABLES -------------------------------
---------------------------------------------------------------------- */
const body = document.querySelector('body');
const colorSelectorsContainer = document.querySelector('.navbar-color-selector');
const colorSelectors = document.querySelectorAll('.color-selector');

const MAIN_COLOR = 'main';
const GREEN_COLOR = 'green';
const RED_COLOR = 'red';


/* ----------------------------------------------------------------------
----------------------------- INITIAL LOAD ------------------------------
---------------------------------------------------------------------- */
initialisation();

function initialisation() {
	// Set background color
	const bgColor = localStorage.getItem('bgColor');
	if (bgColor !== null) {
    updateColor(bgColor);
  }
}


/* ----------------------------------------------------------------------
----------------------------- AUX FUNCTIONS -----------------------------
---------------------------------------------------------------------- */
// Update background color
function updateColor(color) {
  body.className = '';
  body.classList.add(color);
	localStorage.setItem('bgColor', color);
}


/* ----------------------------------------------------------------------
---------------------------- EVENT LISTENERS ----------------------------
---------------------------------------------------------------------- */
// Clicked color container listener
colorSelectorsContainer.addEventListener('click', function (e) {
  const classList = e.target.classList;
	if (classList.contains('color-selector')) {
    if(classList.contains(RED_COLOR)){
      updateColor(RED_COLOR);
    } else if (classList.contains(GREEN_COLOR)){
      updateColor(GREEN_COLOR);
    } else {
      updateColor(MAIN_COLOR);
    }
	}
});