import { LessonPage } from '../components/content/LessonPage';
import { LessonSection } from '../components/content/LessonSection';

const OBJECTIVES = [
  'Define education and explain its significance.',
  'Describe the development of the Philippine educational system.',
  'Identify and explain the major functions and importance of education in society.',
  'Evaluate how education influences individuals and society.',
];

const CONTENTS = [
  { id: 'question-to-ponder', title: 'Question to Ponder' },
  { id: 'introduction', title: 'Introduction' },
  { id: 'what-is-education', title: 'What Is Education?' },
  { id: 'education-in-the-philippines', title: 'Education in the Philippines' },
  {
    id: 'historical-development',
    title: 'Historical Development of Philippine Education',
  },
  { id: 'types-of-education', title: 'Types of Education' },
  { id: 'functions-of-education', title: 'Functions of Education in Society' },
  { id: 'education-as-a-human-right', title: 'Education as a Human Right' },
  { id: 'summary', title: 'Summary' },
];

export default function Lesson1() {
  return (
    <LessonPage
      sectionId="lesson-1"
      objectives={OBJECTIVES}
      objectivesLead="By the end of this lesson sequence, you should be able to:"
      contents={CONTENTS}
      reading
    >
      <LessonSection id="question-to-ponder" title="Question to Ponder">
        <div className="prose">
          <p>
            How important is education in your life, and how do you think it
            will influence your future?
          </p>
        </div>
      </LessonSection>

      <LessonSection id="introduction" title="Introduction">
        <div className="prose">
          <p>
            Education is an essential social institution that contributes to
            the development of individuals and society. Through education,
            people acquire knowledge, skills, values, and attitudes that enable
            them to participate meaningfully in their communities.
          </p>
          <p>
            Education helps individuals understand their environment, develop
            their abilities, and prepare for their future roles in society.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="what-is-education" title="What Is Education?">
        <div className="prose">
          <p>
            Education is a social institution through which society provides its
            members with essential knowledge, skills, cultural norms, and values.
          </p>
          <p>
            It involves the acquisition of knowledge, habits, skills, and
            abilities through instruction, training, and independent learning.
          </p>
          <p>
            Education may take place in schools, communities, families,
            workplaces, and other environments where individuals gain knowledge
            and develop their abilities.
          </p>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">Key ideas about education</h3>
          <ul className="lesson-list">
            <li>It develops intellectual and practical abilities.</li>
            <li>It transmits cultural values and social norms.</li>
            <li>It prepares individuals for employment and social participation.</li>
            <li>It contributes to personal growth and societal development.</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection
        id="education-in-the-philippines"
        title="Education in the Philippines"
      >
        <div className="prose">
          <p>
            The Philippine educational system is governed by institutions
            responsible for developing educational policies, implementing
            curricula, managing schools, and ensuring access to education.
          </p>
          <p>
            The Department of Education (DepEd) is primarily responsible for
            basic education in the Philippines.
          </p>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">Its responsibilities include</h3>
          <ul className="lesson-list">
            <li>Developing and implementing the basic education curriculum.</li>
            <li>Managing public elementary and secondary schools.</li>
            <li>Providing educational resources.</li>
            <li>Recruiting and supporting teachers and school personnel.</li>
            <li>Promoting access to quality basic education.</li>
          </ul>
        </div>
      </LessonSection>

      <LessonSection
        id="historical-development"
        title="Historical Development of Philippine Education"
      >
        <div className="lesson-subsection">
          <h3 className="lesson-subheading">
            A. Education During the Spanish Period
          </h3>
        <div className="prose">
          <p>
            During Spanish colonization, education was strongly influenced by
            religion and the Catholic Church.
          </p>
          <p>
            Education focused on religious instruction, moral values, and the
            propagation of Christianity.
          </p>
          <p>
            Educational opportunities were limited and were more accessible to
            the privileged classes. Education became associated with social
            status and prestige.
          </p>
          <p>
            The educated elite, commonly referred to as the ilustrados, played an
            important role in the development of Filipino intellectual and
            political thought.
          </p>
        </div>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">
            B. Education During the American Period
          </h3>
        <div className="prose">
          <p>
            During American colonization, education became more institutionalized
            through the establishment and expansion of public schools.
          </p>
          <p>Education emphasized:</p>
        </div>

        <ul className="lesson-list">
          <li>Democratic participation.</li>
          <li>Civic responsibility.</li>
          <li>English language instruction.</li>
          <li>Preparation for self-governance.</li>
          <li>Broader access to formal education.</li>
        </ul>

        <div className="prose">
          <p>
            The expansion of public education helped shape the modern Philippine
            educational system.
          </p>
        </div>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">
            C. Education in Contemporary Philippine Society
          </h3>
        <div className="prose">
          <p>
            In contemporary Philippine society, education is recognized as an
            important factor in national development.
          </p>
          <p>
            The implementation of the K to 12 program aimed to strengthen basic
            education and better prepare learners for higher education,
            employment, and other opportunities.
          </p>
          <p>
            Education continues to respond to the changing needs of society,
            including economic development, technological advancement, and social
            transformation.
          </p>
        </div>
        </div>
      </LessonSection>

      <LessonSection id="types-of-education" title="Types of Education">
        <div className="prose">
          <p>
            Education can generally be classified into three types: formal,
            non-formal, and informal education.
          </p>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">A. Formal Education</h3>
        <div className="prose">
          <p>
            Formal education refers to organized and structured learning that
            takes place within an established educational institution.
          </p>
        </div>

        <h4 className="lesson-minor-heading">Characteristics</h4>
        <ul className="lesson-list">
          <li>Follows a prescribed curriculum.</li>
          <li>Has organized learning levels and schedules.</li>
          <li>Is facilitated by qualified teachers.</li>
          <li>Usually provides recognized certificates or qualifications.</li>
        </ul>

        <h4 className="lesson-minor-heading">Examples</h4>
        <ul className="lesson-list">
          <li>Elementary education.</li>
          <li>Junior high school.</li>
          <li>Senior high school.</li>
          <li>College and university education.</li>
        </ul>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">B. Non-Formal Education</h3>
        <div className="prose">
          <p>
            Non-formal education refers to organized learning activities
            conducted outside the traditional formal school system.
          </p>
          <p>
            It is usually designed to meet specific learning needs and may
            provide flexible learning opportunities.
          </p>
        </div>

        <h4 className="lesson-minor-heading">Characteristics</h4>
        <ul className="lesson-list">
          <li>May have flexible schedules.</li>
          <li>Focuses on particular skills or competencies.</li>
          <li>May be community-based.</li>
          <li>Does not necessarily follow the traditional school curriculum.</li>
        </ul>

        <h4 className="lesson-minor-heading">Examples</h4>
        <ul className="lesson-list">
          <li>Community-based literacy programs.</li>
          <li>Skills training workshops.</li>
          <li>Alternative learning programs.</li>
          <li>Livelihood training.</li>
        </ul>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">C. Informal Education</h3>
        <div className="prose">
          <p>
            Informal education refers to learning that occurs naturally through
            daily experiences, interactions, and activities.
          </p>
          <p>
            It does not necessarily involve a structured curriculum, formal
            instruction, or assessment.
          </p>
        </div>

        <h4 className="lesson-minor-heading">Examples</h4>
        <ul className="lesson-list">
          <li>Learning household skills from family members.</li>
          <li>Learning through personal experiences.</li>
          <li>Acquiring knowledge from conversations.</li>
          <li>Learning practical skills through observation.</li>
        </ul>
        </div>
      </LessonSection>

      <LessonSection
        id="functions-of-education"
        title="Functions of Education in Society"
      >
        <div className="prose">
          <p>
            Education performs several important functions that contribute to the
            development and stability of society.
          </p>
          <p>
            According to the sociological perspective associated with Herbert
            Spencer, the different functions of social institutions contribute to
            the functioning of society as a whole.
          </p>
          <p>
            When institutions fulfill their respective functions, they contribute
            to social progress.
          </p>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">A. Productive Citizenry</h3>
        <div className="prose">
          <p>
            Education equips individuals with knowledge, skills, and competencies
            that enable them to become productive members of society.
          </p>
          <p>
            Through education, individuals can contribute to the development of
            social institutions, economic activities, and community life.
          </p>
          <p>Education supports productive citizenry by:</p>
        </div>

        <ul className="lesson-list">
          <li>Developing professional and practical skills.</li>
          <li>Preparing individuals for employment.</li>
          <li>Encouraging responsible citizenship.</li>
          <li>Promoting participation in community development.</li>
          <li>Supporting adaptation to changing social and economic conditions.</li>
        </ul>

        <div className="prose">
          <p>
            Formal and non-formal education are both important in developing
            individuals who can contribute to society.
          </p>
          <p>
            Educational institutions must also respond to the changing demands of
            the environment to ensure that learners acquire relevant knowledge
            and competencies.
          </p>
        </div>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">B. Self-Actualization</h3>
        <div className="prose">
          <p>
            Education contributes to the development of an individual&apos;s
            sense of self.
          </p>
          <p>
            It allows learners to discover their interests, recognize their
            strengths, identify areas for improvement, and develop their
            potential.
          </p>
          <p>Education supports self-actualization by:</p>
        </div>

        <ul className="lesson-list">
          <li>Encouraging self-discovery.</li>
          <li>Developing personal abilities.</li>
          <li>Strengthening confidence.</li>
          <li>Helping individuals recognize their strengths and weaknesses.</li>
          <li>Supporting the achievement of personal goals.</li>
          <li>Encouraging continuous personal development.</li>
        </ul>

        <div className="prose">
          <p>
            Through education, individuals become more aware of their
            capabilities and gain opportunities to pursue meaningful goals.
          </p>
        </div>
        </div>
      </LessonSection>

      <LessonSection
        id="education-as-a-human-right"
        title="Education as a Human Right"
      >
        <div className="prose">
          <p>Education is recognized as a fundamental human right.</p>
          <p>
            The United Nations Educational, Scientific and Cultural Organization
            (UNESCO) emphasizes that education is essential to the exercise of
            other human rights.
          </p>
          <p>
            Education promotes individual freedom and empowerment and contributes
            to social and economic development.
          </p>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">
            Importance of Education as a Human Right
          </h3>
        <dl className="lesson-definition-list">
          <div>
            <dt>Promotes equality</dt>
            <dd>
              Education provides opportunities for individuals to improve their
              lives regardless of their background.
            </dd>
          </div>
          <div>
            <dt>Encourages empowerment</dt>
            <dd>
              It enables individuals to make informed decisions and participate
              in society.
            </dd>
          </div>
          <div>
            <dt>Supports freedom</dt>
            <dd>
              Education develops critical thinking and allows individuals to
              better understand their rights.
            </dd>
          </div>
          <div>
            <dt>Contributes to development</dt>
            <dd>
              Education supports social, cultural, and economic progress.
            </dd>
          </div>
          <div>
            <dt>Promotes inclusion</dt>
            <dd>
              Access to education helps individuals participate more fully in
              society.
            </dd>
          </div>
        </dl>
        </div>

        <div className="lesson-subsection">
          <h3 className="lesson-subheading">Primary Education</h3>
        <div className="prose">
          <p>
            Primary education is especially important because it establishes the
            foundation for lifelong learning.
          </p>
          <p>
            It provides children with essential knowledge and skills that help
            them adapt to society and participate in their communities.
          </p>
          <p>
            Access to quality primary education is therefore an important
            responsibility of society and the government.
          </p>
        </div>
        </div>
      </LessonSection>

      <LessonSection id="summary" title="Summary">
        <div className="prose">
          <p>
            Education is a vital social institution that contributes to both
            individual and societal development.
          </p>
          <p>
            It provides individuals with knowledge, skills, values, and
            competencies that prepare them for their roles in society.
          </p>
          <p>
            The Philippine educational system has evolved through different
            historical periods, reflecting changes in social, political, and
            economic conditions.
          </p>
          <p>
            Education can be classified into formal, non-formal, and informal
            forms, each of which contributes to learning and development.
          </p>
          <p>
            Among its important functions are the development of productive
            citizens and the promotion of self-actualization.
          </p>
          <p>
            Furthermore, education is a fundamental human right that promotes
            freedom, empowerment, equality, and social development.
          </p>
          <p>
            Through education, individuals gain opportunities to improve their
            lives and contribute meaningfully to society.
          </p>
        </div>
      </LessonSection>
    </LessonPage>
  );
}
