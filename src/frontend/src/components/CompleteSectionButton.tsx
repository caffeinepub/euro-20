import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useRecordCompletion } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function CompleteSectionButton() {
  const { identity } = useInternetIdentity();
  const { mutate: recordCompletion, isPending, isError, error } = useRecordCompletion();

  const handleComplete = () => {
    if (!identity) {
      toast.error('Please login to track your progress');
      return;
    }

    recordCompletion();
  };

  return (
    <div className="space-y-2">
      <Button
        onClick={handleComplete}
        disabled={!identity || isPending}
        className="w-full gap-2"
        size="lg"
      >
        {isPending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Recording...
          </>
        ) : (
          <>
            <CheckCircle2 className="h-5 w-5" />
            Mark Section Complete
          </>
        )}
      </Button>
      {isError && error && (
        <div className="flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
          <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
          <div className="text-sm text-destructive">
            <p className="font-medium">Failed to record completion</p>
            <p className="text-xs mt-1 opacity-90">
              {error instanceof Error ? error.message : 'Please try again'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
