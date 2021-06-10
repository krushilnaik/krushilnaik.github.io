import React from 'react';
import JitterIcon from './JitterIcon';

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
	console.log(`making Portal for ${portalText} with ${demo}, ${source}`);

	return (
		<div className='portal'>
			<span className='label'>{portalText}</span>
			{demo || source ? (
				<div className='project-links'>
					<JitterIcon href={demo} type='demo' />
					<JitterIcon href={source} type='source' />
				</div>
			) : (
				<span className='no-link'>No Links found</span>
			)}
		</div>
	);
}

export default ProjectPortal;
