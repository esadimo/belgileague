import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

type MatchStatus = 'unscheduled' | 'proposed' | 'confirmed' | 'played' | 'confirmed_result';

interface StatusBadgeProps {
  status: MatchStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { t } = useTranslation();

  const statusConfig: Record<MatchStatus, { label: string; className: string }> = {
    unscheduled: {
      label: t('fixtures.status.unscheduled'),
      className: 'status-pending',
    },
    proposed: {
      label: t('fixtures.status.proposed'),
      className: 'bg-info/10 text-info',
    },
    confirmed: {
      label: t('fixtures.status.confirmed'),
      className: 'bg-success/10 text-success',
    },
    played: {
      label: t('fixtures.status.played'),
      className: 'status-finished',
    },
    confirmed_result: {
      label: t('results.confirmedResult'),
      className: 'bg-success/10 text-success',
    },
  };

  const config = statusConfig[status];

  return (
    <span className={cn('status-pill', config.className, className)}>
      {config.label}
    </span>
  );
}
