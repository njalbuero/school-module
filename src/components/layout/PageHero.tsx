import type { ReactNode, Ref } from 'react';
import { Icon } from '../ui/Icon';
import type { IconName } from '../ui/Icon';

export function PageHero({
  eyebrow,
  title,
  meta,
  lead,
  icon,
  headingRef,
  headingId,
}: {
  eyebrow?: string;
  title: string;
  meta?: ReactNode;
  lead?: ReactNode;
  icon?: IconName;
  headingRef?: Ref<HTMLHeadingElement>;
  headingId?: string;
}) {
  return (
    <header className="page-hero">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1
        ref={headingRef}
        id={headingId}
        className="page-hero-title"
        tabIndex={-1}
        data-page-heading
      >
        {icon ? (
          <span className="page-hero-icon" aria-hidden="true">
            <Icon name={icon} />
          </span>
        ) : null}
        {title}
      </h1>
      {meta ? <p className="page-hero-meta">{meta}</p> : null}
      {lead ? <p className="page-hero-lead">{lead}</p> : null}
    </header>
  );
}
