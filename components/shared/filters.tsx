import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* Checkbox */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be collected" value="1" />
        <FilterCheckbox text="New items" value="2" />
      </div>

      {/* Input and Range of price */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={50}
            defaultValue={0}
          />
          <Input type="number" placeholder="50" min={5} max={50} />
        </div>
        <RangeSlider min={0} max={50} step={2} value={[0, 50]} />
      </div>
    </div>
  );
};
