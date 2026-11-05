import { forwardRef } from 'react';
import type { AssessmentQuestion } from '../../content/assessment';

type FeedbackPanelProps = {
  question: AssessmentQuestion;
  selectedOptionId: string;
};

export const FeedbackPanel = forwardRef<HTMLDivElement, FeedbackPanelProps>(
  function FeedbackPanel({ question, selectedOptionId }, ref) {
    const selectedOption = question.options.find(
      (option) => option.id === selectedOptionId,
    );
    const correctOption = question.options.find(
      (option) => option.id === question.correctOptionId,
    );
    const isCorrect = selectedOptionId === question.correctOptionId;

    return (
      <div
        ref={ref}
        tabIndex={-1}
        className={
          isCorrect
            ? 'feedback feedback-correct'
            : 'feedback feedback-incorrect'
        }
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="feedback-title">
          <span className="feedback-icon" aria-hidden="true">
            {isCorrect ? '✓' : '✕'}
          </span>
          {isCorrect ? 'Correct' : 'Not quite'}
        </p>
        {!isCorrect ? (
          <p className="feedback-answer">
            <strong>Your answer:</strong> {selectedOption?.label ?? 'No answer'}
          </p>
        ) : null}
        <p className="feedback-answer">
          <strong>Correct answer:</strong> {correctOption?.label}
        </p>
        <p className="feedback-explanation">{question.explanation}</p>
      </div>
    );
  },
);
