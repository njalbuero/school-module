export type AssessmentKind = 'multiple-choice' | 'true-false';

export type AssessmentOption = {
  id: string;
  label: string;
};

export type AssessmentQuestion = {
  id: string;
  kind: AssessmentKind;
  prompt: string;
  options: AssessmentOption[];
  correctOptionId: string;
  explanation: string;
};

const TRUE_FALSE_OPTIONS: AssessmentOption[] = [
  { id: 'true', label: 'True' },
  { id: 'false', label: 'False' },
];

/**
 * Draft pre-assessment items aligned to the four module learning outcomes.
 * They cover the concepts introduced by the module and are not a graded exam.
 */
export const PRE_ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'q1',
    kind: 'multiple-choice',
    prompt: 'Which of the following is a manifest function of education?',
    options: [
      { id: 'a', label: 'Teaching academic knowledge and skills' },
      { id: 'b', label: 'Forming friendships and social networks' },
      { id: 'c', label: 'Sorting students by social background' },
      { id: 'd', label: 'Passing on informal cultural habits' },
    ],
    correctOptionId: 'a',
    explanation:
      'A manifest function is an intended and openly stated purpose of schooling. Teaching knowledge and skills is its clearest academic purpose.',
  },
  {
    id: 'q2',
    kind: 'multiple-choice',
    prompt: 'Which of the following is an example of a latent function of schooling?',
    options: [
      { id: 'a', label: 'Preparing students for a profession' },
      { id: 'b', label: 'Building social networks and friendships' },
      { id: 'c', label: 'Teaching the prescribed curriculum' },
      { id: 'd', label: 'Issuing report cards and certificates' },
    ],
    correctOptionId: 'b',
    explanation:
      'Latent functions are unintended or less visible outcomes of schooling. Social networks and friendships are a common example.',
  },
  {
    id: 'q3',
    kind: 'multiple-choice',
    prompt: 'Education can promote social mobility when it:',
    options: [
      { id: 'a', label: 'Keeps every student in the same school' },
      {
        id: 'b',
        label:
          'Provides quality learning and credentials that open opportunities across social classes',
      },
      { id: 'c', label: 'Focuses only on passing on tradition' },
      { id: 'd', label: 'Limits access to a small group of families' },
    ],
    correctOptionId: 'b',
    explanation:
      'Social mobility is the movement of people between social positions. Quality education and recognised credentials can widen opportunity, although access is not equal for everyone.',
  },
  {
    id: 'q4',
    kind: 'multiple-choice',
    prompt:
      'Which perspective is most likely to argue that schools can reproduce existing social inequality?',
    options: [
      { id: 'a', label: 'Functionalism' },
      { id: 'b', label: 'Conflict theory' },
      { id: 'c', label: 'Symbolic interactionism' },
      { id: 'd', label: 'Human capital theory' },
    ],
    correctOptionId: 'b',
    explanation:
      'Conflict theorists examine how unequal access, hidden rules, and credentials can preserve advantages for dominant groups.',
  },
  {
    id: 'q5',
    kind: 'multiple-choice',
    prompt:
      'Which function of education is most directly connected to civic life?',
    options: [
      { id: 'a', label: 'Preparing informed and participating citizens' },
      { id: 'b', label: 'Training students for specific jobs' },
      { id: 'c', label: 'Preserving language and tradition' },
      { id: 'd', label: 'Ranking students by achievement' },
    ],
    correctOptionId: 'a',
    explanation:
      'Education supports civic life when it helps people understand public issues, exercise their rights, and take part in their communities.',
  },
  {
    id: 'q6',
    kind: 'true-false',
    prompt: 'Education only transmits academic knowledge.',
    options: TRUE_FALSE_OPTIONS,
    correctOptionId: 'false',
    explanation:
      'Education also passes on culture, values, norms, and social roles. These social functions are part of what schooling does beyond academic subjects.',
  },
  {
    id: 'q7',
    kind: 'true-false',
    prompt:
      'Schools can both promote social mobility and reproduce inequality.',
    options: TRUE_FALSE_OPTIONS,
    correctOptionId: 'true',
    explanation:
      'Schooling can create opportunities for some students while unequal access and hidden advantages continue to benefit others. Both effects can exist at the same time.',
  },
  {
    id: 'q8',
    kind: 'true-false',
    prompt:
      'A functionalist view sees education as contributing to social stability.',
    options: TRUE_FALSE_OPTIONS,
    correctOptionId: 'true',
    explanation:
      'Functionalists emphasise how education transmits shared values and prepares people for roles that help society work together.',
  },
  {
    id: 'q9',
    kind: 'true-false',
    prompt:
      'The hidden curriculum refers to unofficial lessons about norms, values, and expected behaviour.',
    options: TRUE_FALSE_OPTIONS,
    correctOptionId: 'true',
    explanation:
      'The hidden curriculum includes the unwritten messages students learn through routines, rules, and relationships at school.',
  },
  {
    id: 'q10',
    kind: 'true-false',
    prompt: 'Education has no relationship to economic development.',
    options: TRUE_FALSE_OPTIONS,
    correctOptionId: 'false',
    explanation:
      'Education can develop knowledge and skills that support productivity and economic development, although the relationship is not automatic or equal for everyone.',
  },
];
