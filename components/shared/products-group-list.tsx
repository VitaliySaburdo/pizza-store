import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { ProductCard } from './productCard';

interface Props {
  title: string;
  items: any[];
  categoryId: string;
  listClassName: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  return (
    <div className={className}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={(cn('grid grid-cols-3 gap-[50px]'), listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
