import { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div 
      className="min-h-[calc(100vh-8rem)] py-8 relative"
      style={{
        backgroundImage: 'url(/assets/generated/euro-20-paper-texture.dim_1600x900.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div 
        className="absolute inset-0 bg-background/90"
        style={{ backdropFilter: 'blur(1px)' }}
      />
      <div className="container mx-auto px-4 relative z-10">
        {children}
      </div>
    </div>
  );
}
