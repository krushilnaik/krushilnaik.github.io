import React from 'react';
import InView from 'react-intersection-observer';
import { usePage } from '../hooks/usePage';

import '../scss/pages/AboutMe.scss';

/**
 * - TODO: everything
 */
function AboutMe() {
	const { setActivePage } = usePage();

	return (
		<InView
			as='section'
			id='who-i-am'
			threshold={0.7}
			onChange={(inView, _entry) => {
				inView && setActivePage('Who I am');
			}}
		>
			<div className='content'>
				<aside>
					<img src='assets/images/avatar.png' alt='crucial avatar' />
					<div className='name'>
						<p>Krushil Naik</p>
						<span className='note'>
							( pronounced <span style={{ color: 'crimson' }}>'crucial'</span> )
						</span>
					</div>
				</aside>

				<article>
					Fast learning, tech enthusiast by-hobby looking to make it a career path. Skilled
					beyond what experience would indicate due to a naturally curious mind. Able to solve
					advanced problems by thinking analytically in a divide-and-conquer manner.
				</article>
			</div>
		</InView>
	);
}

export default AboutMe;
