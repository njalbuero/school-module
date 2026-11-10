import { Link } from 'react-router-dom';
import { MODULE, SECTIONS } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/layout/ProgressBar';

export default function Modules() {
  usePageMeta({
    title: 'Modules',
    description:
      'All sections of the module, with your progress and completion status.',
  });

  const { completedCount, totalSections, isComplete, wasVisited } =
    useProgress();

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">{MODULE.subject}</p>
        <h1 className="page-title" tabIndex={-1} data-page-heading>
          Modules
        </h1>
        <p className="section-lead">
          One module, {SECTIONS.length} sections. {SECTIONS.length - 1} of them
          count towards your progress — Start Here is just the overview. You can
          open any section at any time and return to it whenever you like.
        </p>
      </header>

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your Progress
        </h2>
        <div className="card card-quiet">
          <ProgressBar completed={completedCount} total={totalSections} />
          <p className="card-note">
            Module progress and drafts are saved in this browser. Every section
            is available, so you can work through them in any order.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="sections-heading">
        <h2 id="sections-heading" className="section-title">
          All Sections
        </h2>

        <ol className="section-list">
          {SECTIONS.map((section) => {
            const tracked = section.id !== 'start';
            const complete = tracked && isComplete(section.id);
            const visited = wasVisited(section.id);
            const status = !tracked
              ? 'Overview'
              : complete
                ? 'Complete'
                : visited
                  ? 'In progress'
                  : 'Not started';
            const chipClass = !tracked
              ? 'chip'
              : complete
                ? 'chip chip-done'
                : visited
                  ? 'chip chip-progress'
                  : 'chip';

            return (
              <li key={section.id}>
                <Link className="section-card" to={section.path}>
                  <span className="section-card-head">
                    <span className="section-card-label">{section.label}</span>
                    <span className={chipClass}>{status}</span>
                  </span>
                  <span className="section-card-title">{section.title}</span>
                  <span className="section-card-description">
                    {section.description}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>

        <div className="actions">
          <Link className="button" to="/pre-assessment">
            {isComplete('pre-assessment')
              ? 'Review Pre-assessment'
              : 'Start with the Pre-assessment'}
          </Link>
        </div>
      </section>
    </div>
  );
}
