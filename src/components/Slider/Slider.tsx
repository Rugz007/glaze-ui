import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/util/util';

const sliderTrackVariants = cva(
  'relative w-full grow overflow-hidden rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-primary-200 dark:bg-primary-800',
        danger: 'bg-red-200 dark:bg-red-800',
      },
      size: {
        sm: 'h-1',
        md: 'h-2',
        lg: 'h-3',
      },
    },
  }
);

const sliderRangeVariants = cva('absolute h-full ', {
  variants: {
    variant: {
      primary: 'bg-primary-900  dark:bg-primary-400',
      danger: 'bg-red-900  dark:bg-red-400',
    },
  },
});
const sliderThumbVariants = cva('block rounded-full border-2  ', {
  variants: {
    variant: {
      primary:
        'border-primary-900 bg-white dark:border-primary-100 dark:bg-primary-400',
      danger: 'border-red-900 bg-white dark:border-red-100 dark:bg-red-400',
    },
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
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
