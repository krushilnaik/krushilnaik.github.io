import React, { useEffect, useRef, useState } from 'react';
import { slugify } from '../utils/js/functions';

import './scss/NavBar.scss';

function NavBar() {
	const [view, setView] = useState(-1);
	const links = ['Who I am', 'What I know', 'How to find me'];
	let navRef = useRef([]);

	/**
	 * @type {React.MutableRefObject<IntersectionObserver[]>}
	 */
	let observer = useRef([]);

	useEffect(() => {
		navRef.current = [];

		/**
		 * all the anchor tags rendered to the nav bar
		 * @type {NodeListOf<HTMLAnchorElement>}
		 */
		const renderedLinks = document.querySelectorAll('nav ul li button');

		renderedLinks.forEach(link => {
			navRef.current.push(link.offsetWidth);
		});

		links.forEach((link, i) => {
			observer.current.push(
				new IntersectionObserver(
					() => {
						setView(i);
					},
					{
						root: document.querySelector('#root'),
						threshold: 0.7,
						rootMargin: '0px'
					}
				)
			);

			observer.current[i].observe(document.querySelector(`#${slugify(link)}`));
		});

		observer.current.push(
			new IntersectionObserver(
				() => {
					setView(-1);
				},
				{
					root: document.querySelector('#root'),
					threshold: 0.75,
					rootMargin: '0px'
				}
			)
		);

		observer.current[links.length].observe(document.querySelector('#intro'));
	}, []);

	/**
	 * @type {React.CSSProperties}
	 */
	const navigatorStyle = {
		width: `${view === -1 ? 0 : navRef.current[view]}px`,
		left: `${
			view === -1 ? 0 : navRef.current.slice(0, view).reduce((a, b) => a + b, 0) + 15 * view || 0
		}px`
	};

	/**
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 * @param {number} i - index of section title in 'links' array
	 */
	const handleClick = (event, i) => {
		event.preventDefault();
		setView(i);
	};

	return (
		<nav>
			<ul style={{ gridTemplateColumns: `repeat(${links.length}, max-content)` }}>
				<span className='navigator' style={navigatorStyle}></span>
				{links.map((link, i) => (
					<li key={slugify(link)}>
						<button onClick={event => handleClick(event, i)}>{link}</button>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
