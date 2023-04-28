import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@/util/util';
import { cva, VariantProps } from 'class-variance-authority';

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-primary-200',
  {
    variants: {
      variant: {
        primary: 'data-[state=checked]:bg-primary-600',
        danger: 'data-[state=checked]:bg-red-500',
      },
      size: {
        sm: 'text-sm h-4 w-8 rounded-full',
        md: 'text-md h-5 w-10 rounded-full',
        lg: 'text-lg h-6 w-12 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

const knobVariants = cva(
  'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0',
  {
    variants: {
      size: {
        sm: 'h-3 w-3 data-[state=checked]:translate-x-4',
        md: 'h-4 w-4 data-[state=checked]:translate-x-5',
        lg: 'h-5 w-5 data-[state=checked]:translate-x-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  label: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, size, ...props }, ref) => (
  <div className="flex items-center space-x-2">
    <SwitchPrimitives.Root
      className={cn(switchVariants({ variant, size }), className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(knobVariants({ size }), className)}
        {...props}
        ref={ref}
      />
    </SwitchPrimitives.Root>
    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {props.label}
    </label>
  </div>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
