'use client';

import React from 'react';
import { useSet } from 'react-use';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'qs';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  pizzaType: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const router = useRouter();
  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []
    )
  );
  const [pizzaType, { toggle: togglePizzaType }] = useSet(new Set<string>([]));

  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filters = {
      ...prices,
      sizes: Array.from(sizes),
      pizzaType: Array.from(pizzaType),
      ingredients: Array.from(selectedIngredients),
    };

    const queryFilters = qs.stringify(filters, { arrayFormat: 'comma' });

    router.push(`?${queryFilters}`, { scroll: false });
  }, [prices, sizes, pizzaType, selectedIngredients, router]);

  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* Checkbox */}
      {/* Filter-group pizzaType */}
      <CheckboxFiltersGroup
        className="mb-5"
        title="Crust type"
        name="pizzaType"
        selected={pizzaType}
        onClickCheckbox={togglePizzaType}
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
        selected={sizes}
        onClickCheckbox={toggleSizes}
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
              prices.priceFrom !== undefined ? String(prices.priceFrom) : ''
            }
            onChange={(e) => {
              updatePrice('priceFrom', Number(e.target.value));
            }}
          />
          <Input
            type="number"
            placeholder="50"
            min={5}
            max={50}
            value={prices.priceTo !== undefined ? String(prices.priceTo) : ''}
            onChange={(e) => {
              updatePrice('priceTo', Number(e.target.value));
            }}
          />
        </div>
        <RangeSlider
          min={0}
          max={50}
          step={2}
          value={[prices.priceFrom || 0, prices.priceTo || 50]}
          onValueChange={([priceFrom, priceTo]) => {
            setPrices({ priceFrom, priceTo });
          }}
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
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
