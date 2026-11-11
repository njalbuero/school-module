import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { REFERENCES } from '../content/references';
import { FEEDBACK_SURVEY } from '../content/reflection';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';

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

function ReferencesIcon() {
  return (
    <svg
      className="references-icon"
      aria-hidden="true"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6.5C10.5 5.2 8.6 4.5 6.5 4.5H4v14h2.5c2.1 0 4 .7 5.5 2 1.5-1.3 3.4-2 5.5-2H20v-14h-2.5c-2.1 0-4 .7-5.5 2Z" />
      <path d="M12 6.5v14" />
    </svg>
  );
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
    <div className="page references-page">
      <header className="page-header">
        <p className="eyebrow">Final Page</p>
        <h1
          id="references-heading"
          className="page-title references-title"
          tabIndex={-1}
          data-page-heading
        >
          <ReferencesIcon />
          References
        </h1>
        <p className="section-lead">
          Sources and further reading used throughout this module.
        </p>
      </header>

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
              <Link to="/modules">return to Module Contents</Link> to finish any
              remaining sections.
            </p>
          </div>
        )}
      </section>

      <section className="section" aria-labelledby="references-heading">
        <div className="card references">
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
        <div className="card">
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

      <nav className="section-nav" aria-label="Section navigation">
        <div className="section-nav-head">
          <p className="section-nav-position">Final page · References</p>
          <div className="section-nav-head-links">
            <Link to="/">Home</Link>
            <Link to="/modules">Module Contents</Link>
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
