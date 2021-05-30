// import emailjs from 'emailjs-com';
import gsap from 'gsap';
import React, { useContext, useRef, useState } from 'react';
import InView from 'react-intersection-observer';
import { PageContext } from '../utils/js/contexts';
import { randomFrom } from '../utils/js/functions';
import Airplane from './Airplane';
import Links from './Links';

import './scss/ContactForm.scss';

const submitButtonOptions = [
	'Send carrier pigeon',
	'Upload node_modules',
	'Text your crush (me)',
	'Poke my shoulder',
	'Form blood-pact',
	'Tell me about it',
	"Let's taco bout it"
];

const buttonText = randomFrom(submitButtonOptions);

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const { setActivePage } = useContext(PageContext);

	/**
	 * @type {React.MutableRefObject<HTMLFormElement>}
	 */
	const formRef = useRef(null);

	/**
	 * Send out the email
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const handleFormSubmit = async event => {
		event.preventDefault();
		console.log('Handling form submit...');

		let { current: form } = formRef;
		let plane = form.querySelector('.airplane');

		/**
		 * @param {string} variable
		 */
		const getVar = variable => getComputedStyle(form).getPropertyValue(variable);

		Array.from(form.querySelectorAll('*')).forEach(input => {
			input.setAttribute('disabled', 'true');
		});

		form.classList.add('submitted');

		if (!plane.classList.contains('active')) {
			plane.classList.add('active');

			gsap.to(plane, {
				keyframes: [
					{
						'--left-wing-first-x': 50,
						'--left-wing-first-y': 100,
						'--right-wing-second-x': 50,
						'--right-wing-second-y': 100,
						duration: 0.1
					},
					{
						'--left-wing-third-x': 20,
						'--left-wing-third-y': 90,
						'--left-wing-second-y': 90,
						'--left-body-third-y': 90,
						'--right-wing-third-x': 80,
						'--right-wing-third-y': 90,
						'--right-body-third-y': 90,
						'--right-wing-second-y': 90,
						duration: 0.1
					},
					{
						'--rotate': 50,
						'--left-wing-third-y': 95,
						'--left-wing-third-x': 27,
						'--right-body-third-x': 45,
						'--right-wing-second-x': 45,
						'--right-wing-third-x': 60,
						'--right-wing-third-y': 83,
						duration: 0.15
					},
					{
						'--rotate': 55,
						'--plane-x': -8,
						'--plane-y': 24,
						duration: 0.1
					},
					{
						'--plane-x': 150,
						'--plane-y': -500,
						'--plane-opacity': 0,
						duration: 0.2
					}
				]
			});

			gsap.to(plane, {
				keyframes: [
					{
						'--text-opacity': 0,
						'--border-radius': 0,
						'--left-wing-background': getVar('--primary-darkest'),
						'--right-wing-background': getVar('--primary-darkest'),
						duration: 0.1
					},
					{
						'--left-wing-background': getVar('--primary'),
						'--right-wing-background': getVar('--primary'),
						duration: 0.1
					},
					{
						'--left-body-background': getVar('--primary-dark'),
						'--right-body-background': getVar('--primary-darkest'),
						duration: 0.2
					}
				]
			});
		}

		// emailjs.send(
		// 	'krushil_gmail',
		// 	'dotdev',
		// 	{ name, email, message },
		// 	'user_xw0CXtf9Bu7mFYEIRWArv'
		// );
	};

	return (
		<InView
			as='section'
			id='how-to-find-me'
			threshold={0.7}
			onChange={(inView, _entry) => {
				inView && setActivePage('How to find me');
			}}
		>
			<form ref={formRef}>
				<h3>Caught your attention?</h3>

				<Airplane />

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

				<button type='submit' onClick={handleFormSubmit}>
					{buttonText}
				</button>
			</form>

			<Links />
		</InView>
	);
}

export default ContactForm;
