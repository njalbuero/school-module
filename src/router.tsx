import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Landing from './pages/Landing';
import About from './pages/About';
import Modules from './pages/Modules';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'modules', element: <Modules /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
