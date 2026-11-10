import { Link } from 'react-router-dom';

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
        <span className="next-step-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  );
}
