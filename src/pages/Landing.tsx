import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <section className="hero">
      <p className="eyebrow">Masters project</p>
      <h1>Learn a little, build a little.</h1>
      <p className="lead">
        Placeholder tagline for the landing page. Swap this sentence out for a
        short description of what the project actually does.
      </p>
      <div className="hero-actions">
        <Link className="button" to="/modules">
          Browse modules
        </Link>
        <Link className="button button-secondary" to="/about">
          About the project
        </Link>
      </div>
    </section>
  );
}
