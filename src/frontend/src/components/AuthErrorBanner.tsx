import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function AuthErrorBanner() {
  const { loginStatus, loginError } = useInternetIdentity();

  if (loginStatus !== 'loginError') {
    return null;
  }

  return (
    <Alert variant="destructive" className="mb-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Authentication Error</AlertTitle>
      <AlertDescription>
        {loginError?.message || 'Failed to connect to Internet Identity. Please check your connection and try again.'}
      </AlertDescription>
    </Alert>
  );
}
