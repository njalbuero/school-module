import { Link } from 'react-router-dom';
import { PROGRESS_SECTIONS } from '../../content/module';
import type { SectionId } from '../../content/module';
import { useProgress } from '../../context/ProgressContext';
import { Icon } from '../ui/Icon';

/**
 * Previous / next navigation for the learning sections, with a way back to the
 * module contents so students always know where they are. Next stays locked
 * until its prerequisite section is complete.
 */
export function SectionNav({ current }: { current: SectionId }) {
  const { isUnlocked } = useProgress();
  const index = PROGRESS_SECTIONS.findIndex((section) => section.id === current);
  const currentSection = PROGRESS_SECTIONS[index];
  const previous = index > 0 ? PROGRESS_SECTIONS[index - 1] : null;
  const next =
    index >= 0 && index < PROGRESS_SECTIONS.length - 1
      ? PROGRESS_SECTIONS[index + 1]
      : null;
  const nextUnlocked = next ? isUnlocked(next.id) : false;

  return (
    <nav className="section-nav" aria-label="Section navigation">
      <div className="section-nav-head">
        <p className="section-nav-position">
          Section {index + 1} of {PROGRESS_SECTIONS.length}
          {currentSection ? ` · ${currentSection.label}` : ''}
        </p>
        <div className="section-nav-head-links">
          <Link to="/">Home</Link>
          <Link to="/module">Module Contents</Link>
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

        {next ? (
          nextUnlocked ? (
            <Link className="section-nav-link" to={next.path}>
              <span className="section-nav-direction">Next</span>
              <span className="section-nav-title">{next.label}</span>
            </Link>
          ) : (
            <span
              className="section-nav-link section-nav-link-locked"
              aria-disabled="true"
              title={`Complete ${currentSection?.label ?? 'this section'} to unlock ${next.label}.`}
            >
              <span className="section-nav-direction">Next</span>
              <span className="section-nav-title">
                <Icon name="lock" size={15} />
                {next.label}
              </span>
            </span>
          )
        ) : (
          <span className="section-nav-empty" aria-hidden="true" />
        )}
      </div>
    </nav>
  );
}
