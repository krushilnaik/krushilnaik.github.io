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
