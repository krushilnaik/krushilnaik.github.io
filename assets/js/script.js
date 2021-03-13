/**
 * @type {HTMLInputElement}
 */
const themeSwitcher = document.querySelector("#theme-switcher");

document.body.className = themeSwitcher.checked ? "dark" : "light";
