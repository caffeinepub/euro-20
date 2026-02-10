import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useRecordCompletion } from '../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function CompleteSectionButton() {
  const { identity } = useInternetIdentity();
  const { mutate: recordCompletion, isPending } = useRecordCompletion();

  const handleComplete = () => {
    if (!identity) {
      toast.error('Please login to track your progress');
      return;
    }

    recordCompletion();
  };

  return (
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
  );
}
