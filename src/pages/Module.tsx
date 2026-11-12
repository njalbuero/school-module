import { Link } from 'react-router-dom';
import { MODULE, PROGRESS_SECTIONS, SECTIONS } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/layout/ProgressBar';

export default function Module() {
  usePageMeta({
    title: 'Module',
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
          Module
        </h1>
        <p className="section-lead">
          One module, {SECTIONS.length} sections. {PROGRESS_SECTIONS.length} of
          them count towards your progress — Start Here is the overview and
          References is the final page. You can open any section at any time and
          return to it whenever you like.
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
            const tracked = section.tracked !== false;
            const showLabel = section.label !== section.title;
            const complete = tracked && isComplete(section.id);
            const visited = wasVisited(section.id);
            const status = !tracked
              ? section.id === 'start'
                ? 'Overview'
                : 'Final page'
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
                    {showLabel ? (
                      <span className="section-card-label">
                        {section.label}
                      </span>
                    ) : (
                      <span className="section-card-title">
                        {section.title}
                      </span>
                    )}
                    <span className={`${chipClass} section-card-status`}>
                      {status}
                    </span>
                  </span>
                  {showLabel ? (
                    <span className="section-card-title">
                      {section.title}
                    </span>
                  ) : null}
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
