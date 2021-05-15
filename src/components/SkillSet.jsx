import React from 'react';

import './scss/SkillSet.scss';

function SkillSet() {
	return (
		<section id='skill-set'>
			<div className='content'>
				<div className='skill-group'>
					<h3>Languages</h3>
					<ul>
						<li>JavaScript</li>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Python 3</li>
						<li>C++</li>
						<li>Java</li>
					</ul>
				</div>
				<div className='skill-group'>
					<h3>Frameworks/Technologies</h3>
					<ul>
						<li>ReactJS</li>
						<li>Angular</li>
						<li>ExpressJS</li>
						<li>NodeJS</li>
						<li>AnimeJS</li>
						<li>Webpack</li>
					</ul>
				</div>

				<div className='skill-group'>
					<h3>Miscellaneous</h3>
					<ul>
						<li>SCSS</li>
						<li>Netlify</li>
						<li>Heroku</li>
						<li>Gatsby</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default SkillSet;
