import React from 'react';

import './scss/ProjectPortal.scss';

/**
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
				<a href={deployment} className='deployment'>
					<i className='fas fa-pager'></i>
				</a>
				<a href={source} className='source'>
					<i className='fas fa-file-code'></i>
				</a>
			</div>
		</div>
	);
}

export default ProjectPortal;
