import React from 'react';

import './scss/ProjectPortal.scss';

/**
 * - TODO: add icon jittering if there's no project using that skill on GitHub
 * @param {{
 * 	demo: string,
 * 	source: string,
 * 	portalText: string
 * }} props
 */
function ProjectPortal(props) {
	const { demo, source, portalText } = props;

	return (
		<div className='portal'>
			<span>{portalText}</span>
			<div className='project-links'>
				<a href={demo} className='demo' rel='noreferrer' target='_blank'>
					<div className='icon-wrapper' data-tooltip='Live Preview'>
						<i className='fas fa-pager'></i>
					</div>
				</a>

				<a href={source} className='source' rel='noreferrer' target='_blank'>
					<div className='icon-wrapper' data-tooltip='Source Code'>
						<i className='fas fa-file-code'></i>
					</div>
				</a>
			</div>
		</div>
	);
}

export default ProjectPortal;
