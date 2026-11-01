export function ProgressBar({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress">
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={completed}
        aria-valuetext={`${completed} of ${total} sections complete`}
      >
        <span className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
      <p className="progress-label">
        {completed} of {total} sections complete
      </p>
    </div>
  );
}
