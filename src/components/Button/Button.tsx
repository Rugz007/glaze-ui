import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/util/util';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:shadow-xs active:shadow-sm',
  {
    variants: {
      variant: {
        solid:
          'bg-primary-600 text-primary-foreground hover:bg-primary-500 active:bg-primary-700',
        destructive:
          'bg-red-500 text-primary-foreground hover:bg-red-600 dark:hover:bg-red-600 active:bg-red-700 ',
        outline:
          'bg-transparent border text-primary-700 border-primary-200 hover:bg-primary-100 active:bg-primary-200 dark:border-primary-600 dark:text-primary-100',
        subtle:
          'bg-primary-100 text-primary-700 hover:bg-primary-200 dark:bg-primary-600 dark:text-primary-100',
        ghost:
          'bg-transparent text-primary-700 hover:bg-primary-100 active:bg-primary-200 dark:hover:bg-primary-800 dark:text-primary-100 dark:hover:text-primary-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
      },
      size: {
        md: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
