import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://avatars.githubusercontent.com/u/16833604?v=4" />
      <AvatarFallback>RS</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Avatar size="sm">
        <AvatarImage src="https://avatars.githubusercontent.com/u/16833604?v=4" />
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://avatars.githubusercontent.com/u/16833604?v=4" />
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://avatars.githubusercontent.com/u/16833604?v=4" />
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
    </div>
  ),
};
