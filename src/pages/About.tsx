import { ABOUT_PROJECT, LEARNING_OUTCOMES, MODULE } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { AuthorCard } from '../components/content/AuthorCard';
import { Placeholder } from '../components/content/Placeholder';
import { LearningSequence } from '../components/content/LearningSequence';

export default function About() {
  usePageMeta({
    title: 'About this Module',
    description: MODULE.about,
  });

  return (
    <div className="page about-page">
      <header className="page-header">
        <p className="eyebrow">About</p>
        <h1 className="page-title" tabIndex={-1} data-page-heading>
          About this Module
        </h1>
        <p className="section-lead">
          {MODULE.subject} · {MODULE.quarter}
        </p>
      </header>

      <section className="section" aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="section-title">
          Module Overview
        </h2>
        <div className="card">
          <div className="prose">
            <p>{MODULE.about}</p>
            <p>
              Estimated workload is roughly three to six hours, depending on how
              much time you spend on the activities and the summative task.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading" className="section-title">
          Module Learning Outcomes
        </h2>
        <div className="card">
          <p className="section-lead">By the end of this module, you should be able to:</p>
          <ol className="outcome-list">
            {LEARNING_OUTCOMES.map((outcome) => (
              <li key={outcome.id}>{outcome.text}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="sequence-heading">
        <h2 id="sequence-heading" className="section-title">
          Learning Sequence
        </h2>
        <div className="card">
          <LearningSequence />
        </div>
      </section>

      <section className="section" aria-labelledby="author-heading">
        <h2 id="author-heading" className="section-title">
          About the Author
        </h2>
        <AuthorCard />
      </section>

      <section className="section" aria-labelledby="about-project-heading">
        <h2 id="about-project-heading" className="section-title">
          About This Project
        </h2>
        {ABOUT_PROJECT ? (
          <div className="card">
            <div className="prose">
              {ABOUT_PROJECT.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : (
          <Placeholder label="About This Project — placeholder">
            <p>
              This space is reserved for the project background. It has not been
              supplied, so no official statement is shown here.
            </p>
          </Placeholder>
        )}
      </section>
    </div>
  );
}
