import { Link } from 'react-router-dom';
import { MODULE } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { PageHero } from '../components/layout/PageHero';

export default function NotFound() {
  usePageMeta({ title: 'Page not found' });

  return (
    <div className="page">
      <PageHero
        eyebrow={MODULE.subject}
        title="Page not found"
        lead="That page does not exist. It may have moved, or the link may be incomplete."
      />

      <div className="actions">
        <Link className="button" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
