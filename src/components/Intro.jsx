import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import InView from 'react-intersection-observer';
import { PageContext } from '../utils/js/contexts';

import './scss/Intro.scss';

function Intro() {
	const { setActivePage } = useContext(PageContext);

	return (
		<InView
			as='section'
			id='intro'
			threshold={0.7}
			onChange={(inView, _entry) => {
				inView && setActivePage('Intro');
			}}
		>
			<h2>Scroll down to start, or use the nav bar up top to skip ahead</h2>
			<FontAwesomeIcon icon={faChevronDown} size='4x' color='honeydew' />
		</InView>
	);
}

export default Intro;
