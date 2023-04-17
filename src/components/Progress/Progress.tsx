import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/util/util';
import { VariantProps, cva } from 'class-variance-authority';

const progressVariant = cva(
  'relative w-full overflow-hidden rounded-full bg-primary-200 dark:bg-primary-800',
  {
    variants: {
      size: {
        sm: 'h-3',
        md: 'h-4',
        lg: 'h-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariant> {}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, size, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariant({ size }), className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary-900 transition-all dark:bg-slate-400"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
