import { cn } from '@/lib/utils';
import React from 'react';
import Container from './container';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container>
        <h2>Hello</h2>
      </Container>
    </header>
  );
};

export default Header;
