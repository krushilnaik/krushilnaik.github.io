import React from 'react';
import { PageContext } from '../utils/js/contexts';

import './scss/ScrollToTop.scss';

function ScrollToTop() {
	return (
		<PageContext.Consumer>
			{({ activePage }) => (
				<a
					href='#intro'
					className='scroll-to-top'
					style={{ opacity: activePage === 'Intro' ? 0 : 1 }}
				>
					<i className='fas fa-caret-square-up'></i>
				</a>
			)}
		</PageContext.Consumer>
	);
}

export default ScrollToTop;
