/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { useClickAway } from 'react-use';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Api } from '@/services/api-client';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  React.useEffect(() => {
    Api.products.search(searchQuery);
  }, [searchQuery]);

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        className={cn(
          'flex rounded-2xl flex-1 justify-between relative h-11 z-30',
          className
        )}
        ref={ref}
      >
        <Search className="absolute top-1\2 translate-y-[50%] left-3 h-5 text-gray-400" />
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Find pizzas..."
          onFocus={() => setFocused(true)}
        />
        <div
          className={cn(
            'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
            focused && 'visible opacity-100 top-12'
          )}
        >
          <Link
            href="/product/1"
            className="flex items-center gap-3 px-3 py-2 w-full hover:bg-primary/10"
          >
            <img
              className="rounded-sh h-8 w-8"
              src="https://pizzahouse.ua/_next/image?url=https%3A%2F%2Fpizzahouse.ua%2Fmedia%2F4851%2Fconversions%2F%D0%BA%D0%B2%D0%B0%D1%82%D1%80%D0%BE-%D0%B4%D1%96-%D0%BA%D0%B0%D1%80%D0%BD%D0%B5-large.webp&w=1920&q=100"
              alt="Pizza"
            />
            <div>Pizza</div>
          </Link>
        </div>
      </div>
    </>
  );
};
