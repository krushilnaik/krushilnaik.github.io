import React from 'react';
import InView from 'react-intersection-observer';
import { usePage } from '../hooks/usePage';

import '../scss/pages/Intro.scss';

function Intro() {
	const { setActivePage } = usePage();

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
					<div className='i-am'>a tech enthausiast</div>
					<div className='i-am'>an anime fan</div>
					<div className='i-am'>a JavaScript sponge</div>
					<div className='i-am'>a lifelong learner</div>
				</div>
			</div>
		</InView>
	);
}

export default Intro;
