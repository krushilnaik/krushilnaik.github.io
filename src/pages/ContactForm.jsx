import emailjs from 'emailjs-com';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import InView from 'react-intersection-observer';
import Airplane from '../components/Airplane';
import Links from '../components/Links';

import './scss/ContactForm.scss';
import '../components/scss/Input.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import { usePage } from '../hooks/usePage';

const errorColor = 'tomato';

function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const { setActivePage } = usePage();

	/**
	 * Reference to name field's wrapper div
	 * @type {React.MutableRefObject<HTMLDivElement>}
	 */
	const nameRef = useRef(null);

	/**
	 * Reference to email field's wrapper div
	 * @type {React.MutableRefObject<HTMLDivElement>}
	 */
	const emailRef = useRef(null);

	/**
	 * Reference to message field's wrapper div
	 * @type {React.MutableRefObject<HTMLDivElement>}
	 */
	const messageRef = useRef(null);

	/**
	 * Reference to forms's submit button
	 * @type {React.MutableRefObject<HTMLButtonElement>}
	 */
	const submitRef = useRef(null);

	/**
	 * Reference to form element
	 * @type {React.MutableRefObject<HTMLFormElement>}
	 */
	const formRef = useRef(null);

	/**
	 * Send out the email
	 * @param {React.SyntheticEvent<HTMLButtonElement>} event
	 */
	const handleFormSubmit = async event => {
		event.preventDefault();

		let formInvalid = false;

		if (!name) {
			formInvalid = true;
			nameRef.current.classList.add('invalid');
			submitRef.current.classList.add('invalid');
		}

		if (!email) {
			formInvalid = true;
			emailRef.current.classList.add('invalid');
			submitRef.current.classList.add('invalid');
		}

		if (!message) {
			formInvalid = true;
			messageRef.current.classList.add('invalid');
			submitRef.current.classList.add('invalid');
		}

		if (formInvalid) {
			setTimeout(() => {
				nameRef.current.classList.remove('invalid');
				emailRef.current.classList.remove('invalid');
				messageRef.current.classList.remove('invalid');
				submitRef.current.classList.remove('invalid');
			}, 450);

			return;
		}

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

		emailjs.send(
			'krushil_gmail',
			'dotdev',
			{ name, email, message },
			'user_xw0CXtf9Bu7mFYEIRWArv'
		);
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
				<div className='contact-info'>
					<h4>Find me on...</h4>

					<ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={2}>
						<img className='avatar' src='assets/images/avatar.png' alt='crucial avatar' />
					</ScrollAnimation>

					<ul>
						<li>
							<ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
								{/* GPS icon */}
								<i className='fas fa-map-marker-alt'></i>
								<span>New Jersey, USA</span>
							</ScrollAnimation>
						</li>

						<li>
							<ScrollAnimation animateIn='fadeInUp' animateOnce={true} delay={200}>
								{/* Email icon */}
								<i className='fas fa-envelope'></i>
								<a href='mailto:krushilnaik96@gmail.com'>krushilnaik96@gmail.com</a>
							</ScrollAnimation>
						</li>

						<li>
							<ScrollAnimation animateIn='fadeInUp' animateOnce={true} delay={400}>
								{/* Some other third one */}
								<i className='fas fa-file'></i>
								<a href='assets/docs/Krushil_Naik_Resume.pdf' download>
									Resume
								</a>
							</ScrollAnimation>
						</li>
					</ul>

					<ScrollAnimation animateIn='fadeIn' animateOnce={true} duration={2}>
						<Links />
					</ScrollAnimation>
				</div>

				<h3>...or leave a message here</h3>

				<Airplane />

				{/* <Input id='name-field' placeholder='Name:' /> */}
				{/* <Input id='email-field' placeholder='Email:' /> */}
				{/* <Input type='textarea' id='message-field' placeholder='Message:' /> */}

				<div
					id='name-field'
					ref={nameRef}
					className={`input-wrapper ${name === '' ? '' : 'filled'}`.trim()}
					placeholder={`Name:${name ? '' : '*'}`}
					style={{ color: name ? 'honeydew' : errorColor }}
				>
					<input
						type='text'
						required={true}
						defaultValue={name}
						onChange={event => setName(event.currentTarget.value)}
					/>
				</div>

				<div
					id='email-field'
					ref={emailRef}
					className={`input-wrapper ${email === '' ? '' : 'filled'}`.trim()}
					placeholder={`Email:${email ? '' : '*'}`}
					style={{ color: email ? 'honeydew' : errorColor }}
				>
					<input
						type='text'
						required={true}
						defaultValue={email}
						onChange={event => setEmail(event.currentTarget.value)}
					/>
				</div>

				<div
					id='message-field'
					ref={messageRef}
					className={`input-wrapper ${message === '' ? '' : 'filled'}`.trim()}
					placeholder={`Message:${message ? '' : '*'}`}
					style={{ color: message ? 'honeydew' : errorColor }}
				>
					<textarea
						cols={30}
						rows={15}
						required={true}
						onChange={event => setMessage(event.currentTarget.value)}
					/>
				</div>

				<button type='submit' onClick={handleFormSubmit} ref={submitRef}>
					Submit
				</button>
			</form>
		</InView>
	);
}

export default ContactForm;
