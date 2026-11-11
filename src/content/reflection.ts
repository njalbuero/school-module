export type ReflectionRubricLevel = {
  score: number;
  label: string;
  description: string;
};

export type ReflectionRubricCriterion = {
  criterion: string;
  weight: string;
  levels: ReflectionRubricLevel[];
};

export const REFLECTION: {
  prompt: string;
  guidance: string[];
  rubric: ReflectionRubricCriterion[];
} = {
  prompt:
    'Now that you have completed the module, choose one social issue in Philippine society that education can help address. Explain why the issue matters, which ideas from the module shape your understanding of it, and what education can realistically do about it. Use at least one concrete example or piece of evidence.',
  guidance: [
    'Name a specific social issue, such as inequality, unemployment, or political participation.',
    'Explain which function or perspective on education helps you understand the issue.',
    'Use at least one concrete example or piece of evidence from the module.',
    'Explain how education could affect or address the issue.',
  ],
  rubric: [
    {
      criterion: 'Focus on a specific issue',
      weight: '25%',
      levels: [
        {
          score: 4,
          label: 'Exemplary',
          description:
            'Names a specific, relevant Philippine issue; clearly explains why it matters; stays focused.',
        },
        {
          score: 3,
          label: 'Proficient',
          description:
            'Names a specific issue and explains why it matters; minor digressions.',
        },
        {
          score: 2,
          label: 'Developing',
          description: 'Issue is broad or unclear; focus wavers.',
        },
        {
          score: 1,
          label: 'Beginning',
          description: 'No clear issue; response is off-topic or unfocused.',
        },
      ],
    },
    {
      criterion: 'Use of module concepts',
      weight: '25%',
      levels: [
        {
          score: 4,
          label: 'Exemplary',
          description:
            'Accurately integrates relevant module concepts and connects them insightfully.',
        },
        {
          score: 3,
          label: 'Proficient',
          description:
            'Uses relevant module concepts accurately and connects them to the issue.',
        },
        {
          score: 2,
          label: 'Developing',
          description:
            'Uses some concepts; connections are limited or partly inaccurate.',
        },
        {
          score: 1,
          label: 'Beginning',
          description:
            'Few or no concepts, or concepts are used inaccurately.',
        },
      ],
    },
    {
      criterion: 'Evidence and examples',
      weight: '25%',
      levels: [
        {
          score: 4,
          label: 'Exemplary',
          description:
            'Strong, specific evidence; explains how it supports the argument.',
        },
        {
          score: 3,
          label: 'Proficient',
          description:
            'At least one concrete example or evidence connected to the argument.',
        },
        {
          score: 2,
          label: 'Developing',
          description:
            'Limited or vague evidence; weak connection to the argument.',
        },
        {
          score: 1,
          label: 'Beginning',
          description: 'Little or no evidence; claims are unsupported.',
        },
      ],
    },
    {
      criterion: 'Organization and clarity',
      weight: '25%',
      levels: [
        {
          score: 4,
          label: 'Exemplary',
          description:
            'Logical, cohesive order; clear language; correct mechanics.',
        },
        {
          score: 3,
          label: 'Proficient',
          description: 'Logical order; generally clear; minor errors.',
        },
        {
          score: 2,
          label: 'Developing',
          description:
            'Uneven organization; some unclear sentences or frequent errors.',
        },
        {
          score: 1,
          label: 'Beginning',
          description:
            'Unclear organization; difficult to follow; errors interfere with meaning.',
        },
      ],
    },
  ],
};

export const SELF_ASSESSMENT = {
  key: 'wrap-up-self-assessment',
  items: [
    'I can explain the functions and significance of education in society.',
    'I can analyze a Philippine social issue using ideas about the roles of education.',
    'I can compare different perspectives on the functions of education.',
    'I can create an evidence-based reflection about education and a social issue.',
  ],
} as const;

export const FEEDBACK_SURVEY = {
  key: 'wrap-up-feedback',
  questions: [
    {
      id: 'clarity',
      label: 'The module was clear and easy to follow.',
    },
    {
      id: 'activities',
      label: 'The activities helped me understand the lesson.',
    },
    {
      id: 'confidence',
      label:
        'I feel more confident explaining the functions of education in society.',
    },
  ],
  scale: [
    { value: '1', label: 'Strongly disagree' },
    { value: '2', label: 'Disagree' },
    { value: '3', label: 'Neutral' },
    { value: '4', label: 'Agree' },
    { value: '5', label: 'Strongly agree' },
  ],
} as const;
