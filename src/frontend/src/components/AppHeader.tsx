import { AppView } from '../App';
import LoginButton from './LoginButton';
import AuthErrorBanner from './AuthErrorBanner';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AppHeaderProps {
  currentView: AppView;
  onNavigateHome: () => void;
}

export default function AppHeader({ currentView, onNavigateHome }: AppHeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {currentView === 'learning' && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onNavigateHome}
                className="flex-shrink-0"
              >
                <Home className="h-5 w-5" />
              </Button>
            )}
            <button 
              onClick={onNavigateHome}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/assets/generated/euro-20-wordmark.dim_1200x300.png" 
                alt="Euro 20"
                className="h-8 w-auto"
              />
            </button>
          </div>
          <LoginButton />
        </div>
      </header>
      <div className="container mx-auto px-4 pt-4">
        <AuthErrorBanner />
      </div>
    </>
  );
}
