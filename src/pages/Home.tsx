import { Link } from 'react-router-dom';
import { MODULE, MODULE_FACTS, PONDER_QUESTIONS } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/layout/ProgressBar';
import { StatStrip } from '../components/home/StatStrip';
import { HowItWorks } from '../components/home/HowItWorks';
import { SectionPreview } from '../components/home/SectionPreview';
import { Icon } from '../components/ui/Icon';

function progressMessage(completed: number, total: number) {
  if (total === 0) {
    return 'Your module is ready when you are.';
  }
  if (completed >= total) {
    return 'You did it — the module is complete. 🎉';
  }
  if (completed === 0) {
    return "You're just getting started. Jump in below.";
  }
  if (completed / total < 0.5) {
    return 'Nice progress — keep the momentum going.';
  }
  return 'Almost there — just a few sections to go.';
}

export default function Home() {
  usePageMeta({ title: 'Home', description: MODULE.about });

  const { completedCount, totalSections } = useProgress();

  return (
    <div className="page home">
      <header className="home-hero">
        <div className="home-hero-inner">
          <p className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {MODULE.moduleLabel}
          </p>
          <h1
            className="home-hero-title"
            tabIndex={-1}
            data-page-heading
          >
            {MODULE.title}
          </h1>
          <p className="home-hero-lead">{MODULE.intro}</p>

          <div className="hero-actions">
            <Link className="hero-button hero-button-primary" to="/pre-assessment">
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
              <li key={fact.id} className="hero-chip">
                {fact.value}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <StatStrip />

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your Progress
        </h2>
        <div className="progress-panel">
          <div className="progress-count">
            <strong>{completedCount}</strong>
            <span>of {totalSections} sections</span>
          </div>
          <div className="progress-detail">
            <ProgressBar
              completed={completedCount}
              total={totalSections}
              showLabel={false}
            />
            <p className="progress-message">
              {progressMessage(completedCount, totalSections)}
            </p>
            <Link className="progress-link" to="/module">
              View all sections
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ponder-heading">
        <h2 id="ponder-heading" className="section-title">
          Questions to Ponder
        </h2>
        <div className="ponder-panel">
          <div className="ponder-head">
            <span className="ponder-icon" aria-hidden="true">
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

      <section className="section" aria-labelledby="how-heading">
        <h2 id="how-heading" className="section-title">
          How the Module Works
        </h2>
        <p className="section-lead">
          Four steps take you from a quick check to your final reflection.
        </p>
        <HowItWorks />
      </section>

      <section className="section" aria-labelledby="sections-heading">
        <h2 id="sections-heading" className="section-title">
          Explore the Sections
        </h2>
        <p className="section-lead">
          Jump straight into any part of the module — they are all open.
        </p>
        <SectionPreview />
      </section>
    </div>
  );
}
