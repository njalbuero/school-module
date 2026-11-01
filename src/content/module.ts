export type SectionId =
  | 'start'
  | 'pre-assessment'
  | 'lesson-1'
  | 'lesson-2'
  | 'lesson-3'
  | 'wrap-up';

export type ModuleSection = {
  id: SectionId;
  path: string;
  label: string;
  title: string;
  description: string;
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
  subject: 'Understanding Culture, Society and Politics',
  quarter: 'Quarter 2 · Self-Learning Module',
  title: 'Functions of Education in Society',
  shortTitle: 'Functions of Education',
  kind: 'Online Self-Learning Module',
  intro:
    'Education does more than fill classrooms with information. It passes on culture, prepares people for work and civic life, and shapes who gets ahead in society. This module looks closely at those functions — and asks what they mean for real social issues in the Philippines.',
  about:
    'This self-learning module introduces the functions and significance of education in society, then asks you to apply and evaluate them. Across three lessons you will read short discussions, analyse Philippine scenarios, and build an evidence-based reflection. Every section states its objectives and ends with an activity or assessment, so you can check your own understanding as you go.',
} as const;

export const SECTIONS: ModuleSection[] = [
  {
    id: 'start',
    path: '/',
    label: 'Start Here',
    title: 'Start Here',
    description:
      'Module overview, author, foreword, and the learning outcomes for the whole module.',
  },
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
    title: 'Lesson 1: Foundations',
    description:
      'What education does for individuals and for society: the concepts you will use all module.',
  },
  {
    id: 'lesson-2',
    path: '/lesson/2',
    label: 'Lesson 2',
    title: 'Lesson 2: Application',
    description:
      'Use the concepts from Lesson 1 to analyse real Philippine scenarios and social issues.',
  },
  {
    id: 'lesson-3',
    path: '/lesson/3',
    label: 'Lesson 3: Evaluation',
    title: 'Lesson 3: Evaluation',
    description:
      'Weigh evidence, compare perspectives, and complete the summative performance task.',
  },
  {
    id: 'wrap-up',
    path: '/wrap-up',
    label: 'Wrap-Up',
    title: 'Wrap-Up',
    description:
      'Key takeaways, a self-assessment, and a short feedback survey for the module.',
  },
];

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
 * Author details. `name`, `photo`, and `bio` are intentionally empty: the
 * supplied brief does not provide them, and inventing them would misrepresent
 * a real person. The site renders an explicit placeholder instead.
 */
export const AUTHOR = {
  name: null as string | null,
  photo: null as string | null,
  photoAlt: null as string | null,
  bio: null as string | null,
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

export const FOREWORD = null as string | null;
