import { lessonsSeed, LessonContent } from '../data/lessonsSeed';

export function getLessonContent(languageCode: string, sectionId: string): LessonContent {
  const languageLessons = lessonsSeed[languageCode];
  
  if (!languageLessons) {
    return {
      introduction: 'Content not available for this language.',
      items: [],
    };
  }

  const content = languageLessons[sectionId];
  
  if (!content) {
    return {
      introduction: 'Content not available for this section.',
      items: [],
    };
  }

  return content;
}
