import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';

import Page_imoukubo from './pages/projects/Page_imoukubo';

import imoukubo_thumb from './assets/projects/imoukubo/thumb.jpg';
import ukubo_thumb from './assets/projects/ukubo/thumb.jpg';
import melsport_thumb from './assets/projects/melsport/thumb.jpg';
import vincera_thumb from './assets/projects/vincera/thumb.jpg';
import padaria_guedes_thumb from './assets/projects/padaria-guedes/thumb.jpg';

const projectList = [
	{
		id: 'imoukubo',
		title: 'imoukubo',
		tags: ['Identity', 'UX/UI', 'Development'],
		color: '#FF7200',
		thumbnail: imoukubo_thumb,
		content: <Page_imoukubo />,
	},
	{
		id: 'ukubo',
		title: 'UKUBO',
		tags: ['UX/UI', 'Development'],
		color: '#999999',
		thumbnail: ukubo_thumb,
		content: <Page_imoukubo />,
	},
	{
		id: 'melsport',
		title: 'Melsport',
		tags: ['UX/UI', 'Development'],
		color: '#188779',
		thumbnail: melsport_thumb,
		content: <Page_imoukubo />,
	},
	{
		id: 'vincera',
		title: 'Team Vincera',
		tags: ['UX/UI', 'Development', 'Product', 'Social Media'],
		color: '#FF7519',
		thumbnail: vincera_thumb,
		content: <Page_imoukubo />,
	},
	{
		id: 'padaria-guedes',
		title: 'Padaria Guedes',
		tags: ['Identity'],
		color: '#F7931E',
		thumbnail: padaria_guedes_thumb,
		content: <Page_imoukubo />,
	},
];

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
						return projectList.find(
							(project) => project.id === params.ID
						);
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
		<RouterProvider router={router} future={{ v7_startTransition: true }} />
	);
};

export default App;
