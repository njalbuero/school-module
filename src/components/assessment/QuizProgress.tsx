export function QuizProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const percent = total === 0 ? 0 : Math.round((current / total) * 100);

  return (
    <div className="quiz-progress">
      <div className="quiz-progress-head">
        <p className="quiz-progress-label">
          Question {current} of {total}
        </p>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Pre-assessment progress"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-valuetext={`Question ${current} of ${total}`}
      >
        <span
          className="progress-fill"
          style={{ width: `${percent}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
