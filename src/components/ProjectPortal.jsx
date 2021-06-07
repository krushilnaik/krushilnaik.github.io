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
					<i className='fas fa-pager' data-tooltip='Live Preview'></i>
				</a>
				<a href={source} className='source' rel='noreferrer' target='_blank'>
					<i className='fas fa-file-code' data-tooltip='Source Code'></i>
				</a>
			</div>
		</div>
	);
}

export default ProjectPortal;
