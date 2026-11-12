import { useState } from 'react';
import { LessonPage } from '../components/content/LessonPage';
import { LessonSection } from '../components/content/LessonSection';
import { PEER_RESPONSE_GROUPS } from '../content/peerResponses';
import { Icon } from '../components/ui/Icon';

const PADLET_EMBED_URL = 'https://padlet.com/embed/s025bys62pbspa8reg2u';
const PADLET_URL = 'https://padlet.com/s025bys62pbspa8reg2u';

const OBJECTIVES = [
  'Explain why education is considered a fundamental human right.',
  'Identify factors that contribute to unequal access to education.',
  'Analyze educational inequalities in the Philippine context.',
  'Explain how education can contribute to a more equitable society.',
];

const REFLECTION_RUBRIC = [
  {
    criterion: 'Initial Perspective and Reflection',
    levels: [
      {
        score: 4,
        label: 'Exemplary',
        description:
          'Clearly explains their initial perspective and what they learned or reconsidered.',
      },
      {
        score: 3,
        label: 'Proficient',
        description: 'Explains their initial perspective and what they learned.',
      },
      {
        score: 2,
        label: 'Developing',
        description:
          'Provides a limited explanation of their initial perspective or learning.',
      },
      {
        score: 1,
        label: 'Beginning',
        description:
          'Does not clearly explain their initial perspective or learning.',
      },
    ],
  },
  {
    criterion: "Engagement with Classmates' Perspectives",
    levels: [
      {
        score: 4,
        label: 'Exemplary',
        description:
          "Discusses a specific classmate's idea and explains how it influenced their thinking.",
      },
      {
        score: 3,
        label: 'Proficient',
        description: "Discusses a classmate's idea and explains its influence.",
      },
      {
        score: 2,
        label: 'Developing',
        description:
          "Mentions a classmate's idea but provides little explanation.",
      },
      {
        score: 1,
        label: 'Beginning',
        description:
          "Does not meaningfully refer to a classmate's perspective.",
      },
    ],
  },
  {
    criterion: 'Connection to Lesson Concepts',
    levels: [
      {
        score: 4,
        label: 'Exemplary',
        description:
          'Clearly connects the reflection to the functions and importance of education.',
      },
      {
        score: 3,
        label: 'Proficient',
        description:
          'Connects the reflection to relevant ideas about education.',
      },
      {
        score: 2,
        label: 'Developing',
        description:
          'Mentions ideas about education without clearly explaining the connection.',
      },
      {
        score: 1,
        label: 'Beginning',
        description: 'Does not connect the reflection to lesson concepts.',
      },
    ],
  },
  {
    criterion: 'Organization and Completeness',
    levels: [
      {
        score: 4,
        label: 'Exemplary',
        description:
          'Well-organized, clear, and addresses all guide questions within the word limit.',
      },
      {
        score: 3,
        label: 'Proficient',
        description:
          'Generally clear and organized; addresses most guide questions.',
      },
      {
        score: 2,
        label: 'Developing',
        description:
          'Some ideas are unclear or several guide questions are not addressed.',
      },
      {
        score: 1,
        label: 'Beginning',
        description:
          'Difficult to understand and addresses few guide questions.',
      },
    ],
  },
];

const CONTENTS = [
  { id: 'lesson-introduction', title: 'Lesson Introduction' },
  {
    id: 'human-right-to-education',
    title: 'Education as a Human Right',
  },
  { id: 'barriers-to-access', title: 'Barriers to Educational Access' },
  {
    id: 'education-and-inequality',
    title: 'Education and Inequality in Philippine Society',
  },
  {
    id: 'application-activity',
    title: 'Application Activity: Analyzing a Philippine Educational Issue',
  },
  { id: 'asynchronous-discussion', title: 'Asynchronous Discussion' },
  { id: 'discussion-prepare', title: 'Discussion: Prepare' },
  { id: 'peer-response-assignments', title: 'Peer Response Assignments' },
  { id: 'discussion-interact', title: 'Discussion: Interact' },
  { id: 'discussion-consolidate', title: 'Discussion: Consolidate' },
];

export default function Lesson2() {
  const [openRubric, setOpenRubric] = useState<number | null>(0);

  return (
    <LessonPage
      sectionId="lesson-2"
      objectives={OBJECTIVES}
      contents={CONTENTS}
      reading
    >
      <LessonSection id="lesson-introduction" title="Lesson Introduction">
        <div className="prose">
          <p>
            Although education is considered a fundamental human right, not
            everyone experiences equal opportunities to access quality
            education. Economic conditions, geographical location, and social
            circumstances can influence a person&apos;s educational
            opportunities.
          </p>
          <p>
            In this lesson, you will examine education as a human right and
            explore the challenges that affect access to education in Philippine
            society.
          </p>
        </div>
      </LessonSection>

      <LessonSection id="main-lesson-content" title="Main Lesson Content">
        <div
          className="lesson-subsection lesson-subsection-first"
          id="human-right-to-education"
        >
          <h3 className="lesson-subheading">
            Education as a Human Right
          </h3>
          <div className="prose">
            <p>
              Education is recognized as a fundamental human right. This means
              that every person, regardless of age, gender, income, disability,
              ethnicity, or location, is entitled to access quality learning
              opportunities. The right to education is not a privilege granted
              only to those who can afford it; it is a basic entitlement that
              enables people to exercise other rights and participate fully in
              society.
            </p>
            <p>
              The United Nations Educational, Scientific and Cultural
              Organization (UNESCO) emphasizes that education is essential to
              the exercise of other human rights. It promotes access to
              inclusive, equitable, and quality education for all. International
              agreements and national laws also affirm the right to education,
              including the Philippine Constitution, which mandates the State to
              protect and promote the right of all citizens to quality
              education at all levels.
            </p>
            <p>
              Education should be accessible to everyone because it supports
              individual freedom, empowerment, and social and economic
              development. It helps people make informed decisions, understand
              their rights, and improve their lives. When access to education is
              unequal, existing social and economic inequalities are reinforced.
              Ensuring access to quality education is therefore both a matter of
              justice and a condition for a more equitable society.
            </p>
          </div>
        </div>

        <div className="lesson-subsection" id="barriers-to-access">
          <h3 className="lesson-subheading">
            Barriers to Educational Access
          </h3>
          <div className="prose">
            <p>
              Despite the recognition of education as a right, many learners
              still face barriers to access. Poverty and financial limitations
              are among the most significant. Families may struggle to cover
              school supplies, transportation, uniforms, and other costs, even
              in public schools. In some cases, learners are forced to stop
              studying so they can work and help support their families.
            </p>
            <p>
              Geographical and technological barriers also affect access.
              Learners in remote or underserved communities may have to travel
              long distances to reach schools, and some areas lack adequate
              classrooms, teachers, and learning materials. The growth of online
              and blended learning has introduced additional challenges, such as
              limited internet access, lack of devices, and unstable
              electricity, which can widen the gap between learners who have
              resources and those who do not.
            </p>
            <p>
              The unequal distribution of educational resources is another
              barrier. Schools in urban and wealthier areas often have better
              facilities, more qualified teachers, and greater access to
              technology, while schools in poorer or rural areas may have fewer
              resources. These differences affect the quality of learning and
              the opportunities available to students. Addressing these barriers
              requires coordinated action from government, schools, communities,
              and other stakeholders.
            </p>
          </div>
        </div>

        <div className="lesson-subsection" id="education-and-inequality">
          <h3 className="lesson-subheading">
            Education and Inequality in Philippine Society
          </h3>
          <div className="prose">
            <p>
              In Philippine society, differences in educational opportunities
              are visible across regions, income groups, and types of schools.
              Students in well-resourced schools may have access to laboratories,
              libraries, technology, and experienced teachers, while students in
              underfunded schools may lack even basic facilities. These
              differences can affect academic performance, aspirations, and
              future opportunities.
            </p>
            <p>
              Social and economic inequalities are closely connected to
              educational inequality. Families with higher incomes can afford
              private schools, tutoring, and learning materials, giving their
              children advantages that other learners do not have. At the same
              time, learners from low-income families may face greater
              challenges in staying in school and pursuing higher education.
              Education can therefore either reduce or reproduce existing
              inequalities, depending on how accessible and equitable it is.
            </p>
            <p>
              The government and communities play important roles in addressing
              these inequalities. The government is responsible for providing
              accessible, quality education, allocating resources fairly, and
              implementing policies that support disadvantaged learners.
              Communities and schools can also contribute through local
              programs, partnerships, and support for learners and families. A
              more equitable education system requires sustained effort and
              collective responsibility.
            </p>
          </div>
        </div>
      </LessonSection>

      <LessonSection
        id="application-activity"
        title="Application Activity: Analyzing a Philippine Educational Issue"
      >
        <div className="prose">
          <p>
            Examine a Philippine-based news article or situation involving
            educational access. Then identify:
          </p>
        </div>
        <ul className="lesson-list">
          <li>The issue.</li>
          <li>The people affected.</li>
          <li>The factors contributing to the problem.</li>
          <li>The possible role of education in addressing the issue.</li>
        </ul>
      </LessonSection>

      <LessonSection
        id="asynchronous-discussion"
        title="Asynchronous Discussion"
      >
        <div className="prose">
          <p className="eyebrow eyebrow-muted">
            Comparison Activity: Education in Philippine Society
          </p>
          <p>
            <strong>Discussion title:</strong> The Functions and Importance of
            Education in Philippine Society
          </p>
          <p>
            <strong>Central question:</strong> How should Philippine society
            address the challenges in education, and what responsibilities
            should different stakeholders take in improving educational
            outcomes?
          </p>
          <p>
            This activity has three parts: prepare, interact, and consolidate.
            Use the discussion board at the end of this section to post your
            initial response and reply to your assigned classmate (and any
            optional reply).
          </p>
        </div>

        <div className="lesson-subsection" id="discussion-prepare">
          <h3 className="lesson-subheading">1. Prepare — Read and Analyze</h3>
          <div className="prose">
            <p>
              Read the sources below carefully. You do not need to memorize
              every statistic. Focus on the main issue, the function of
              education it relates to, the factors behind it, and the
              responsibilities of the people involved.
            </p>
          </div>

          <div className="callout callout-info">
            <p className="callout-title">Primary source</p>
            <p>
              <a
                href="https://www.gmanetwork.com/news/topstories/nation/989385/1-3-million-grade-11-students-poor-reading-comprehension-edcom/story/"
                target="_blank"
                rel="noreferrer"
              >
                “1.3 million Grade 11 students have poor reading comprehension
                — EDCOM.”
              </a>{' '}
              <em>GMA News Online</em>, May 29, 2026.
            </p>
            <p>
              The report discusses the reading comprehension difficulties of
              about 1.3 million Grade 11 students, based on the 2026 senior high
              school literacy assessment reported by EDCOM 2.
            </p>
          </div>

          <details className="rubric">
            <summary>Read the accessible summary of the news report</summary>
            <div className="prose">
              <p>
                A full video transcript is not available on the GMA News page.
                The summary below presents the key information reported in the
                news report.
              </p>
            </div>
            <ul className="lesson-list">
              <li>
                EDCOM 2 reported that 1.3 million of about 1.4 million Grade 11
                students nationwide had difficulty understanding what they
                read, based on DepEd&apos;s March 2026 Senior High School
                literacy assessment.
              </li>
              <li>
                Only 12% of Grade 11 learners were independent readers who could
                comprehend at their grade level, according to EDCOM 2&apos;s
                Simoun Antonio Salinas.
              </li>
              <li>
                Nearly six out of ten students were at the “frustration level,”
                the lowest literacy tier, while nearly three out of ten were at
                the “instructional level,” meaning they still needed teacher
                guidance.
              </li>
              <li>
                ACT Teachers Party-list Rep. Antonio Tinio blamed mass
                promotions and called the problem systemic. Salinas also noted
                that 40% of learners across all grade levels still struggle with
                reading comprehension.
              </li>
              <li>
                Education Secretary Sonny Angara said teacher training should
                focus on understanding rather than memorization. DepEd also
                launched the ARAL Program in May to support students struggling
                with reading and math.
              </li>
              <li>
                Lawmakers and teachers&apos; groups urged careful implementation
                and pilot testing of the new three-term school calendar.
              </li>
            </ul>
          </details>

          <h4 className="lesson-minor-heading">Guide questions</h4>
          <ul className="lesson-list">
            <li>What educational issue does the news report present?</li>
            <li>
              Which function of education is most affected by this issue? Why?
            </li>
            <li>What factors might contribute to the problem?</li>
            <li>
              What responsibilities should teachers, schools, families,
              communities, and the government consider?
            </li>
            <li>What evidence from the article supports your interpretation?</li>
          </ul>

          <h4 className="lesson-minor-heading">Initial discussion post</h4>
          <div className="prose">
            <p>
              Write a 150–250-word response that addresses the guide questions.
              Support your perspective with at least one specific detail from
              the article and one concept from the module. Use your own words
              and acknowledge the news source.
            </p>
          </div>
        </div>

        <div className="lesson-subsection" id="peer-response-assignments">
          <h3 className="lesson-subheading">Peer Response Assignments</h3>
          <div className="prose">
            <p>
              Find your student number in the groups below. Open your group to
              see the classmate paired with you. The group number only helps you
              locate your name and assignment — it does not change the activity.
            </p>
          </div>

          <div className="callout callout-info">
            <p className="callout-title">Name your Padlet post</p>
            <p>
              Use your full name as the author and include your student number,
              in this format: <strong>SN1_Abad, Jose</strong>. This helps your
              assigned partner and your teacher find your post.
            </p>
          </div>

          <div className="peer-groups">
            {PEER_RESPONSE_GROUPS.map((group) => (
              <details className="peer-group" key={group.group}>
                <summary>
                  Group {group.group} · {group.range}
                </summary>
                <ul className="peer-pairs">
                  {group.pairs.map((pair) => (
                    <li className="peer-pair" key={pair.a.sn}>
                      <span className="peer-student">
                        <span className="peer-sn">SN{pair.a.sn}</span>
                        {pair.a.name}
                      </span>
                      <span className="peer-arrow" aria-hidden="true">
                        <Icon name="swap" size={18} />
                      </span>
                      <span className="peer-student">
                        <span className="peer-sn">SN{pair.b.sn}</span>
                        {pair.b.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>

        <div className="lesson-subsection" id="discussion-interact">
          <h3 className="lesson-subheading">
            2. Interact — Compare Perspectives
          </h3>
          <div className="prose">
            <p>
              After posting your initial response, respond to the classmate
              paired with you in the Peer Response Assignments section. This is
              required.
            </p>
          </div>
          <ul className="lesson-list">
            <li>
              <strong>Required:</strong> the classmate paired with you in Peer
              Response Assignments.
            </li>
            <li>
              <strong>Optional:</strong> one more classmate of your choice.
            </li>
          </ul>
          <div className="prose">
            <p>
              The goal is not simply to agree or disagree, but to examine how
              your classmate interprets the same issue and whether they
              emphasize different explanations, evidence, or responsibilities.
            </p>
          </div>

          <h4 className="lesson-minor-heading">For each classmate, compare:</h4>
          <dl className="lesson-definition-list">
            <div>
              <dt>Similarity</dt>
              <dd>What idea or perspective do you share?</dd>
            </div>
            <div>
              <dt>Difference</dt>
              <dd>
                What is one meaningful difference between your perspectives?
              </dd>
            </div>
            <div>
              <dt>Supporting evidence</dt>
              <dd>What reason or evidence does your classmate use?</dd>
            </div>
            <div>
              <dt>Further thinking</dt>
              <dd>
                What question, suggestion, or insight can you offer to extend
                their perspective?
              </dd>
            </div>
          </dl>

          <h4 className="lesson-minor-heading">When responding:</h4>
          <ul className="lesson-list">
            <li>Read the entire post before responding.</li>
            <li>
              Refer to a specific idea and the reasoning or evidence your
              classmate used.
            </li>
            <li>Explain at least one similarity and one difference.</li>
            <li>
              Ask a respectful question or offer a constructive suggestion.
            </li>
            <li>Avoid responses that only say “I agree” or “I disagree.”</li>
            <li>Aim for 75–120 words per classmate.</li>
          </ul>

          <details className="rubric">
            <summary>Example of a meaningful comparison</summary>
            <div className="prose">
              <p>
                Suppose one classmate emphasizes insufficient learning
                resources, while another focuses on curriculum implementation
                and teacher preparation. A meaningful response might be:
              </p>
              <p>
                “Both of us recognize that reading comprehension is a serious
                concern in Philippine education. However, you emphasize
                learning resources, while I focus on teaching approaches and
                curriculum implementation. Your perspective made me consider
                that improving reading outcomes may require more than providing
                materials. How do you think schools can address both concerns
                at once?”
              </p>
            </div>
          </details>

          <h4 className="lesson-minor-heading">Discussion board</h4>
          <div className="prose">
            <p>
              Post your initial response and your reply to your assigned
              classmate (and any optional response) on the discussion board
              below.
            </p>
          </div>
          <div className="embed embed-board">
            <iframe
              src={PADLET_EMBED_URL}
              title="Asynchronous discussion board (Padlet)"
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

        <div className="lesson-subsection" id="discussion-consolidate">
          <h3 className="lesson-subheading">3. Consolidate — Reflect</h3>
          <div className="prose">
            <p>
              After completing your required peer responses, revisit your
              original perspective on the social issue you discussed. Write a
              150–200-word reflection explaining how your understanding
              developed after reading and engaging with your classmates&apos;
              perspectives.
            </p>
          </div>

          <h4 className="lesson-minor-heading">Guide questions</h4>
          <ul className="lesson-list">
            <li>What was your initial perspective on the social issue you chose?</li>
            <li>
              Which classmate&apos;s perspective helped you reconsider, expand, or
              clarify your understanding? Explain why.
            </li>
            <li>
              What similarities and differences did you notice between your
              perspective and those of your classmates?
            </li>
            <li>
              How did the discussion deepen your understanding of the functions
              and importance of education in addressing social issues?
            </li>
            <li>
              What question or concern about the issue would you still like to
              explore?
            </li>
          </ul>

          <h4 className="lesson-minor-heading">Reflection Rubric</h4>
          <p className="section-lead">
            Total: 16 points (4 criteria × 4 points each)
          </p>

          <div className="rubric-accordion">
            {REFLECTION_RUBRIC.map((item, index) => {
              const open = openRubric === index;
              const panelId = `rubric-panel-${index}`;
              const triggerId = `rubric-trigger-${index}`;

              return (
                <div
                  className={`rubric-acc-item${open ? ' is-open' : ''}`}
                  key={item.criterion}
                >
                  <button
                    type="button"
                    id={triggerId}
                    className="rubric-acc-trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenRubric(open ? null : index)}
                  >
                    <span className="rubric-acc-heading">
                      <span className="rubric-acc-number">{index + 1}</span>
                      <span className="rubric-acc-title">{item.criterion}</span>
                    </span>
                    <span className="rubric-acc-meta">
                      <span className="rubric-acc-points">4 pts</span>
                      <span className="rubric-acc-chevron" aria-hidden="true">
                        <Icon name="chevron-down" size={18} />
                      </span>
                    </span>
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="rubric-acc-panel"
                    hidden={!open}
                  >
                    <ul className="rubric-acc-levels">
                      {item.levels.map((level) => (
                        <li className="rubric-acc-level" key={level.score}>
                          <span className="rubric-acc-score">{level.score}</span>
                          <span className="rubric-acc-level-body">
                            <span className="rubric-acc-level-label">
                              {level.label}
                            </span>
                            <span className="rubric-acc-level-desc">
                              {level.description}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="field-help">
            Reminder: Your perspective does not have to change completely. A
            meaningful reflection may also show how the discussion strengthened,
            clarified, or expanded your original understanding.
          </p>

          <h4 className="lesson-minor-heading">Submit your reflection</h4>
          <div className="embed embed-form">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScKKdoE1vQUu7XePJXpWqfyMhgjC5ri7S3MRSmQwrC-J6iSvQ/viewform?embedded=true"
              title="Reflection form"
              loading="lazy"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </LessonSection>
    </LessonPage>
  );
}
