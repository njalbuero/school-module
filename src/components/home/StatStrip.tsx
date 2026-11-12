import { MODULE_FACTS } from '../../content/module';
import { Icon } from '../ui/Icon';
import type { IconName } from '../ui/Icon';

const FACT_ICONS: Record<string, IconName> = {
  time: 'clock',
  lessons: 'book',
  sections: 'grid',
  pace: 'user',
};

const FACT_TONES: Record<string, string> = {
  time: 'blue',
  lessons: 'green',
  sections: 'amber',
  pace: 'violet',
};

export function StatStrip() {
  return (
    <ul className="stat-strip">
      {MODULE_FACTS.map((fact) => (
        <li key={fact.id} className="stat-card" data-tone={FACT_TONES[fact.id]}>
          <span className="stat-icon">
            <Icon name={FACT_ICONS[fact.id] ?? 'compass'} />
          </span>
          <span className="stat-value">{fact.value}</span>
          <span className="stat-label">{fact.label}</span>
        </li>
      ))}
    </ul>
  );
}
