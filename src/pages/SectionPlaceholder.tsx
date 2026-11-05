import { Link } from 'react-router-dom';
import { MODULE, SECTIONS } from '../content/module';
import type { SectionId } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { SectionNav } from '../components/layout/SectionNav';

/**
 * Temporary destination for sections built in the next stage. It is deliberately
 * explicit that the section is not finished, rather than faking content.
 */
export default function SectionPlaceholder({
  sectionId,
}: {
  sectionId: SectionId;
}) {
  const section = SECTIONS.find((item) => item.id === sectionId);

  usePageMeta({
    title: section?.title ?? 'Section',
    description: section?.description,
  });

  return (
    <div className="page">
      <header className="page-header">
        <p className="eyebrow">
          {section?.number} · {section?.label ?? MODULE.subject}
        </p>
        <h1 className="page-title" tabIndex={-1} data-page-heading>
          {section?.title ?? 'Section'}
        </h1>
        <p className="section-lead">{section?.description}</p>
      </header>

      <div className="section">
        <div className="callout callout-info">
          <p className="callout-title">This lesson is being built</p>
          <p>
            The lesson reading, learning activity, and formative check will be
            added when the lesson content is supplied. No content is faked in the
            meantime.
          </p>
        </div>

        <div className="actions">
          <Link className="button" to="/modules">
            View All Sections
          </Link>
          <Link className="button button-secondary" to="/">
            Back to Home
          </Link>
        </div>
      </div>

      <SectionNav current={sectionId} />
    </div>
  );
}
