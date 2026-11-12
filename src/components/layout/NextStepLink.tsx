import { Link } from 'react-router-dom';
import { Icon } from '../ui/Icon';

/**
 * Prominent, compact call to action used for module next steps.
 * The whole box is the link, so it is easy to tap and keyboard users get a
 * single, clear target.
 */
export function NextStepLink({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  return (
    <div className="next-step">
      <Link className="next-step-link" to={to}>
        <span>{label}</span>
        <Icon name="arrow-right" size={20} />
      </Link>
    </div>
  );
}
