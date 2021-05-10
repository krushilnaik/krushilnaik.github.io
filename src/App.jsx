// import anime from 'animejs';
import React from 'react';
import AboutMe from './components/AboutMe';
// import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';
// import SkillSet from './components/SkillSet';

import './scss/App.scss';

function App() {
	return (
		<main>
			<NavBar />
			<AboutMe />
			{/* <SkillSet /> */}
			{/* <ContactForm /> */}
		</main>
	);
}

export default App;
