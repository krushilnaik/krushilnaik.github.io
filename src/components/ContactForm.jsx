import { sample } from 'lodash';
import React, { useContext, useState } from 'react';
import InView from 'react-intersection-observer';
import { PageContext } from '../utils/js/contexts';
import Links from './Links';

import './scss/ContactForm.scss';

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const { setActivePage } = useContext(PageContext);

	const submitButtonOptions = [
		'Send carrier pigeon',
		'Upload node_modules',
		'Text your crush (me)',
		'Poke my shoulder',
		'Form blood-pact',
		'Tell me about it'
	];

	return (
		<InView
			as='section'
			id='how-to-find-me'
			threshold={0.7}
			onChange={(inView, _entry) => {
				inView && setActivePage('How to find me');
			}}
		>
			<form action='POST'>
				<h3>Caught your attention?</h3>

				<div id='name-field' className='input-wrapper'>
					<input
						type='text'
						name='name'
						placeholder='Name:'
						defaultValue={name}
						onChange={event => setName(event.currentTarget.value)}
					/>
				</div>
				<div id='email-field' className='input-wrapper'>
					<input
						type='email'
						name='email'
						placeholder='Email:'
						defaultValue={email}
						onChange={event => setEmail(event.currentTarget.value)}
					/>
				</div>
				<div id='message-field' className='input-wrapper'>
					<textarea
						name='message'
						cols={30}
						rows={10}
						placeholder='Message:'
						defaultValue={message}
						onChange={event => setMessage(event.currentTarget.value)}
					/>
				</div>
				<button type='submit'>{sample(submitButtonOptions)}</button>
			</form>

			<Links />
		</InView>
	);
}

export default ContactForm;
