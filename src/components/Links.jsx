// import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './scss/Links.scss';

function Links() {
	return (
		<div className='links'>
			{/* GitHub, LinkedIn, Twitter */}
			<a href='https://github.com/krushilnaik' target='_blank' rel='noreferrer'>
				<i className='fab fa-github-square'></i>
			</a>

			<a href='https://www.linkedin.com/in/krushilnaik/' target='_blank' rel='noreferrer'>
				<i className='fab fa-linkedin'></i>
			</a>

			<a href='https://twitter.com/KrushilNaik' target='_blank' rel='noreferrer'>
				<i className='fab fa-twitter-square'></i>
			</a>
		</div>
	);
}

export default Links;
