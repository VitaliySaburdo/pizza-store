import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User } from 'lucide-react';
import { Container } from './container';
import { Button } from '../ui';
import { SearchInput } from './search-input';
import { CartButton } from './cart-button';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left side */}
        <Link href="/">
          <div>
            <Image src="/logo.png" alt="logo" width={35} height={35} />
            <h1 className="text-2xl uppercase font-black">Pizza Store</h1>
            <p className="text-sm text-gray-400 leading-3">
              Pizza that always tastes good
            </p>
          </div>
        </Link>

        {/* Middle side */}
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Login
          </Button>
          <div>
            <CartButton />
          </div>
        </div>
      </Container>
    </header>
  );
};
