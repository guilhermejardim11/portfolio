import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'projects', element: <ProjectsPage /> },
            { path: 'projects/:ID', element: <ProjectPage /> },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
