import { useRef, useState } from 'react';
import {
  FEEDBACK_SURVEY,
  REFLECTION,
  SELF_ASSESSMENT,
} from '../content/reflection';
import { LEARNING_OUTCOMES, SECTIONS } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { NextStepLink } from '../components/layout/NextStepLink';
import { SectionNav } from '../components/layout/SectionNav';

type SelfAssessmentState = Record<string, boolean>;
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

export default function WrapUp() {
  const section = SECTIONS.find((item) => item.id === 'wrap-up');
  const { state, saveDraft, setComplete, isComplete } = useProgress();

  usePageMeta({
    title: section?.title ?? 'Wrap-Up',
    description: section?.description,
  });

  const [selfAssessment, setSelfAssessment] = useState<SelfAssessmentState>(
    () => readDraft(state.drafts, SELF_ASSESSMENT.key, {}),
  );
  const [survey, setSurvey] = useState<SurveyState>(() =>
    readDraft(state.drafts, FEEDBACK_SURVEY.key, {}),
  );
  const [completed, setCompleted] = useState(() => isComplete('wrap-up'));
  const [selfSaved, setSelfSaved] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [surveyError, setSurveyError] = useState('');

  const confirmationRef = useRef<HTMLDivElement>(null);

  const handleMarkComplete = () => {
    setComplete('wrap-up', true);
    setCompleted(true);
    window.requestAnimationFrame(() => confirmationRef.current?.focus());
  };

  const handleUndoComplete = () => {
    setComplete('wrap-up', false);
    setCompleted(false);
  };

  const toggleSelfAssessment = (key: string, value: boolean) => {
    const next = { ...selfAssessment, [key]: value };
    setSelfAssessment(next);
    saveDraft(SELF_ASSESSMENT.key, JSON.stringify(next));
    setSelfSaved(true);
  };

  const handleSurveyChange = (key: string, value: string) => {
    const next = { ...survey, [key]: value };
    setSurvey(next);
    saveDraft(FEEDBACK_SURVEY.key, JSON.stringify(next));

    if (surveyError) {
      setSurveyError('');
    }
  };

  const handleSurveySubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">{section?.label ?? 'Wrap-Up'}</p>
        <h1 className="page-title" tabIndex={-1} data-page-heading>
          {section?.title ?? 'Wrap-Up'}
        </h1>
        <p className="section-lead">{section?.description}</p>
      </header>

      <section className="section" aria-labelledby="takeaways-heading">
        <h2 id="takeaways-heading" className="section-title">
          Key Takeaways
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

      <section className="section" aria-labelledby="reflection-heading">
        <h2 id="reflection-heading" className="section-title">
          Reflection
        </h2>
        <div className="card">
          <p className="reflection-prompt">{REFLECTION.prompt}</p>

          <h3 className="reflection-subheading">Before you write</h3>
          <ul className="guidance-list">
            {REFLECTION.guidance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <details className="rubric">
            <summary>How your reflection is assessed</summary>
            <ul className="rubric-list">
              {REFLECTION.rubric.map((item) => (
                <li key={item.criterion}>
                  <span className="rubric-criterion">{item.criterion}</span>
                  {item.description}
                </li>
              ))}
            </ul>
          </details>

          <div className="embed embed-form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdKypbErU49hx8oY3pMzRJdgAXpsrkANDFJcbmntw5Jt8Z6Hw/viewform?embedded=true"
              title="Reflection form"
              loading="lazy"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>

          {completed ? (
            <div
              ref={confirmationRef}
              className="submitted-panel"
              role="status"
              tabIndex={-1}
            >
              <p className="submitted-title">
                <span aria-hidden="true">✓</span> Reflection section complete
              </p>
              <p>Thanks — the Wrap-Up is now marked complete in this browser.</p>
              <button
                type="button"
                className="button button-secondary"
                onClick={handleUndoComplete}
              >
                Undo
              </button>
            </div>
          ) : (
            <div className="actions">
              <button
                type="button"
                className="button"
                onClick={handleMarkComplete}
              >
                Mark Section Complete
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section" aria-labelledby="self-assessment-heading">
        <h2 id="self-assessment-heading" className="section-title">
          Self-Assessment
        </h2>
        <div className="card">
          <p className="section-lead">
            Check the statements you feel confident about. This is for your own
            review and is not graded.
          </p>
          <fieldset className="check-fieldset">
            <legend className="sr-only">Self-assessment checklist</legend>
            {SELF_ASSESSMENT.items.map((item, index) => (
              <label className="check-item" key={item}>
                <input
                  type="checkbox"
                  checked={Boolean(selfAssessment[`lo-${index + 1}`])}
                  onChange={(event) =>
                    toggleSelfAssessment(`lo-${index + 1}`, event.target.checked)
                  }
                />
                <span>{item}</span>
              </label>
            ))}
          </fieldset>
          <p className="field-help" role="status">
            {selfSaved ? 'Self-assessment saved in this browser.' : ''}
          </p>
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

      <NextStepLink to="/modules" label="Finish: Module Contents" />

      <SectionNav current="wrap-up" />
    </div>
  );
}
