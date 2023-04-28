import { Meta, StoryObj } from '@storybook/react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './Drawer';
import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  component: Drawer,
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

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: ({ position, size }) => {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open</Button>
        </DrawerTrigger>
        <DrawerContent position={position} size={size}>
          <DrawerHeader>
            <DrawerTitle>Edit profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here. Click save when you&aposre
              done.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <p className="text-right">Name</p>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <p className="text-right">Username</p>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DrawerFooter>
            <Button type="submit">Save changes</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};
