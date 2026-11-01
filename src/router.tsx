import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Start from './pages/Start';
import SectionPlaceholder from './pages/SectionPlaceholder';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Start /> },
      {
        path: 'pre-assessment',
        element: <SectionPlaceholder sectionId="pre-assessment" />,
      },
      {
        path: 'lesson/1',
        element: <SectionPlaceholder sectionId="lesson-1" />,
      },
      {
        path: 'lesson/2',
        element: <SectionPlaceholder sectionId="lesson-2" />,
      },
      {
        path: 'lesson/3',
        element: <SectionPlaceholder sectionId="lesson-3" />,
      },
      {
        path: 'wrap-up',
        element: <SectionPlaceholder sectionId="wrap-up" />,
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
