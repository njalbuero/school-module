import { Link } from 'react-router-dom';
import { PROGRESS_SECTIONS } from '../../content/module';
import type { SectionId } from '../../content/module';
import { useProgress } from '../../context/ProgressContext';
import { isSectionUnlocked } from '../../features/progress/gating';

/**
 * Previous / next navigation for the learning sections, with a way back to the
 * module contents so students always know where they are. The next section is
 * shown only when its prerequisites are complete.
 */
export function SectionNav({ current }: { current: SectionId }) {
  const { isComplete } = useProgress();
  const index = PROGRESS_SECTIONS.findIndex((section) => section.id === current);
  const currentSection = PROGRESS_SECTIONS[index];
  const previous = index > 0 ? PROGRESS_SECTIONS[index - 1] : null;
  const next =
    index >= 0 && index < PROGRESS_SECTIONS.length - 1
      ? PROGRESS_SECTIONS[index + 1]
      : null;
  const nextUnlocked = next ? isSectionUnlocked(next.id, isComplete) : false;

  return (
    <nav className="section-nav" aria-label="Section navigation">
      <div className="section-nav-head">
        <p className="section-nav-position">
          Section {index + 1} of {PROGRESS_SECTIONS.length}
          {currentSection ? ` · ${currentSection.label}` : ''}
        </p>
        <div className="section-nav-head-links">
          <Link to="/">Home</Link>
          <Link to="/modules">Module Contents</Link>
        </div>
      </div>

      <div className="section-nav-links">
        {previous ? (
          <Link className="section-nav-link" to={previous.path}>
            <span className="section-nav-direction">Previous</span>
            <span className="section-nav-title">{previous.label}</span>
          </Link>
        ) : (
          <span className="section-nav-empty" aria-hidden="true" />
        )}

        {next && nextUnlocked ? (
          <Link className="section-nav-link section-nav-next" to={next.path}>
            <span className="section-nav-direction">Next</span>
            <span className="section-nav-title">{next.label}</span>
          </Link>
        ) : next ? (
          <div
            className="section-nav-link section-nav-next section-nav-locked"
            aria-disabled="true"
          >
            <span className="section-nav-direction">Locked</span>
            <span className="section-nav-title">
              Complete {currentSection?.label ?? 'this section'} to unlock{' '}
              {next.label}
            </span>
          </div>
        ) : (
          <span className="section-nav-empty" aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}
