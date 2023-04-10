import { cn } from '@/util/util';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const tagVariants = cva(
  'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-700 text-white dark:bg-primary-50 dark:text-primary-700',
        destructive: 'bg-red-500 text-white dark:hover:bg-red-600',

        success: 'bg-green-600 text-white dark:hover:bg-green-600',

        warning: 'bg-yellow-600 text-white dark:hover:bg-yellow-600',
      },
      size: {
        md: 'h-6 py-2 px-3',
        sm: 'h-4 px-2 py-2 text-xs',
        lg: 'h-8 px-3 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const closeIconVariants = cva(' ml-1 p-0.5 rounded-full', {
  variants: {
    variant: {
      primary: 'hover:bg-primary-600 dark:hover-bg-primary-200',
      destructive: 'hover:bg-red-600',
      success: 'hover:bg-green-500 dark:hover-bg-green-600',
      warning: 'hover:bg-yellow-500 dark:hover-bg-yellow-600',
    },
  },
});

interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  onClose?: Function;
  closeable: boolean;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    { className, variant, children, onClose, closeable, size, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(tagVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {closeable && onClose && (
          <button
            className={cn(closeIconVariants({ variant }))}
            onClick={() => onClose()}
          >
            <svg
              className={'w-4 h-4 stroke-white'}
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
