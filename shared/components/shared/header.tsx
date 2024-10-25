import { cn } from '@/shared/lib/utils';
import React from 'react';
import Container from './container';
import Image from 'next/image';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
      </Container>
    </header>
  );
};

export default Header;
