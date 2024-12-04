'use client';

import React from 'react';
import { Input } from '../ui';
import { Skeleton } from '@/components/ui/skeleton';
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox';

type Items = FilterChecboxProps;

interface Props {
  title: string;
  items: Items[];
  defaultItems?: Items[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  loading?: boolean;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  selected,
  onClickCheckbox,
  loading,
  className,
  name,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  if (loading) {
    return (
      <div>
        <p className="font-bold mb-5">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, idx) => (
            <Skeleton key={idx} className="h-6 mb-4 rounded-[8px]" />
          ))}
        <Skeleton className="w-28 h-6 mb-5 rounded-[8px]" />
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onSearch}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? '- Hide' : '+ Show more'}
          </button>
        </div>
      )}
    </div>
  );
};
