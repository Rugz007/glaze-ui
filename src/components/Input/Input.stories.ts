import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';
import React from 'react';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    onChange: { action: 'onChange' },
    placeholder: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};
