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
      <header className="page-header hero">
        <p className="eyebrow">
          {MODULE.subject} · {MODULE.quarter}
        </p>
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

      <section className="section" aria-labelledby="progress-heading">
        <h2 id="progress-heading" className="section-title">
          Your Progress
        </h2>
        <div className="card card-quiet">
          <ProgressBar completed={completedCount} total={totalSections} />
          <p className="card-note">
            Module progress and drafts are saved in this browser. Sections
            unlock in order as you complete them.{' '}
            <Link to="/modules">View All Sections</Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-title">
          About this Module
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
          How the Module Works
        </h2>
        <LearningSequence variant="list" />
      </section>
    </div>
  );
}
