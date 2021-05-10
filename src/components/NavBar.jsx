import React, { useEffect, useRef, useState } from 'react';
import { slugify } from '../util/js/functions';

import './scss/NavBar.scss';

function NavBar() {
	const [view, setView] = useState(-1);
	const links = ['Who I am', 'What I know', 'How to find me'];
	let navRef = useRef([]);

	useEffect(() => {
		navRef.current = [];

		/**
		 * all the anchor tags rendered to the nav bar
		 * @type {NodeListOf<HTMLAnchorElement>}
		 */
		const renderedLinks = document.querySelectorAll('nav ul li a');

		renderedLinks.forEach(link => {
			navRef.current.push(link.offsetWidth);
		});
	}, [view]);

	/**
	 * @type {React.CSSProperties}
	 */
	const navigatorStyle = {
		width: `${navRef.current[view]}px`,
		left: `${navRef.current.slice(0, view).reduce((a, b) => a + b, 0) + 15 * view || 0}px`
	};

	/**
	 * @param {React.SyntheticEvent<HTMLAnchorElement>} event
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
						<a href={`#${slugify(link)}`} onClick={event => handleClick(event, i)}>
							{link}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default NavBar;
