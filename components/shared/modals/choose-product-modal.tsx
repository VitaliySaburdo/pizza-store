import { Dialog } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import { DialogContent } from '@radix-ui/react-dialog';

import React from 'react';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  return (
    <Dialog>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}
      ></DialogContent>
    </Dialog>
  );
};
