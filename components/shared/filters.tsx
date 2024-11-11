'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 50,
  });

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({
      ...prices,
    });
  };

  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* Checkbox */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="collected" text="Can be collected" value="1" />
        <FilterCheckbox name="new_items" text="New items" value="2" />
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
            value={String(prices.priceFrom)}
            onChange={(e) => {
              updatePrice('priceFrom', Number(e.target.value));
            }}
          />
          <Input
            type="number"
            placeholder="50"
            min={5}
            max={50}
            value={String(prices.priceTo)}
            onChange={(e) => {
              updatePrice('priceTo', Number(e.target.value));
            }}
          />
        </div>
        <RangeSlider
          min={0}
          max={50}
          step={2}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => {
            setPrices({ priceFrom, priceTo });
          }}
        />
      </div>

      {/* Filter-group checkbox */}
      <CheckboxFiltersGroup
        className=""
        title="Ingredients"
        name="ingredients"
        limit={5}
        defaultItems={items.slice(0, 5)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};
