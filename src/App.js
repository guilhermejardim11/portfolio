import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';

import Page_imoukubo from './pages/projects/Page_imoukubo';
import imoukubo_thumb from './assets/projects/imoukubo/imoukubo_1.jpg';

const projectList = {
    imoukubo: {
        title: 'imoukubo',
        tags: ['Brand Identity', 'UX/UI', 'Web Dev'],
        thumbnail: imoukubo_thumb,
        content: <Page_imoukubo />,
    },
    melsport: {
        title: 'Melsport',
        thumbnail:
            'https://www.ukubo.com/wp-content/uploads/2021/05/project-melsport-image4-1.jpg',
    },
    imoukubo_2: {
        title: 'imoukubo 2',
        thumbnail:
            'https://www.ukubo.com/wp-content/uploads/2021/05/project-imoukubo-image2-600x211.jpg',
    },
    imoukubo_3: {
        title: 'imoukubo 3',
        thumbnail:
            'https://www.ukubo.com/wp-content/uploads/2021/05/project-imoukubo-image4-600x281.jpg',
    },
};

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
                    return projectList[params.ID];
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
