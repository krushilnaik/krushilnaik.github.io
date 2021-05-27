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
			<i className='fas fa-chevron-down'></i>
		</InView>
	);
}

export default Intro;
