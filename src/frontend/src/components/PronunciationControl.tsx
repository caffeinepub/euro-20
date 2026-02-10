import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

interface PronunciationControlProps {
  text: string;
  itemId: string;
  languageCode: string;
}

export default function PronunciationControl({ text, itemId, languageCode }: PronunciationControlProps) {
  const { speak, stop, isSupported, isSpeaking, currentItemId, error } = useSpeechSynthesis({ languageCode });

  if (!isSupported) {
    return null;
  }

  const isThisItemPlaying = isSpeaking && currentItemId === itemId;

  const handleClick = () => {
    if (isThisItemPlaying) {
      stop();
    } else {
      speak(text, itemId);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleClick}
        disabled={!text || text.trim() === ''}
        className="h-8 w-8 flex-shrink-0"
        aria-label={isThisItemPlaying ? 'Stop pronunciation' : 'Play pronunciation'}
      >
        {isThisItemPlaying ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </Button>
      {error && currentItemId === itemId && (
        <span className="text-xs text-destructive">{error}</span>
      )}
    </div>
  );
}
