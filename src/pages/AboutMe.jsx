import React, { useContext } from 'react';
import InView from 'react-intersection-observer';
import { PageContext } from '../utils/js/contexts';

import './scss/AboutMe.scss';

/**
 * - TODO: everything
 */
function AboutMe() {
	const { setActivePage } = useContext(PageContext);

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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae enim voluptas
					impedit provident. Accusamus.
				</article>
			</div>
		</InView>
	);
}

export default AboutMe;
