import React from 'react';

import './scss/SkillSet.scss';
import skills from '../json/skills.json';
import { slugify } from '../util/js/functions';

function SkillSet() {
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
