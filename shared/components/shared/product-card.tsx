import React from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl }) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img src={imageUrl} alt={name} className="w-[215px] h-[215px]" />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Spicy chorizo, hot jalapeno peppers, barbecue sauce, meatballs,
          tomatoes, bell peppers, red onion, mozzarella
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price} $</b>{' '}
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" /> Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
