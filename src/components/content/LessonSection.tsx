import type { ReactNode } from 'react';

export function LessonSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section lesson-section" aria-labelledby={id}>
      <div className="lesson-section-inner">
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
