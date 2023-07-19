import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';

import { default as Imoukubo } from './projects/imoukubo';

const projectList = [
	{
		id: 'imoukubo',
		title: 'imoukubo',
		date: new Date(Date.UTC(2012, 11, 20)),
		tags: ['Brand Identity', 'UX/UI', 'Development'],
		thumbnail: Imoukubo.thumbnail,
		colors: Imoukubo.colors,
		content: <Imoukubo.Content />,
	},
	// {
	// 	id: 'ukubo-brand',
	// 	title: 'UKUBO Identity Concept',
	// 	tags: ['Identity'],
	// 	color: '#2F3543',
	// 	thumbnail: ukubo_identity_thumb,
	// 	content: <Page_imoukubo />,
	// },
	// {
	// 	id: 'ukubo',
	// 	title: 'UKUBO',
	// 	tags: ['UX/UI', 'Development'],
	// 	color: '#999999',
	// 	thumbnail: ukubo_thumb,
	// 	content: <imoukubo />,
	// },
	// {
	// 	id: 'melsport',
	// 	title: 'Melsport',
	// 	tags: ['UX/UI', 'Development'],
	// 	color: '#188779',
	// 	thumbnail: melsport_thumb,
	// 	content: <imoukubo />,
	// },
	// {
	// 	id: 'vincera',
	// 	title: 'Team Vincera',
	// 	tags: ['UX/UI', 'Development', 'Product', 'Social Media'],
	// 	color: '#FF7519',
	// 	thumbnail: vincera_thumb,
	// 	content: <imoukubo />,
	// },
	// {
	// 	id: 'padaria-guedes',
	// 	title: 'Padaria Guedes',
	// 	tags: ['Identity'],
	// 	color: '#F7931E',
	// 	thumbnail: padaria_guedes_thumb,
	// 	content: <imoukubo />,
	// },
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
