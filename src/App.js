import { useContext, useEffect } from 'react';
import {
	BrowserRouter,
	Outlet,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuContext } from './context/MenuContext';

import RootLayout from './layouts/Root';

import Footer from './components/Footer/Footer';
import Loading from './components/Animations/Loading';
import Transition from './components/Animations/Transition';

import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';
import SkillsPage from './pages/Skills';
import ErrorPage from './pages/Error';

document.body.setAttribute(
	'data-theme',
	localStorage.getItem('isDarkMode') === '1' ? 'dark' : 'light'
);

const Router = () => {
	const [t, i18n] = useTranslation();
	const location = useLocation();

	const menuContext = useContext(MenuContext);

	useEffect(() => {
		menuContext.onMenuClose();
	}, [location.pathname, i18n.resolvedLanguage]);

	return (
		<AnimatePresence
			initial={false}
			mode='wait'
			onExitComplete={() => {
				window.scrollTo({
					top: 0,
				});
			}}
		>
			<motion.main key={location.pathname}>
				<Transition />

				<RootLayout>
					<Routes location={location}>
						<Route path='/' element={<Outlet />}>
							<Route index={true} element={<HomePage />} exact />
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
							<Route
								path='skills'
								element={<SkillsPage />}
								exact
							/>
							<Route
								path='*'
								element={<ErrorPage status={404} />}
							/>
						</Route>
					</Routes>

					<Footer />
				</RootLayout>
			</motion.main>
		</AnimatePresence>
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
