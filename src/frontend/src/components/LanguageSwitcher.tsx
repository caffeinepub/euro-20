import { languages } from '../lib/languages';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: string;
  onSelectLanguage: (languageCode: string) => void;
}

export default function LanguageSwitcher({
  currentLanguage,
  onSelectLanguage,
}: LanguageSwitcherProps) {
  const currentLang = languages.find(l => l.code === currentLanguage);

  return (
    <Select value={currentLanguage} onValueChange={onSelectLanguage}>
      <SelectTrigger className="w-[200px]">
        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <SelectValue>
            {currentLang?.name}
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex flex-col">
              <span className="font-medium">{language.name}</span>
              <span className="text-xs text-muted-foreground">{language.nativeName}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
