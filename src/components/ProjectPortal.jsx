import React from 'react';

import './scss/ProjectPortal.scss';

/**
 * - TODO: add icon jittering if there's no project using that skill on GitHub
 * @param {{
 * 	deployment: string,
 * 	source: string,
 * 	portalText: string
 * }} props
 */
function ProjectPortal(props) {
	const { deployment, source, portalText } = props;

	return (
		<div className='portal'>
			<span>{portalText}</span>
			<div className='project-links'>
				<a href={deployment} className='deployment' rel='noreferrer' target='_blank'>
					<i className='fas fa-pager'></i>
				</a>
				<a href={source} className='source' rel='noreferrer' target='_blank'>
					<i className='fas fa-file-code'></i>
				</a>
			</div>
		</div>
	);
}

export default ProjectPortal;
