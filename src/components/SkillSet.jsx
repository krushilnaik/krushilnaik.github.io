import anime from 'animejs';
import React, { useEffect } from 'react';

import './scss/SkillSet.scss';
import skills from '../json/skills.json';
import { slugify } from '../util/js/functions';

function SkillSet() {
	useEffect(() => {
		anime({
			targets: `.skill-group h3`,
			duration: 500,
			translateX: [300, 0],
			opacity: [0, 1],
			easing: 'easeOutQuad',
			delay: anime.stagger(200),
			autoplay: false
		});

		anime({
			targets: '.skill-groups h3::before',
			duration: 300,
			width: ['0', '100%'],
			easing: 'linear',
			delay: 500,
			autoplay: false
		});

		for (const group of skills.map(skills => skills.group)) {
			anime({
				targets: `#${slugify(group)} ul li`,
				duration: 500,
				translateY: [150, 0],
				opacity: [0, 1],
				easing: 'easeOutQuad',
				delay: anime.stagger(100, { start: 500 }),
				autoplay: false
			});
		}
	});

	return (
		<section id='skill-set'>
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
