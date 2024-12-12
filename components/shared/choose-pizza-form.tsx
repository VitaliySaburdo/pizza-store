import React from 'react';
import { cn } from '@/lib/utils';
import { ProductImage } from './product-image';
import { Title } from './title';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
  items: any[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const textDetails = '30 sm, tradition';

  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage imageUrl={imageUrl} size={30} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
      </div>
    </div>
  );
};
