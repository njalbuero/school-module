import { Link } from 'react-router-dom';
import { MODULE } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta({ title: 'Page not found' });

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">{MODULE.subject}</p>
        <h1 className="page-title" tabIndex={-1} data-page-heading>
          Page not found
        </h1>
        <p className="section-lead">
          That page does not exist. It may have moved, or the link may be
          incomplete.
        </p>
      </header>

      <div className="actions">
        <Link className="button" to="/">
          Back to Start Here
        </Link>
      </div>
    </div>
  );
}
