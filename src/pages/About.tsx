import { FOREWORD, LEARNING_OUTCOMES, MODULE } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { AuthorCard } from '../components/content/AuthorCard';
import { Placeholder } from '../components/content/Placeholder';

export default function About() {
  usePageMeta({
    title: 'About this module',
    description: MODULE.about,
  });

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1 className="page-title" tabIndex={-1} data-page-heading>
          About this module
        </h1>
        <p className="section-lead">
          {MODULE.subject} · {MODULE.quarter}
        </p>
      </header>

      <section className="section" aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="section-title">
          Module overview
        </h2>
        <div className="prose">
          <p>{MODULE.about}</p>
          <p>
            Estimated workload is roughly three to six hours, depending on how
            much time you spend on the activities and the summative task.
          </p>
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
        <AuthorCard />
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
    </div>
  );
}
