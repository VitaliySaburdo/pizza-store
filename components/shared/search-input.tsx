'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { useClickAway } from 'react-use';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

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
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Find pizzas..."
          onFocus={() => setFocused(true)}
        />
      </div>
    </>
  );
};
