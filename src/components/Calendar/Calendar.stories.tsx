import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import React from 'react';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    /*eslint-disable*/
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    /*eslint-enable*/
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    );
  },
};

export const DateRangePicker: Story = {
  render: () => {
    /*eslint-disable*/
    const [date, setDate] = React.useState<DateRange | undefined>({
      from: new Date(2022, 0, 20),
      to: addDays(new Date(2022, 0, 20), 20),
    });
    /*eslint-enable*/
    return (
      <div className="border w-fit">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </div>
    );
  },
};
