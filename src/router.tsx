import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Modules from './pages/Modules';
import PreAssessment from './pages/PreAssessment';
import WrapUp from './pages/WrapUp';
import NotFound from './pages/NotFound';

const Lesson1 = lazy(() => import('./pages/Lesson1'));
const Lesson2 = lazy(() => import('./pages/Lesson2'));
const Lesson3 = lazy(() => import('./pages/Lesson3'));
const References = lazy(() => import('./pages/References'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'modules', element: <Modules /> },
      { path: 'pre-assessment', element: <PreAssessment /> },
      { path: 'lesson/1', element: <Lesson1 /> },
      { path: 'lesson/2', element: <Lesson2 /> },
      { path: 'lesson/3', element: <Lesson3 /> },
      { path: 'wrap-up', element: <WrapUp /> },
      { path: 'references', element: <References /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
