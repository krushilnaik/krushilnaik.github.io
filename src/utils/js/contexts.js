import { createContext } from 'react';

/**
 * @typedef Page
 * @property {string} activePage
 * @property {function} setActivePage
 */

export const PageContext = createContext({
	activePage: 'Intro',
	setActivePage(/**@type {string} */ _newPage) {}
});

export const FormContext = createContext({
	name: '',
	email: '',
	message: '',
	setName(/**@type {string} */ newName) {
		this.name = newName;
	},
	setEmail(/**@type {string} */ newEmail) {
		this.email = newEmail;
	},
	setMessage(/**@type {string} */ newMessage) {
		this.message = newMessage;
	}
});
