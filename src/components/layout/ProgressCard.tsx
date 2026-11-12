import { Link } from 'react-router-dom';
import { PROGRESS_SECTIONS } from '../../content/module';
import { useProgress } from '../../context/ProgressContext';
import { ProgressBar } from './ProgressBar';
import { Icon } from '../ui/Icon';

function progressMessage(completed: number, total: number) {
  if (total === 0) {
    return 'Your module is ready when you are.';
  }
  if (completed >= total) {
    return 'You did it — the module is complete. 🎉';
  }
  if (completed === 0) {
    return "You're just getting started.";
  }
  if (completed / total < 0.5) {
    return 'Nice progress — keep the momentum going.';
  }
  return 'Almost there — just a few sections to go.';
}

export function ProgressCard() {
  const { completedCount, totalSections, isComplete } = useProgress();
  const percent =
    totalSections === 0 ? 0 : Math.round((completedCount / totalSections) * 100);
  const nextSection = PROGRESS_SECTIONS.find(
    (section) => !isComplete(section.id),
  );
  const isDone = totalSections > 0 && completedCount >= totalSections;
  const cta = isDone
    ? { to: '/module', label: 'Review the module' }
    : completedCount > 0 && nextSection
      ? { to: nextSection.path, label: `Continue: ${nextSection.label}` }
      : null;

  return (
    <div className="progress-card">
      <div className="card-head">
        <span className="card-icon" aria-hidden="true">
          <Icon name="target" />
        </span>
        <p className="progress-count">
          <strong>{completedCount}</strong> of {totalSections} sections complete
        </p>
        <span className="progress-percent">{percent}%</span>
      </div>
      <ProgressBar
        completed={completedCount}
        total={totalSections}
        showLabel={false}
      />
      <p className="progress-message">
        {progressMessage(completedCount, totalSections)}
      </p>
      {cta ? (
        <Link className="progress-cta" to={cta.to}>
          {cta.label}
          <Icon name="arrow-right" size={16} />
        </Link>
      ) : null}
    </div>
  );
}
