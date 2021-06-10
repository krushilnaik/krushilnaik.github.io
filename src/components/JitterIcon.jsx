import anime from 'animejs';
import React, { useEffect, useRef } from 'react';

import './scss/JitterIcon.scss';

/**
 * @param {{
 * 	type: string,
 * 	href: string
 * }} props
 */
function JitterIcon(props) {
	const { href, type } = props;
	const isDemo = type === 'demo';
	const tooltip = isDemo ? 'Live Preview' : 'Source Code';

	console.log(`Making JitterIcon linked to ${href}`);

	const animationRef = useRef(null);

	useEffect(() => {
		animationRef.current = anime({
			//
		});
	});

	return (
		<a href={href} className={isDemo ? 'demo' : 'source'} rel='noreferrer' target='_blank'>
			<div className='icon-wrapper' data-tooltip={href ? tooltip : `No ${tooltip} available`}>
				<i
					// id={`${href.slice(-5)}-${type}-icon`}
					className={`fas fa-${isDemo ? 'pager' : 'file-code'}`}
				></i>
			</div>
		</a>
	);
}

export default JitterIcon;
