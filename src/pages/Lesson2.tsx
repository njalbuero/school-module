import { LessonPage } from '../components/content/LessonPage';
import { LessonSection } from '../components/content/LessonSection';
import { RubricAccordion } from '../components/content/RubricAccordion';
import { PEER_RESPONSE_GROUPS } from '../content/peerResponses';
import { Icon } from '../components/ui/Icon';

const PADLET_EMBED_URL = 'https://padlet.com/embed/s025bys62pbspa8reg2u';
const PADLET_URL =
  'https://padlet.com/masterandreagabrielle/asynchronous-discussion-thread-s025bys62pbspa8reg2u';

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

const DISCUSSION_RUBRIC = [
  {
    criterion: 'Initial Post — Analysis of the Issue',
    levels: [
      {
        score: 4,
        label: 'Exemplary',
        description:
          'Clearly explains the issue, who is affected, and its connection to education and Philippine society; addresses all guide questions.',
      },
      {
        score: 3,
        label: 'Proficient',
        description:
          'Explains the issue and who is affected with a general connection to education; addresses most guide questions.',
      },
      {
        score: 2,
        label: 'Developing',
        description:
          'Partially explains the issue or who is affected; addresses few guide questions.',
      },
      {
        score: 1,
        label: 'Beginning',
        description:
          'Does not clearly explain the issue, who is affected, or its connection to education.',
      },
    ],
  },
  {
    criterion: 'Initial Post — Evidence and Module Concepts',
    levels: [
      {
        score: 4,
        label: 'Exemplary',
        description:
          'Uses at least one specific article detail and one relevant module concept; writes in own words and acknowledges the news source.',
      },
      {
        score: 3,
        label: 'Proficient',
        description:
          'Uses a relevant article detail and module concept, with minor gaps in explanation or attribution.',
      },
      {
        score: 2,
        label: 'Developing',
        description:
          'Uses limited or vague evidence; the module concept connection is unclear.',
      },
      {
        score: 1,
        label: 'Beginning',
        description:
          'Little or no evidence or module concept; relies on opinion or copied text.',
      },
    ],
  },
  {
    criterion: 'Peer Response — Comparison of Perspectives',
    levels: [
      {
        score: 4,
        label: 'Exemplary',
        description:
          "Clearly explains a similarity and a meaningful difference, referring to a specific idea or evidence from the classmate's post.",
      },
      {
        score: 3,
        label: 'Proficient',
        description:
          "Explains a similarity and a difference with some reference to the classmate's post.",
      },
      {
        score: 2,
        label: 'Developing',
        description:
          'Identifies a similarity or difference but explains it only briefly or vaguely.',
      },
      {
        score: 1,
        label: 'Beginning',
        description:
          "Does not meaningfully compare perspectives, or only summarizes the classmate's post.",
      },
    ],
  },
  {
    criterion: 'Peer Response — Constructive Engagement',
    levels: [
      {
        score: 4,
        label: 'Exemplary',
        description:
          "Asks a thoughtful, respectful question or offers a constructive suggestion that extends the classmate's thinking; meets 75–120 words and avoids simple agreement/disagreement.",
      },
      {
        score: 3,
        label: 'Proficient',
        description:
          'Offers a relevant question or suggestion and engages respectfully; may be slightly outside the word target.',
      },
      {
        score: 2,
        label: 'Developing',
        description:
          'Provides limited engagement, such as general agreement with little extension.',
      },
      {
        score: 1,
        label: 'Beginning',
        description:
          "Only agrees or disagrees, is disrespectful, or does not engage with the classmate's ideas.",
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
  { id: 'asynchronous-discussion', title: 'Asynchronous Discussion' },
  { id: 'discussion-prepare', title: 'Discussion: Prepare' },
  { id: 'discussion-interact', title: 'Discussion: Interact' },
  { id: 'discussion-consolidate', title: 'Discussion: Consolidate' },
];

export default function Lesson2() {
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

      <LessonSection
        id="human-right-to-education"
        title="Education as a Human Right"
      >
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
        </div>

        <h3 className="lesson-subheading">
          International and national commitments
        </h3>
        <div className="prose">
          <p>
            The United Nations Educational, Scientific and Cultural Organization
            (UNESCO) emphasizes that education is essential to the exercise of
            other human rights. It promotes access to inclusive, equitable, and
            quality education for all. International agreements and national
            laws also affirm the right to education, including the Philippine
            Constitution, which mandates the State to protect and promote the
            right of all citizens to quality education at all levels.
          </p>
        </div>
        <ul className="lesson-list">
          <li>
            <strong>UNESCO</strong> — promotes access to inclusive, equitable,
            and quality education for all.
          </li>
          <li>
            <strong>Philippine Constitution</strong> — mandates the State to
            protect and promote the right of all citizens to quality education
            at all levels.
          </li>
        </ul>

        <h3 className="lesson-subheading">Why access matters</h3>
        <div className="prose">
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

        <h3 className="lesson-subheading">Key terms</h3>
        <dl className="lesson-definition-list">
          <div>
            <dt>Human right</dt>
            <dd>
              A basic entitlement held by every person, not a privilege granted
              only to those who can afford it.
            </dd>
          </div>
          <div>
            <dt>Right to education</dt>
            <dd>
              The entitlement of every person, regardless of age, gender,
              income, disability, ethnicity, or location, to access quality
              learning opportunities.
            </dd>
          </div>
        </dl>
      </LessonSection>

      <LessonSection
        id="barriers-to-access"
        title="Barriers to Educational Access"
      >
        <h3 className="lesson-subheading">Poverty and financial limitations</h3>
        <div className="prose">
          <p>
            Despite the recognition of education as a right, many learners still
            face barriers to access. Poverty and financial limitations are among
            the most significant. Families may struggle to cover school
            supplies, transportation, uniforms, and other costs, even in public
            schools. In some cases, learners are forced to stop studying so they
            can work and help support their families.
          </p>
        </div>

        <h3 className="lesson-subheading">
          Geographical and technological barriers
        </h3>
        <div className="prose">
          <p>
            Geographical and technological barriers also affect access. Learners
            in remote or underserved communities may have to travel long
            distances to reach schools, and some areas lack adequate classrooms,
            teachers, and learning materials. The growth of online and blended
            learning has introduced additional challenges, such as limited
            internet access, lack of devices, and unstable electricity, which
            can widen the gap between learners who have resources and those who
            do not.
          </p>
        </div>
        <ul className="lesson-list">
          <li>
            <strong>Distance</strong> — learners in remote or underserved
            communities may have to travel long distances to reach schools.
          </li>
          <li>
            <strong>Limited school resources</strong> — some areas lack adequate
            classrooms, teachers, and learning materials.
          </li>
          <li>
            <strong>Online learning challenges</strong> — limited internet
            access, lack of devices, and unstable electricity.
          </li>
        </ul>

        <h3 className="lesson-subheading">
          Unequal distribution of resources
        </h3>
        <div className="prose">
          <p>
            The unequal distribution of educational resources is another
            barrier. Schools in urban and wealthier areas often have better
            facilities, more qualified teachers, and greater access to
            technology, while schools in poorer or rural areas may have fewer
            resources. These differences affect the quality of learning and the
            opportunities available to students. Addressing these barriers
            requires coordinated action from government, schools, communities,
            and other stakeholders.
          </p>
        </div>
        <ul className="lesson-list">
          <li>
            <strong>Urban and wealthier schools</strong> — often have better
            facilities, more qualified teachers, and greater access to
            technology.
          </li>
          <li>
            <strong>Poorer or rural schools</strong> — may have fewer resources,
            which affects the quality of learning and the opportunities
            available to students.
          </li>
        </ul>

        <h3 className="lesson-subheading">Key terms</h3>
        <dl className="lesson-definition-list">
          <div>
            <dt>Educational access</dt>
            <dd>
              The ability of learners to reach and participate in quality
              education despite financial, geographical, technological, or
              resource-related barriers.
            </dd>
          </div>
          <div>
            <dt>Educational resources</dt>
            <dd>
              The facilities, teachers, learning materials, and technology that
              support learning.
            </dd>
          </div>
        </dl>
      </LessonSection>

      <LessonSection
        id="education-and-inequality"
        title="Education and Inequality in Philippine Society"
      >
        <h3 className="lesson-subheading">
          Unequal opportunities across regions and schools
        </h3>
        <div className="prose">
          <p>
            In Philippine society, differences in educational opportunities are
            visible across regions, income groups, and types of schools. Students
            in well-resourced schools may have access to laboratories, libraries,
            technology, and experienced teachers, while students in underfunded
            schools may lack even basic facilities. These differences can affect
            academic performance, aspirations, and future opportunities.
          </p>
        </div>
        <ul className="lesson-list">
          <li>
            <strong>Well-resourced schools</strong> — may have laboratories,
            libraries, technology, and experienced teachers.
          </li>
          <li>
            <strong>Underfunded schools</strong> — may lack even basic
            facilities, affecting academic performance, aspirations, and future
            opportunities.
          </li>
        </ul>

        <h3 className="lesson-subheading">Education and social inequality</h3>
        <div className="prose">
          <p>
            Social and economic inequalities are closely connected to
            educational inequality. Families with higher incomes can afford
            private schools, tutoring, and learning materials, giving their
            children advantages that other learners do not have. At the same
            time, learners from low-income families may face greater challenges
            in staying in school and pursuing higher education. Education can
            therefore either reduce or reproduce existing inequalities,
            depending on how accessible and equitable it is.
          </p>
        </div>
        <ul className="lesson-list">
          <li>
            <strong>Higher-income families</strong> — can afford private
            schools, tutoring, and learning materials, giving their children
            advantages.
          </li>
          <li>
            <strong>Low-income families</strong> — may face greater challenges in
            staying in school and pursuing higher education.
          </li>
        </ul>

        <h3 className="lesson-subheading">Addressing inequality</h3>
        <div className="prose">
          <p>
            The government and communities play important roles in addressing
            these inequalities. The government is responsible for providing
            accessible, quality education, allocating resources fairly, and
            implementing policies that support disadvantaged learners.
            Communities and schools can also contribute through local programs,
            partnerships, and support for learners and families. A more
            equitable education system requires sustained effort and collective
            responsibility.
          </p>
        </div>
        <ul className="lesson-list">
          <li>
            <strong>Government</strong> — provide accessible, quality education,
            allocate resources fairly, and implement policies that support
            disadvantaged learners.
          </li>
          <li>
            <strong>Communities and schools</strong> — contribute through local
            programs, partnerships, and support for learners and families.
          </li>
        </ul>

        <h3 className="lesson-subheading">Key terms</h3>
        <dl className="lesson-definition-list">
          <div>
            <dt>Educational inequality</dt>
            <dd>
              Differences in access, resources, performance, and opportunities
              among learners, regions, income groups, and types of schools.
            </dd>
          </div>
          <div>
            <dt>Equitable education</dt>
            <dd>
              An education system that provides fair support so all learners can
              participate and succeed, regardless of background.
            </dd>
          </div>
        </dl>
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
            <strong>Central question:</strong> How should Philippine society
            address the challenges in education, and what responsibilities
            should different stakeholders take in improving educational
            outcomes?
          </p>
          <p>
            Complete the three parts below—prepare, interact, and consolidate.
            Post your initial response and reply to your assigned classmate on
            the discussion board at the end of this section.
          </p>
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
      </LessonSection>

      <LessonSection
        id="discussion-prepare"
        title="1. Prepare — Read and Analyze"
      >
          <div className="prose">
            <p>
              Read the news report below, then analyze the issue using the guide
              questions.
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

          <h3 className="lesson-subheading">Guide questions</h3>
          <ul className="lesson-list">
            <li>
              What educational issue does the report present, and who is
              affected?
            </li>
            <li>
              Which function of education is most affected by this issue? Why?
            </li>
            <li>What factors contribute to the problem?</li>
            <li>
              What responsibilities should teachers, schools, families,
              communities, and the government consider, and how can education
              help address the issue?
            </li>
            <li>What evidence from the article supports your interpretation?</li>
          </ul>

          <h3 className="lesson-subheading">Initial discussion post</h3>
          <div className="prose">
            <p>
              Write a 150–250-word response that addresses the guide questions.
              Support your perspective with at least one specific detail from
              the article and one concept from the module. Use your own words
              and acknowledge the news source.
            </p>
          </div>
      </LessonSection>

      <LessonSection
        id="discussion-interact"
        title="2. Interact — Compare Perspectives"
      >
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

          <h3 className="lesson-subheading">For each classmate, compare:</h3>
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

          <h3 className="lesson-subheading">When responding:</h3>
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

          <h3 className="lesson-subheading">Discussion Rubric</h3>
          <p className="section-lead">
            Total: 16 points (4 criteria × 4 points each)
          </p>
          <RubricAccordion items={DISCUSSION_RUBRIC} />

          <h3 className="lesson-subheading">Discussion board</h3>
          <div className="prose">
            <p>
              Post your initial response and your reply to your assigned
              classmate (and any optional response) on the discussion board
              below.
            </p>
          </div>
          <div className="callout callout-warning">
            <p className="callout-title">Data privacy reminder</p>
            <p>
              This discussion board is a class space. Post only what the
              activity requires — your name and student number. Do not share
              sensitive personal information about yourself or others (home
              address, contact numbers, ID numbers, health, financial, or
              family details). Respect your classmates&apos; privacy: do not
              screenshot, copy, or repost their posts outside this class. Your
              posts can be seen by your teacher and classmates.
            </p>
          </div>
          <div
            className="padlet-embed"
            style={{
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '2px',
              boxSizing: 'border-box',
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
              background: '#F4F4F4',
              marginBottom: 'var(--s-4)',
            }}
          >
            <p style={{ padding: 0, margin: 0 }}>
              <iframe
                src={PADLET_EMBED_URL}
                title="Asynchronous discussion board (Padlet)"
                frameBorder={0}
                allow="camera;microphone;geolocation;display-capture;clipboard-write"
                style={{
                  width: '100%',
                  height: '608px',
                  display: 'block',
                  padding: 0,
                  margin: 0,
                }}
              />
            </p>
          </div>
          <p className="field-help">
            If the board does not load,{' '}
            <a href={PADLET_URL} target="_blank" rel="noreferrer">
              open the discussion board in a new tab
            </a>
            .
          </p>
      </LessonSection>

      <LessonSection
        id="discussion-consolidate"
        title="3. Consolidate — Reflect"
      >
          <div className="prose">
            <p>
              After completing your required peer responses, revisit your
              original perspective on the social issue you discussed. Write a
              150–200-word reflection explaining how your understanding
              developed after reading and engaging with your classmates&apos;
              perspectives.
            </p>
          </div>

          <h3 className="lesson-subheading">Guide questions</h3>
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

          <h3 className="lesson-subheading">Reflection Rubric</h3>
          <p className="section-lead">
            Total: 16 points (4 criteria × 4 points each)
          </p>

          <RubricAccordion items={REFLECTION_RUBRIC} />
          <p className="field-help">
            Reminder: Your perspective does not have to change completely. A
            meaningful reflection may also show how the discussion strengthened,
            clarified, or expanded your original understanding.
          </p>

          <h3 className="lesson-subheading">Submit your reflection</h3>
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
      </LessonSection>
    </LessonPage>
  );
}
