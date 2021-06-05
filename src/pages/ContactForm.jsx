// import emailjs from 'emailjs-com';
import gsap from 'gsap';
import React, { useContext, useRef, useState } from 'react';
import InView from 'react-intersection-observer';
import { PageContext } from '../utils/js/contexts';
import Airplane from '../components/Airplane';
import Links from '../components/Links';

import './scss/ContactForm.scss';
import '../components/scss/Input.scss';

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
	 * - TODO: don't submit form if any fields aren't filled out
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const handleFormSubmit = async event => {
		event.preventDefault();

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

				{/* <Input id='name-field' placeholder='Name:' /> */}
				{/* <Input id='email-field' placeholder='Email:' /> */}
				{/* <Input type='textarea' id='message-field' placeholder='Message:' /> */}

				<div
					id='name-field'
					className={`input-wrapper ${name === '' ? '' : 'filled'}`.trim()}
					placeholder='Name:'
				>
					<input
						type='text'
						defaultValue={name}
						onChange={event => setName(event.currentTarget.value)}
					/>
				</div>
				<div
					id='email-field'
					className={`input-wrapper ${email === '' ? '' : 'filled'}`.trim()}
					placeholder='Email:'
				>
					<input
						type='text'
						defaultValue={email}
						onChange={event => setEmail(event.currentTarget.value)}
					/>
				</div>
				<div
					id='message-field'
					className={`input-wrapper ${message === '' ? '' : 'filled'}`.trim()}
					placeholder='Message:'
				>
					<textarea
						cols={30}
						rows={15}
						onChange={event => setMessage(event.currentTarget.value)}
					/>
				</div>

				<button type='submit' onClick={handleFormSubmit}>
					Submit
				</button>
			</form>

			<Links />
		</InView>
	);
}

export default ContactForm;
