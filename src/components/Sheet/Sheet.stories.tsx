import { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet';
import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const meta: Meta<typeof Sheet> = {
  title: 'Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['top', 'left', 'bottom', 'right'],
      control: 'select',
    },
    size: {
      options: ['sm', 'md', 'lg', 'full', 'xl', 'content'],
      control: 'select',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: ({ position, size }) => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent position={position} size={size}>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&aposre
              done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-right">Name</p>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <p className="text-right">Username</p>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
