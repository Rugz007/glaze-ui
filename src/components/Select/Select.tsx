import { default as ReactSelect } from 'react-select';
import { Props } from 'react-select';
import React from 'react';
import clsx from 'clsx';

const controlStyles = {
  base: 'border rounded-lg bg-white hover:cursor-pointer',
  focus: 'border-primary-600 ring-1 ring-primary-500',
  nonFocus: 'border-slate-300 hover:border-slate-400',
};
const placeholderStyles = 'text-slate-500 pl-1 py-0.5';
const selectInputStyles = 'pl-1 py-0.5';
const valueContainerStyles = 'p-1 gap-1';
``;
const singleValueStyles = 'leading-7 ml-1';
const multiValueStyles =
  'bg-primary-50 rounded items-center py-0.5 pl-2 pr-1 gap-1.5';
const multiValueLabelStyles = 'leading-6 py-0.5';
const multiValueRemoveStyles =
  'bg-transperent hover:bg-blue-100 hover:text-blue-800 text-blue-500 hover:border-blue-300 rounded-md';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles =
  'text-slate-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'bg-primary-300';
const dropdownIndicatorStyles =
  'p-1 hover:bg-primary-100 text-slate-500 rounded-md hover:text-black';
const menuStyles = 'p-1 mt-2 border border-slate-200 bg-white rounded-lg';
const groupHeadingStyles = 'ml-3 mt-2 mb-1 text-slate-500 text-sm';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded',
  focus: 'bg-primary-100 active:bg-primary-200',
  selected: 'after:ml-2 text-blue-500 font-medium',
};
const noOptionsMessageStyles =
  'text-slate-500 p-2 bg-primary-50 border border-dashed border-slate-200 rounded-sm';

interface SelectProps extends Props {}

const Select: React.FC<SelectProps> = ({ value, options, ...props }) => {
  return (
    <ReactSelect
      classNames={{
        control: ({ isFocused }) =>
          clsx(
            isFocused ? controlStyles.focus : controlStyles.nonFocus,
            controlStyles.base
          ),
        placeholder: () => placeholderStyles,
        input: () => selectInputStyles,
        valueContainer: () => valueContainerStyles,
        singleValue: () => singleValueStyles,
        multiValue: () => multiValueStyles,
        multiValueLabel: () => multiValueLabelStyles,
        multiValueRemove: () => multiValueRemoveStyles,
        indicatorsContainer: () => indicatorsContainerStyles,
        clearIndicator: () => clearIndicatorStyles,
        indicatorSeparator: () => indicatorSeparatorStyles,
        dropdownIndicator: () => dropdownIndicatorStyles,
        menu: () => menuStyles,
        groupHeading: () => groupHeadingStyles,
        option: ({ isFocused, isSelected }) =>
          clsx(
            isFocused && optionStyles.focus,
            isSelected && optionStyles.selected,
            optionStyles.base
          ),
        noOptionsMessage: () => noOptionsMessageStyles,
      }}
      value={value}
      isMulti={props.isMulti}
      options={options}
      {...props}
      unstyled
    />
  );
};

export default Select;
