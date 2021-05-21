import anime from 'animejs';
import React, { useContext, useEffect, useRef } from 'react';

import './scss/SkillSet.scss';
import skills from '../json/skills.json';
import { slugify } from '../utils/js/functions';
import InView from 'react-intersection-observer';
import { PageContext } from '../utils/js/contexts';

function SkillSet() {
	const { setActivePage } = useContext(PageContext);

	/**
	 * @type {React.MutableRefObject<anime.AnimeInstance[]>}
	 */
	let animationDrivers = useRef([]);

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
	});

	return (
		<InView
			as='section'
			id='what-i-know'
			threshold={0.7}
			onChange={(inView, _entry) => {
				inView && setActivePage('What I know');
				animationDrivers.current.forEach(animation => animation.play());
			}}
		>
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
		</InView>
	);
}

export default SkillSet;
