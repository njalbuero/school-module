import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Modules from './pages/Modules';
import PreAssessment from './pages/PreAssessment';
import WrapUp from './pages/WrapUp';
import NotFound from './pages/NotFound';
import { SectionGate } from './components/layout/SectionGate';

const Lesson1 = lazy(() => import('./pages/Lesson1'));
const Lesson2 = lazy(() => import('./pages/Lesson2'));
const Lesson3 = lazy(() => import('./pages/Lesson3'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'modules', element: <Modules /> },
      {
        path: 'pre-assessment',
        element: (
          <SectionGate sectionId="pre-assessment">
            <PreAssessment />
          </SectionGate>
        ),
      },
      {
        path: 'lesson/1',
        element: (
          <SectionGate sectionId="lesson-1">
            <Lesson1 />
          </SectionGate>
        ),
      },
      {
        path: 'lesson/2',
        element: (
          <SectionGate sectionId="lesson-2">
            <Lesson2 />
          </SectionGate>
        ),
      },
      {
        path: 'lesson/3',
        element: (
          <SectionGate sectionId="lesson-3">
            <Lesson3 />
          </SectionGate>
        ),
      },
      {
        path: 'wrap-up',
        element: (
          <SectionGate sectionId="wrap-up">
            <WrapUp />
          </SectionGate>
        ),
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
