import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import SkillSet from './components/SkillSet';

import './scss/App.scss';
import { PageContext } from './utils/js/contexts';

function App() {
	const [activePage, setActivePage] = useState('Intro');

	return (
		<PageContext.Provider value={{ activePage, setActivePage }}>
			<header>
				<NavBar />
			</header>

			<main>
				<Intro />
				<AboutMe />
				<SkillSet />
				<ContactForm />
			</main>

			<ScrollToTop />
		</PageContext.Provider>
	);
}

export default App;
