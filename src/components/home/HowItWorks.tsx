import { LEARNING_SEQUENCE } from '../../content/module';
import { Icon } from '../ui/Icon';
import type { IconName } from '../ui/Icon';

const STEP_ICONS: Record<number, IconName> = {
  1: 'clipboard',
  2: 'book',
  3: 'chat',
  4: 'sparkle',
};

export function HowItWorks() {
  return (
    <ol className="how-list">
      {LEARNING_SEQUENCE.map((stage) => (
        <li key={stage.step} className="how-step" data-accent={stage.step}>
          <span className="how-step-badge" aria-hidden="true">
            <Icon name={STEP_ICONS[stage.step] ?? 'compass'} />
          </span>
          <span className="how-step-number" aria-hidden="true">
            {stage.step}
          </span>
          <div className="how-step-body">
            <span className="how-step-name">{stage.name}</span>
            <span className="how-step-desc">{stage.description}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
