import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { PROGRESS_SECTIONS, SECTIONS } from '../../content/module';
import type { SectionId } from '../../content/module';
import { useProgress } from '../../context/ProgressContext';
import { usePageMeta } from '../../hooks/usePageMeta';
import { NextStepLink } from '../layout/NextStepLink';
import { SectionNav } from '../layout/SectionNav';

type LessonContents = Array<{ id: string; title: string }>;

export function LessonPage({
  sectionId,
  objectives,
  objectivesLead = 'At the end of this lesson, you should be able to:',
  contents,
  reading = false,
  children,
}: {
  sectionId: SectionId;
  objectives?: string[];
  objectivesLead?: string;
  contents?: LessonContents;
  reading?: boolean;
  children: ReactNode;
}) {
  const { isComplete, setComplete } = useProgress();
  const section = SECTIONS.find((item) => item.id === sectionId);
  const index = PROGRESS_SECTIONS.findIndex((item) => item.id === sectionId);
  const nextSection =
    index >= 0 ? PROGRESS_SECTIONS[index + 1] ?? null : null;
  const complete = isComplete(sectionId);
  const [justCompleted, setJustCompleted] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const completionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() =>
      headingRef.current?.focus({ preventScroll: true }),
    );

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!justCompleted || !complete) {
      return;
    }

    setJustCompleted(false);
    const frame = window.requestAnimationFrame(() =>
      completionRef.current?.focus(),
    );

    return () => window.cancelAnimationFrame(frame);
  }, [justCompleted, complete]);

  const handleComplete = () => {
    setComplete(sectionId, true);
    setJustCompleted(true);
  };

  usePageMeta({
    title: section?.title ?? 'Lesson',
    description: section?.description,
  });

  return (
    <div
      className={`page lesson-page${reading ? ' lesson-page-reading' : ''}`}
    >
      <header className="page-header">
        <p className="eyebrow">{section?.label ?? 'Lesson'}</p>
        <h1
          ref={headingRef}
          className="page-title"
          tabIndex={-1}
          data-page-heading
        >
          {section?.title ?? 'Lesson'}
        </h1>
        <p className="section-lead">{section?.description}</p>
      </header>

      {objectives && objectives.length > 0 ? (
        <section className="section" aria-labelledby="lesson-objectives">
          <h2 id="lesson-objectives" className="section-title">
            Learning Objectives
          </h2>
          <div className="card">
            <p className="section-lead">{objectivesLead}</p>
            <ol className="outcome-list">
              {objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {contents && contents.length > 0 ? (
        <nav className="card lesson-contents" aria-labelledby="lesson-contents-title">
          <h2 id="lesson-contents-title" className="lesson-contents-title">
            In this lesson
          </h2>
          <ol>
            {contents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}

      {children}

      {nextSection ? (
        <section className="section" aria-labelledby="lesson-completion-heading">
          <h2 id="lesson-completion-heading" className="section-title">
            Lesson Completion
          </h2>
          <div className="card lesson-completion-card">
            {complete ? (
              <div
                ref={completionRef}
                className="submitted-panel"
                role="status"
                tabIndex={-1}
              >
                <p className="submitted-title">
                  <span aria-hidden="true">✓</span> Lesson complete
                </p>
                <p>
                  You can continue to {nextSection.label}. Your progress is
                  saved in this browser.
                </p>
              </div>
            ) : (
              <>
                <p className="section-lead">
                  Finish the reading and activities above. Mark this lesson
                  complete when you are ready to unlock {nextSection.label}.
                </p>
                <div className="actions">
                  <button
                    type="button"
                    className="button"
                    onClick={handleComplete}
                  >
                    Mark Lesson Complete
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      ) : null}

      {nextSection && complete ? (
        <NextStepLink
          to={nextSection.path}
          label={`Next: ${nextSection.label}`}
        />
      ) : null}

      <SectionNav current={sectionId} />
    </div>
  );
}
