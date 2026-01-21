import { TeamBadge } from '@/components/TeamBadge';
import { StatusBadge } from '@/components/StatusBadge';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'unscheduled' | 'proposed' | 'confirmed' | 'played' | 'confirmed_result';
  scheduledDate?: Date;
  location?: string;
  roundNumber?: number;
  onClick?: () => void;
  className?: string;
}

export function MatchCard({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  scheduledDate,
  location,
  roundNumber,
  onClick,
  className,
}: MatchCardProps) {
  const hasScore = homeScore !== undefined && awayScore !== undefined;
  const isPlayed = status === 'played' || status === 'confirmed_result';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className={cn('match-card cursor-pointer', className)}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <StatusBadge status={status} />
        {roundNumber && (
          <span className="text-xs text-muted-foreground font-medium">
            Round {roundNumber}
          </span>
        )}
      </div>

      {/* Teams and Score */}
      <div className="flex items-center justify-between gap-4">
        {/* Home Team */}
        <div className="flex-1 flex items-center gap-3">
          <TeamBadge name={homeTeam} size="sm" />
          <div className="min-w-0">
            <p className={cn(
              'font-semibold truncate',
              hasScore && homeScore! > awayScore! && 'text-success'
            )}>
              {homeTeam}
            </p>
            <p className="text-xs text-muted-foreground">Home</p>
          </div>
        </div>

        {/* Score */}
        <div className="flex items-center gap-2">
          {hasScore ? (
            <>
              <span className={cn(
                'score-badge bg-secondary',
                homeScore! > awayScore! && 'bg-success text-success-foreground'
              )}>
                {homeScore}
              </span>
              <span className="text-muted-foreground font-bold">-</span>
              <span className={cn(
                'score-badge bg-secondary',
                awayScore! > homeScore! && 'bg-success text-success-foreground'
              )}>
                {awayScore}
              </span>
            </>
          ) : (
            <span className="text-xl font-bold text-muted-foreground">vs</span>
          )}
        </div>

        {/* Away Team */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <div className="min-w-0 text-right">
            <p className={cn(
              'font-semibold truncate',
              hasScore && awayScore! > homeScore! && 'text-success'
            )}>
              {awayTeam}
            </p>
            <p className="text-xs text-muted-foreground">Away</p>
          </div>
          <TeamBadge name={awayTeam} size="sm" />
        </div>
      </div>

      {/* Footer - Date/Location */}
      {(scheduledDate || location) && (
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
          {scheduledDate && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <span>{format(scheduledDate, 'MMM d')}</span>
            </div>
          )}
          {scheduledDate && (
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>{format(scheduledDate, 'HH:mm')}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span className="truncate">{location}</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}
