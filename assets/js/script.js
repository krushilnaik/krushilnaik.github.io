/**
 * @type {HTMLInputElement}
 */
const themeSwitcher = document.querySelector("#theme-switcher");

function toggleTheme() {
	document.body.className = themeSwitcher.checked ? "dark" : "light";
}

themeSwitcher.addEventListener("change", toggleTheme);

toggleTheme();

anime({
	targets: document.querySelectorAll('.background'),
	loop: false,
	direction: 'alternate',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 1400,
	delay: (_, i) => { return i * 500 }
});
