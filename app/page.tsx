import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
        <TopBar
          categories={categories.filter(
            (category) => category.products.length > 0
          )}
        />
        <Container className="mt-10 pb-4">
          <div className="flex gap-[60px]">
            {/* FilterBar */}
            <div className="w-[250px]">
              <Filters />
            </div>

            {/* List of products */}
            <div className="flex-1">
              <div className="flex flex-col gap-16">
                {categories.map(
                  (category) =>
                    category.products.length > 0 && (
                      <ProductsGroupList
                        key={category.id}
                        categoryId={category.id}
                        title={category.name}
                        items={category.products}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
