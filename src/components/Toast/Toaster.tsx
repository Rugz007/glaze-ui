'use client';

import { useToast } from '../../Hooks/useToast';
import React from 'react';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './Toast';

interface Props {
  variant: 'info' | 'error' | 'success' | 'warning';
  position:
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topCenter'
    | 'bottomCenter';
}

const Toaster: React.FC<Props> = ({ variant, position }) => {
  const { toasts } = useToast();

  return (
    <ToastProvider variant={variant}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport position={position} />
    </ToastProvider>
  );
};

export default Toaster;
