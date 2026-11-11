import { LessonPage } from '../components/content/LessonPage';
import { LessonSection } from '../components/content/LessonSection';

const OBJECTIVES = [
  'Identify the different forms of education.',
  'Differentiate formal, non-formal, and informal education.',
  'Recognize examples of these forms in everyday Philippine life.',
  'Evaluate how different forms of education contribute to society.',
];

const CONTENTS = [
  { id: 'lesson-introduction', title: 'Lesson Introduction' },
  { id: 'formal-education', title: 'Formal Education' },
  { id: 'non-formal-education', title: 'Non-Formal Education' },
  { id: 'informal-education', title: 'Informal Education' },
  {
    id: 'inclusive-education',
    title: 'Inclusive Education and Special Education',
  },
];

export default function Lesson3() {
  return (
    <LessonPage
      sectionId="lesson-3"
      objectives={OBJECTIVES}
      contents={CONTENTS}
      reading
    >
      <LessonSection id="lesson-introduction" title="Lesson Introduction">
        <div className="prose">
          <p>
            Learning does not happen exclusively inside classrooms. People
            acquire knowledge and skills through schools, organized training
            programs, families, communities, and everyday experiences.
          </p>
          <p>
            In this lesson, you will explore the different forms of education
            and examine how each contributes to individual development and
            society.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="main-lesson-content" title="Main Lesson Content">
        <div
          className="lesson-subsection lesson-subsection-first"
          id="formal-education"
        >
          <h3 className="lesson-subheading">Formal Education</h3>
          <div className="prose">
            <p>
              Formal education is the structured learning that takes place in
              established educational institutions such as schools, colleges,
              and universities. It follows an organized curriculum, has defined
              learning levels, and is facilitated by qualified teachers. Formal
              education is usually delivered in a sequence, with each level
              building on the previous one.
            </p>
            <p>
              Because it is organized and systematic, formal education provides
              learners with recognized knowledge, skills, and qualifications. It
              includes elementary education, secondary education, and tertiary
              or higher education. In the Philippines, formal education is
              guided by national policies and standards, and it often leads to
              certificates, diplomas, or degrees that are recognized by
              employers and other institutions.
            </p>
            <p>
              Formal education plays an important role in preparing individuals
              for further study, employment, and participation in society. It
              provides a common foundation of knowledge and helps learners
              develop the competencies they need to function in different social
              and economic settings.
            </p>
          </div>
        </div>

        <div className="lesson-subsection" id="non-formal-education">
          <h3 className="lesson-subheading">Non-Formal Education</h3>
          <div className="prose">
            <p>
              Non-formal education refers to organized learning that takes place
              outside the traditional school system. Like formal education, it
              has clear objectives and planned activities, but it is often more
              flexible in schedule, location, and delivery. It may focus on
              specific skills, competencies, or needs of a particular group of
              learners.
            </p>
            <p>
              Non-formal education includes skills training, livelihood
              programs, literacy classes, and alternative learning programs.
              These programs are often designed for out-of-school youth, adults,
              workers, or community members who need specific knowledge or
              skills. In the Philippines, community-based programs and
              government or non-government initiatives provide non-formal
              learning opportunities to different groups.
            </p>
            <p>
              Non-formal education contributes to society by expanding access to
              learning beyond formal schooling. It helps people develop
              practical skills, improve their livelihoods, and participate more
              fully in community life. It also provides second chances for
              learners who were not able to complete formal education.
            </p>
          </div>
        </div>

        <div className="lesson-subsection" id="informal-education">
          <h3 className="lesson-subheading">Informal Education</h3>
          <div className="prose">
            <p>
              Informal education is learning that occurs naturally through
              everyday experiences, interactions, and activities. It is not
              usually planned or structured, and it does not follow a formal
              curriculum. Instead, it happens as people observe, imitate, ask
              questions, and practice skills in their daily lives.
            </p>
            <p>
              The family is one of the first sources of informal education.
              Children learn language, values, habits, and basic life skills
              from their parents and other family members. Peers and community
              members also contribute to informal learning through
              conversations, shared activities, and examples. In addition,
              people learn through observation and practice, such as learning
              household skills, farming, fishing, or a trade from relatives and
              neighbors.
            </p>
            <p>
              Informal education is important because it helps people adapt to
              their environment and acquire practical knowledge that may not be
              taught in school. It supports lifelong learning and complements
              both formal and non-formal education.
            </p>
          </div>
        </div>

        <div className="lesson-subsection" id="inclusive-education">
          <h3 className="lesson-subheading">
            Inclusive Education and Special Education
          </h3>
          <div className="prose">
            <p>
              Inclusive education recognizes that learners have diverse needs,
              backgrounds, and abilities. It aims to ensure that all learners,
              including those with disabilities, can access quality education
              and participate fully in learning. Inclusive education is not only
              about placing learners in the same classroom; it also involves
              removing barriers and providing the support they need to succeed.
            </p>
            <p>
              Special education refers to the programs, services, and
              instructional approaches designed to meet the needs of learners
              with disabilities or special educational needs. It may involve
              specialized teaching methods, assistive devices, accessible
              materials, and individualized support. The goal is to help every
              learner develop their potential and participate meaningfully in
              school and society.
            </p>
            <p>
              Inclusive education and special education contribute to a more
              equitable society by promoting access, participation, and
              opportunity for all learners. They recognize that diversity is
              part of every community and that education should respond to the
              needs of every learner.
            </p>
          </div>
        </div>
      </LessonSection>
    </LessonPage>
  );
}
