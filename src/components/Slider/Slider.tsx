import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/util/util';

const sliderTrackVariants = cva(
  'relative w-full grow overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-primary-200 dark:bg-gray-600',
        danger: 'bg-red-200 dark:bg-gray-600',
      },
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const sliderRangeVariants = cva('absolute h-full ', {
  variants: {
    variant: {
      primary: 'bg-primary-600',
      danger: 'bg-red-600',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
const sliderThumbVariants = cva('block rounded-full border-2 shadow-md ', {
  variants: {
    variant: {
      primary:
        'border-primary-900 bg-white dark:border-primary-100 dark:bg-primary-400 focus:outline-none',
      danger:
        'border-red-900 bg-white dark:border-red-100 dark:bg-red-400 focus:outline-none',
    },
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderTrackVariants> {}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, variant, size, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-96 touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(sliderTrackVariants({ variant, size }), className)}
    >
      <SliderPrimitive.Range
        className={cn(sliderRangeVariants({ variant }), className)}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(sliderThumbVariants({ variant, size }), className)}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
