import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { REFERENCES } from '../content/references';
import { FEEDBACK_SURVEY } from '../content/reflection';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { PageHero } from '../components/layout/PageHero';

type SurveyState = Record<string, string>;

function readDraft<T>(
  drafts: Record<string, string>,
  key: string,
  fallback: T,
): T {
  const raw = drafts[key];

  if (!raw) {
    return fallback;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function References() {
  usePageMeta({
    title: 'References',
    description: 'Sources and further reading used throughout the module.',
  });

  const { state, completedCount, totalSections, saveDraft } = useProgress();
  const moduleComplete = completedCount === totalSections;

  const [survey, setSurvey] = useState<SurveyState>(() =>
    readDraft(state.drafts, FEEDBACK_SURVEY.key, {}),
  );
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [surveyError, setSurveyError] = useState('');

  const handleSurveyChange = (key: string, value: string) => {
    const next = { ...survey, [key]: value };
    setSurvey(next);
    saveDraft(FEEDBACK_SURVEY.key, JSON.stringify(next));

    if (surveyError) {
      setSurveyError('');
    }
  };

  const handleSurveySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const unanswered = FEEDBACK_SURVEY.questions.filter(
      (question) => !survey[question.id],
    );

    if (unanswered.length > 0) {
      setSurveyError('Please answer all three questions before submitting.');
      return;
    }

    saveDraft(FEEDBACK_SURVEY.key, JSON.stringify(survey));
    setSurveySubmitted(true);
    setSurveyError('');
  };

  return (
    <div className="page section-page references-page">
      <PageHero
        eyebrow="Final Page"
        title="References"
        icon="book"
        headingId="references-heading"
        lead="Sources and further reading used throughout this module."
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

      <section className="section" aria-labelledby="feedback-heading">
        <h2 id="feedback-heading" className="section-title">
          Module Feedback
        </h2>
        <div className="feature-card">
          {surveySubmitted ? (
            <div role="status">
              <p className="submitted-title">
                <span aria-hidden="true">✓</span> Thank you for your feedback
              </p>
              <p>Your responses are saved in this browser.</p>
            </div>
          ) : (
            <form onSubmit={handleSurveySubmit} noValidate>
              <p className="section-lead">
                How much do you agree with each statement?
              </p>
              {FEEDBACK_SURVEY.questions.map((question) => (
                <fieldset className="survey-question" key={question.id}>
                  <legend>{question.label}</legend>
                  <div className="survey-scale">
                    {FEEDBACK_SURVEY.scale.map((option) => (
                      <label className="survey-option" key={option.value}>
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={survey[question.id] === option.value}
                          onChange={() =>
                            handleSurveyChange(question.id, option.value)
                          }
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
              {surveyError ? (
                <p className="form-error" role="alert">
                  {surveyError}
                </p>
              ) : null}
              <div className="actions">
                <button type="submit" className="button">
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      </div>

      <nav className="section-nav" aria-label="Section navigation">
        <div className="section-nav-head">
          <p className="section-nav-position">Final page · References</p>
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
