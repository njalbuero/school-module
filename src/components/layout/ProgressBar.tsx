export function ProgressBar({
  completed,
  total,
  showLabel = true,
}: {
  completed: number;
  total: number;
  showLabel?: boolean;
}) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress">
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Module progress"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={completed}
        aria-valuetext={`${completed} of ${total} sections complete`}
      >
        <span
          className="progress-fill"
          style={{ width: `${percent}%` }}
          aria-hidden="true"
        />
      </div>
      {showLabel ? (
        <p className="progress-label">
          {completed} of {total} sections complete
        </p>
      ) : null}
    </div>
  );
}
