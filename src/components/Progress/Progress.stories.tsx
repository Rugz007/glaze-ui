import { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import React from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: ({ size }) => {
    /* eslint-disable */
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    /* eslint-enable */
    return <Progress size={size} value={progress} className="w-[60%]" />;
  },
};
