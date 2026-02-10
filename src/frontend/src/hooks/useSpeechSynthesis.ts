import { useState, useEffect, useCallback, useRef } from 'react';
import { languageCodeToBCP47 } from '../lib/speechSynthesisLanguages';

interface UseSpeechSynthesisOptions {
  languageCode: string;
}

interface UseSpeechSynthesisReturn {
  speak: (text: string, itemId: string) => void;
  stop: () => void;
  isSupported: boolean;
  isSpeaking: boolean;
  currentItemId: string | null;
  error: string | null;
}

export function useSpeechSynthesis({ languageCode }: UseSpeechSynthesisOptions): UseSpeechSynthesisReturn {
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentItemId, setCurrentItemId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
    } else {
      setIsSupported(false);
      setError('Voice pronunciation is not supported in this browser');
    }
  }, []);

  const stop = useCallback(() => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentItemId(null);
    }
  }, []);

  const speak = useCallback((text: string, itemId: string) => {
    if (!isSupported) {
      setError('Voice pronunciation is not supported in this browser');
      return;
    }

    if (!text || text.trim() === '') {
      return;
    }

    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;

      // Map language code to BCP-47 tag
      const bcp47Lang = languageCodeToBCP47[languageCode] || 'en-US';
      utterance.lang = bcp47Lang;

      // Try to find a matching voice for the language
      const voices = window.speechSynthesis.getVoices();
      const matchingVoice = voices.find(voice => voice.lang.startsWith(bcp47Lang.split('-')[0]));
      
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }
      // If no matching voice, fall back to default (browser will handle)

      utterance.onstart = () => {
        setIsSpeaking(true);
        setCurrentItemId(itemId);
        setError(null);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setCurrentItemId(null);
      };

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
        setIsSpeaking(false);
        setCurrentItemId(null);
        
        if (event.error === 'not-allowed') {
          setError('Voice pronunciation permission denied');
        } else if (event.error === 'network') {
          setError('Network error during voice pronunciation');
        } else {
          setError('Voice pronunciation failed');
        }
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Error in speech synthesis:', err);
      setError('Voice pronunciation failed');
      setIsSpeaking(false);
      setCurrentItemId(null);
    }
  }, [isSupported, languageCode]);

  return {
    speak,
    stop,
    isSupported,
    isSpeaking,
    currentItemId,
    error,
  };
}
