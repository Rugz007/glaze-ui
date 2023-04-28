import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/util/util';
import { VariantProps, cva } from 'class-variance-authority';

const progressVariant = cva(
  'relative w-full overflow-hidden rounded-full bg-primary-100 dark:bg-gray-700',
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
      className="flex-1 w-full h-full transition-all rounded-r-lg bg-primary-600"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
