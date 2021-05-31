import React, { useContext } from 'react';

import './scss/SkillSet.scss';
import skills from '../json/skills.json';
import { slugify } from '../utils/js/functions';
import InView from 'react-intersection-observer';
import { PageContext } from '../utils/js/contexts';
import ScrollAnimation from 'react-animate-on-scroll';
import ProjectPortal from '../components/ProjectPortal';

function SkillSet() {
	const { setActivePage } = useContext(PageContext);

	return (
		<InView
			as='section'
			id='what-i-know'
			threshold={0.7}
			onChange={(inView, _entry) => {
				inView && setActivePage('What I know');
			}}
		>
			<div className='content'>
				{skills.map((skillGroup, i) => (
					<div
						key={slugify(skillGroup.group)}
						id={slugify(skillGroup.group)}
						className='skill-group'
					>
						<ScrollAnimation
							animateIn='fadeInRight'
							animateOnce={true}
							delay={i * (500 / skills.length)}
						>
							<h3>{skillGroup.group}</h3>
						</ScrollAnimation>
						<ul>
							{/* Plan to have each of these link both a deployed site using that technology */}
							{/* or the GitHub repo behind the deployed site. Site viewer's choice */}
							{skillGroup.skills.map((skill, j) => (
								<li key={slugify(skill.skill)}>
									<ScrollAnimation
										animateIn='fadeInUp'
										animateOnce={true}
										delay={j * (500 / skillGroup.skills.length) + 100}
									>
										{
											<ProjectPortal
												deployment={skill.deployedSite}
												portalText={skill.skill}
												source={skill.sourceCode}
											/>
										}
									</ScrollAnimation>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</InView>
	);
}

export default SkillSet;
