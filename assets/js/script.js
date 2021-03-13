/**
 * @type {HTMLInputElement}
 */
const themeSwitcher = document.querySelector("#theme-switcher");

function toggleTheme() {
	document.body.className = themeSwitcher.checked ? "dark" : "light";
}

themeSwitcher.addEventListener("change", toggleTheme);

toggleTheme();
