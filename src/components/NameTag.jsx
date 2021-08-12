import React from 'react';

import '../scss/components/NameTag.scss';
import { PageContext } from '../utils/js/contexts';
import { slugify } from '../utils/js/functions';

function NameTag() {
	return (
		<PageContext.Consumer>
			{({ activePage }) => {
				console.log(activePage);
				return (
					<div className='header-wrapper'>
						<span>&lt;</span>
						<div
							data-content={activePage !== 'Who I am' ? slugify(activePage) : 'krushilnaik'}
						></div>
						<span style={{ marginLeft: '10px' }}>/&gt;</span>
					</div>
				);
			}}
		</PageContext.Consumer>
	);
}

export default NameTag;
