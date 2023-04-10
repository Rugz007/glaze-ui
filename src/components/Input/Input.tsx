import * as React from 'react';

import { cn } from '@/util/util';
import { cva, VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'flex w-full  bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none  focus:ring-primary-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',

  {
    variants: {
      variant: {
        primary:
          'border border-slate-300 focus:border-primary-400 dark:border-slate-700 dark:focus:border-primary-400',
        ghost: 'border border-transparent focus:border-primary-400',
        error: 'border border-red-500 focus:border-red-500',
        success: 'border border-green-500 focus:border-green-500',
      },
      inputSize: {
        sm: 'text-xs h-8 rounded-md',
        md: 'text-sm h-10 rounded-md',
        lg: 'text-base h-12 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      inputSize: 'md',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, inputSize }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
