import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import anime from 'animejs';
// import React, { useEffect, useRef } from 'react';
import React from 'react';

import './scss/Intro.scss';

function Intro() {
	// let animationRef = useRef(null);

	// useEffect(() => {
	// 	animationRef.current = anime({
	// 		targets: '#intro svg',
	// 		duration: 600,
	// 		translateY: [0, 15],
	// 		direction: 'alternate',
	// 		easing: 'easeInCubic',
	// 		loop: true
	// 	});
	// });

	return (
		<section id='intro'>
			<h2>Scroll down to start, or use the nav bar up top to skip ahead</h2>
			<FontAwesomeIcon icon={faChevronDown} size='5x' color='honeydew' />
		</section>
	);
}

export default Intro;
