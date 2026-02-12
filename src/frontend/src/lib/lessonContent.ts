import { lessonsSeed, LessonContent } from '../data/lessonsSeed';
import { CEFRLevel, defaultLevel } from './cefrLevels';

export function getLessonContent(
  languageCode: string,
  sectionId: string,
  level: CEFRLevel = defaultLevel
): LessonContent {
  const languageLessons = lessonsSeed[languageCode];
  
  if (!languageLessons) {
    // Return placeholder content for missing languages (don't fallback to English)
    if (languageCode !== 'en') {
      return {
        introduction: `Content for this language is not yet available.`,
        items: [{ note: `Lessons for "${languageCode}" are currently being prepared. Please check back soon or try another language.` }],
      };
    }
    // Only for English itself, show generic message
    return {
      introduction: 'Content is being loaded.',
      items: [{ note: 'Please select a language to begin learning.' }],
    };
  }

  const levelLessons = languageLessons[level];
  
  if (!levelLessons) {
    // Fallback to A1 if level not found for the same language
    const fallbackContent = languageLessons[defaultLevel]?.[sectionId];
    if (fallbackContent) {
      return fallbackContent;
    }
    return {
      introduction: 'Content is being loaded.',
      items: [{ note: 'Please select a valid level.' }],
    };
  }

  const content = levelLessons[sectionId];
  
  if (!content || !content.items || content.items.length === 0) {
    // Fallback to A1 of same section if current level/section is empty
    const fallbackContent = languageLessons[defaultLevel]?.[sectionId];
    if (fallbackContent && fallbackContent.items && fallbackContent.items.length > 0) {
      return fallbackContent;
    }
    return {
      introduction: 'Content is being loaded.',
      items: [{ note: 'Please try another section.' }],
    };
  }

  return content;
}
