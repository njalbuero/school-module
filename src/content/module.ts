export type SectionId =
  | 'pre-assessment'
  | 'lesson-1'
  | 'lesson-2'
  | 'lesson-3'
  | 'wrap-up'
  | 'references';

export type ModuleSection = {
  id: SectionId;
  path: string;
  label: string;
  title: string;
  description: string;
  /** Whether the section counts towards the module progress bar. */
  tracked?: boolean;
};

export type SitePage = {
  path: string;
  label: string;
};

export type LearningOutcome = {
  id: string;
  text: string;
};

export type EducationEntry = {
  programme: string;
  institution: string;
  year?: string;
};

export const MODULE = {
  subject: 'Understanding Culture, Society, and Politics',
  quarter: 'Quarter 2 · Self-Learning Module',
  moduleLabel: 'Quarter 2 – Module 8',
  title: 'Functions and Importance of Education in the Society',
  shortTitle: 'Functions and Importance of Education',
  kind: 'Online Self-Learning Module',
  intro:
    'Education does more than fill classrooms with information. It passes on culture, prepares people for work and civic life, and shapes who gets ahead in society. This module looks closely at those functions — and asks what they mean for real social issues in the Philippines.',
  about:
    'This self-learning module introduces the functions and significance of education in society, then asks you to apply and evaluate them. Across three lessons you will read, apply, and evaluate the concepts before building an evidence-based reflection. Every section states its objectives and ends with an activity or assessment, so you can check your own understanding as you go.',
} as const;

export const SECTIONS: ModuleSection[] = [
  {
    id: 'pre-assessment',
    path: '/pre-assessment',
    label: 'Pre-assessment',
    title: 'Pre-assessment',
    description:
      'Ten quick items to check what you already know. Not graded — retry as often as you like.',
  },
  {
    id: 'lesson-1',
    path: '/lesson/1',
    label: 'Lesson 1',
    title: 'Understanding Education and Its Functions',
    description:
      'Foundations — what education is and how it functions in society.',
  },
  {
    id: 'lesson-2',
    path: '/lesson/2',
    label: 'Lesson 2',
    title: 'Education as a Human Right: Access and Inequality',
    description:
      'Application — education as a right and the barriers to equal access in Philippine society.',
  },
  {
    id: 'lesson-3',
    path: '/lesson/3',
    label: 'Lesson 3',
    title: 'Forms of Education and Their Role in Society',
    description:
      'Evaluation — formal, non-formal, informal, and inclusive education in Philippine society.',
  },
  {
    id: 'wrap-up',
    path: '/wrap-up',
    label: 'Wrap-Up',
    title: 'Wrap-Up',
    description:
      'Review the key ideas, complete the final reflection and self-assessment, and finish the module.',
  },
  {
    id: 'references',
    path: '/references',
    label: 'References',
    title: 'References',
    description:
      'Sources and further reading used throughout the module.',
    tracked: false,
  },
];

const LESSON_COUNT = SECTIONS.filter((section) =>
  section.id.startsWith('lesson-'),
).length;

/** Quick facts shown as pills on the Home hero. */
export const MODULE_FACTS: string[] = [
  `${LESSON_COUNT} lessons`,
  'Self-paced',
];

/** Reflection prompts shown on the Home page. */
export const PONDER_QUESTIONS: string[] = [
  'How does education contribute to the development of individuals?',
  'Why should education be considered a fundamental human right?',
  'How can you contribute to society through your education?',
];

/** Main site pages shown in the header. */
export const SITE_PAGES: SitePage[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/module', label: 'Module' },
];

/**
 * Sections that count towards progress. The overview and the closing
 * references page are navigation/reading, not learning tasks, so they are
 * excluded.
 */
export const PROGRESS_SECTIONS: ModuleSection[] = SECTIONS.filter(
  (section) => section.tracked !== false,
);

export const LEARNING_OUTCOMES: LearningOutcome[] = [
  {
    id: 'lo-1',
    text: 'Explain the functions and significance of education in society.',
  },
  {
    id: 'lo-2',
    text: 'Analyze a current social issue in the Philippines or a real-life scenario using ideas about the roles of education.',
  },
  {
    id: 'lo-3',
    text: 'Compare different perspectives on the functions and importance of education in Philippine society in relation to a relevant social issue.',
  },
  {
    id: 'lo-4',
    text: 'Create an evidence-based reflection explaining how education can affect or address a particular social issue in Philippine society.',
  },
];

/**
 * Author details. The photo is the author's supplied portrait, used with the
 * biography she provided for this module.
 */
export const AUTHOR = {
  name: 'Andrea Gabrielle Tenorio',
  photo: '/author-andrea-tenorio.jpg' as string | null,
  photoAlt: 'Andrea Gabrielle Tenorio' as string | null,
  bio: 'Hi! I am Andrea and I am a pre-service teacher. I am interested in developing learning modules. Right now, I am conducting a study on how educators use AI in their work.' as string | null,
  education: [
    {
      programme: 'Master of Arts in Educational Technology and Online Learning',
      institution: 'FEU Manila',
    },
    {
      programme:
        'Postbaccalaureate Program, Teacher Certificate Program, Certificate in Professional Education',
      institution: 'University of Santo Tomas',
      year: '2024',
    },
    {
      programme: 'Bachelor of Arts in Asian Studies',
      institution: 'University of Santo Tomas',
      year: '2023',
    },
    {
      programme:
        'Senior High School (Science, Technology, Engineering, and Mathematics)',
      institution: 'University of Santo Tomas',
      year: '2019',
    },
  ] satisfies EducationEntry[],
};

export const ABOUT_PROJECT = `This online learning module was developed as a terminal course requirement for EDU0104 – Online and Student-Centered Teaching and Learning, a course offered under the Master of Arts in Education, major in Educational Technology and Online Learning (MAEd-ETOL) program at the Far Eastern University (FEU) Institute of Education – Graduate Studies and Transnational Education (GSTE) in Manila, Philippines.

The course is facilitated by Dr. Romualdo A. Mabuan during the First Semester of Academic Year 2026–2027.

This project demonstrates the application of instructional design principles, student-centered pedagogies, and educational technologies in developing an accessible, engaging, and meaningful online learning experience. It reflects the integration of the ADDIE instructional design framework, emphasizing systematic analysis, design, development, implementation, evaluation, revision, and reflection to support effective online teaching and learning.`;
