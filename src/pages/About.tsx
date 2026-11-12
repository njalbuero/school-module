import {
  ABOUT_PROJECT,
  LEARNING_OUTCOMES,
  MODULE,
} from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { AuthorCard } from '../components/content/AuthorCard';
import { Placeholder } from '../components/content/Placeholder';
import { PageHero } from '../components/layout/PageHero';
import { Icon } from '../components/ui/Icon';
import type { IconName } from '../components/ui/Icon';

const OUTCOME_ICONS: Record<string, IconName> = {
  'lo-1': 'book',
  'lo-2': 'target',
  'lo-3': 'chat',
  'lo-4': 'sparkle',
};

const OUTCOME_TONES: Record<string, string> = {
  'lo-1': 'blue',
  'lo-2': 'green',
  'lo-3': 'amber',
  'lo-4': 'violet',
};

export default function About() {
  usePageMeta({
    title: 'About this Module',
    description: MODULE.about,
  });

  return (
    <div className="page about">
      <PageHero
        eyebrow="Module Overview"
        title="About this Module"
        meta={`${MODULE.subject} · ${MODULE.quarter}`}
        lead={MODULE.about}
      />

      <section className="section" aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading" className="section-title">
          Module Learning Outcomes
        </h2>
        <p className="section-lead">
          By the end of this module, you should be able to:
        </p>
        <ol className="outcome-grid">
          {LEARNING_OUTCOMES.map((outcome) => (
            <li
              key={outcome.id}
              className="outcome-card"
              data-tone={OUTCOME_TONES[outcome.id]}
            >
              <span className="outcome-icon" aria-hidden="true">
                <Icon name={OUTCOME_ICONS[outcome.id] ?? 'target'} />
              </span>
              <span className="outcome-text">{outcome.text}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="author-heading">
        <h2 id="author-heading" className="section-title">
          About the Author
        </h2>
        <AuthorCard />
      </section>

      <section className="section" aria-labelledby="about-project-heading">
        <h2 id="about-project-heading" className="section-title">
          About this Project
        </h2>
        {ABOUT_PROJECT ? (
          <div className="project-card">
            <div className="prose">
              {ABOUT_PROJECT.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        ) : (
          <Placeholder label="About this Project — placeholder">
            <p>
              This space is reserved for the project background. It has not been
              supplied, so no official statement is shown here.
            </p>
          </Placeholder>
        )}
      </section>
    </div>
  );
}
