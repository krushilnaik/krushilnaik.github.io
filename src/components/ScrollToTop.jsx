import React from 'react';
import { PageContext } from '../utils/js/contexts';

import '../scss/components/ScrollToTop.scss';

/**
 * - TODO: bottom-center cheveron will double as ScrollToTop
 */
function ScrollToTop() {
	return (
		<PageContext.Consumer>
			{({ activePage }) => (
				<a
					href='#intro'
					className={`scroll-to-top ${activePage !== 'Intro' ? 'minimized' : ''}`}
				>
					<i className='fas fa-chevron-down'></i>
				</a>
			)}
		</PageContext.Consumer>
	);
}

export default ScrollToTop;
