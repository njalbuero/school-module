import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { REFLECTION, SELF_ASSESSMENT } from '../content/reflection';
import { LEARNING_OUTCOMES, SECTIONS } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { SectionNav } from '../components/layout/SectionNav';
import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';

type SelfAssessmentState = Record<string, boolean>;

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
  const pageLabel = section?.label ?? 'Wrap-Up';
  const pageTitle = section?.title ?? 'Wrap-Up';
  const { state, saveDraft, setComplete, isComplete } = useProgress();

  usePageMeta({
    title: section?.title ?? 'Wrap-Up',
    description: section?.description,
  });

  const [selfAssessment, setSelfAssessment] = useState<SelfAssessmentState>(
    () => readDraft(state.drafts, SELF_ASSESSMENT.key, {}),
  );
  const [completed, setCompleted] = useState(() => isComplete('wrap-up'));
  const [selfSaved, setSelfSaved] = useState(false);
  const [openRubric, setOpenRubric] = useState<number | null>(0);

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

  return (
    <div className="page section-page">
      <PageHero
        eyebrow={pageLabel !== pageTitle ? pageLabel : undefined}
        title={pageTitle}
        lead={section?.description}
      />

      <section className="section" aria-labelledby="takeaways-heading">
        <h2 id="takeaways-heading" className="section-title">
          Key Takeaways
        </h2>
        <div className="feature-card">
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
        <div className="feature-card">
          <p className="reflection-prompt">{REFLECTION.prompt}</p>

          <h3 className="reflection-subheading">Before you write</h3>
          <ul className="guidance-list">
            {REFLECTION.guidance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="reflection-subheading">
            Social Issue Response Rubric
          </h3>
          <p className="section-lead">
            Each criterion is scored from 1 to 4. The total is 16 points.
          </p>
          <div className="rubric-table-wrap rubric-desktop">
            <table className="sequence-table rubric-table">
              <caption className="sr-only">Social issue response rubric</caption>
              <thead>
                <tr>
                  <th scope="col">Criterion</th>
                  <th scope="col">Exemplary (4)</th>
                  <th scope="col">Proficient (3)</th>
                  <th scope="col">Developing (2)</th>
                  <th scope="col">Beginning (1)</th>
                </tr>
              </thead>
              <tbody>
                {REFLECTION.rubric.map((item) => (
                  <tr key={item.criterion}>
                    <th scope="row">
                      <span className="rubric-criterion-name">
                        {item.criterion}
                      </span>
                      <span className="rubric-weight">{item.weight}</span>
                    </th>
                    {item.levels.map((level) => (
                      <td
                        key={level.score}
                        data-label={`${level.label} (${level.score})`}
                      >
                        {level.description}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rubric-accordion rubric-mobile">
            {REFLECTION.rubric.map((item, index) => {
              const open = openRubric === index;
              const panelId = `wrap-up-rubric-panel-${index}`;
              const triggerId = `wrap-up-rubric-trigger-${index}`;

              return (
                <div
                  className={`rubric-acc-item${open ? ' is-open' : ''}`}
                  key={item.criterion}
                >
                  <button
                    type="button"
                    id={triggerId}
                    className="rubric-acc-trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenRubric(open ? null : index)}
                  >
                    <span className="rubric-acc-heading">
                      <span className="rubric-acc-number">{index + 1}</span>
                      <span className="rubric-acc-title">{item.criterion}</span>
                    </span>
                    <span className="rubric-acc-meta">
                      <span className="rubric-acc-points">4 pts</span>
                      <span className="rubric-acc-chevron" aria-hidden="true">
                        <Icon name="chevron-down" size={18} />
                      </span>
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="rubric-acc-panel"
                    hidden={!open}
                  >
                    <ul className="rubric-acc-levels">
                      {item.levels.map((level) => (
                        <li className="rubric-acc-level" key={level.score}>
                          <span className="rubric-acc-score">{level.score}</span>
                          <span className="rubric-acc-level-body">
                            <span className="rubric-acc-level-label">
                              {level.label}
                            </span>
                            <span className="rubric-acc-level-desc">
                              {level.description}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

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
        <div className="feature-card">
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

      <section className="section" aria-labelledby="done-heading">
        <h2 id="done-heading" className="section-title">
          You&apos;re Done!
        </h2>
        <p className="section-lead">
          You have completed the Wrap-Up and finished the module. Thank you for
          working through the lessons and activities.
        </p>
        <Link className="references-prompt" to="/references">
          <span className="references-prompt-body">
            <span className="references-prompt-title">
              There&apos;s another page
            </span>
            <span className="references-prompt-text">
              Open the References page to see the sources used in this module.
            </span>
          </span>
          <span className="references-prompt-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </section>

      <SectionNav current="wrap-up" />
    </div>
  );
}
