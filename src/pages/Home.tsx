import { Link } from 'react-router-dom';
import { MODULE } from '../content/module';
import { usePageMeta } from '../hooks/usePageMeta';
import { useProgress } from '../context/ProgressContext';
import { ProgressBar } from '../components/layout/ProgressBar';

export default function Home() {
  usePageMeta({ title: 'Home', description: MODULE.about });

  const { completedCount, totalSections } = useProgress();

  return (
    <div className="page">
      <header className="page-header hero">
        <p className="eyebrow">{MODULE.subject}</p>
        <p className="eyebrow eyebrow-muted">{MODULE.quarter}</p>
        <h1 className="page-title hero-title" tabIndex={-1} data-page-heading>
          {MODULE.title}
        </h1>
        <p className="hero-lead">{MODULE.intro}</p>

        <div className="actions">
          <Link className="button" to="/pre-assessment">
            Start the module
          </Link>
          <Link className="button button-secondary" to="/modules">
            See all sections
          </Link>
        </div>
        <p className="hero-note">
          Begins with a short pre-assessment. Not graded — it only shows what you
          already know.
        </p>
      </header>

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your progress
        </h2>
        <div className="card card-quiet">
          <ProgressBar completed={completedCount} total={totalSections} />
          <p className="card-note">
            Saved in this browser on this device. Nothing is sent to a server.{' '}
            <Link to="/modules">View all sections</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-title">
          About this module
        </h2>
        <div className="prose">
          <p>{MODULE.about}</p>
          <p>
            <Link to="/about">
              Read more about the module, its author, and the learning outcomes
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="how-heading">
        <h2 id="how-heading" className="section-title">
          How the module works
        </h2>
        <ol className="step-list">
          <li>
            <span className="step-title">Check what you know</span>
            A short pre-assessment with instant feedback opens the module. It is
            not graded.
          </li>
          <li>
            <span className="step-title">Work through three lessons</span>
            Each lesson moves from foundations, to application, to evaluation,
            and ends with a short formative check.
          </li>
          <li>
            <span className="step-title">Finish with a reflection</span>
            Complete the summative task against a rubric, then wrap up with a
            self-assessment and feedback survey.
          </li>
        </ol>
      </section>
    </div>
  );
}
