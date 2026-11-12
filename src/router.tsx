import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Module from './pages/Module';
import PreAssessment from './pages/PreAssessment';
import WrapUp from './pages/WrapUp';
import NotFound from './pages/NotFound';
import { RequireSection } from './components/layout/RequireSection';

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
      { path: 'module', element: <Module /> },
      { path: 'pre-assessment', element: <PreAssessment /> },
      {
        path: 'lesson/1',
        element: (
          <RequireSection id="lesson-1">
            <Lesson1 />
          </RequireSection>
        ),
      },
      {
        path: 'lesson/2',
        element: (
          <RequireSection id="lesson-2">
            <Lesson2 />
          </RequireSection>
        ),
      },
      {
        path: 'lesson/3',
        element: (
          <RequireSection id="lesson-3">
            <Lesson3 />
          </RequireSection>
        ),
      },
      {
        path: 'wrap-up',
        element: (
          <RequireSection id="wrap-up">
            <WrapUp />
          </RequireSection>
        ),
      },
      {
        path: 'references',
        element: (
          <RequireSection id="references">
            <References />
          </RequireSection>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
