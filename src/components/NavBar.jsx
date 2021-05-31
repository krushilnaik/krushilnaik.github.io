import anime from 'animejs';
import React, { useEffect, useRef } from 'react';
import { PageContext } from '../utils/js/contexts';
import { slugify } from '../utils/js/functions';

import './scss/NavBar.scss';

const links = ['Who I am', 'What I know', 'How to find me'];

function NavBar() {
	let navRef = useRef([]);

	useEffect(() => {
		navRef.current = [];

		anime({
			targets: 'nav ul li',
			opacity: [0, 1],
			translateX: [-150, 0],
			easing: 'easeOutCubic',
			delay: anime.stagger(150, { direction: 'reverse' })
		});

		/**
		 * all the anchor tags rendered to the nav bar
		 * @type {NodeListOf<HTMLAnchorElement>}
		 */
		const renderedLinks = document.querySelectorAll('nav ul li a');

		renderedLinks.forEach(link => {
			navRef.current.push(link.offsetWidth);
		});
	}, []);

	return (
		<PageContext.Consumer>
			{({ activePage }) => {
				const view = links.indexOf(activePage);

				/**
				 * @type {React.CSSProperties}
				 */
				const navigatorStyle = {
					width: `${view === -1 ? 0 : navRef.current[view]}px`,
					left: `${
						view === -1
							? 0
							: navRef.current.slice(0, view).reduce((a, b) => a + b, 0) + 15 * view || 0
					}px`
				};

				return (
					<nav>
						<ul style={{ gridTemplateColumns: `repeat(${links.length}, max-content)` }}>
							<span className='navigator' style={navigatorStyle}></span>
							{links.map(link => (
								<li key={slugify(link)}>
									<a href={`#${slugify(link)}`}>{link}</a>
								</li>
							))}
						</ul>
					</nav>
				);
			}}
		</PageContext.Consumer>
	);
}

export default NavBar;
