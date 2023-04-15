import { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import React from 'react';
import { Button } from '../Button/Button';
import { ToastAction } from './Toast';
import { useToast } from '../../Hooks/useToast';
import Toaster from './Toaster';

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: ({ variant, position }) => {
    /* eslint-disable */
    const { toast } = useToast();
    /* eslint-enable */
    return (
      <>
        <Button
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up ',
              description: 'Friday, February 10, 2023 at 5:57 PM',
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
              variant: variant,
              position: position,
            });
          }}
        >
          Add to calendar
        </Button>
        <Toaster
          variant={variant ? variant : 'info'}
          position={position ? position : 'bottomRight'}
        />
      </>
    );
  },
};
