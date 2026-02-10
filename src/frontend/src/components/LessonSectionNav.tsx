import { LessonSection } from '../lib/lessonStructure';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LessonSectionNavProps {
  sections: LessonSection[];
  currentSection: string;
  onSelectSection: (sectionId: string) => void;
}

export default function LessonSectionNav({
  sections,
  currentSection,
  onSelectSection,
}: LessonSectionNavProps) {
  return (
    <Tabs value={currentSection} onValueChange={onSelectSection}>
      <TabsList className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto gap-2 bg-muted/50 p-2">
        {sections.map((section) => (
          <TabsTrigger
            key={section.id}
            value={section.id}
            className="text-xs sm:text-sm whitespace-normal h-auto py-2 px-3"
          >
            {section.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
