export interface LessonSection {
  id: string;
  label: string;
  description: string;
}

export const lessonSections: LessonSection[] = [
  {
    id: 'alphabet',
    label: 'Alphabet & Sounds',
    description: 'Learn the basic sounds and pronunciation',
  },
  {
    id: 'greetings',
    label: 'Greetings',
    description: 'Common greetings and polite expressions',
  },
  {
    id: 'numbers',
    label: 'Numbers',
    description: 'Numbers from 1 to 10',
  },
  {
    id: 'common',
    label: 'Common Words',
    description: 'Essential everyday vocabulary',
  },
  {
    id: 'sentences',
    label: 'Simple Sentences',
    description: 'Basic everyday phrases and sentences',
  },
];
