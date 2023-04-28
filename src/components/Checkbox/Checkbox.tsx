import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/util/util';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <div className="flex items-center">
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary-700 dark:text-primary-50',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center')}
      >
        <Check className="w-4 h-4 text-primary-600" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
