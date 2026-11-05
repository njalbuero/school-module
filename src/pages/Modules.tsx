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

  const { completedCount, totalSections, isComplete, wasVisited } = useProgress();

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">{MODULE.subject}</p>
        <h1 className="page-title" tabIndex={-1} data-page-heading>
          Modules
        </h1>
        <p className="section-lead">
          One module, {SECTIONS.length} sections. Five of them count towards your
          progress — Start Here is just the overview. Move through them in order
          or jump straight to the part you need; nothing is locked.
        </p>
      </header>

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your Progress
        </h2>
        <div className="card card-quiet">
          <ProgressBar completed={completedCount} total={totalSections} />
          <p className="card-note">
            Saved in this browser on this device. Nothing is sent to a server.
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

            return (
              <li key={section.id}>
                <Link className="section-card" to={section.path}>
                  <span className="section-card-head">
                    <span className="section-card-label">
                      {section.number} · {section.label}
                    </span>
                    <span
                      className={
                        complete
                          ? 'chip chip-done'
                          : tracked && visited
                            ? 'chip chip-progress'
                            : 'chip'
                      }
                    >
                      {status}
                    </span>
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
            Start with the Pre-assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
