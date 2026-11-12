import { Link } from 'react-router-dom';
import { SECTIONS } from '../../content/module';
import { Icon } from '../ui/Icon';
import type { IconName } from '../ui/Icon';

const SECTION_ICONS: Record<string, IconName> = {
  'pre-assessment': 'clipboard',
  'lesson-1': 'book',
  'lesson-2': 'book',
  'lesson-3': 'book',
  'wrap-up': 'sparkle',
};

export function SectionPreview() {
  const preview = SECTIONS.filter(
    (section) => section.id !== 'start' && section.id !== 'references',
  );

  return (
    <ul className="preview-grid">
      {preview.map((section) => (
        <li key={section.id}>
          <Link className="preview-card" to={section.path}>
            <span className="preview-icon" aria-hidden="true">
              <Icon name={SECTION_ICONS[section.id] ?? 'compass'} />
            </span>
            <span className="preview-label">{section.label}</span>
            <span className="preview-title">{section.title}</span>
            <span className="preview-arrow" aria-hidden="true">
              <Icon name="arrow-right" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
