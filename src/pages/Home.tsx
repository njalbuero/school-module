import { Link } from 'react-router-dom';
import { MODULE, MODULE_FACTS, PONDER_QUESTIONS } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { ProgressCard } from '../components/layout/ProgressCard';
import { Icon } from '../components/ui/Icon';

export default function Home() {
  usePageMeta({ title: 'Home', description: MODULE.about });

  return (
    <div className="page home">
      <header className="home-hero">
        <div className="home-hero-inner">
          <p className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {MODULE.moduleLabel}
          </p>
          <h1 className="home-hero-title" tabIndex={-1} data-page-heading>
            {MODULE.title}
          </h1>
          <p className="home-hero-lead">{MODULE.intro}</p>

          <div className="hero-actions">
            <Link
              className="hero-button hero-button-primary"
              to="/pre-assessment"
            >
              <Icon name="play" size={20} />
              Start Learning
            </Link>
            <Link className="hero-button hero-button-secondary" to="/module">
              Browse the module
              <Icon name="arrow-right" size={18} />
            </Link>
          </div>

          <ul className="hero-meta">
            {MODULE_FACTS.map((fact) => (
              <li key={fact} className="hero-chip">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your Progress
        </h2>
        <ProgressCard />
      </section>

      <section className="section" aria-labelledby="ponder-heading">
        <h2 id="ponder-heading" className="section-title">
          Questions to Ponder
        </h2>
        <div className="feature-card ponder-panel">
          <div className="card-head">
            <span className="card-icon" aria-hidden="true">
              <Icon name="lightbulb" />
            </span>
            <p className="ponder-lead">
              Keep these in mind before you begin — they will guide your reading,
              discussion, and reflection.
            </p>
          </div>
          <ol className="ponder-list">
            {PONDER_QUESTIONS.map((question, index) => (
              <li key={question}>
                <span className="ponder-number" aria-hidden="true">
                  {index + 1}
                </span>
                <span>{question}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
