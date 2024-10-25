import { cn } from '@/lib/utils';
import React from 'react';
import Container from './container';
import Image from 'next/image';
import { Button } from '../ui/button';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left side */}
        <div>
          <Image src="/logo.png" alt="logo" width={35} height={35} />
          <h1 className="text-2xl uppercase font-black">Pizza Store</h1>
          <p className="text-sm text-gray-400 leading-3">
            Pizza that always tastes good
          </p>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-3">
          <Button variant="outline">Login</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
