import React from 'react';

import './scss/AboutMe.scss';

function AboutMe() {
	return (
		<section id='who-i-am'>
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

				<article>Coding since birth.</article>
			</div>
		</section>
	);
}

export default AboutMe;
