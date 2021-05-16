import anime from 'animejs';
import React, { createRef, useEffect, useRef, useState } from 'react';

import './scss/SkillSet.scss';
import skills from '../json/skills.json';
import { slugify } from '../utils/js/functions';

function SkillSet() {
	const [isInViewport, setIsInViewport] = useState(false);

	/**
	 * @type {React.MutableRefObject<anime.AnimeInstance[]>}
	 */
	let animationDrivers = useRef([]);

	/**
	 * @type {React.RefObject<HTMLTableSectionElement>}
	 */
	let componentRef = createRef();

	useEffect(() => {
		animationDrivers.current.push(
			anime({
				targets: `.skill-group h3`,
				duration: 500,
				translateX: [300, 0],
				opacity: [0, 1],
				easing: 'easeOutQuad',
				delay: anime.stagger(200),
				autoplay: false
			})
		);

		for (const group of skills.map(skills => skills.group)) {
			animationDrivers.current.push(
				anime({
					targets: `#${slugify(group)} ul li`,
					duration: 500,
					translateY: [150, 0],
					opacity: [0, 1],
					easing: 'easeOutQuad',
					delay: anime.stagger(100, { start: 500 }),
					autoplay: false
				})
			);
		}

		const getScrollPosition = () => {
			if (document.querySelector('#root').scrollTop >= componentRef.current.getBoundingClientRect().top) {
				setIsInViewport(true);
				document.querySelector('#root').removeEventListener('scroll', getScrollPosition);
			}
		};

		if (!isInViewport) document.querySelector('#root').addEventListener('scroll', getScrollPosition);
	});

	useEffect(() => {
		if (isInViewport) animationDrivers.current.forEach(animation => animation.play());
	}, [isInViewport]);

	return (
		<section id='skill-set' ref={componentRef}>
			<div className='content'>
				{skills.map(skillGroup => (
					<div key={slugify(skillGroup.group)} id={slugify(skillGroup.group)} className='skill-group'>
						<h3>{skillGroup.group}</h3>
						<ul>
							{skillGroup.skills.map(skill => (
								<li key={slugify(skill)}>{skill}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}

export default SkillSet;
