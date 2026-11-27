import { Link } from 'react-router-dom';
import {
  ARTIFACTS,
  EDUCATION,
  LESSON_ARC,
  LIVE_MODULE_URL,
  MODULE_FACTS,
  MODULE_OUTCOMES,
  PHASES,
  PORTFOLIO,
  REDESIGN_ROWS,
  REFLECTION_PARAGRAPHS,
  REFLECTION_PRINCIPLES,
} from '../../content/portfolio';
import type { PortfolioPhase } from '../../content/portfolio';
import { usePageMeta } from '../../hooks/usePageMeta';

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

function SectionHead({
  id,
  number,
  label,
  title,
  lead,
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="pf-section-head">
      <div>
        <p className="pf-eyebrow">
          {number} <span aria-hidden="true">/</span> {label}
        </p>
        <h2 className="pf-section-title" id={id}>
          {title}
        </h2>
      </div>
      {lead ? <p className="pf-section-lead">{lead}</p> : null}
    </div>
  );
}

function PhaseBlock({ phase }: { phase: PortfolioPhase }) {
  return (
    <article className="pf-phase" id={`phase-${phase.id}`}>
      <div className="pf-phase-marker" aria-hidden="true">
        <span className="pf-phase-number">{phase.number}</span>
        <span className="pf-phase-name">{phase.name}</span>
      </div>

      <div className="pf-phase-content">
        <h3 className="pf-phase-title">{phase.title}</h3>
        <p className="pf-phase-summary">{phase.summary}</p>

        <div className="pf-phase-grid">
          <div className="pf-decisions">
            {phase.decisions.map((decision) => (
              <div className="pf-decision" key={decision.title}>
                <h4>{decision.title}</h4>
                <p>{decision.body}</p>
              </div>
            ))}
          </div>

          <aside className="pf-phase-aside">
            <p className="pf-meta-label">Evidence base</p>
            <p className="pf-evidence-text">{phase.evidence}</p>

            {phase.artifactIds.length > 0 ? (
              <div className="pf-phase-artifacts">
                <p className="pf-meta-label">Artifacts</p>
                <div className="pf-chip-row">
                  {phase.artifactIds.map((id) => {
                    const artifact = ARTIFACTS.find((item) => item.id === id);

                    if (!artifact) {
                      return null;
                    }

                    return (
                      <Link
                        className="pf-chip"
                        to="/portfolio#artifacts"
                        key={artifact.id}
                      >
                        {artifact.number} · {artifact.shortTitle}
                        <ArrowRight />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <blockquote className="pf-phase-quote">
              <p>“{phase.quote}”</p>
              <cite>{phase.quoteSource}</cite>
            </blockquote>
          </aside>
        </div>
      </div>
    </article>
  );
}

function ConversationDetails({
  image,
  caption,
}: {
  image: string;
  caption: string;
}) {
  return (
    <details className="pf-details">
      <summary>
        <span className="pf-details-label">Conversations screenshot</span>
        <span className="pf-details-note">Names and PII masked</span>
        <span className="pf-details-plus" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="pf-details-body">
        <p className="pf-privacy-note">
          Screenshots are shared with the knowledge of the people involved.
          Names and other personally identifiable information are masked to
          protect the individuals involved in the testing.
        </p>
        <figure className="pf-conversation">
          <img
            src={image}
            alt={caption}
            width={920}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
    </details>
  );
}

export default function PortfolioHome() {
  usePageMeta({
    title: 'Instructional Design Portfolio',
    description:
      'The design, pilot, and revision of an online learning module on the functions and importance of education in society.',
    siteTitle: 'Andrea Gabrielle Tenorio',
  });

  return (
    <div className="pf-page">
      <header className="pf-hero" id="top">
        <div className="pf-hero-inner">
          <div className="pf-hero-content">
            <p className="pf-hero-kicker">
              EDU0104 · Instructional Design Portfolio
            </p>
            <h1 className="pf-hero-title" data-page-heading tabIndex={-1}>
              Instructional Design Portfolio
            </h1>
            <p className="pf-hero-lead">
              The design, pilot, and revision of an online module on the
              functions and importance of education in society.
            </p>

            <p className="pf-hero-meta">
              <span>{PORTFOLIO.name}</span>
              <span>MAEd-ETOL · FEU Manila</span>
              <span>{PORTFOLIO.year}</span>
            </p>

            <div className="pf-hero-actions">
              <a className="pf-button pf-button-primary" href="#about">
                Read the design story
              </a>
              <a
                className="pf-button pf-button-ghost"
                href={LIVE_MODULE_URL}
                target="_blank"
                rel="noreferrer"
              >
                View the live module <ArrowUpRight />
              </a>
            </div>
          </div>

          <figure className="pf-hero-portrait">
            <img
              src="/portfolio/portrait.webp"
              alt="Portrait of Andrea Gabrielle Tenorio"
              width={271}
              height={361}
              decoding="async"
            />
            <figcaption>Andrea Gabrielle Tenorio</figcaption>
          </figure>
        </div>

        <div className="pf-hero-foot">
          <span>{PORTFOLIO.projectTitle}</span>
          <span>Portfolio · {PORTFOLIO.year}</span>
        </div>
      </header>

      <section className="pf-section" id="about" aria-labelledby="about-title">
        <SectionHead
          id="about-title"
          number="01"
          label="About the Author"
          title="A teacher and designer, still learning."
          lead="I built this module for Grade 12 learners, and the process changed how I think about teaching online."
        />

        <div className="pf-about-grid">
          <div className="pf-about-copy">
            <p className="pf-bio">{PORTFOLIO.bio}</p>
            <p className="pf-about-role">
              Graduate student, {PORTFOLIO.program}
            </p>
          </div>

          <div className="pf-education">
            <h3 className="pf-subheading">Educational background</h3>
            <ol className="pf-timeline">
              {EDUCATION.map((entry) => (
                <li key={entry.programme}>
                  <div>
                    <p className="pf-timeline-title">{entry.programme}</p>
                    <p className="pf-timeline-meta">
                      {entry.institution}
                      <span aria-hidden="true"> · </span>
                      {entry.note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        className="pf-section"
        id="project"
        aria-labelledby="project-title"
      >
        <SectionHead
          id="project-title"
          number="02"
          label="About This Project"
          title="A module built around a real learning problem."
          lead="The project was a terminal course requirement, but the design problem was practical: how do you move learners beyond recall in a low-bandwidth online course?"
        />

        <div className="pf-project-copy">
          <p className="pf-project-lead">{PORTFOLIO.projectSummary}</p>
          <p>{PORTFOLIO.projectContext}</p>
          <p>{PORTFOLIO.projectPurpose}</p>
        </div>

        <dl className="pf-facts">
          {MODULE_FACTS.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="pf-module-overview">
          <div className="pf-module-copy">
            <p className="pf-eyebrow">The module</p>
            <h3 className="pf-module-title">
              Functions and Importance of Education in Society
            </h3>
            <p>{PORTFOLIO.moduleAbout}</p>

            <h4 className="pf-subheading">Module learning outcomes</h4>
            <ol className="pf-outcomes">
              {MODULE_OUTCOMES.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ol>

            <a
              className="pf-text-link"
              href={LIVE_MODULE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Open the live module <ArrowUpRight />
            </a>
          </div>

          <figure className="pf-screenshot pf-screenshot-browser">
            <div className="pf-browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <span className="pf-browser-url">
                school-module.tenorio-andreagabrielle.workers.dev
              </span>
            </div>
            <img
              src="/portfolio/module-home.webp"
              alt="The live learning module homepage, showing the module title, introduction, and start button."
              width={1440}
              height={1100}
              loading="lazy"
              decoding="async"
            />
            <figcaption>The live module on desktop.</figcaption>
          </figure>
        </div>

        <div className="pf-lesson-arc">
          {LESSON_ARC.map((lesson) => (
            <article key={lesson.number} className="pf-lesson">
              <p className="pf-lesson-number">{lesson.number}</p>
              <p className="pf-phase-tag">{lesson.role}</p>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pf-section" id="addie" aria-labelledby="addie-title">
        <SectionHead
          id="addie-title"
          number="03"
          label="ADDIE Documentation"
          title="Five phases, one evolving design."
          lead="The worksheets record the decisions. This section shows how those decisions connect — and where the pilot sent the design back for revision."
        />

        <nav className="pf-phase-index" aria-label="ADDIE phases">
          {PHASES.map((phase) => (
            <a href={`#phase-${phase.id}`} key={phase.id}>
              <span>{phase.number}</span>
              {phase.name}
            </a>
          ))}
        </nav>

        <div className="pf-phases">
          {PHASES.map((phase) => (
            <PhaseBlock phase={phase} key={phase.id} />
          ))}
        </div>
      </section>

      <section
        className="pf-section"
        id="artifacts"
        aria-labelledby="artifacts-title"
      >
        <SectionHead
          id="artifacts-title"
          number="04"
          label="Worksheets & Artifacts"
          title="The working documents behind the decisions."
          lead="The seven FA worksheets, embedded as PDFs. Open any worksheet in a new tab if you prefer your browser’s own PDF viewer."
        />

        <div className="pf-pdf-list">
          {ARTIFACTS.map((artifact) => (
            <article className="pf-pdf-card" key={artifact.id}>
              <div className="pf-pdf-head">
                <div className="pf-pdf-heading">
                  <span className="pf-pdf-number">{artifact.number}</span>
                  <div>
                    <h3>{artifact.title}</h3>
                    <p className="pf-meta-label">
                      {artifact.phase} · {artifact.pages}
                    </p>
                  </div>
                </div>
                <a
                  className="pf-text-link"
                  href={artifact.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in new tab <ArrowUpRight />
                </a>
              </div>

              <div className="pf-pdf-frame">
                <iframe
                  src={`${artifact.file}#view=FitH`}
                  title={`${artifact.title} PDF`}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pf-section" id="pilot" aria-labelledby="pilot-title">
        <SectionHead
          id="pilot-title"
          number="05"
          label="Pilot Implementation & Evaluation"
          title="A small pilot, read carefully."
          lead="The pilot was not a controlled study. It was a real attempt to put the module in front of people and listen for the places where the design failed."
        />

        <div className="pf-form-evidence">
          <h3 className="pf-subheading">The feedback form</h3>
          <p>
            The module feedback form asked learners to rate three statements:
            the module was clear and easy to follow, the activities helped them
            understand the lesson, and they felt more confident explaining the
            functions and importance of education. It also invited open
            comments.
          </p>
          <figure className="pf-screenshot pf-form-shot">
            <img
              src="/portfolio/pilot-form.webp"
              alt="Cropped Google Form summary showing seven responses. Respondent emails are not shown."
              width={618}
              height={150}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              Google Form summary: seven responses. Respondent emails are not
              shown.
            </figcaption>
          </figure>
          <p className="pf-fineprint">
            The form was embedded in the module. The portfolio reports the
            response count and qualitative comments; it does not claim a
            validated learning gain.
          </p>
        </div>

        <ConversationDetails
          image="/portfolio/conversation-01.webp"
          caption="Follow-up feedback from a pilot participant after the first revision. The participant reflects on segmentation and asks whether activities need to be answered again."
        />
      </section>

      <section
        className="pf-section"
        id="redesign"
        aria-labelledby="redesign-title"
      >
        <SectionHead
          id="redesign-title"
          number="06"
          label="Evidence-Based Redesign"
          title="What changed, and why."
          lead="The evaluation did not lead to a new module. It led to a clearer one: shorter sections, a more legible structure, and explicit privacy guidance."
        />

        <div className="pf-table-wrap">
          <table className="pf-redesign-table">
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Evaluation finding</th>
                <th scope="col">Revision made</th>
                <th scope="col">Pedagogical justification</th>
              </tr>
            </thead>
            <tbody>
              {REDESIGN_ROWS.map((row) => (
                <tr key={row.area}>
                  <th scope="row">{row.area}</th>
                  <td>{row.finding}</td>
                  <td>{row.revision}</td>
                  <td>{row.rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pf-before-after">
          <figure>
            <p className="pf-figure-label">Before</p>
            <div className="pf-phone">
              <img
                src="/portfolio/before-segmentation.webp"
                alt="Before revision: a long, continuous lesson section on a phone screen."
                width={1290}
                height={2450}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              The reading ran as one long section, with little visible
              structure to break up the scroll.
            </figcaption>
          </figure>

          <figure>
            <p className="pf-figure-label">After</p>
            <div className="pf-phone">
              <img
                src="/portfolio/after-segmentation.webp"
                alt="After revision: the same lesson divided into shorter sections with descriptive subheadings."
                width={1290}
                height={2450}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption>
              The same content, segmented into shorter sections with
              descriptive subheadings.
            </figcaption>
          </figure>
        </div>

        <div className="pf-redesign-support">
          <figure className="pf-screenshot pf-privacy-shot">
            <img
              src="/portfolio/privacy-reminder.webp"
              alt="A data privacy reminder shown before the Padlet discussion activity."
              width={1290}
              height={1430}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              The added data privacy reminder, placed before the discussion
              board.
            </figcaption>
          </figure>

          <div>
            <h3 className="pf-subheading">The revision in one sentence</h3>
            <p className="pf-statement">
              Reduce unnecessary load without reducing the thinking.
            </p>
            <p>
              Segmentation, clearer organization, and privacy guidance are not
              cosmetic changes. They remove barriers that were getting in the
              way of the learning task while keeping the analysis, comparison,
              and reflection intact.
            </p>
            <p className="pf-next">
              <strong>Still to validate:</strong> whether learners understand
              when an activity has already been completed without asking, and
              whether a second pilot confirms that the revised structure holds
              up with more participants.
            </p>
          </div>
        </div>

        <ConversationDetails
          image="/portfolio/conversation-02.webp"
          caption="Post-revision feedback from a second pilot participant, describing the change from information overload to a more manageable structure."
        />
      </section>

      <section className="pf-reflection" id="reflection">
        <div className="pf-reflection-inner">
          <p className="pf-eyebrow">07 / Professional Reflection</p>
          <h2 className="pf-reflection-title" id="reflection-title">
            What I’m taking forward.
          </h2>

          <div className="pf-reflection-text">
            {REFLECTION_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="pf-reflection-quote">
            “An effective module design recognizes that there are barriers but
            is still willing to help students grow and learn.”
          </blockquote>

          <div className="pf-principles">
            {REFLECTION_PRINCIPLES.map((principle, index) => (
              <div key={principle.title}>
                <span className="pf-principle-number">
                  0{index + 1}
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>

          <div className="pf-reflection-next">
            <p className="pf-meta-label">Next validation step</p>
            <p>
              A second pilot with additional learners would test whether the
              revised segmentation and privacy guidance improve clarity
              without reducing the cognitive demand of the discussion and
              reflection tasks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
