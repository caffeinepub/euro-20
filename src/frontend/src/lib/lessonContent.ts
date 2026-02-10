import { lessonsSeed, LessonContent } from '../data/lessonsSeed';
import { CEFRLevel, defaultLevel } from './cefrLevels';

export function getLessonContent(
  languageCode: string,
  sectionId: string,
  level: CEFRLevel = defaultLevel
): LessonContent {
  const languageLessons = lessonsSeed[languageCode];
  
  if (!languageLessons) {
    return {
      introduction: `Content for ${languageCode} is being prepared.`,
      items: [],
    };
  }

  const levelLessons = languageLessons[level];
  
  if (!levelLessons) {
    return {
      introduction: `Content for level ${level} is being prepared.`,
      items: [],
    };
  }

  const content = levelLessons[sectionId];
  
  if (!content) {
    return {
      introduction: `Content for this section at level ${level} is being prepared.`,
      items: [],
    };
  }

  return content;
}
