import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const Categories: React.FC<Props> = ({ className }) => {
  const categories = [
    'Pizza',
    'Combos',
    'Snacks',
    'Cocktails',
    'Coffee',
    'Drinks',
    'Desserts',
  ];
  const activeIndex = 0;

  return (
    <div
      className={
        (cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl'), className)
      }
    >
      {categories.map((category, index) => {
        return (
          <>
            <a>
              <button>{category}</button>
            </a>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
