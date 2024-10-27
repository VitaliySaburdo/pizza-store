import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';

type Items = FilterChecboxProps;

interface Props {
  title: string;
  items: Items[];
  defaultItems: Items[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange: (values: string[]) => void;
  defaultValues: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  onChange,
  defaultValues,
  className,
}) => {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
        />
      </div>
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item, index) => {
          <FilterCheckbox onCheckedChange={onCheckedChange(item.value)} />;
        })}
      </div>
    </div>
  );
};
