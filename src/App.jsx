import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import SkillSet from './components/SkillSet';

import './scss/App.scss';
import { PageContext } from './utils/js/contexts';

function App() {
	const [activePage, setActivePage] = useState('Intro');

	return (
		<PageContext.Provider value={{ activePage, setActivePage }}>
			<NavBar />
			<main>
				<Intro />
				<AboutMe />
				<SkillSet />
				<ContactForm />
			</main>
		</PageContext.Provider>
	);
}

export default App;
