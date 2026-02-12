import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetStreakData } from '../hooks/useQueries';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Flame, Trophy, Calendar, AlertCircle } from 'lucide-react';
import { formatStreakDate } from '../lib/localDate';

export default function StreakPanel() {
  const { identity } = useInternetIdentity();
  const { data: streakData, isLoading, isError, error } = useGetStreakData();

  if (!identity) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            Daily Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Login to track your learning streak and stay motivated!
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            Daily Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </CardContent>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            Daily Streak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
            <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
            <div className="text-sm text-destructive">
              <p className="font-medium">Failed to load streak data</p>
              <p className="text-xs mt-1 opacity-90">
                {error instanceof Error ? error.message : 'Please try refreshing the page'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentStreak = Number(streakData?.currentStreak || 0);
  const bestStreak = Number(streakData?.bestStreak || 0);
  const lastDate = streakData?.lastCompletionDate ? Number(streakData.lastCompletionDate) : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Flame className="h-5 w-5 text-orange-500" />
          Daily Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
              <Flame className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Streak</p>
              <p className="text-2xl font-bold">{currentStreak} days</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="h-4 w-4 text-amber-500" />
              <p className="text-xs text-muted-foreground">Best</p>
            </div>
            <p className="text-lg font-semibold">{bestStreak}</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="h-4 w-4 text-primary" />
              <p className="text-xs text-muted-foreground">Last</p>
            </div>
            <p className="text-xs font-medium">
              {lastDate > 0 ? formatStreakDate(lastDate) : 'Never'}
            </p>
          </div>
        </div>

        {currentStreak === 0 && (
          <p className="text-xs text-muted-foreground text-center pt-2">
            Complete a lesson section to start your streak!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
