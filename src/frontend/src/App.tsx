import { useState } from 'react';
import AppHeader from './components/AppHeader';
import HomePage from './pages/HomePage';
import LanguageLearningPage from './pages/LanguageLearningPage';
import { ThemeProvider } from 'next-themes';

export type AppView = 'home' | 'learning';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedLanguage(null);
  };

  const navigateToLanguage = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setCurrentView('learning');
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen flex flex-col bg-background">
        <AppHeader 
          currentView={currentView}
          onNavigateHome={navigateToHome}
        />
        <main className="flex-1">
          {currentView === 'home' && (
            <HomePage onSelectLanguage={navigateToLanguage} />
          )}
          {currentView === 'learning' && selectedLanguage && (
            <LanguageLearningPage 
              languageCode={selectedLanguage}
              onSwitchLanguage={navigateToLanguage}
            />
          )}
        </main>
        <footer className="border-t border-border bg-card py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Euro 20 · Built with love using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:underline font-medium"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
