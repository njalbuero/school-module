import { Link } from 'react-router-dom';
import { PROGRESS_SECTIONS, SECTIONS } from '../content/module';
import type { SectionId } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { ProgressCard } from '../components/layout/ProgressCard';
import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/Icon';

const SECTION_ICONS: Record<SectionId, IconName> = {
  'pre-assessment': 'clipboard',
  'lesson-1': 'book',
  'lesson-2': 'book',
  'lesson-3': 'book',
  'wrap-up': 'sparkle',
  references: 'info',
};

const GROUPS: { title: string; ids: SectionId[] }[] = [
  { title: 'Getting started', ids: ['pre-assessment'] },
  { title: 'Lessons', ids: ['lesson-1', 'lesson-2', 'lesson-3'] },
  { title: 'Wrap-up', ids: ['wrap-up', 'references'] },
];

export default function Module() {
  usePageMeta({
    title: 'Module',
    description:
      'All sections of the module, with your progress and completion status.',
  });

  const { isComplete, wasVisited } = useProgress();

  return (
    <div className="page module">
      <PageHero
        eyebrow="Module Contents"
        title="Module"
        meta={`${SECTIONS.length} sections · ${PROGRESS_SECTIONS.length} count toward your progress`}
        lead="Every section is open, so you can work through them in any order. Your progress and drafts are saved in this browser."
      />

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your Progress
        </h2>
        <ProgressCard />
      </section>

      <section className="section" aria-labelledby="sections-heading">
        <h2 id="sections-heading" className="section-title">
          All Sections
        </h2>

        {GROUPS.map((group) => {
          const sections = SECTIONS.filter((section) =>
            group.ids.includes(section.id),
          );

          return (
            <div className="module-group" key={group.title}>
              <h3 className="module-group-title">{group.title}</h3>
              <ul className="module-sections">
                {sections.map((section) => {
                  const tracked = section.tracked !== false;
                  const complete = tracked && isComplete(section.id);
                  const visited = wasVisited(section.id);
                  const showLabel = section.label !== section.title;
                  const statusKey = !tracked
                    ? 'final'
                    : complete
                      ? 'done'
                      : visited
                        ? 'progress'
                        : 'idle';
                  const statusLabel = !tracked
                    ? 'Final page'
                    : complete
                      ? 'Complete'
                      : visited
                        ? 'In progress'
                        : 'Not started';

                  return (
                    <li key={section.id}>
                      <Link className="module-section" to={section.path}>
                        <span className="module-section-icon" aria-hidden="true">
                          <Icon name={SECTION_ICONS[section.id]} />
                        </span>
                        <span className="module-section-body">
                          {showLabel ? (
                            <span className="module-section-label">
                              {section.label}
                            </span>
                          ) : null}
                          <span className="module-section-title">
                            {section.title}
                          </span>
                          <span className="module-section-desc">
                            {section.description}
                          </span>
                        </span>
                        <span className="module-section-end">
                          <span className="status-chip" data-status={statusKey}>
                            {statusLabel}
                          </span>
                          <span
                            className="module-section-chevron"
                            aria-hidden="true"
                          >
                            <Icon name="arrow-right" size={18} />
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        <div className="actions">
          <Link className="button" to="/pre-assessment">
            {isComplete('pre-assessment')
              ? 'Review Pre-assessment'
              : 'Start with the Pre-assessment'}
          </Link>
        </div>
      </section>
    </div>
  );
}
