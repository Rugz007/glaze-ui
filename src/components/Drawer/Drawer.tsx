import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { VariantProps, cva } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/util/util';

const portalVariants = cva('fixed inset-0 z-50 flex', {
  variants: {
    position: {
      top: 'items-start',
      bottom: 'items-end',
      left: 'justify-start',
      right: 'justify-end',
    },
  },
  defaultVariants: { position: 'right' },
});

interface DrawerPortalProps
  extends SheetPrimitive.DialogPortalProps,
    VariantProps<typeof portalVariants> {}

const DrawerPortal = ({
  position,
  className,
  children,
  ...props
}: DrawerPortalProps) => (
  <SheetPrimitive.Portal className={cn(className)} {...props}>
    <div className={portalVariants({ position })}>{children}</div>
  </SheetPrimitive.Portal>
);
DrawerPortal.displayName = SheetPrimitive.Portal.displayName;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in',
      className
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = SheetPrimitive.Overlay.displayName;

const drawerVariants = cva(
  'fixed z-50 scale-100 gap-4 bg-background p-6 opacity-100 shadow-lg border',
  {
    variants: {
      position: {
        top: 'animate-in slide-in-from-top w-full duration-300',
        bottom: 'animate-in slide-in-from-bottom w-full duration-300',
        left: 'animate-in slide-in-from-left h-full duration-300',
        right: 'animate-in slide-in-from-right h-full duration-300',
      },
      size: {
        content: '',
        default: '',
        sm: '',
        lg: '',
        xl: '',
        full: '',
      },
    },
    compoundVariants: [
      {
        position: ['top', 'bottom'],
        size: 'content',
        class: 'max-h-screen',
      },
      {
        position: ['top', 'bottom'],
        size: 'default',
        class: 'h-1/3',
      },
      {
        position: ['top', 'bottom'],
        size: 'sm',
        class: 'h-64',
      },
      {
        position: ['top', 'bottom'],
        size: 'lg',
        class: 'h-1/2',
      },
      {
        position: ['top', 'bottom'],
        size: 'xl',
        class: 'h-5/6',
      },
      {
        position: ['top', 'bottom'],
        size: 'full',
        class: 'h-screen',
      },
      {
        position: ['right', 'left'],
        size: 'content',
        class: 'max-w-screen',
      },
      {
        position: ['right', 'left'],
        size: 'default',
        class: 'w-1/3',
      },
      {
        position: ['right', 'left'],
        size: 'sm',
        class: 'w-1/4',
      },
      {
        position: ['right', 'left'],
        size: 'lg',
        class: 'w-1/2',
      },
      {
        position: ['right', 'left'],
        size: 'xl',
        class: 'w-5/6',
      },
      {
        position: ['right', 'left'],
        size: 'full',
        class: 'w-screen',
      },
    ],
    defaultVariants: {
      position: 'right',
      size: 'default',
    },
  }
);

export interface DrawerProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root>,
    VariantProps<typeof drawerVariants> {}

const Drawer = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Root>,
  DrawerProps
>(({ children, ...props }, ref) => {
  return <SheetPrimitive.Root {...props}>{children}</SheetPrimitive.Root>;
});
Drawer.displayName = SheetPrimitive.Root.displayName;

const DrawerTrigger = SheetPrimitive.Trigger;
DrawerTrigger.displayName = SheetPrimitive.Trigger.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  DrawerProps
>(({ position, size, className, children, ...props }, ref) => (
  <DrawerPortal position={position}>
    <DrawerOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(drawerVariants({ position, size }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="w-4 h-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = SheetPrimitive.Content.displayName;

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
DrawerHeader.displayName = 'SheetHeader';

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
DrawerFooter.displayName = 'SheetFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
DrawerTitle.displayName = SheetPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DrawerDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};