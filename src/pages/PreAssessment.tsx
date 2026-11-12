import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PRE_ASSESSMENT_QUESTIONS } from '../content/assessment';
import { SECTIONS } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { QuizProgress } from '../components/assessment/QuizProgress';
import { FeedbackPanel } from '../components/assessment/FeedbackPanel';
import { NextStepLink } from '../components/layout/NextStepLink';
import { SectionNav } from '../components/layout/SectionNav';
import { PageHero } from '../components/layout/PageHero';

export default function PreAssessment() {
  const section = SECTIONS.find((item) => item.id === 'pre-assessment');
  const pageLabel = section?.label ?? 'Pre-assessment';
  const pageTitle = section?.title ?? 'Pre-assessment';
  const { saveScore, setComplete, state } = useProgress();

  usePageMeta({
    title: section?.title ?? 'Pre-assessment',
    description: section?.description,
  });

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const pageHeadingRef = useRef<HTMLHeadingElement>(null);
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLLegendElement>(null);
  const shouldFocusQuestion = useRef(false);

  const question = PRE_ASSESSMENT_QUESTIONS[currentIndex];
  const selectedOptionId = answers[question.id];
  const isChecked = checked[question.id] === true;
  const isLastQuestion = currentIndex === PRE_ASSESSMENT_QUESTIONS.length - 1;
  const bestScore = state.scores['pre-assessment'];

  useEffect(() => {
    if (isChecked) {
      feedbackRef.current?.focus();
    }
  }, [isChecked, currentIndex]);

  useEffect(() => {
    if (finished) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      resultsHeadingRef.current?.focus();
    }
  }, [finished]);

  useEffect(() => {
    if (shouldFocusQuestion.current && !finished) {
      shouldFocusQuestion.current = false;
      questionRef.current?.focus();
    }
  }, [currentIndex, finished]);

  const goToIndex = (index: number) => {
    shouldFocusQuestion.current = true;
    setCurrentIndex(index);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleSelect = (optionId: string) => {
    if (isChecked) {
      return;
    }

    setAnswers((current) => ({ ...current, [question.id]: optionId }));
  };

  const handleCheck = () => {
    if (!selectedOptionId) {
      return;
    }

    setChecked((current) => ({ ...current, [question.id]: true }));
  };

  const handleNext = () => {
    if (!isLastQuestion) {
      goToIndex(currentIndex + 1);
      return;
    }

    const finalScore = PRE_ASSESSMENT_QUESTIONS.reduce((total, item) => {
      return total + (answers[item.id] === item.correctOptionId ? 1 : 0);
    }, 0);

    setScore(finalScore);
    setFinished(true);
    saveScore('pre-assessment', finalScore, PRE_ASSESSMENT_QUESTIONS.length);
    setComplete('pre-assessment', true);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      goToIndex(currentIndex - 1);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setChecked({});
    setCurrentIndex(0);
    setScore(0);
    setFinished(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
    window.requestAnimationFrame(() => pageHeadingRef.current?.focus());
  };

  return (
    <div className="page section-page">
      <PageHero
        eyebrow={pageLabel !== pageTitle ? pageLabel : undefined}
        title={pageTitle}
        lead={section?.description}
        headingRef={pageHeadingRef}
      />

      {finished ? (
        <section className="section" aria-labelledby="results-heading">
          <div className="feature-card results-card">
            <h2
              ref={resultsHeadingRef}
              id="results-heading"
              className="results-title"
              tabIndex={-1}
            >
              Pre-assessment Results
            </h2>
            <p className="results-score">
              {score} of {PRE_ASSESSMENT_QUESTIONS.length}
            </p>
            <p className="results-summary">
              {score === PRE_ASSESSMENT_QUESTIONS.length
                ? 'You answered every item correctly. You can still review the explanations below.'
                : 'Review the explanations below, then retry whenever you are ready.'}
            </p>
            {bestScore ? (
              <p className="results-best">
                Best score: {bestScore.best} of {bestScore.total} · Attempts:{' '}
                {bestScore.attempts}
              </p>
            ) : null}

            <NextStepLink to="/lesson/1" label="Next: Lesson 1" />

            <h3 className="results-subheading">Review your answers</h3>
            <ol className="result-list">
              {PRE_ASSESSMENT_QUESTIONS.map((item, index) => {
                const userAnswer = answers[item.id];
                const isCorrect = userAnswer === item.correctOptionId;
                const userLabel =
                  item.options.find((option) => option.id === userAnswer)
                    ?.label ?? 'No answer';
                const correctLabel = item.options.find(
                  (option) => option.id === item.correctOptionId,
                )?.label;

                return (
                  <li className="result-item" key={item.id}>
                    <div className="result-item-head">
                      <p className="result-question">
                        {index + 1}. {item.prompt}
                      </p>
                      <span
                        className={
                          isCorrect
                            ? 'result-status result-status-correct'
                            : 'result-status result-status-incorrect'
                        }
                      >
                        <span aria-hidden="true">{isCorrect ? '✓' : '✕'}</span>{' '}
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    </div>
                    <p className="result-answer">
                      <strong>Your answer:</strong> {userLabel}
                    </p>
                    {!isCorrect ? (
                      <p className="result-answer">
                        <strong>Correct answer:</strong> {correctLabel}
                      </p>
                    ) : null}
                    <p className="result-explanation">{item.explanation}</p>
                  </li>
                );
              })}
            </ol>

            <div className="actions">
              <Link className="button button-secondary" to="/module">
                View All Sections
              </Link>
              <button
                type="button"
                className="button button-secondary"
                onClick={handleRetry}
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="section" aria-labelledby="quiz-heading">
          <h2 id="quiz-heading" className="section-title">
            Check What You Know
          </h2>
          <p className="quiz-note">
            Your best score is saved in this browser, and you can retry as often
            as you like.
            {bestScore
              ? ` Best score so far: ${bestScore.best} of ${bestScore.total}.`
              : ''}
          </p>

          <QuizProgress
            current={currentIndex + 1}
            total={PRE_ASSESSMENT_QUESTIONS.length}
          />

          <div className="feature-card question-card">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleCheck();
              }}
            >
              <fieldset className="question-fieldset" disabled={isChecked}>
                <legend
                  ref={questionRef}
                  className="question-prompt"
                  tabIndex={-1}
                >
                  {question.prompt}
                </legend>
                <div className="option-list">
                  {question.options.map((option) => {
                    const isSelected = selectedOptionId === option.id;
                    const isCorrectOption =
                      option.id === question.correctOptionId;
                    const className = [
                      'option',
                      isSelected ? 'option-selected' : '',
                      isChecked && isCorrectOption ? 'option-correct' : '',
                      isChecked && isSelected && !isCorrectOption
                        ? 'option-incorrect'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ');

                    return (
                      <label className={className} key={option.id}>
                        <input
                          type="radio"
                          name={question.id}
                          value={option.id}
                          checked={isSelected}
                          onChange={() => handleSelect(option.id)}
                        />
                        <span className="option-label">{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {isChecked ? (
                <FeedbackPanel
                  ref={feedbackRef}
                  question={question}
                  selectedOptionId={selectedOptionId ?? ''}
                />
              ) : null}

              <div className="quiz-actions">
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                >
                  Previous
                </button>

                {isChecked ? (
                  <button type="button" className="button" onClick={handleNext}>
                    {isLastQuestion ? 'See Results' : 'Next Question'}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="button"
                    disabled={!selectedOptionId}
                  >
                    Check Answer
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      )}

      <SectionNav current="pre-assessment" />
    </div>
  );
}
