import { Link } from 'react-router-dom';
import { MODULE } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/layout/ProgressBar';
import { LearningSequence } from '../components/content/LearningSequence';

export default function Home() {
  usePageMeta({ title: 'Home', description: MODULE.about });

  const { completedCount, totalSections } = useProgress();

  return (
    <div className="page">
      <header className="page-header hero hero-module-heading">
        <p className="hero-kicker">{MODULE.moduleLabel}:</p>
        <h1 className="page-title hero-title" tabIndex={-1} data-page-heading>
          {MODULE.title}
        </h1>
        <p className="hero-lead">{MODULE.intro}</p>

        <div className="actions">
          <Link className="button" to="/pre-assessment">
            Start Learning
          </Link>
          <Link className="button button-secondary" to="/modules">
            View All Sections
          </Link>
        </div>
      </header>

      <section
        className="section"
        aria-labelledby="introductory-message-heading"
      >
        <h2 id="introductory-message-heading" className="section-title">
          Introductory Message
        </h2>
        <div className="card">
          <div className="prose">
            <p>
              This Self-Learning Module (SLM) is prepared so that you, our dear
              learners, can continue your studies and learn at your own pace.
              Work through each section in order and mark it complete when you
              are ready—your progress is saved in this browser.
            </p>
            <p>
              The module is designed to take roughly three to six hours,
              depending on how much time you spend on the activities and
              reflection. At the end, you will write a reflection, complete a
              self-assessment, and answer a feedback survey. A References page
              lists the sources used.
            </p>
            <p>
              For more about the module, its author, and the learning outcomes,
              visit the <Link to="/about">About page</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your Progress
        </h2>
        <div className="card card-quiet">
          <ProgressBar completed={completedCount} total={totalSections} />
          <p className="card-note">
            Module progress and drafts are saved in this browser. Every section
            is open, so you can work through them in any order.{' '}
            <Link to="/modules">View All Sections</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="ponder-heading">
        <h2 id="ponder-heading" className="section-title">
          Questions to Ponder
        </h2>
        <div className="card">
          <p className="section-lead">
            Keep these questions in mind before you begin Lesson 1. They will
            guide your reading, discussion, and reflection.
          </p>
          <ol className="outcome-list">
            <li>How does education contribute to the development of individuals?</li>
            <li>Why should education be considered a fundamental human right?</li>
            <li>How can you contribute to society through your education?</li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="how-heading">
        <h2 id="how-heading" className="section-title">
          How the Module Works
        </h2>
        <div className="card">
          <p className="section-lead">
            Follow these four steps as you work through the module.
          </p>
          <LearningSequence />
        </div>
      </section>
    </div>
  );
}
