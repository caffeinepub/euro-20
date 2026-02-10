import { languages } from '../lib/languages';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
          {currentLang && (
            <img 
              src={currentLang.flagPath} 
              alt={`${currentLang.name} flag`}
              className="w-5 h-5 rounded object-cover"
            />
          )}
          <SelectValue>
            {currentLang?.name}
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex items-center gap-2">
              <img 
                src={language.flagPath} 
                alt={`${language.name} flag`}
                className="w-5 h-5 rounded object-cover"
              />
              <div className="flex flex-col">
                <span className="font-medium">{language.name}</span>
                <span className="text-xs text-muted-foreground">{language.nativeName}</span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
