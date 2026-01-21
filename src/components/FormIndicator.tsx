import { cn } from '@/lib/utils';

interface FormIndicatorProps {
  result: 'W' | 'D' | 'L';
  className?: string;
}

export function FormIndicator({ result, className }: FormIndicatorProps) {
  return (
    <span
      className={cn(
        'form-indicator',
        result === 'W' && 'form-indicator-w',
        result === 'D' && 'form-indicator-d',
        result === 'L' && 'form-indicator-l',
        className
      )}
    >
      {result}
    </span>
  );
}

interface FormSequenceProps {
  form: ('W' | 'D' | 'L')[];
  className?: string;
}

export function FormSequence({ form, className }: FormSequenceProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {form.map((result, i) => (
        <FormIndicator key={i} result={result} />
      ))}
    </div>
  );
}
