import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RootLayout from './layouts/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';

document.body.setAttribute('data-theme', localStorage.getItem('isDarkMode') === '1' ? 'dark' : 'light');

const App = () => {
	return (
		<BrowserRouter
			basename='/portfolio/'
			future={{ v7_startTransition: true }}
		>
			<Routes>
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
					<Route
						path='*'
						element={<ErrorPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
