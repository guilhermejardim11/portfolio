import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';

import Page_imoukubo from './pages/projects/Page_imoukubo';
import imoukubo_thumb from './assets/projects/imoukubo/imoukubo_1.jpg';

const projectList = [
	{
		id: 'imoukubo',
		title: 'imoukubo',
		tags: ['Brand Identity', 'UX/UI', 'Web Dev'],
		color: '#FF7200',
		thumbnail: imoukubo_thumb,
		content: <Page_imoukubo />,
	},
];

const router = createBrowserRouter([
	{
		path: '/portfolio/',
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
]);

const App = () => {
	return (
		<RouterProvider router={router} future={{ v7_startTransition: true }} />
	);
};

export default App;
