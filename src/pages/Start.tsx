import { Link } from 'react-router-dom';
import {
  AUTHOR,
  FOREWORD,
  LEARNING_OUTCOMES,
  MODULE,
  SECTIONS,
} from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/layout/ProgressBar';
import { Placeholder } from '../components/content/Placeholder';

function AuthorPhoto() {
  return (
    <figure className="author-photo">
      <div className="avatar" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="48" height="48" focusable="false">
          <circle cx="32" cy="24" r="12" fill="currentColor" opacity="0.55" />
          <path
            d="M10 58c0-12 10-20 22-20s22 8 22 20"
            fill="currentColor"
            opacity="0.35"
          />
        </svg>
      </div>
      <figcaption>Photo not supplied</figcaption>
    </figure>
  );
}

export default function Start() {
  usePageMeta({
    title: 'Start Here',
    description: MODULE.about,
  });

  const { completedCount, totalSections, isComplete, wasVisited } = useProgress();

  return (
    <div className="page">
      <header className="page-header hero">
        <p className="eyebrow">{MODULE.subject}</p>
        <p className="eyebrow eyebrow-muted">{MODULE.quarter}</p>
        <h1 className="page-title hero-title" tabIndex={-1} data-page-heading>
          {MODULE.title}
        </h1>
        <p className="hero-lead">{MODULE.intro}</p>

        <div className="actions">
          <Link className="button" to="/pre-assessment">
            Start the module
          </Link>
          <a className="button button-secondary" href="#module-contents">
            See all sections
          </a>
        </div>
        <p className="hero-note">
          Begins with a short pre-assessment. Not graded — it only shows what you
          already know.
        </p>
      </header>

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your progress
        </h2>
        <div className="card card-quiet">
          <ProgressBar completed={completedCount} total={totalSections} />
          <p className="card-note">
            Saved in this browser on this device. Nothing is sent to a server.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-title">
          About this module
        </h2>
        <div className="prose">
          <p>{MODULE.about}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading" className="section-title">
          Module learning outcomes
        </h2>
        <p className="section-lead">By the end of this module, you should be able to:</p>
        <ol className="outcome-list">
          {LEARNING_OUTCOMES.map((outcome) => (
            <li key={outcome.id}>{outcome.text}</li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="author-heading">
        <h2 id="author-heading" className="section-title">
          About the author
        </h2>
        <div className="card author">
          <AuthorPhoto />

          <div className="author-body">
            <h3 className="author-name">
              {AUTHOR.name ?? '[Author name — to be supplied]'}
            </h3>

            {AUTHOR.bio ? (
              <p>{AUTHOR.bio}</p>
            ) : (
              <Placeholder label="Biography — placeholder">
                <p>
                  A short biography of the author belongs here. It has not been
                  supplied yet, and one is not written on the author&apos;s
                  behalf.
                </p>
              </Placeholder>
            )}

            <h4 className="author-subheading">Educational background</h4>
            <ol className="education-list">
              {AUTHOR.education.map((entry) => (
                <li key={entry.programme}>
                  <span className="education-programme">{entry.programme}</span>
                  {entry.year ? (
                    <span className="education-year"> · {entry.year}</span>
                  ) : null}
                  <span className="education-institution">
                    {entry.institution}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="foreword-heading">
        <h2 id="foreword-heading" className="section-title">
          Foreword
        </h2>
        {FOREWORD ? (
          <div className="prose">
            {FOREWORD.split('\n\n').map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <Placeholder label="Foreword — placeholder">
            <p>
              This space is reserved for the module foreword. It has not been
              supplied, so no official statement is shown here.
            </p>
          </Placeholder>
        )}
      </section>

      <section className="section" id="module-contents" aria-labelledby="contents-heading">
        <h2 id="contents-heading" className="section-title">
          Module contents
        </h2>
        <p className="section-lead">
          You can move through the module in order or jump to any section. Nothing
          is locked.
        </p>

        <ol className="section-list">
          {SECTIONS.map((section) => {
            const complete = isComplete(section.id);
            const visited = wasVisited(section.id);
            const status = complete
              ? 'Complete'
              : visited
                ? 'In progress'
                : 'Not started';

            return (
              <li key={section.id}>
                <Link className="section-card" to={section.path}>
                  <span className="section-card-head">
                    <span className="section-card-label">{section.label}</span>
                    <span
                      className={
                        complete
                          ? 'chip chip-done'
                          : visited
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
      </section>
    </div>
  );
}
