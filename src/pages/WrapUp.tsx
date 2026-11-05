import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FEEDBACK_SURVEY,
  REFLECTION,
  SELF_ASSESSMENT,
} from '../content/reflection';
import { LEARNING_OUTCOMES, SECTIONS } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
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

function countWords(text: string) {
  const trimmed = text.trim();
  return trimmed ? trimmed.split(/\s+/).length : 0;
}

export default function WrapUp() {
  const section = SECTIONS.find((item) => item.id === 'wrap-up');
  const { state, saveDraft, setComplete, isComplete } = useProgress();

  usePageMeta({
    title: section?.title ?? 'Wrap-Up',
    description: section?.description,
  });

  const [reflection, setReflection] = useState(
    state.drafts[REFLECTION.key] ?? '',
  );
  const [selfAssessment, setSelfAssessment] = useState<SelfAssessmentState>(
    () => readDraft(state.drafts, SELF_ASSESSMENT.key, {}),
  );
  const [survey, setSurvey] = useState<SurveyState>(() =>
    readDraft(state.drafts, FEEDBACK_SURVEY.key, {}),
  );
  const [submitted, setSubmitted] = useState(() => isComplete('wrap-up'));
  const [selfSaved, setSelfSaved] = useState(false);
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [error, setError] = useState('');
  const [surveyError, setSurveyError] = useState('');

  const confirmationRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = countWords(reflection);
  const wordsShort = Math.max(REFLECTION.minWords - wordCount, 0);

  const handleReflectionChange = (value: string) => {
    setReflection(value);
    saveDraft(REFLECTION.key, value);

    if (error) {
      setError('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (wordCount < REFLECTION.minWords) {
      setError(
        `Add at least ${wordsShort} more ${wordsShort === 1 ? 'word' : 'words'} before submitting.`,
      );
      textareaRef.current?.focus();
      return;
    }

    saveDraft(REFLECTION.key, reflection);
    setComplete('wrap-up', true);
    setSubmitted(true);
    setError('');
    window.requestAnimationFrame(() => confirmationRef.current?.focus());
  };

  const handleEdit = () => {
    setSubmitted(false);
    setComplete('wrap-up', false);
    window.requestAnimationFrame(() => textareaRef.current?.focus());
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
        <p className="eyebrow">{section?.number} · Wrap-Up</p>
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

          {submitted ? (
            <div
              ref={confirmationRef}
              className="submitted-panel"
              role="status"
              tabIndex={-1}
            >
              <p className="submitted-title">
                <span aria-hidden="true">✓</span> Reflection submitted
              </p>
              <p>
                Your reflection is saved in this browser. You can edit it and
                submit again if you want to improve it.
              </p>
              <button
                type="button"
                className="button button-secondary"
                onClick={handleEdit}
              >
                Edit Reflection
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="reflection-field">
                <label htmlFor="reflection-response">
                  Your reflection
                </label>
                <textarea
                  ref={textareaRef}
                  id="reflection-response"
                  className="textarea"
                  value={reflection}
                  onChange={(event) =>
                    handleReflectionChange(event.target.value)
                  }
                  rows={10}
                  aria-describedby="reflection-help reflection-count"
                  placeholder="Write your reflection here…"
                />
                <p id="reflection-help" className="field-help">
                  Aim for about {REFLECTION.targetWords} words. Mention a
                  specific Philippine social issue and use at least one idea
                  from the module.
                </p>
                <p
                  id="reflection-count"
                  className="word-count"
                >
                  {wordCount} {wordCount === 1 ? 'word' : 'words'}
                  {wordCount < REFLECTION.minWords
                    ? ` · ${wordsShort} more to reach the minimum`
                    : ' · ready to submit'}
                </p>
              </div>

              {error ? (
                <p className="form-error" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="actions">
                <button type="submit" className="button">
                  Submit Reflection
                </button>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => saveDraft(REFLECTION.key, reflection)}
                >
                  Save Draft
                </button>
              </div>
              <p className="field-help">
                Your draft saves automatically in this browser as you type.
              </p>
            </form>
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

      <div className="actions">
        <Link className="button button-secondary" to="/modules">
          View All Sections
        </Link>
      </div>

      <SectionNav current="wrap-up" />
    </div>
  );
}
