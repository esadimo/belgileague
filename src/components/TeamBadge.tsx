import { cn } from '@/lib/utils';

interface TeamBadgeProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function TeamBadge({ name, size = 'md', className }: TeamBadgeProps) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .substring(0, 3)
    .toUpperCase();

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-xl',
  };

  return (
    <div
      className={cn(
        'team-badge',
        sizeClasses[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
