import * as React from 'react';

import { cn } from '@/util/util';
import { VariantProps, cva } from 'class-variance-authority';

const textareaVariant = cva(
  'flex h-20 w-full rounded-md border  bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-primary-300 dark:border-primary-700 dark:text-primary-50',
        invalid: 'border-red-300 dark:border-red-700 dark:text-red-50',
      },
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariant> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariant({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
