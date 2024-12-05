'use client';

import React from 'react';
import { useSet } from 'react-use';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useIngredients } from '@/hooks/use-ingredients';
import { useFilters } from '@/hooks/use-filters';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();

  const filters = useFilters();

  const { ingredients, loading } = useIngredients();

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      sizes: Array.from(filters.sizes),
      pizzaType: Array.from(filters.pizzaTypes),
      ingredients: Array.from(filters.selectedIngredients),
    };

    const queryFilters = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${queryFilters}`, { scroll: false });
  }, [filters, router]);

  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* Checkbox */}
      {/* Filter-group pizzaType */}
      <CheckboxFiltersGroup
        className="mb-5"
        title="Crust type"
        name="pizzaType"
        selected={filters.pizzaTypes}
        onClickCheckbox={filters.setPizzaTypes}
        items={[
          { text: 'Thin crust', value: '1' },
          { text: 'Traditional crust', value: '2' },
        ]}
      />

      {/* Filter-group sizes */}
      <CheckboxFiltersGroup
        className="mb-5"
        title="Pizza sizes"
        name="sizes"
        selected={filters.sizes}
        onClickCheckbox={filters.setSizes}
        items={[
          { text: '8"', value: '8' },
          { text: '12"', value: '12' },
          { text: '16"', value: '16' },
        ]}
      />

      {/* Input and Range of price */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={50}
            value={
              filters.prices.priceFrom !== undefined
                ? String(filters.prices.priceFrom)
                : ''
            }
            onChange={(e) => {
              filters.setPrices('priceFrom', Number(e.target.value));
            }}
          />
          <Input
            type="number"
            placeholder="50"
            min={5}
            max={50}
            value={
              filters.prices.priceTo !== undefined
                ? String(filters.prices.priceTo)
                : ''
            }
            onChange={(e) => {
              filters.setPrices('priceTo', Number(e.target.value));
            }}
          />
        </div>
        <RangeSlider
          min={0}
          max={50}
          step={2}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 50]}
          onValueChange={updatePrices}
        />
      </div>

      {/* Filter-group ingredients */}
      <CheckboxFiltersGroup
        title="Ingredients"
        name="ingredients"
        limit={5}
        defaultItems={items.slice(0, 5)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
