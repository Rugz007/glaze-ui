import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import React from 'react';
const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'destructive', 'outline', 'subtle', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['md', 'sm', 'lg'],
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Tag> = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Tag',
    onClose: () => {
      alert('close');
    },
  },
};

export const Danger: StoryObj<typeof Tag> = {
  args: {
    variant: 'destructive',
    size: 'md',
    children: 'Tag',
    onClose: () => {
      alert('close');
    },
  },
};

export const Success: StoryObj<typeof Tag> = {
  args: {
    variant: 'success',
    size: 'md',
    children: 'Tag',
    onClose: () => {
      alert('close');
    },
  },
};

export const Warning: StoryObj<typeof Tag> = {
  args: {
    variant: 'warning',
    size: 'md',
    children: 'Tag',
    onClose: () => {
      alert('close');
    },
  },
};

export const Compare: StoryObj<typeof Tag> = {
  render: () => (
    <div>
      <Tag
        variant="primary"
        size="md"
        onClose={() => {
          alert('close');
        }}
        closeable={true}
        className="mr-2"
      >
        Tag
      </Tag>
      <Tag
        variant="destructive"
        size="md"
        onClose={() => {
          alert('close');
        }}
        closeable={true}
        className="mr-2"
      >
        Tag
      </Tag>
      <Tag
        variant="success"
        size="md"
        onClose={() => {
          alert('close');
        }}
        closeable={true}
        className="mr-2"
      >
        Tag
      </Tag>
      <Tag
        variant="warning"
        size="md"
        onClose={() => {
          alert('close');
        }}
        closeable={true}
      >
        Tag
      </Tag>
    </div>
  ),
};
