import anime from 'animejs';
import React, { useEffect, useRef } from 'react';

import '../scss/components/JitterIcon.scss';

/**
 * @param {{
 * 	type: string,
 * 	href: string
 * }} props
 */
function JitterIcon(props) {
	const { href, type } = props;
	const isDemo = type === 'demo';
	const tooltip = isDemo ? 'Demo' : 'Source Code';

	const iconRef = useRef(null);

	/**
	 * @type {React.MutableRefObject<anime.AnimeInstance>}
	 */
	const animationRef = useRef(null);

	/**
	 * @param {React.SyntheticEvent<HTMLAnchorElement>} event
	 */
	const handleClick = event => {
		if (!href) {
			event.preventDefault();
			animationRef.current.play();
		}
	};

	useEffect(() => {
		animationRef.current = anime({
			targets: iconRef.current,
			keyframes: [{ translateX: 0 }, { translateX: -10 }, { translateX: 10 }, { translateX: 0 }],
			easing: 'easeOutInBounce',
			autoplay: false,
			duration: 250
		});
	});

	return (
		<a
			onClick={handleClick}
			href={href}
			className={isDemo ? 'demo' : 'source'}
			rel='noreferrer'
			target='blank'
		>
			<div className='icon-wrapper' data-tooltip={href ? tooltip : `No ${tooltip} available`}>
				<i
					ref={iconRef}
					// id={`${href.slice(-5)}-${type}-icon`}
					className={`fas fa-${isDemo ? 'pager' : 'file-code'}`}
				></i>
			</div>
		</a>
	);
}

export default JitterIcon;
