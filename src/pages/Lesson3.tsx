import { LessonPage } from '../components/content/LessonPage';
import { LessonSection } from '../components/content/LessonSection';

const PADLET_EMBED_URL = 'https://padlet.com/embed/s025bys62pbspa8reg2u';
const PADLET_URL = 'https://padlet.com/s025bys62pbspa8reg2u';

export default function Lesson3() {
  return (
    <LessonPage sectionId="lesson-3">
      <LessonSection id="asynchronous-discussion" title="Asynchronous Discussion">
        <div className="card">
          <p className="section-lead">
            Analyse a news report about a current social issue in Philippine
            society, then share your analysis with the class.
          </p>
          <ul className="guidance-list">
            <li>Post your analysis on the discussion board below.</li>
            <li>
              Explain which function or perspective on education helps you
              understand the issue.
            </li>
            <li>Reply to at least two classmates' posts.</li>
          </ul>

          <div className="embed embed-board">
            <iframe
              src={PADLET_EMBED_URL}
              title="Lesson 3 asynchronous discussion board (Padlet)"
              allow="camera;microphone;geolocation;display-capture;clipboard-write"
              loading="lazy"
              frameBorder={0}
            />
          </div>

          <p className="field-help">
            If the board does not load,{' '}
            <a href={PADLET_URL} target="_blank" rel="noreferrer">
              open the discussion board in a new tab
            </a>
            .
          </p>
        </div>
      </LessonSection>
    </LessonPage>
  );
}
