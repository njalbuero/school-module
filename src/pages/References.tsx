import { Link } from 'react-router-dom';
import { REFERENCES } from '../content/references';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { PageHero } from '../components/layout/PageHero';

const FEEDBACK_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSddXqW-8Dhj2sPIx6f33EvGFOAfY7XDGSpGg2_7wSAd5P4_yw/viewform';

export default function References() {
  usePageMeta({
    title: 'Module Feedback and References',
    description: 'Rate the module and review the sources used throughout.',
  });

  const { completedCount, totalSections } = useProgress();
  const moduleComplete = completedCount === totalSections;

  return (
    <div className="page section-page references-page">
      <PageHero
        eyebrow="Final Page"
        title="Module Feedback and References"
        icon="book"
        headingId="references-heading"
        lead="Rate the module and review the sources used throughout."
      />

      <section className="section" aria-labelledby="completion-heading">
        <h2 id="completion-heading" className="section-title">
          Module Completion
        </h2>
        {moduleComplete ? (
          <div className="submitted-panel" role="status">
            <p className="submitted-title">
              <span aria-hidden="true">✓</span> Module complete
            </p>
            <p>
              You have completed all {totalSections} sections. The references
              below list the sources used throughout the module.
            </p>
          </div>
        ) : (
          <div className="card card-quiet">
            <p className="card-note">
              {completedCount} of {totalSections} sections complete. You can
              read the references now, then{' '}
              <Link to="/module">return to Module Contents</Link> to finish any
              remaining sections.
            </p>
          </div>
        )}
      </section>

      <div className="references-columns">
        <section className="section" aria-labelledby="feedback-heading">
          <h2 id="feedback-heading" className="section-title">
            Module Feedback
          </h2>
          <div className="feature-card">
            <p className="section-lead">
              Please answer the questions in the form below. Your responses go
              directly to Google.
            </p>
            <div className="embed embed-form embed-form-tall">
              <iframe
                src={`${FEEDBACK_FORM_URL}?embedded=true`}
                title="Module feedback form"
                loading="lazy"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
            <p className="field-help">
              If the form does not load,{' '}
              <a
                href={FEEDBACK_FORM_URL}
                target="_blank"
                rel="noreferrer"
              >
                open the form in a new tab
              </a>
              .
            </p>
          </div>
        </section>

        <section className="section" aria-labelledby="references-heading">
          <div className="feature-card references">
            <h2 className="references-group-title">Book</h2>
            <ul className="reference-list">
              {REFERENCES.books.map((reference) => (
                <li
                  className="reference-item"
                  key={`${reference.title}${reference.publication}`}
                >
                  {reference.authors} <em>{reference.title}</em>{' '}
                  {reference.publication}
                </li>
              ))}
            </ul>

            <h2 className="references-group-title">E-resources</h2>
            <ul className="reference-list">
              {REFERENCES.eResources.map((reference) => (
                <li className="reference-item" key={reference.title}>
                  “{reference.title}”{' '}
                  {reference.site ? `${reference.site} ` : ''}
                  {reference.date}
                  {reference.url ? (
                    <>
                      {' '}
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {reference.url}
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <nav className="section-nav" aria-label="Section navigation">
        <div className="section-nav-head">
          <p className="section-nav-position">
            Final page · Module Feedback and References
          </p>
          <div className="section-nav-head-links">
            <Link to="/">Home</Link>
            <Link to="/module">Module Contents</Link>
          </div>
        </div>
        <div className="section-nav-links">
          <Link className="section-nav-link" to="/wrap-up">
            <span className="section-nav-direction">Previous</span>
            <span className="section-nav-title">Wrap-Up</span>
          </Link>
          <span className="section-nav-empty" aria-hidden="true" />
        </div>
      </nav>
    </div>
  );
}
