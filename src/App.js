import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import RootLayout from './layouts/Root';

import Loading from './components/Animations/Loading';
import Header from './components/Header/Header';
import LanguageOverlay from './components/Language/LanguageOverlay';
import Cookies from './components/Cookies/Cookies';
import ScrollTop from './components/UI/ScrollTop';

import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';
import ErrorPage from './pages/Error';

document.body.setAttribute('data-theme', localStorage.getItem('isDarkMode') === '1' ? 'dark' : 'light');

const Router = () => {
	const location = useLocation();

	return (
		<>
			<Header />

			<AnimatePresence
				initial={false}
				mode='popLayout'
			>
				<Routes
					location={location}
					key={location.pathname}
				>
					<Route
						path='/'
						element={<RootLayout />}
					>
						<Route
							index={true}
							element={<HomePage />}
							exact
						/>
						<Route
							path='projects'
							element={<ProjectsPage />}
							exact
						/>
						<Route
							path='projects/:ID'
							element={<ProjectPage />}
							exact
						/>
					</Route>
				</Routes>
			</AnimatePresence>

			<LanguageOverlay />

			<Cookies />

			<ScrollTop
				contentRef={null}
				isScrolled={false}
			/>
		</>
	);
};

const App = () => {
	return (
		<>
			<Loading />

			<BrowserRouter
				basename='/portfolio/'
				future={{ v7_startTransition: true }}
			>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
