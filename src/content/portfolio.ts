export type PhaseId =
  | 'analyze'
  | 'design'
  | 'develop'
  | 'implement'
  | 'evaluate';

export type ArtifactId =
  | 'fa1'
  | 'fa2'
  | 'fa3'
  | 'fa4'
  | 'fa5'
  | 'fa6'
  | 'fa7';

export type PortfolioArtifact = {
  id: ArtifactId;
  number: string;
  title: string;
  shortTitle: string;
  phase: 'Analyze' | 'Design' | 'Develop';
  pages: string;
  file: string;
  summary: string;
  excerpt: string;
};

export type PortfolioPhase = {
  id: PhaseId;
  number: string;
  name: string;
  title: string;
  summary: string;
  decisions: { title: string; body: string }[];
  evidence: string;
  quote: string;
  quoteSource: string;
  artifactIds: ArtifactId[];
};

export const LIVE_MODULE_URL =
  'https://school-module.tenorio-andreagabrielle.workers.dev';

export const PORTFOLIO = {
  name: 'Andrea Gabrielle Tenorio',
  shortName: 'Andrea',
  role: 'Instructional Designer',
  title: 'Instructional Design Portfolio',
  projectTitle: 'Functions and Importance of Education in Society',
  course: 'EDU0104 – Online and Student-Centered Teaching and Learning',
  program:
    'Master of Arts in Education, major in Educational Technology and Online Learning (MAEd-ETOL)',
  institution:
    'Far Eastern University – Institute of Education, Graduate Studies and Transnational Education (GSTE)',
  facilitator: 'Dr. Romualdo A. Mabuan',
  term: 'First Semester, Academic Year 2026–2027',
  year: '2026',
  location: 'FEU Manila',
  bio: "Hi! I'm Andrea. I enjoy traveling, exploring new places, and experiencing different cultures. I'm also interested in learning more about education, technology, and how these can create meaningful learning experiences.",
  projectSummary:
    'This online learning module was developed as a terminal course requirement for EDU0104 – Online and Student-Centered Teaching and Learning, a course offered under the Master of Arts in Education, major in Educational Technology and Online Learning (MAEd-ETOL) program at the Far Eastern University (FEU) Institute of Education – Graduate Studies and Transnational Education (GSTE) in Manila, Philippines.',
  projectContext:
    'The course is facilitated by Dr. Romualdo A. Mabuan during the First Semester of Academic Year 2026–2027.',
  projectPurpose:
    'This project demonstrates the application of instructional design principles, student-centered pedagogies, and educational technologies in developing an accessible, engaging, and meaningful online learning experience. It reflects the integration of the ADDIE instructional design framework, emphasizing systematic analysis, design, development, implementation, evaluation, revision, and reflection to support effective online teaching and learning.',
  moduleAbout:
    'This self-learning module introduces the functions and significance of education in society, then asks learners to apply and evaluate them. Across three lessons, learners read, apply, and evaluate the concepts before building an evidence-based reflection.',
} as const;

export const EDUCATION = [
  {
    programme: 'Master of Arts in Educational Technology and Online Learning',
    institution: 'Far Eastern University Manila',
    note: 'In progress',
  },
  {
    programme:
      'Postbaccalaureate Program, Teacher Certificate Program, Certificate in Professional Education',
    institution: 'University of Santo Tomas',
    note: '2024',
  },
  {
    programme: 'Bachelor of Arts in Asian Studies',
    institution: 'University of Santo Tomas',
    note: '2023',
  },
  {
    programme:
      'Senior High School (Science, Technology, Engineering, and Mathematics)',
    institution: 'University of Santo Tomas',
    note: '2019',
  },
] as const;

export const MODULE_FACTS = [
  { label: 'Course', value: 'EDU0104 – Online and Student-Centered Teaching and Learning' },
  { label: 'Program', value: 'MAEd Educational Technology and Online Learning' },
  { label: 'Institution', value: 'FEU Institute of Education – GSTE' },
  { label: 'Facilitator', value: 'Dr. Romualdo A. Mabuan' },
  { label: 'Term', value: 'First Semester, AY 2026–2027' },
  { label: 'Target learners', value: 'Grade 12 SHS, HUMSS strand' },
  { label: 'Subject', value: 'Understanding Culture, Society, and Politics' },
  { label: 'Format', value: 'Online self-learning module · mobile-first' },
] as const;

export const MODULE_OUTCOMES = [
  'Explain the functions and significance of education in society.',
  'Analyze a current social issue in the Philippines or a real-life scenario using ideas about the roles of education.',
  'Compare different perspectives on the functions and importance of education in Philippine society in relation to a relevant social issue.',
  'Create an evidence-based reflection explaining how education can affect or address a particular social issue in Philippine society.',
] as const;

export const LESSON_ARC = [
  {
    number: 'Lesson 1',
    title: 'Understanding Education and Its Functions',
    role: 'Foundations',
    description:
      'What education is, how it functions as a social institution, and why it matters in Philippine society.',
  },
  {
    number: 'Lesson 2',
    title: 'Education as a Human Right: Access and Inequality',
    role: 'Application',
    description:
      'Barriers to access, educational inequality, and an asynchronous discussion comparing perspectives on a current issue.',
  },
  {
    number: 'Lesson 3',
    title: 'Forms of Education and Their Role in Society',
    role: 'Evaluation',
    description:
      'Formal, non-formal, informal, and inclusive education — and how each contributes to society.',
  },
] as const;

export const PHASES: PortfolioPhase[] = [
  {
    id: 'analyze',
    number: '01',
    name: 'Analyze',
    title: 'Start with the learner, not the content.',
    summary:
      'I began with Grade 12 HUMSS learners in an online UCSP course. The evidence pointed to a specific gap: learners could recall terminology, but they struggled to analyze and apply it to Philippine social issues. Most also depended on smartphones and mobile data, and many balanced school with work and family responsibilities.',
    decisions: [
      {
        title: 'Design for the device learners actually have.',
        body: 'The module would be mobile-first, text-first, and low-bandwidth. Links and videos could enrich the experience, but they would not carry it.',
      },
      {
        title: 'Move the task beyond recall.',
        body: 'Activities would ask learners to analyze real issues, compare perspectives, and support claims with evidence rather than repeat definitions.',
      },
      {
        title: 'Build in reflection and help-seeking.',
        body: 'Short reflection prompts and clear guidance would make thinking visible and reduce the risk of quiet disengagement.',
      },
    ],
    evidence:
      'Learner and context analysis, learner persona, informal survey, and class observations.',
    quote:
      'Learners frequently concentrate on memorizing definitions and terminology. Their learning often stays at the recall level.',
    quoteSource: 'FA1 · Learner & Context Analysis',
    artifactIds: ['fa1'],
  },
  {
    id: 'design',
    number: '02',
    name: 'Design',
    title: 'Align every task to evidence of learning.',
    summary:
      'The design translated the analysis into four measurable outcomes, a three-lesson arc, and a feedback cycle. The discussion was deliberately asynchronous so learners could read, research, and respond at their own pace. Community of Inquiry, UDL, and modality audits shaped the scaffolds around it.',
    decisions: [
      {
        title: 'Outcomes first, then activities.',
        body: 'Explain, analyze, compare, then create an evidence-based reflection. Each lesson builds toward the next instead of standing alone.',
      },
      {
        title: 'Interaction with a purpose.',
        body: 'Learner-content interaction comes first, then learner-learner interaction. Assigned peer responses and a comparison guide make the discussion do cognitive work.',
      },
      {
        title: 'Feedback that leads to revision.',
        body: 'Rubrics, a sample response, and a feed-up / feedback / feed-forward cycle give learners a clear next step before the final reflection.',
      },
    ],
    evidence:
      'Constructive alignment, Community of Inquiry audit, UDL audit, synchronous–asynchronous audit, and assessment design.',
    quote: 'Simple does not always mean it is limited to recall.',
    quoteSource: 'FA2 · Design Phase Worksheet',
    artifactIds: ['fa2', 'fa3', 'fa4', 'fa5', 'fa7'],
  },
  {
    id: 'develop',
    number: '03',
    name: 'Develop',
    title: 'Build for access, not just appearance.',
    summary:
      'I built the module as a lightweight web experience with short reading sections, in-page contents, a pre-assessment with explanatory feedback, and a wrap-up reflection. The build kept text central, progress on the learner’s device, and external tools clearly disclosed. After the pilot, I segmented the longest readings and added data privacy reminders.',
    decisions: [
      {
        title: 'Text-first, mobile-first.',
        body: 'There is no video dependency. Key content remains available as text, so a slow connection does not remove the lesson.',
      },
      {
        title: 'Make thinking visible.',
        body: 'Instant pre-assessment explanations, analytic rubrics, a sample peer response, and a self-assessment help learners judge their own progress.',
      },
      {
        title: 'Design for trust.',
        body: 'Data privacy reminders, netiquette guidance, and clear boundaries around the discussion board protect learners as they participate.',
      },
    ],
    evidence:
      'Multimedia, accessibility, and OER audit; the live module; mobile screenshots of the revised build.',
    quote:
      'Headings and signaling principles will be designed specifically for students using mobile devices.',
    quoteSource: 'FA6 · Multimedia, Accessibility & OER Audit',
    artifactIds: ['fa6'],
  },
  {
    id: 'implement',
    number: '04',
    name: 'Implement',
    title: 'Put the design in front of people.',
    summary:
      'The module was shared with pilot respondents for feedback on clarity, activities, and confidence. I also invited follow-up conversation and peer review. The feedback was small-scale and self-reported, but specific enough to reveal where the experience broke down and what learners noticed.',
    decisions: [
      {
        title: 'Ask about clarity, not just satisfaction.',
        body: 'The feedback form asked whether the module was clear, whether the activities helped understanding, and whether learners felt more confident.',
      },
      {
        title: 'Follow up in conversation.',
        body: 'Short messages and screenshots captured details a three-item form could not, especially the felt experience of scrolling on a phone.',
      },
      {
        title: 'Keep the sample honest.',
        body: 'Seven responses is a small pilot. The portfolio presents it as directional evidence, not proof of learning impact.',
      },
    ],
    evidence:
      'Google Form feedback with seven responses, follow-up conversations, and peer review.',
    quote: '7 responses',
    quoteSource: 'Module Feedback form',
    artifactIds: [],
  },
  {
    id: 'evaluate',
    number: '05',
    name: 'Evaluate',
    title: 'Read the evidence, including the gaps.',
    summary:
      'The strongest signal was cognitive load on mobile: the continuous reading felt overwhelming. Learners noticed and valued the segmentation and privacy reminders. One question about repeating activities showed that completion expectations needed to be clearer. The pilot did not produce enough data to claim learning gains.',
    decisions: [
      {
        title: 'Treat the feedback as a design signal.',
        body: 'The comments pointed to a specific problem — long, unbroken reading — and to a specific solution: smaller sections with visible structure.',
      },
      {
        title: 'Separate evidence from assumption.',
        body: 'The portfolio does not turn seven self-reported responses into a performance claim. It says what the evidence supports and what it does not.',
      },
      {
        title: 'Let evaluation feed the next iteration.',
        body: 'The findings became the redesign: segmentation, clearer organization, and data privacy guidance before the discussion.',
      },
    ],
    evidence:
      'Post-revision feedback, before-and-after screenshots, and a transparent limitations note.',
    quote:
      'Nung una kasi parang maiinfo overload sa dere-deretsong scroll.',
    quoteSource: 'Pilot participant · translated from Filipino',
    artifactIds: [],
  },
];

export const ARTIFACTS: PortfolioArtifact[] = [
  {
    id: 'fa1',
    number: '01',
    title: 'ANALYZE PHASE WORKSHEET',
    shortTitle: 'ANALYZE PHASE WORKSHEET',
    phase: 'Analyze',
    pages: '11 pages',
    file: '/pdf/fa1.pdf',
    summary:
      'The evidence base: learner characteristics, technology access, context constraints, and a persona built from the analysis.',
    excerpt:
      'Learners frequently concentrate on memorizing definitions and terminology. Their learning often stays at the recall level.',
  },
  {
    id: 'fa2',
    number: '02',
    title: 'DESIGN PHASE WORKSHEET',
    shortTitle: 'DESIGN PHASE WORKSHEET',
    phase: 'Design',
    pages: '9 pages',
    file: '/pdf/fa2.pdf',
    summary:
      'The bridge from analysis to design: outcomes, evidence of learning, learning experiences, and constructive alignment.',
    excerpt:
      'Simple does not always mean it is limited to recall. Straightforward activities can target evaluation, analysis, reflection, and application.',
  },
  {
    id: 'fa3',
    number: '03',
    title: 'INTERACTION & PRESENCE DESIGN AUDIT',
    shortTitle: 'INTERACTION & PRESENCE',
    phase: 'Design',
    pages: '5 pages',
    file: '/pdf/fa3.pdf',
    summary:
      'A Community of Inquiry audit of the asynchronous discussion, including the decision to strengthen learner-learner interaction.',
    excerpt:
      'Learners will interact to encounter and compare perspectives beyond their own about the functions and importance of education.',
  },
  {
    id: 'fa4',
    number: '04',
    title: 'UDL DESIGN AUDIT',
    shortTitle: 'UDL DESIGN AUDIT',
    phase: 'Design',
    pages: '5 pages',
    file: '/pdf/fa4.pdf',
    summary:
      'A learner-variability audit that identified the comparison task as the priority barrier and added a question-based guide.',
    excerpt:
      'Keep the preselected article and asynchronous peer discussion, but provide a simple comparison guide with prompts.',
  },
  {
    id: 'fa5',
    number: '05',
    title: 'SYNCHRONOUS–ASYNCHRONOUS LEARNING DESIGN AUDIT',
    shortTitle: 'SYNC–ASYNC AUDIT',
    phase: 'Design',
    pages: '4 pages',
    file: '/pdf/fa5.pdf',
    summary:
      'The modality decision: why discussion should be asynchronous, and how access, pacing, and processing shaped that choice.',
    excerpt:
      'Asynchronous learning benefits the student because this activity requires many stages that need not be rushed but should be pondered deeply.',
  },
  {
    id: 'fa6',
    number: '06',
    title: 'MULTIMEDIA LEARNING, ACCESSIBILITY & OER DESIGN AUDIT',
    shortTitle: 'MULTIMEDIA & ACCESSIBILITY',
    phase: 'Develop',
    pages: '4 pages',
    file: '/pdf/fa6.pdf',
    summary:
      'The resource decision: a concise, text-first handout with optional links, checked against Mayer’s principles and WCAG/POUR.',
    excerpt:
      'A concise online handout can be reviewed and revisited by learners. It uses minimal data, works on phones, and does not require video streaming.',
  },
  {
    id: 'fa7',
    number: '07',
    title: 'ASSESSMENT & FEEDBACK DESIGN WORKSHEET',
    shortTitle: 'ASSESSMENT & FEEDBACK',
    phase: 'Design',
    pages: '7 pages',
    file: '/pdf/fa7.pdf',
    summary:
      'The authentic task, success criteria, rubric, feedback cycle, and the data privacy revision that followed peer review.',
    excerpt:
      'The task directly assesses the ability to compare perspectives about education in relation to a real Philippine social issue.',
  },
];

export const REDESIGN_ROWS = [
  {
    area: 'Content segmentation',
    finding:
      'Learners described the original reading as information overload because of the continuous scroll.',
    revision:
      'Broke lessons and activities into smaller sections, added descriptive subheadings, and kept an in-page contents list.',
    rationale:
      'Segmenting and signaling reduce extraneous cognitive load and make long reading easier to navigate on a phone.',
  },
  {
    area: 'Organization',
    finding:
      'Learners needed a clearer sense of where they were and what came next.',
    revision:
      'Reorganized the flow around one topic at a time, with section navigation and clearer next-step cues.',
    rationale:
      'Learner autonomy and reduced extraneous load: the structure itself signals the path through the module.',
  },
  {
    area: 'Data privacy & netiquette',
    finding:
      'Peer review and pilot feedback called for clearer guidance on respectful, safe discussion.',
    revision:
      'Added data privacy reminders and netiquette guidance before the Padlet activity.',
    rationale:
      'Safe social presence and UDL: learners can participate without exposing sensitive personal information.',
  },
] as const;

export const REFLECTION_PARAGRAPHS = [
  'It has been a wonderful journey designing my first instructional module. It has been a rollercoaster experience, from being excited and time-pressured while looking for participants to being hopeful that my module will be helpful for students and achieve the intended learning outcomes.',
  'My biggest takeaway is to put students first, but we should not make learning simpler to the point that the essence of learning is lost.',
  'Making learning enjoyable, meaningful, and accessible is what should matter. An effective module design recognizes that there are barriers but is still willing to help students grow and learn.',
] as const;

export const REFLECTION_PRINCIPLES = [
  {
    title: 'Students first',
    body: 'Start with the learner’s context, not the content I want to cover.',
  },
  {
    title: 'Keep the rigor',
    body: 'Accessibility is not the same as making learning easier than it needs to be.',
  },
  {
    title: 'Design for the barriers',
    body: 'A good design acknowledges constraints and still helps learners grow.',
  },
] as const;

export const NAV_ITEMS = [
  { label: 'About', href: '/portfolio#about' },
  { label: 'Project', href: '/portfolio#project' },
  { label: 'ADDIE', href: '/portfolio#addie' },
  { label: 'Artifacts', href: '/portfolio#artifacts' },
  { label: 'Pilot', href: '/portfolio#pilot' },
  { label: 'Redesign', href: '/portfolio#redesign' },
  { label: 'Reflection', href: '/portfolio#reflection' },
] as const;
