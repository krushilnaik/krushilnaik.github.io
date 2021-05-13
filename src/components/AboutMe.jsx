import React from 'react';
import { calculateAge } from '../util/js/functions';

import './scss/AboutMe.scss';

function AboutMe() {
	return (
		<section id='about-me'>
			{/* Introduce myself. Name, age, etc. */}
			{/* Add a picture of me */}
			{/* Hobbies/what I do in my free time */}
			<div className='content'>
				<aside>
					<img src='assets/images/avatar.png' alt='crucial avatar' />
					<div className='name'>
						<p>Krushil Naik</p>
						<span className='note'>
							( pronounced <span style={{ color: 'crimson' }}>'crucial'</span> )
						</span>
					</div>
					<p>{calculateAge('09/07/1996')} years old</p>
				</aside>

				<article>This is where info about me will go. Hobbies, all that good stuff.</article>
			</div>
		</section>
	);
}

export default AboutMe;
