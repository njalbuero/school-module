import { Link } from 'react-router-dom';
import {
  MODULE,
  MODULE_FACTS,
  PONDER_QUESTIONS,
  PROGRESS_SECTIONS,
} from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/layout/ProgressBar';
import { Icon } from '../components/ui/Icon';

function progressMessage(completed: number, total: number) {
  if (total === 0) {
    return 'Your module is ready when you are.';
  }
  if (completed >= total) {
    return 'You did it — the module is complete. 🎉';
  }
  if (completed === 0) {
    return "You're just getting started.";
  }
  if (completed / total < 0.5) {
    return 'Nice progress — keep the momentum going.';
  }
  return 'Almost there — just a few sections to go.';
}

export default function Home() {
  usePageMeta({ title: 'Home', description: MODULE.about });

  const { completedCount, totalSections, isComplete } = useProgress();
  const percent =
    totalSections === 0 ? 0 : Math.round((completedCount / totalSections) * 100);
  const nextSection = PROGRESS_SECTIONS.find(
    (section) => !isComplete(section.id),
  );
  const isDone = totalSections > 0 && completedCount >= totalSections;
  const cta = isDone
    ? { to: '/module', label: 'Review the module' }
    : completedCount > 0 && nextSection
      ? { to: nextSection.path, label: `Continue: ${nextSection.label}` }
      : null;

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
        <div className="home-card progress-panel">
          <div className="card-head">
            <span className="card-icon" aria-hidden="true">
              <Icon name="target" />
            </span>
            <p className="progress-count">
              <strong>{completedCount}</strong> of {totalSections} sections
              complete
            </p>
            <span className="progress-percent">{percent}%</span>
          </div>
          <ProgressBar
            completed={completedCount}
            total={totalSections}
            showLabel={false}
          />
          <p className="progress-message">
            {progressMessage(completedCount, totalSections)}
          </p>
          {cta ? (
            <Link className="progress-cta" to={cta.to}>
              {cta.label}
              <Icon name="arrow-right" size={16} />
            </Link>
          ) : null}
        </div>
      </section>

      <section className="section" aria-labelledby="ponder-heading">
        <h2 id="ponder-heading" className="section-title">
          Questions to Ponder
        </h2>
        <div className="home-card ponder-panel">
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
