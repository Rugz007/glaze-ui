import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/util/util';

const tabsVariants = cva(
  'inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-slate-700 transition-all  disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        underlined:
          'border-b-2 border-transparent rounded-none data-[state=active]:border-primary-700',
        enclosed:
          'rounded-none data-[state=active]:border rounded-t-md border-primary-200 border-b-transparent mb-[-1px] bg-white',
        tiled:
          'data-[state=active]:bg-white data-[state=active]:text-primary-700 data-[state=active]:shadow-sm text-slate-700 data-[state=active]:bg-primary-600 data-[state=active]:text-primary-100 bg-slate-100',
      },
    },
    defaultVariants: {
      variant: 'underlined',
    },
  }
);

const tabsContentVariants = cva('', {
  variants: {
    variant: {
      underlined:
        'mt-0 rounded-b-md border border-t-1 border-x-0 border-b-0 border-slate-200',
      enclosed:
        'mt-0 border border-t-1 border-x-0 border-b-0 border-primary-200',
      tiled: 'mt-2 rounded-md',
    },
  },
  defaultVariants: {
    variant: 'underlined',
  },
});

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {}

const TabContext = React.createContext<'underlined' | 'enclosed' | 'tiled'>(
  'underlined'
);

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ children, variant, ...props }, ref) => (
  <TabsPrimitive.Root {...props}>
    <TabContext.Provider value={variant ? variant : 'underlined'}>
      {children}
    </TabContext.Provider>
  </TabsPrimitive.Root>
));
Tabs.displayName = TabsPrimitive.Tabs.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center rounded-md',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(TabContext);
  return (
    <TabsPrimitive.Trigger
      className={cn(tabsVariants({ variant }), className)}
      {...props}
      ref={ref}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(TabContext);
  return (
    <TabsPrimitive.Content
      className={cn(tabsContentVariants({ variant }), className)}
      {...props}
      ref={ref}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
