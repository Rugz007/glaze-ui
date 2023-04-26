import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { VariantProps, cva } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/util/util';

const toastVariants = cva(
  'data-[swipe=move]:transition-none grow-1 relative group pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full mt-4 data-[state=closed]:slide-out-to-right-full dark:border-slate-700 last:mt-0 sm:last:mt-4',
  {
    variants: {
      variant: {
        info: 'bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700',
        error:
          'group destructive bg-red-600 text-primary-foreground border-red-600 dark:border-red-600',
        success:
          'group destructive bg-green-600 text-primary-foreground border-green-600 dark:border-green-600',
        warning:
          'group destructive bg-yellow-500 text-primary-foreground border-yellow-500 dark:border-yellow-500',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

const toastViewPortVariants = cva('absolute z-[100] p-4 md:max-w-[420px]', {
  variants: {
    position: {
      topLeft: 'top-0 left-0',
      topRight: 'top-0 right-0',
      bottomLeft: 'bottom-0 left-0',
      bottomRight: 'bottom-0 right-0',
      topCenter: 'top-0 left-[37.5%]',
      bottomCenter: 'bottom-0 left-[37.5%]',
    },
  },
  defaultVariants: {
    position: 'bottomRight',
  },
});

const ToastActionVariants = cva(
  'inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  ',
  {
    variants: {
      variant: {
        info: 'group-[.destructive]:border-red-100 group-[.destructive]:hover:border-slate-50 group-[.destructive]:hover:bg-red-100 group-[.destructive]:hover:text-red-600 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800',
        warning:
          'group-[.destructive]:border-yellow-100 group-[.destructive]:hover:border-slate-50 group-[.destructive]:hover:bg-yellow-100 group-[.destructive]:hover:text-yellow-600 group-[.destructive]:focus:ring-yellow-400 group-[.destructive]:focus:ring-offset-yellow-600 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800',
        success:
          'group-[.destructive]:border-green-100 group-[.destructive]:hover:border-slate-50 group-[.destructive]:hover:bg-green-100 group-[.destructive]:hover:text-green-600 group-[.destructive]:focus:ring-green-400 group-[.destructive]:focus:ring-offset-green-600 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800',
        error:
          'group-[.destructive]:border-red-100 group-[.destructive]:hover:border-slate-50 group-[.destructive]:hover:bg-red-100 group-[.destructive]:hover:text-red-600 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800',
      },
    },
  }
);

const ToastCloseVariants = cva(
  'absolute top-2 right-2 rounded-md p-1 text-slate-500 opacity-0 transition-opacity hover:text-slate-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100  dark:hover:text-slate-50',
  {
    variants: {
      variant: {
        info: 'group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
        warning:
          'group-[.destructive]:text-yellow-300 group-[.destructive]:hover:text-yellow-50 group-[.destructive]:focus:ring-yellow-400 group-[.destructive]:focus:ring-offset-yellow-600',
        success:
          'group-[.destructive]:text-green-300 group-[.destructive]:hover:text-green-50 group-[.destructive]:focus:ring-green-400 group-[.destructive]:focus:ring-offset-green-600',
        error:
          'group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      },
    },
  }
);

interface ToasterProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>,
    VariantProps<typeof toastVariants>,
    VariantProps<typeof toastViewPortVariants> {}

const ToastContext = React.createContext<
  'info' | 'error' | 'success' | 'warning'
>('info');

const ToastProvider = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Provider>,
  ToasterProps
>(({ children, variant, ...props }, ref) => (
  <ToastPrimitives.Provider {...props}>
    <ToastContext.Provider value={variant ? variant : 'info'}>
      {children}
    </ToastContext.Provider>
  </ToastPrimitives.Provider>
));

ToastProvider.displayName = ToastPrimitives.Provider.displayName;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToasterProps
>(({ className, position, ...props }, ref) => {
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(toastViewPortVariants({ position }), className)}
      {...props}
    />
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & ToasterProps
>(({ className, ...props }, ref) => {
  const variant = React.useContext(ToastContext);
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(ToastContext);
  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(ToastActionVariants({ variant }), className)}
      {...props}
    />
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => {
  const variant = React.useContext(ToastContext);
  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cn(ToastCloseVariants({ variant }), className)}
      toast-close=""
      {...props}
    >
      <X className="h-4 w-4" />
    </ToastPrimitives.Close>
  );
});
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
