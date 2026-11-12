import type { ReactNode } from 'react';

export function LessonSection({
  id,
  title,
  children,
}: {
  id: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section
      className="section lesson-section"
      aria-labelledby={title ? id : undefined}
    >
      <div className="lesson-section-inner">
        {title ? (
          <h2 id={id} className="section-title">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
