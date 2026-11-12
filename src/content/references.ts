export type BookReference = {
  authors: string;
  title: string;
  publication: string;
};

export type WebReference = {
  title: string;
  site?: string;
  date: string;
  url?: string;
};

/**
 * Sources used throughout the module, matching the module's References page.
 * Titles are kept separate from the surrounding citation so they can be
 * rendered in italics (books) or quotation marks (e-resources).
 */
export const REFERENCES: {
  books: BookReference[];
  eResources: WebReference[];
} = {
  books: [
    {
      authors: 'Atienza, M., Aragay, A., Franco, J., Quilala, D. & Rico R.',
      title:
        'Understanding Culture, Society, and Politics for Senior High School.',
      publication: 'Philippines: C & E Publishing, Inc., 2016.',
    },
    {
      authors: 'Baleña, E., Lucero, D. & Peralta, A.',
      title:
        'Understanding Culture, Society, and Politics for Senior High School.',
      publication: 'Philippines: Educational Resources Corporation, 2016.',
    },
    {
      authors: 'Department of Education.',
      title: "Understanding Culture, Society, and Politics Teacher's Guide.",
      publication:
        'Philippines: Bureau of Learning Resources (DepEd-BLR), 2016.',
    },
  ],
  eResources: [
    {
      title:
        '1.3 million Grade 11 students have poor reading comprehension — EDCOM.',
      site: 'GMA News Online.',
      date: 'May 29, 2026.',
      url: 'https://www.gmanetwork.com/news/topstories/nation/989385/1-3-million-grade-11-students-poor-reading-comprehension-edcom/story/',
    },
    {
      title:
        'Functions of School: Socialization, Cultural Transmission, Integration & Latent Functions.',
      site: 'Study.com.',
      date: 'March 6, 2013.',
      url: 'https://study.com/academy/lesson/functions-of-school-socialization-cultural-innovation-integration-latent-functions.html',
    },
    {
      title: 'Latent Function of Education: Definition & Examples.',
      site: 'Study.com.',
      date: 'September 26, 2015.',
      url: 'https://study.com/academy/lesson/latent-function-of-education-definition-examples-quiz.html',
    },
    {
      title: 'Multiple Functions of School.',
      site: 'Yin Cheong Cheng.',
      date: '1996.',
    },
    {
      title: 'Sociology.',
      site: 'University of Minnesota.',
      date: 'July 24, 2020.',
      url: 'https://open.lib.umn.edu/sociology/chapter/16-2-sociological-perspectives-on-education/',
    },
  ],
};
