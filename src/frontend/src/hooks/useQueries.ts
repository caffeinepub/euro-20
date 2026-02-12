import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { useInternetIdentity } from './useInternetIdentity';
import { StreakData } from '../backend';
import { getLocalDateAsNumber } from '../lib/localDate';
import { toast } from 'sonner';

export function useGetStreakData() {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();

  return useQuery<StreakData>({
    queryKey: ['streakData', identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor || !identity) {
        throw new Error('Authentication required to load streak data');
      }
      try {
        return await actor.getStreakData(identity.getPrincipal());
      } catch (error: any) {
        throw new Error(error.message || 'Failed to load streak data from server');
      }
    },
    enabled: !!actor && !actorFetching && !!identity,
    retry: 1,
  });
}

export function useRecordCompletion() {
  const { actor } = useActor();
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      if (!actor || !identity) {
        throw new Error('Please login to record your progress');
      }
      try {
        const localDate = getLocalDateAsNumber();
        return await actor.recordDayCompletion(BigInt(localDate));
      } catch (error: any) {
        throw new Error(error.message || 'Failed to record completion on server');
      }
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ['streakData'] });
      
      const newStreak = Number(result.newStreak);
      const message = result.message;
      
      if (message.includes('duplicate') || newStreak === Number(result.newStreak)) {
        toast.success('Section completed!', {
          description: 'You\'ve already recorded progress today. Keep learning!',
        });
      } else {
        toast.success(`${newStreak} day streak! 🔥`, {
          description: 'Great job! Keep up the momentum.',
        });
      }
    },
    onError: (error: any) => {
      console.error('Failed to record completion:', error);
      toast.error('Failed to record completion', {
        description: error.message || 'Please try again',
      });
    },
  });
}
