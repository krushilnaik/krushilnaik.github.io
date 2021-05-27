import React, { Fragment } from 'react';

import './scss/Links.scss';

function Links() {
	return (
		<Fragment>
			<div className='popper'>
				<span>Or use the links below</span>
				<i className='fas fa-chevron-down'></i>
			</div>
			<div className='links'>
				<a id='github' href='https://github.com/krushilnaik' target='_blank' rel='noreferrer'>
					<i className='fab fa-github-square'></i>
				</a>

				<a
					id='linkedin'
					href='https://www.linkedin.com/in/krushilnaik/'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fab fa-linkedin'></i>
				</a>

				<a id='twitter' href='https://twitter.com/KrushilNaik' target='_blank' rel='noreferrer'>
					<i className='fab fa-twitter-square'></i>
				</a>

				<a id='email' href='mailto:krushilnaik96@gmail.com' target='_blank' rel='noreferrer'>
					<i className='fas fa-envelope-square'></i>
				</a>
			</div>
		</Fragment>
	);
}

export default Links;
