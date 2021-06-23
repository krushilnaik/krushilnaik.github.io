import React from 'react';

import './scss/NameTag.scss';

function NameTag() {
	return (
		<div className='header-wrapper'>
			<h1>
				<span>&lt;</span>krushil naik<span style={{ marginLeft: '5px' }}> /&gt;</span>
			</h1>
		</div>
	);
}

export default NameTag;
