import { sample } from 'lodash';
import React, { useState } from 'react';
import Links from './Links';

import './scss/ContactForm.scss';

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const submitButtonOptions = [
		'Send carrier pigeon',
		'Upload node_modules',
		'Text your crush (me)',
		'Poke my shoulder',
		'Form blood-pact',
		'Tell me about it'
	];

	return (
		<section id='contact-form'>
			<form action='POST'>
				<h3>Caught your attention?</h3>

				<div id='name' className='input-wrapper'>
					<input
						type='text'
						name='name'
						// id='name'
						placeholder='Name:'
						defaultValue={name}
						onChange={event => setName(event.currentTarget.value)}
					/>
				</div>
				<div id='email' className='input-wrapper'>
					<input
						type='email'
						name='email'
						// id='email'
						placeholder='Email:'
						defaultValue={email}
						onChange={event => setEmail(event.currentTarget.value)}
					/>
				</div>
				<div id='message' className='input-wrapper'>
					<textarea
						name='message'
						// id='message'
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
		</section>
	);
}

export default ContactForm;
