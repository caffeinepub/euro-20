import { useState } from 'react';
import { languages } from '../lib/languages';
import { lessonSections } from '../lib/lessonStructure';
import { getLessonContent } from '../lib/lessonContent';
import LessonSectionNav from '../components/LessonSectionNav';
import LanguageSwitcher from '../components/LanguageSwitcher';
import StreakPanel from '../components/StreakPanel';
import CompleteSectionButton from '../components/CompleteSectionButton';
import PronunciationControl from '../components/PronunciationControl';
import AppLayout from '../components/AppLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface LanguageLearningPageProps {
  languageCode: string;
  onSwitchLanguage: (languageCode: string) => void;
}

export default function LanguageLearningPage({ 
  languageCode, 
  onSwitchLanguage 
}: LanguageLearningPageProps) {
  const [currentSection, setCurrentSection] = useState(lessonSections[0].id);
  
  const language = languages.find(l => l.code === languageCode);
  const section = lessonSections.find(s => s.id === currentSection);
  const content = getLessonContent(languageCode, currentSection);

  if (!language || !section) {
    return <div>Language not found</div>;
  }

  return (
    <AppLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-1">{language.name}</h1>
              <p className="text-muted-foreground">{language.nativeName}</p>
            </div>
            <LanguageSwitcher 
              currentLanguage={languageCode}
              onSelectLanguage={onSwitchLanguage}
            />
          </div>

          <LessonSectionNav
            sections={lessonSections}
            currentSection={currentSection}
            onSelectSection={setCurrentSection}
          />

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">{section.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {content.introduction && (
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground">{content.introduction}</p>
                </div>
              )}

              {content.items.map((item, index) => {
                const itemId = `${currentSection}-${index}`;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                        {index + 1}
                      </div>
                      <div className="flex-1 space-y-1">
                        {item.native && (
                          <div className="flex items-center gap-2">
                            <p className="text-lg font-semibold">{item.native}</p>
                            <PronunciationControl 
                              text={item.native}
                              itemId={itemId}
                              languageCode={languageCode}
                            />
                          </div>
                        )}
                        {item.english && (
                          <p className="text-muted-foreground">{item.english}</p>
                        )}
                        {item.pronunciation && (
                          <p className="text-sm text-muted-foreground italic">
                            Pronunciation: {item.pronunciation}
                          </p>
                        )}
                        {item.note && (
                          <p className="text-sm text-muted-foreground">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                    {index < content.items.length - 1 && <Separator className="mt-4" />}
                  </div>
                );
              })}

              <div className="pt-4">
                <CompleteSectionButton />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-6">
            <StreakPanel />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
