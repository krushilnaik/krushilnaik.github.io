import anime from 'animejs';
import React, { createRef, useEffect, useRef } from 'react';

import './scss/SkillSet.scss';
import skills from '../json/skills.json';
import { slugify } from '../utils/js/functions';

function SkillSet() {
	/**
	 * @type {React.MutableRefObject<IntersectionObserver>}
	 */
	let observer = useRef(null);

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

		observer.current = new IntersectionObserver(
			() => {
				animationDrivers.current.forEach(animation => animation.play());
			},
			{
				root: document.querySelector('#root'),
				rootMargin: '0px',
				threshold: 0.25
			}
		);

		observer.current.observe(componentRef.current);
	});

	return (
		<section id='what-i-know' ref={componentRef}>
			<div className='content'>
				{skills.map(skillGroup => (
					<div
						key={slugify(skillGroup.group)}
						id={slugify(skillGroup.group)}
						className='skill-group'
					>
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
