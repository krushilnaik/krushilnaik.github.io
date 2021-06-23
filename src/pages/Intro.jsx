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
			<div className='identity'>
				<span className='im'>I'm</span>
				<div id='what-i-am'>
					<div className='i-am'>a developer</div>
					<div className='i-am'>a tech enthausiast</div>
					<div className='i-am'>an anime fan</div>
					<div className='i-am'>a lifelong learner</div>
				</div>
			</div>
		</InView>
	);
}

export default Intro;
