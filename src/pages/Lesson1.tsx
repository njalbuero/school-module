import { LessonPage } from '../components/content/LessonPage';
import { LessonSection } from '../components/content/LessonSection';

const OBJECTIVES = [
  'Explain the meaning of education as a social institution.',
  'Identify the important functions of education in society.',
  'Differentiate productive citizenry from self-actualization.',
  'Relate the functions of education to experiences in Philippine society.',
];

const CONTENTS = [
  { id: 'lesson-introduction', title: 'Lesson Introduction' },
  { id: 'understanding-education', title: 'Understanding Education' },
  {
    id: 'productive-citizenry',
    title: 'Education and Productive Citizenry',
  },
  {
    id: 'self-actualization',
    title: 'Education and Self-Actualization',
  },
  {
    id: 'application-activity',
    title: 'Education in My Life',
  },
];

export default function Lesson1() {
  return (
    <LessonPage
      sectionId="lesson-1"
      objectives={OBJECTIVES}
      contents={CONTENTS}
      reading
    >
      <LessonSection id="lesson-introduction" title="Lesson Introduction">
        <div className="prose">
          <p>
            Education is more than attending school or acquiring academic
            knowledge. It is a social institution that shapes individuals,
            develops abilities, transmits values, and prepares people to
            participate in society. In this lesson, you will explore what
            education means and how it contributes to personal and societal
            development.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="main-lesson-content">
        <div
          className="lesson-subsection lesson-subsection-first"
          id="understanding-education"
        >
          <h3 className="lesson-subheading">Understanding Education</h3>
          <div className="prose">
            <p>
              Education is the process through which people acquire knowledge,
              skills, values, habits, and attitudes. It is not limited to
              memorizing facts or passing examinations; it involves learning
              how to think, act, and participate in society. Through education,
              individuals develop their abilities and prepare for their roles in
              their families, communities, and workplaces.
            </p>
            <p>
              Education is also a social institution. Like the family, religion,
              government, and the economy, it is an organized system of roles,
              norms, and practices that helps society meet its needs. Schools,
              teachers, curricula, and educational policies are part of this
              institution. Education transmits culture, teaches shared values
              and norms, and prepares people for social and economic
              participation.
            </p>
            <p>
              Although schooling is the most familiar form of education,
              learning also happens beyond the classroom. It takes place in the
              family, in the community, at work, and through everyday
              experiences and interactions. Formal, non-formal, and informal
              learning all contribute to a person&apos;s development. This
              broader view helps us see education as a lifelong process rather
              than something that ends when a learner leaves school.
            </p>
          </div>
        </div>

        <div className="lesson-subsection" id="productive-citizenry">
          <h3 className="lesson-subheading">
            Education and Productive Citizenry
          </h3>
          <div className="prose">
            <p>
              One of the most visible functions of education is the development
              of knowledge and skills. Schools teach literacy, numeracy,
              scientific thinking, communication, and technical competencies
              that people need in daily life and in the workplace. Education
              also develops higher-order skills such as critical thinking,
              problem solving, and collaboration, which help individuals adapt
              to changing conditions.
            </p>
            <p>
              Education prepares individuals for social and economic
              participation. It equips learners with the qualifications and
              competencies needed to find employment, contribute to the economy,
              and improve their quality of life. It also prepares them to take
              part in community life, make informed decisions, and respond to
              social issues.
            </p>
            <p>
              Beyond economic productivity, education shapes responsible
              citizenship. It helps people understand their rights and
              responsibilities, respect diverse perspectives, and participate
              actively in democratic processes. Through education, individuals
              learn to contribute to the common good and to work with others in
              addressing the needs of society. In this way, education supports
              both personal advancement and the development of the community.
            </p>
          </div>
        </div>

        <div className="lesson-subsection" id="self-actualization">
          <h3 className="lesson-subheading">
            Education and Self-Actualization
          </h3>
          <div className="prose">
            <p>
              Education also contributes to self-actualization. It helps
              individuals understand their personal potential by exposing them
              to different ideas, experiences, and fields of knowledge. As
              learners discover their interests, strengths, and areas for
              improvement, they become more aware of who they are and what they
              can become.
            </p>
            <p>
              Education supports personal growth and development. It builds
              confidence, encourages self-reflection, and provides opportunities
              to set and pursue meaningful goals. Learning new skills and
              overcoming challenges can help individuals develop a stronger
              sense of competence and purpose.
            </p>
            <p>
              This connects to Abraham Maslow&apos;s concept of
              self-actualization, which refers to the drive to become the best
              version of oneself and to fulfill one&apos;s potential. Maslow
              placed self-actualization at the top of his hierarchy of needs,
              after basic needs such as food, safety, belonging, and esteem have
              been reasonably met. Education supports this process by helping
              learners develop their abilities, pursue their interests, and
              work toward goals that give their lives meaning. While
              self-actualization is a lifelong process, education provides
              important opportunities for growth.
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection
        id="application-activity"
        title="Education in My Life"
      >
        <div className="callout callout-info">
          <p className="callout-title">
            No need to answer — just give it a thought.
          </p>
          <p>
            How does education contribute to your personal development and your
            role in society?
          </p>
        </div>
      </LessonSection>
    </LessonPage>
  );
}
