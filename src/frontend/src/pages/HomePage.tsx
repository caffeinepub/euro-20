import { languages } from '../lib/languages';
import { Card, CardContent } from '@/components/ui/card';
import { Globe2 } from 'lucide-react';

interface HomePageProps {
  onSelectLanguage: (languageCode: string) => void;
}

export default function HomePage({ onSelectLanguage }: HomePageProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/generated/euro-20-wordmark.dim_1200x300.png" 
              alt="Euro 20"
              className="h-16 w-auto"
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the basics of 20 European languages. Start your journey with beginner-friendly lessons designed for students and global learners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {languages.map((language) => (
            <Card
              key={language.code}
              className="cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => onSelectLanguage(language.code)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Globe2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{language.name}</h3>
                <p className="text-sm text-muted-foreground">{language.nativeName}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
