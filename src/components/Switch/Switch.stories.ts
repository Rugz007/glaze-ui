import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import React from 'react';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  argTypes: {
    onChange: { action: 'onChange' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Switch',
  },
};
