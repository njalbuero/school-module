import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="page-title">Page not found</h1>
      <p className="page-intro">That page does not exist (yet).</p>
      <Link className="button" to="/">
        Back home
      </Link>
    </section>
  );
}
