import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';
import Loading from './components/Loading/Loading';

import { default as Imoukubo } from './projects/imoukubo';
import { default as Melsport } from './projects/melsport';

document.body.setAttribute('data-theme', localStorage.getItem('isDarkMode') === '1' ? 'dark' : 'light');

const projectList = [Imoukubo, Melsport];

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <HomePage />,
					loader: () => {
						return projectList;
					},
				},
				{
					path: 'projects',
					element: <ProjectsPage />,
					loader: () => {
						return projectList;
					},
				},
				{
					path: 'projects/:ID',
					element: <ProjectPage />,
					loader: ({ params }) => {
						return projectList.find((project) => project.id === params.ID);
					},
				},
			],
		},
	],
	{
		basename: '/portfolio/',
	}
);

const App = () => {
	return (
		<>
			<Loading />
			<RouterProvider
				router={router}
				future={{ v7_startTransition: true }}
			/>
		</>
	);
};

export default App;
