import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import React from 'react';
import { TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['enclosed', 'underlined', 'tiled'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: ({ variant }) => {
    return (
      <Tabs defaultValue="account" className="w-[400px]" variant={variant}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Make changes to your account here. Click save when you&apos;re done.
          </p>
          <div className="grid gap-2 py-4">
            <div className="space-y-1">
              <p>Name</p>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <p>Username</p>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>
          <div className="flex">
            <Button>Save changes</Button>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Change your password here. After saving, you&apos;ll be logged out.
          </p>
          <div className="grid gap-2 py-4">
            <div className="space-y-1">
              <p>Current password</p>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <p>New password</p>
              <Input id="new" type="password" />
            </div>
          </div>
          <div className="flex">
            <Button>Save password</Button>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
};
