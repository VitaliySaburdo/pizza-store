import { Container, Title, PizzaImage } from '@/shared/components/shared';
import { GroupVariants } from '@/shared/components/shared/group-variants';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex my-10">
      <PizzaImage imageUrl={product.imageUrl} size={8} />
      <div className="w-[490px] bg-[#f7f6f5]">
        <Title text={product.name} size="md" className="font-extrabold mb-1" />
        <div className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <GroupVariants
          value="2"
          items={[
            { name: 'small', value: '1' },
            { name: 'medium', value: '2' },
            { name: 'large', value: '3' },
          ]}
        />
      </div>
    </Container>
  );
}
