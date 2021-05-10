import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './scss/Intro.scss';

function Intro() {
	return (
		<section id='intro'>
			<h2>Scroll down to start, or use the nav bar up top to skip ahead</h2>
			<FontAwesomeIcon icon={faChevronDown} size='5x' color='honeydew' />
		</section>
	);
}

export default Intro;
