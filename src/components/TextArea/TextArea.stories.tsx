import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Textarea } from './TextArea';

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: ({ variant }) => {
    return <Textarea variant={variant} placeholder="Type your message here." />;
  },
};
