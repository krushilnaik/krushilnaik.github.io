import anime from 'animejs';
import React, { Fragment, useEffect, useRef } from 'react';

import './scss/App.scss';

function App() {
	let wipRef = useRef(null);
	let tipRef = useRef(null);

	useEffect(() => {
		wipRef.current = anime({
			targets: '#wip',
			opacity: [0, 1],
			translateY: [-150, 0],
			duration: 850,
			easing: 'linear'
		});

		tipRef.current = anime({
			targets: '.tip',
			translateY: [-100, 0],
			opacity: [0, 1],
			duration: 350,
			easing: 'linear',
			delay: 500
		});
	}, []);

	return (
		<Fragment>
			<noscript>You need to enable JavaScript to view this site.</noscript>

			<h1 id='wip'>Work in Progress</h1>
			<h3 className='tip'>Check back later</h3>
		</Fragment>
	);
}

export default App;
