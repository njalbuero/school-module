export const REFLECTION = {
  prompt:
    'Explain how education can affect or address a particular social issue in Philippine society. Use evidence from the module and your own analysis.',
  guidance: [
    'Name a specific social issue, such as inequality, unemployment, or political participation.',
    'Explain which function or perspective on education helps you understand the issue.',
    'Use at least one concrete example or piece of evidence from the module.',
    'Explain how education could affect or address the issue.',
  ],
  rubric: [
    {
      criterion: 'Focus on a specific issue',
      description:
        'Names a clear social issue in Philippine society and stays focused on it.',
    },
    {
      criterion: 'Use of module concepts',
      description:
        'Explains relevant functions or perspectives on education accurately.',
    },
    {
      criterion: 'Evidence and examples',
      description:
        'Uses at least one concrete example or piece of evidence to support the explanation.',
    },
    {
      criterion: 'Organization and clarity',
      description:
        'Presents ideas in a logical order with clear sentences and correct mechanics.',
    },
  ],
} as const;

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
